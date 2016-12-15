window.addEventListener("message", receiveMessage, false);

function receiveMessage(event) {
	console.log('received a message in the iframe:', event);
}

window.top.postMessage({ sender: 'sidebar', ready: true, stuff: Object.keys($.fn) }, '*');
