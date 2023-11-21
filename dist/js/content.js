/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***************************!*\
  !*** ./src/ts/content.ts ***!
  \***************************/
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
    icon.style.width = "16px";
    icon.style.height = "16px";
    icon.style.cursor = "pointer";
    icon.style.zIndex = "10000";
    icon.innerHTML = "<img src='" + chrome.runtime.getURL("assests/globalGoogle16.png") + "' width='16px' height='16px'>";
    icon.setAttribute('id', 'selectText');
    icon.style.display = "none";
    icon.addEventListener("click", function (event) {
        // 高亮
        const range = window.getSelection().getRangeAt(0);
        const highlight = document.createElement('mark');
        highlight.classList.add('highlighted-text');
        // 分配一个唯一的ID，以便稍后可以从存储中删除
        const highlightId = 'highlight-' + Date.now();
        highlight.setAttribute('id', highlightId);
        range.surroundContents(highlight);
        const highlightData = {
            id: highlightId,
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
function removeHighlights() {
    const highlightedElements = document.querySelectorAll('.highlighted-text');
    highlightedElements.forEach(element => {
        // 创建一个新的节点来替换 <mark> 元素
        const textNode = document.createTextNode(element.textContent);
        // 用文本节点替换高亮元素
        element.parentNode.replaceChild(textNode, element);
    });
    selectTextArr = [];
}
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "clearHighlights") {
        removeHighlights(); // 调用移除高亮的函数
    }
});
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "deleteHighlight") {
        const highlightedElement = document.getElementById(request.highlightId);
        if (highlightedElement) {
            // 创建一个新的节点来替换 <mark> 元素
            const textNode = document.createTextNode(highlightedElement.textContent);
            // 用文本节点替换高亮元素
            highlightedElement.parentNode.replaceChild(textNode, highlightedElement);
        }
        selectTextArr = selectTextArr.filter(highlight => highlight.id !== request.highlightId);
    }
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvY29udGVudC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLCtDQUErQztBQUM3RTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QiwyQkFBMkI7QUFDcEQsd0JBQXdCLHNCQUFzQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsK0NBQStDO0FBQ2xGO0FBQ0EsU0FBUztBQUNULGlEQUFpRDtBQUNqRCxxQ0FBcUM7QUFDckMsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2F2ZV9wYWdlX2NvbnRlbnRfZ2x1Z2luLy4vc3JjL3RzL2NvbnRlbnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IGljb247XG5sZXQgc2VsZWN0VGV4dEFyciA9IFtdO1xubGV0IHNlbGVjdGVkVGV4dCA9ICcnO1xubGV0IHByZXZlbnRIaWRlID0gZmFsc2U7XG4vLyBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyAnc2VsZWN0ZWRUZXh0JzogSlNPTi5zdHJpbmdpZnkoc2VsZWN0VGV4dEFycikgfSwgZnVuY3Rpb24oKSB7XG4vLyAgIGNvbnNvbGUubG9nKFwiY2xlYXJcIilcbi8vIH0pO1xuY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KCdzZWxlY3RlZFRleHQnLCBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAvLyDkvb/nlKjku47lrZjlgqjkuK3ojrflj5bnmoTlgLzmm7TmlrDlhajlsYDlj5jph4/vvIzlpoLmnpzmsqHmnInliJnkvb/nlKjnqbrmlbDnu4RcbiAgICBzZWxlY3RUZXh0QXJyID0gcmVzdWx0LnNlbGVjdGVkVGV4dCA/IEpTT04ucGFyc2UocmVzdWx0LnNlbGVjdGVkVGV4dCkgOiBbXTtcbn0pO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgY29uc3Qgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xuICAgIGlmIChzZWxlY3Rpb24ucmFuZ2VDb3VudCA+IDApIHtcbiAgICAgICAgY29uc3QgbmV3U2VsZWN0ZWRUZXh0ID0gc2VsZWN0aW9uLnRvU3RyaW5nKCkudHJpbSgpO1xuICAgICAgICBpZiAobmV3U2VsZWN0ZWRUZXh0ICYmIHNlbGVjdGVkVGV4dCAhPT0gbmV3U2VsZWN0ZWRUZXh0KSB7XG4gICAgICAgICAgICBzZWxlY3RlZFRleHQgPSBuZXdTZWxlY3RlZFRleHQ7XG4gICAgICAgICAgICBjb25zdCByZWN0ID0gc2VsZWN0aW9uLmdldFJhbmdlQXQoMCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBpZiAoIWljb24pIHtcbiAgICAgICAgICAgICAgICBpY29uID0gY3JlYXRlSWNvbkVsZW1lbnQoKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGljb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdXBkYXRlSWNvblBvc2l0aW9uKGljb24sIHJlY3QpO1xuICAgICAgICAgICAgaWNvbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgcHJldmVudEhpZGUgPSB0cnVlO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgcHJldmVudEhpZGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH0sIDEwKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChpY29uKSB7XG4gICAgICAgIGljb24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbn0pO1xuZnVuY3Rpb24gdXBkYXRlSWNvblBvc2l0aW9uKGljb24sIHJlY3QpIHtcbiAgICBjb25zdCBzY3JvbGxZID0gd2luZG93LnNjcm9sbFkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICBpY29uLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIGljb24uc3R5bGUubGVmdCA9IGAke3JlY3QubGVmdCArIHdpbmRvdy5zY3JvbGxYfXB4YDtcbiAgICBpY29uLnN0eWxlLnRvcCA9IGAke3JlY3QuYm90dG9tICsgc2Nyb2xsWX1weGA7XG59XG5mdW5jdGlvbiBjcmVhdGVJY29uRWxlbWVudCgpIHtcbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpY29uLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIGljb24uc3R5bGUud2lkdGggPSBcIjE2cHhcIjtcbiAgICBpY29uLnN0eWxlLmhlaWdodCA9IFwiMTZweFwiO1xuICAgIGljb24uc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgaWNvbi5zdHlsZS56SW5kZXggPSBcIjEwMDAwXCI7XG4gICAgaWNvbi5pbm5lckhUTUwgPSBcIjxpbWcgc3JjPSdcIiArIGNocm9tZS5ydW50aW1lLmdldFVSTChcImFzc2VzdHMvZ2xvYmFsR29vZ2xlMTYucG5nXCIpICsgXCInIHdpZHRoPScxNnB4JyBoZWlnaHQ9JzE2cHgnPlwiO1xuICAgIGljb24uc2V0QXR0cmlidXRlKCdpZCcsICdzZWxlY3RUZXh0Jyk7XG4gICAgaWNvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIC8vIOmrmOS6rlxuICAgICAgICBjb25zdCByYW5nZSA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5nZXRSYW5nZUF0KDApO1xuICAgICAgICBjb25zdCBoaWdobGlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYXJrJyk7XG4gICAgICAgIGhpZ2hsaWdodC5jbGFzc0xpc3QuYWRkKCdoaWdobGlnaHRlZC10ZXh0Jyk7XG4gICAgICAgIC8vIOWIhumFjeS4gOS4quWUr+S4gOeahElE77yM5Lul5L6/56iN5ZCO5Y+v5Lul5LuO5a2Y5YKo5Lit5Yig6ZmkXG4gICAgICAgIGNvbnN0IGhpZ2hsaWdodElkID0gJ2hpZ2hsaWdodC0nICsgRGF0ZS5ub3coKTtcbiAgICAgICAgaGlnaGxpZ2h0LnNldEF0dHJpYnV0ZSgnaWQnLCBoaWdobGlnaHRJZCk7XG4gICAgICAgIHJhbmdlLnN1cnJvdW5kQ29udGVudHMoaGlnaGxpZ2h0KTtcbiAgICAgICAgY29uc3QgaGlnaGxpZ2h0RGF0YSA9IHtcbiAgICAgICAgICAgIGlkOiBoaWdobGlnaHRJZCxcbiAgICAgICAgICAgIHRleHQ6IHNlbGVjdGVkVGV4dCxcbiAgICAgICAgICAgIHJlY3Q6IGhpZ2hsaWdodC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICAgIHVybDogd2luZG93LmxvY2F0aW9uLmhyZWZcbiAgICAgICAgfTtcbiAgICAgICAgc2VsZWN0VGV4dEFyci5wdXNoKGhpZ2hsaWdodERhdGEpO1xuICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyAnc2VsZWN0ZWRUZXh0JzogSlNPTi5zdHJpbmdpZnkoc2VsZWN0VGV4dEFycikgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTZWxlY3RlZCB0ZXh0IHNhdmVkOiBcIiArIEpTT04uc3RyaW5naWZ5KGhpZ2hsaWdodERhdGEpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5yZW1vdmVBbGxSYW5nZXMoKTsgLy8g5riF6Zmk6YCJ5Lit55qE5paH5pysXG4gICAgICAgIGljb24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyAvLyDpmpDol4/lm77moIdcbiAgICB9KTtcbiAgICByZXR1cm4gaWNvbjtcbn1cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoaWNvbiAmJiBzZWxlY3RlZFRleHQpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xuICAgICAgICBpZiAoc2VsZWN0aW9uLnJhbmdlQ291bnQgPiAwKSB7XG4gICAgICAgICAgICBjb25zdCByZWN0ID0gc2VsZWN0aW9uLmdldFJhbmdlQXQoMCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICB1cGRhdGVJY29uUG9zaXRpb24oaWNvbiwgcmVjdCk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoaWNvbiAmJiBldmVudC50YXJnZXQuaWQgIT09ICdzZWxlY3RUZXh0JyAmJiAhcHJldmVudEhpZGUpIHtcbiAgICAgICAgaWNvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxufSk7XG5mdW5jdGlvbiByZW1vdmVIaWdobGlnaHRzKCkge1xuICAgIGNvbnN0IGhpZ2hsaWdodGVkRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGlnaGxpZ2h0ZWQtdGV4dCcpO1xuICAgIGhpZ2hsaWdodGVkRWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgLy8g5Yib5bu65LiA5Liq5paw55qE6IqC54K55p2l5pu/5o2iIDxtYXJrPiDlhYPntKBcbiAgICAgICAgY29uc3QgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShlbGVtZW50LnRleHRDb250ZW50KTtcbiAgICAgICAgLy8g55So5paH5pys6IqC54K55pu/5o2i6auY5Lqu5YWD57SgXG4gICAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQodGV4dE5vZGUsIGVsZW1lbnQpO1xuICAgIH0pO1xuICAgIHNlbGVjdFRleHRBcnIgPSBbXTtcbn1cbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihmdW5jdGlvbiAocmVxdWVzdCwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtcbiAgICBpZiAocmVxdWVzdC5hY3Rpb24gPT09IFwiY2xlYXJIaWdobGlnaHRzXCIpIHtcbiAgICAgICAgcmVtb3ZlSGlnaGxpZ2h0cygpOyAvLyDosIPnlKjnp7vpmaTpq5jkuq7nmoTlh73mlbBcbiAgICB9XG59KTtcbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihmdW5jdGlvbiAocmVxdWVzdCwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtcbiAgICBpZiAocmVxdWVzdC5hY3Rpb24gPT09IFwiZGVsZXRlSGlnaGxpZ2h0XCIpIHtcbiAgICAgICAgY29uc3QgaGlnaGxpZ2h0ZWRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocmVxdWVzdC5oaWdobGlnaHRJZCk7XG4gICAgICAgIGlmIChoaWdobGlnaHRlZEVsZW1lbnQpIHtcbiAgICAgICAgICAgIC8vIOWIm+W7uuS4gOS4quaWsOeahOiKgueCueadpeabv+aNoiA8bWFyaz4g5YWD57SgXG4gICAgICAgICAgICBjb25zdCB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGhpZ2hsaWdodGVkRWxlbWVudC50ZXh0Q29udGVudCk7XG4gICAgICAgICAgICAvLyDnlKjmlofmnKzoioLngrnmm7/mjaLpq5jkuq7lhYPntKBcbiAgICAgICAgICAgIGhpZ2hsaWdodGVkRWxlbWVudC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZCh0ZXh0Tm9kZSwgaGlnaGxpZ2h0ZWRFbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBzZWxlY3RUZXh0QXJyID0gc2VsZWN0VGV4dEFyci5maWx0ZXIoaGlnaGxpZ2h0ID0+IGhpZ2hsaWdodC5pZCAhPT0gcmVxdWVzdC5oaWdobGlnaHRJZCk7XG4gICAgfVxufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=