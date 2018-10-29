console.log('Content js');

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(msg,sender,sendResponse) {
	console.log('tabs');
	console.log(msg)
	var popup = document.createElement("div");
	var bg = document.createElement("div");
	popup.style.cssText = "position: fixed; width: 400px; left: 50%; top: 50%; transform: translate(-50%, -50%); border: 1px solid black; border-radius: 5px; height: 200px; background: white; z-index: 100002;";
	bg.style.cssText = "position: fixed; width: 100%; height: 100%; z-index: 100001; background: black; opacity: .7;";

	document.body.style.padding = "0"
	document.body.appendChild(popup);
	document.body.insertBefore(bg, document.body.firstChild);
}