console.log('Content js');

chrome.runtime.onMessage.addListener(gotMessage);

let a = chrome.runtime.getURL('images/123.png');
console.log(a);


function gotMessage(msg,sender,sendResponse) {
	var popup = document.createElement("div");
	var bg = document.createElement("div");
	var img = document.createElement("img");
	popup.style.cssText = "position: fixed; overflow: auto; width: 80%; left: 50%; top: 50%; background-position: center center; transform: translate(-50%, -50%); border: 1px solid black; border-radius: 5px; height: 70%; background: white; z-index: 100002; background-size: cover;";
	bg.style.cssText = "position: fixed; width: 100%; height: 100%; z-index: 100001; background: black; opacity: .7;";
	document.body.style.padding = "0";
	
	// document.body.insertBefore(bg, document.body.firstChild);
	console.log('da1');
	html2canvas(document.body).then(function(canvas) {
		canvas.style.position = "absolute";
		canvas.style.top = "0";
		canvas.style.zIndex = "1000"
		canvas.id = "myCanvas"; 
    	document.body.appendChild(canvas);

		setTimeout(function() {
			var $canvas = $('#myCanvas');
			console.log($canvas);
    		// var cropper = $canvas.cropper({
      //        	aspectRatio: 16 / 9
      //      	});

           		$canvas.cropper({
      				autoCrop: false,
      				movable: false,
      				viewMode: 3,
      				crop: function(e) {
      				  // Output the result data for cropping image.
      				  // console.log(e.x);
      				  // console.log(e.y);
      				  // console.log(e.width);
      				  // console.log(e.height);
      				  // console.log(e.rotate);
      				  // console.log(e.scaleX);
      				  // console.log(e.scaleY);
				
      				},
      				cropend: function (e) {
      					console.log(e);
      					var croppedImageDataURL = $canvas.cropper('getCroppedCanvas').toDataURL("image/png");;
      					console.log(croppedImageDataURL);
      					img.src = croppedImageDataURL;
						img.style.cssText = "width: 100%; height: auto;"
						popup.appendChild(img);
						document.body.appendChild(popup);
      				    // if (bool == 0) {
      				    // $('#cropTimetable').toggle();
      				    // $('#clearCrop').toggle();
      				    // $('#downloadTimetable').toggle();
      				    // $('#downloadHDTimetable').toggle();
      				    // bool = 1;
      				  }
     			 });          
		}, 1000);
		
    	
    	// cropper = new Cropper(canvas);
      	

	});
	
}