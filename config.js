// Run node ./node_modules/node-dash-button/bin/findbutton to find the hardware address.
exports.hardwareAddress = '00:00:00:00:00:00';

// Enter your zip code then run node helper.js to find the location id of your preferred store.
exports.zip = '90210';

// All Chipotle fields must match your account, including the phone number.
exports.chipotle = {
  email:'email', 
  password:'password', 
  phoneNumber:'000.000.0000',
  locationId: '1', // Run node helper.js to aquire the location id of Chipotle you're looking for.
};

// The previous order you'd like to base from.
exports.previousOrder = '123456789';