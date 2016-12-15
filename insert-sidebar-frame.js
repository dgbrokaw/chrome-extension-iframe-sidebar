insertSidebarFrame();
//insertIFrame();

var iframe_window = document.querySelector("#myFrame");

window.addEventListener("message", receiveMessage, false);

function receiveMessage(event) {
	console.log('received message in the main content script:', event);
	// sending a message back now:
	iframe_window.contentWindow.postMessage('hello back from the main page content script!', '*');
}

/// Passing through messages from the background script to the iframe
// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
// 	if (request.target === 'iframe') {
// 		iframe_window.contentWindow.postMessage({ sender: 'gm_sidebar', data: request.data });
// 	}
// };

/// Passing through messages from the iframe to the background script
// function receiveMessage(event) {
// 	chrome.runtime.sendMessage(event.data);
// }


function insertSidebarFrame() {
	var sidebar = document.createElement('div');
	sidebar.id = "mySidebar";
	sidebar.style.cssText = "\
		position:fixed;\
		top:0px;\
		left:0px;\
		width:5%;\
		height:100%;\
		background:white;\
		box-shadow:inset 0 0 1em black;\
		z-index:999999;\
	";

	var innerFrame = document.createElement('iframe');
	innerFrame.id = "myFrame";
	innerFrame.style.cssText = "\
		border:none;\
		width:100%;\
		height:100%;\
	";
	innerFrame.src = chrome.extension.getURL("sidebar.html");
	sidebar.appendChild(innerFrame);

	document.body.appendChild(sidebar);

	return innerFrame;
}

function insertIFrame() {
	var myFrame = document.createElement('iframe');
	myFrame.id = "myFrame";
	myFrame.style.cssText = "\
		border:none;\
		width:100%;\
		height:100%;\
	";
	myFrame.src = chrome.extension.getURL("sidebar.html");
	document.body.appendChild(myFrame);

	return myFrame;
}
