chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript({file: "insert-sidebar-frame.js"});
});

// chrome.browserAction.onClicked.addListener(function(tab) {
// 	chrome.tabs.executeScript({file: "insert-sidebar-frame.js"}, function(iframes) {
// 		console.log('execute script callback arg:', iframes);
// 		chrome.webNavigation.getAllFrames({tabId: tab.id}, function(args) {
// 			console.log(tab.id, Date.now(), args);
// 		});
// 	});
// });

// The number of known frames is the same whether our own iframe is appended or not.
// chrome.browserAction.onClicked.addListener(function(tab) {
// 	chrome.webNavigation.getAllFrames({tabId: tab.id}, function(args) {
// 		console.log(tab.id, Date.now(), args);
// 	});
// });

// Running `getAllFrames` on an interval does not find the iframe at a later time.

// Executing script does not trigger onUpdated event.
// chrome.tabs.onUpdated.addListener(function(tab_id, details, tab) {
// 	console.log(tab_id, details, tab);
// });

// Executing script does not trigger onDOMContentLoaded event.
// chrome.webNavigation.onDOMContentLoaded.addListener(function(details) {
// 	console.log(details);
// });
