chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript({file: "libs/gmath/gmath.min.js"});
});
