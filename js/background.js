chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
        if (request.type === "inject_elements") {
            chrome.webNavigation.getAllFrames({tabId: sender.tab.id}, function (frames) {
                frames.forEach((frame) => {
                    chrome.tabs.executeScript(sender.tab.id, {
                        "file": "js/fillFormData.js",
                        "frameId": frame.frameId
                    });
                })
            });
        }
    }
);
