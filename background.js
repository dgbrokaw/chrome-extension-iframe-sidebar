chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript(tab.id, {code: "var div = document.createElement('div'); div.innerHTML = 'hiii'; document.body.appendChild(div);"});
})
