var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { Client } = require("@notionhq/client");
function formateDate() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
}
function save2notion() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Retrieve necessary data from storage
            const databaseIDData = yield getStorageData('databaseID');
            const tokenData = yield getStorageData('nToken');
            const selectedResult = yield getStorageData('selectedText');
            let selectedArr = selectedResult ? JSON.parse(selectedResult.selectedText) : [];
            // Initialize Notion client
            const notion = new Client({ auth: tokenData });
            // Create a promise for each page creation operation
            const creationPromises = selectedArr.map((item) => {
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
                    parent: { database_id: databaseIDData },
                    properties
                });
            });
            // Execute all promises concurrently
            yield Promise.all(creationPromises);
            // UI feedback
            document.getElementById("save2notion").style.backgroundColor = "#cecece";
            alert("Saved to Notion successfully!");
        }
        catch (error) {
            console.error(error);
            alert("Error saving to Notion");
        }
    });
}
function getStorageData(key) {
    return new Promise((resolve, reject) => {
        chrome.storage.local.get(key, (result) => {
            if (chrome.runtime.lastError) {
                reject(new Error(chrome.runtime.lastError.message));
            }
            else {
                resolve(result);
            }
        });
    });
}
const save2notionbtn = document.getElementById("save2notion");
save2notionbtn.addEventListener("click", function () {
    save2notion();
});
const clearAll = document.getElementById("clearAll");
clearAll.addEventListener("click", function () {
    chrome.storage.local.clear();
    alert("清空成功");
});
//在popup中显示高亮的文本列表，并处理删除事件
document.addEventListener('DOMContentLoaded', function () {
    const listElement = document.getElementById('highlight-list');
    chrome.storage.local.get('selectedText', function (data) {
        if (data.selectedText) {
            const listArr = JSON.parse(data.selectedText);
            console.log("data.selectedText" + data.selectedText);
            listArr.forEach(function (highlight, index) {
                const itemElement = document.createElement('div');
                itemElement.classList.add('highlight-item');
                const textElement = document.createElement('span');
                textElement.classList.add('highlight-text');
                textElement.textContent = highlight.text.substring(0, 10) + '...';
                itemElement.appendChild(textElement);
                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.classList.add('delete-button');
                deleteButton.onclick = function () {
                    // 发送消息到content script来删除高亮
                    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                        chrome.tabs.sendMessage(tabs[0].id, { action: "deleteHighlight", index: index });
                    });
                    // 从存储中删除
                    data.selectedText.splice(index, 1);
                    chrome.storage.local.set({ 'selectedText': data.selectedText });
                    // 从DOM中删除
                    itemElement.remove();
                };
                itemElement.appendChild(deleteButton);
                listElement.appendChild(itemElement);
            });
        }
    });
});
