let findBtn = () => {
    let button = document.querySelectorAll('button');
    if (!button.length) {
        return;
    }
    button.forEach((btn) => {
        if (btn.textContent.toLowerCase() === "pay") {
            let autoFillBtn = document.createElement('button');
            autoFillBtn.textContent = "Auto Fill";
            autoFillBtn.addEventListener('click', () => {
                chrome.runtime.sendMessage({
                    type: "inject_elements"
                });
            })
            btn.after(autoFillBtn);
            observer && observer.disconnect();
        }
    })
}

let observer = new MutationObserver(mutationRecords => {
    findBtn();
});

observer.observe(document.body, {
    childList: true,
    subtree: true,
    characterDataOldValue: true
});

findBtn();


