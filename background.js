chrome.browserAction.onClicked.addListener(function(tab) {
	// All three variations do the same thing.
	chrome.tabs.executeScript({code: "var div = document.createElement('div'); div.innerHTML = 'hiii'; document.body.appendChild(div);"});
	// chrome.tabs.executeScript(null, {code: "var div = document.createElement('div'); div.innerHTML = 'hiii'; document.body.appendChild(div);"});
	// chrome.tabs.executeScript(tab.id, {code: "var div = document.createElement('div'); div.innerHTML = 'hiii'; document.body.appendChild(div);"});
})
