var config = require('./config.js');
var dashButton = require('node-dash-button');
var chipsAndGuac = require('chipsandguac');

var lastDetected = new Date().getTime() - 10000;

var dash = dashButton(config.hardwareAddress);
dash.on("detected", function (){
    console.log("Dash Button Detected");
    currentTime = new Date().getTime();
    if (currentTime - lastDetected > 10000) {
    	lastDetected = currentTime;
    	console.log("MAKING THE ORDER \n");
    	var chipAPI = new chipsAndGuac(config.chipotle);
    	// Set parameter to false when doing actual order.
		chipAPI.submitPreviousOrderWithId(config.previousOrder, true).then(function(orderDetails) {
		  console.log(JSON.stringify(orderDetails));
		});
    }
});
