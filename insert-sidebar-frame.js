// insertSidebarFrame();
insertIFrame();
document.querySelector("#myFrame");

function insertSidebarFrame() {
	var sidebar = document.createElement('div');
	sidebar.id = "mySidebar";
	sidebar.style.cssText = "\
		position:fixed;\
		top:0px;\
		left:0px;\
		width:30%;\
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
