var chipsAndGuac = require('chipsandguac');
var config = require('./config.js');

console.log('Printing nearby locations, the id is needed in config.js. \n');

chipsAndGuac.getNearbyLocations(config.zip).then(function(locations) {
	console.log(JSON.stringify(locations))
})

console.log('Showing previous orders. the id is required to reference previous order. \n');

var chipAPI = new chipsAndGuac(config.chipotle);
chipAPI.getOrders().then(function(orders) {
	console.log(JSON.stringify(orders));
});