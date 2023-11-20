
function formateDate() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');
  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
}

async function save2notion() {
  let databaseId, data, token;
  let save2notion = document.getElementById("save2notion");
  
  try {
    data = await getStorageData('databaseID');
    token = await getStorageData('nToken');
    databaseId = data.databaseID;
    let selectedResult = await getStorageData('selectedText');
    let selectedArr = selectedResult.selectedText ? JSON.parse(selectedResult.selectedText):[];
    selectedArr.forEach((item, index) => {
      console.log(item);
      let param = {
        "parent": { "type": "database_id", "database_id": data.databaseID },
        "properties": {
          "context": {
            "type": "title",
            "title": [{ "type": "text", "text": { "content": item["text"] } }]
          },
          "url": {
            "url": item["url"]
          },
          "date": {
            "type": "date",
            "date": { start: formateDate() },
          }
        },
      };
      console.log("param  "+param.body);
      chrome.storage.local.get("nToken", (data) => {
        options = {
          method: 'POST',
          headers: {
            Authorization: "Bearer " + data.nToken,
            "Notion-Version": "2022-02-22",
            "Content-Type": 'application/json'
          },
          body: JSON.stringify(param)
        }
        console.log(options);
        fetch("https://api.notion.com/v1/pages", options)
          .then((response) => { return response.json() })
          .then((response) => {
            if (response.object === "error") {
              alert(response.message);
              return false;
            } else {
              alert("书籍信息保存到Notion!")
              return true;
            }
          })
          .then(() => {
            save2notion.style.backgroundColor = "#cecece";
          });
      });
    });
    
  } catch (error) {
    console.log(error);
  }
}

function getStorageData(key) {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get(key, (result) => {
      if (chrome.runtime.lastError) {
        reject(new Error(chrome.runtime.lastError));
      } else {
        resolve(result);
      }
    })
  })
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
