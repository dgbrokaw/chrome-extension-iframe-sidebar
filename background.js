chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript({file: "script.js"});
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log(sender.tab ?
              "from a content script:" + sender.tab.url :
              "from the extension");
  if (request.greeting == "hello")
    sendResponse({farewell: "goodbye"});
});
