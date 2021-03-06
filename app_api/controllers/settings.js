//MONGOOSE
var mongoose = require('mongoose');

var Settings = mongoose.model('Settings');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

	//Get settings
	module.exports.getSettings = function(req, res) {
		console.log(req.body)
		 Settings.find(function (err, settings) {
	  		if(err) {
	            sendJSONresponse(res, 404, err);
	        }else{
	            sendJSONresponse(res, 200, settings);
	        }
		});
		
	};

	//Post settings
	module.exports.postSettings = function(req, res) {
		console.log(req.body)
		Settings.remove({}, function(err){
			if(err){
				sendJSONresponse(res, 404, err);
			}
		});
		
		var newSettings = new Settings({ 
			alertSound: req.body.alertSound,
		  	hourMode:  req.body.hourMode,
		  	snoozeOn:  req.body.snoozeOn,
		  	snoozeLength:  req.body.snoozeLength,
		  	snoozeAmount:  req.body.snoozeAmount,
		  	soundVolume:  req.body.soundVolume,
			automaticSync:  req.body.automaticSync,
			dateFormat:  req.body.dateFormat,
			beaconID: req.body.beaconID
		});

		newSettings.save(function (err, newSettings) {
			if(err) {
	            sendJSONresponse(res, 404, err);
	        }else{
	            sendJSONresponse(res, 200, newSettings);
	        }
		});
		
	};


