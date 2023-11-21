let icon;
let selectTextArr = [];
let selectedText = '';
let preventHide = false;
// chrome.storage.local.set({ 'selectedText': JSON.stringify(selectTextArr) }, function() {
//   console.log("clear")
// });
chrome.storage.local.get('selectedText', function (result) {
    console.log(result);
    // 使用从存储中获取的值更新全局变量，如果没有则使用空数组
    selectTextArr = result.selectedText ? JSON.parse(result.selectedText) : [];
});
document.addEventListener("mouseup", function (event) {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
        const newSelectedText = selection.toString().trim();
        if (newSelectedText && selectedText !== newSelectedText) {
            selectedText = newSelectedText;
            const rect = selection.getRangeAt(0).getBoundingClientRect();
            if (!icon) {
                icon = createIconElement();
                document.body.appendChild(icon);
            }
            updateIconPosition(icon, rect);
            icon.style.display = "block";
            preventHide = true;
            setTimeout(() => {
                preventHide = false;
            }, 10);
        }
    }
    else if (icon) {
        icon.style.display = "none";
    }
});
function updateIconPosition(icon, rect) {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    icon.style.position = "absolute";
    icon.style.left = `${rect.left + window.scrollX}px`;
    icon.style.top = `${rect.bottom + scrollY}px`;
}
function createIconElement() {
    const icon = document.createElement("div");
    icon.style.position = "absolute";
    icon.style.width = "32px";
    icon.style.height = "32px";
    icon.style.cursor = "pointer";
    icon.style.zIndex = "10000";
    icon.innerHTML = "<img src='" + chrome.runtime.getURL("images/C2N.png") + "' width='32' height='32'>";
    icon.setAttribute('id', 'selectText');
    icon.style.display = "none";
    icon.addEventListener("click", function (event) {
        // 高亮
        const range = window.getSelection().getRangeAt(0);
        const highlight = document.createElement('mark');
        highlight.classList.add('highlighted-text');
        range.surroundContents(highlight);
        const highlightData = {
            text: selectedText,
            rect: highlight.getBoundingClientRect(),
            url: window.location.href
        };
        selectTextArr.push(highlightData);
        chrome.storage.local.set({ 'selectedText': JSON.stringify(selectTextArr) }, function () {
            console.log("Selected text saved: " + JSON.stringify(highlightData));
        });
        window.getSelection().removeAllRanges(); // 清除选中的文本
        icon.style.display = "none"; // 隐藏图标
    });
    return icon;
}
window.addEventListener("scroll", function () {
    if (icon && selectedText) {
        const selection = window.getSelection();
        if (selection.rangeCount > 0) {
            const rect = selection.getRangeAt(0).getBoundingClientRect();
            updateIconPosition(icon, rect);
        }
    }
});
document.addEventListener("click", function (event) {
    if (icon && event.target.id !== 'selectText' && !preventHide) {
        icon.style.display = "none";
    }
});
