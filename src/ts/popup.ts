import { Client } from '@notionhq/client';

function formateDate() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');
  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
}

async function save2notion() {
  try {
    // Retrieve necessary data from storage
    const databaseIDData = await getStorageData('databaseID');
    const tokenData = await getStorageData('nToken');
    const selectedResult = await getStorageData('selectedText');
    let selectedArr = selectedResult ? JSON.parse(selectedResult.selectedText) : [];

    // Initialize Notion client
    const notion = new Client({ auth: tokenData.nToken });

    // Create a promise for each page creation operation
    const creationPromises = selectedArr.map((item: { text: string, url: string }) => {
      const properties = {
        "context": {
          "title": [
            { "text": { "content": item.text } }
          ]
        },
        "url": {
          "url": item.url
        },
        "date": {
          "date": { "start": formateDate() }
        }
      };

      return notion.pages.create({
        parent: { database_id: databaseIDData.databaseID },
        properties
      });
    });

    // Execute all promises concurrently
    await Promise.all(creationPromises);

    // UI feedback
    document.getElementById("save2notion").style.backgroundColor = "#cecece";
    alert("Saved to Notion successfully!");

  } catch (error) {
    console.error(error);
    alert("Error saving to Notion");
  }
}

function getStorageData(key: string): Promise<any> {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get(key, (result) => {
      if (chrome.runtime.lastError) {
        reject(new Error(chrome.runtime.lastError.message));
      } else {
        resolve(result);
      }
    });
  });
}

const save2notionbtn = document.getElementById("save2notion") as HTMLElement;
save2notionbtn.addEventListener("click", function () {
  save2notion();
});

const clearAllBtn = document.getElementById("clearAllBtn");
clearAllBtn.addEventListener("click", function () {
  // 只删除 selectedText
  chrome.storage.local.remove('selectedText', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: "clearHighlights" });
    });
    // 清除页面上的列表内容
    const listElement = document.getElementById('highlight-list');
    if (listElement) {
      listElement.innerHTML = '';
    }
  });
});



//在popup中显示高亮的文本列表，并处理删除事件
document.addEventListener('DOMContentLoaded', function () {
  const listElement = document.getElementById('highlight-list');

  chrome.storage.local.get('selectedText', function (data) {
    if (data.selectedText) {
      const listArr = JSON.parse(data.selectedText);
      console.log("data.selectedText" + data.selectedText);
      listArr.forEach(function (highlight: { text: string, id: string}, index: number) {
        const itemElement = document.createElement('div');
        itemElement.classList.add('highlight-item');

        const textElement = document.createElement('span');
        textElement.classList.add('highlight-text');
        textElement.textContent = highlight.text.substring(0, 15) + '...';
        itemElement.appendChild(textElement);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');
        deleteButton.onclick = function () {
          // 发送消息到 content script 来删除特定ID的高亮
          chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: "deleteHighlight", highlightId: highlight.id });
          });
          // 从存储中删除特定ID的高亮
          listArr.splice(index, 1);
          chrome.storage.local.set({ 'selectedText': JSON.stringify(listArr) });
          // 从DOM中删除
          itemElement.remove();
        };
        itemElement.appendChild(deleteButton);

        listElement.appendChild(itemElement);
      });
    }
  });
});
