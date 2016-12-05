chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript({code: "var div = document.createElement('div'); div.innerHTML = 'hiii'; document.body.appendChild(div);"});
	// chrome.tabs.executeScript(null, {code: "var div = document.createElement('div'); div.innerHTML = 'hiii'; document.body.appendChild(div);"});
	// chrome.tabs.executeScript(tab.id, {code: "var div = document.createElement('div'); div.innerHTML = 'hiii'; document.body.appendChild(div);"});
})
