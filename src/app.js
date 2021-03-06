var UI = require('ui');
var ajax = require('ajax');
var Vector2 = require('vector2');
var Accel = require('ui/accel');
var Vibe = require('ui/vibe');

var mainMenu = new UI.Menu({
  backgroundColor: 'white',
  textColor: 'black',
  highlightBackgroundColor: 'red',
  highlightTextColor: 'white',
  sections: [{
    title: 'Truck Guard',
    items: [{
      title: 'Signaler Accident'
    }, {
      title: 'Signaler Vol'
    }, {
      title: 'Notifications'
    }]
  }]
});
mainMenu.show();

var signalAccident = function() {
  console.log("Signaler un accident");
};

var signalTheft = function() {
  console.log("Signaler un vol");
};

var showNotifications = function() {
  console.log("Notifications");
  
  var title = 'New notifications';
  var body = 'Attention vol en cours !';
  
  // Show the notification
  Pebble.showSimpleNotificationOnPebble(title, body);
};

mainMenu.on('select', function(e) {
  switch(e.itemIndex) {
    case 0:
      signalAccident();
      break;
    case 1:
      signalTheft();
      break;
    case 2:
      showNotifications();
      break;
  }
});

// Make request to API
/*ajax(
  {
    url:'http://api.openweathermap.org/data/2.5/forecast?q=London&appid=' + myAPIKey,
    type:'json'
  },
  function(data) {
    
    // Show the Menu, hide the splash
    resultsMenu.show();
    splashWindow.hide();
    
  },
  function(error) {
    console.log("Download failed: " + error);
  }
);
*/

// Prepare the accelerometer
Accel.init();
