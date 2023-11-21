import { Client } from '@notionhq/client';

let save = document.getElementById("save");
let reset = document.getElementById("reset");

checkPlaceHolder();

save.addEventListener("click", () => {
    save.style.backgroundColor = "#3264B7";
    save.setAttribute("disabled", "disabled");
    var nToken = (document.getElementById("nToken") as HTMLInputElement).value;
    var pageID = (document.getElementById("pageID") as HTMLInputElement).value;
    createDatabase(nToken, pageID);
})

reset.addEventListener("click", () => {
    resetM();
});

function checkPlaceHolder(): void {
    chrome.storage.local.get(["nToken", "pageID"], (data) => {
        const nTokenInput = document.getElementById("nToken") as HTMLInputElement;
        const pageIDInput = document.getElementById("pageID") as HTMLInputElement;

        if (!nTokenInput || !pageIDInput) return;

        if (data.nToken === undefined || data.pageID === undefined) {
            nTokenInput.value = '';  // 清空输入框
            pageIDInput.value = '';  // 清空输入框
            reset.style.backgroundColor = "#cecece";
            reset.setAttribute("disabled", "disabled");
            save.style.backgroundColor = "#4285f4";
            save.removeAttribute("disabled");
        } else {
            nTokenInput.value = data.nToken;  // 设置输入框的值
            pageIDInput.value = data.pageID;  // 设置输入框的值
            save.style.backgroundColor = "#cecece";
            save.setAttribute("disabled", "disabled");
            reset.style.backgroundColor = "#4285f4";
            reset.removeAttribute("disabled");
        }
    });
}

function createDatabase(nToken: string, pageID: string): void {
    const notion = new Client({ auth: nToken });

    notion.databases.create({
        parent: { type: "page_id", page_id: pageID },
        title: [{ type: "text", text: { content: "BookList", link: null } }],
        properties: {
            "context": { "title": {} },
            "url": { "url": {} },
            "date": { "date": {} }
        }
    })
        .then((response: any) => {
            chrome.storage.local.set({ "databaseID": response.id, nToken: nToken, pageID: pageID }, () => {
                checkPlaceHolder();
                alert("创建Database并保存成功!");
            });
        })
        .catch((error: any) => {
            console.error(error);
            checkPlaceHolder();
            alert("创建Database失败: " + error.message);
        });
}

function resetM(): void {
    chrome.storage.local.remove(["nToken", "pageID"], () => {
        checkPlaceHolder();
    });
}