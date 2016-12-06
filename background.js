chrome.browserAction.onClicked.addListener(function(tab) {
		chrome.tabs.executeScript({file: "libs/d3/d3.min.js"});
	chrome.tabs.executeScript({file: "insert-sidebar-frame.js"}, function(iframes) {
		console.log('my frame', iframes[0]);
		chrome.webNavigation.getAllFrames({tabId: tab.id}, function(args) {
			console.log(tab.id, Date.now(), args);
		});

		// chrome.tabs.executeScript({file: "libs/jquery/jquery-3.1.0.min.js"});
		// chrome.tabs.executeScript({file: "libs/bootstrap/js/bootstrap.min.js"});
		// chrome.tabs.executeScript({file: "libs/gmath/gmath.min.js"});
	});
});
