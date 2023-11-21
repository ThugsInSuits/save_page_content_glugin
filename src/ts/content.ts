let icon: HTMLElement;
let selectTextArr: { id:string, text: string, rect: DOMRect, url: string }[] = [];
let selectedText = '';
let preventHide = false;

// chrome.storage.local.set({ 'selectedText': JSON.stringify(selectTextArr) }, function() {
//   console.log("clear")
// });
chrome.storage.local.get('selectedText', function(result) {
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
  } else if (icon) {
    icon.style.display = "none";
  }
});

function updateIconPosition(icon: HTMLElement, rect: DOMRect) {
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
    chrome.storage.local.set({ 'selectedText': JSON.stringify(selectTextArr) }, function() {
      console.log("Selected text saved: " + JSON.stringify(highlightData));
    });

    window.getSelection().removeAllRanges(); // 清除选中的文本
    icon.style.display = "none"; // 隐藏图标
  });

  return icon;
}

window.addEventListener("scroll", function() {
  if (icon && selectedText) {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      const rect = selection.getRangeAt(0).getBoundingClientRect();
      updateIconPosition(icon, rect);
    }
  }
});

document.addEventListener("click", function (event) {
  if (icon && (event.target as HTMLElement).id !== 'selectText' && !preventHide) {
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

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.action === "clearHighlights") {
      removeHighlights(); // 调用移除高亮的函数
    }
  }
);

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
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
  }
);