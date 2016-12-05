chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript({file: "libs/d3/d3.min.js"});
	chrome.tabs.executeScript({file: "libs/jquery/jquery-3.1.0.min.js"});
	chrome.tabs.executeScript({file: "libs/bootstrap/js/bootstrap.min.js"});
	chrome.tabs.executeScript({file: "libs/gmath/gmath.min.js"});
});
