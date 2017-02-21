//MONGOOSE
var mongoose = require('mongoose');

var Alerts = mongoose.model('Alerts');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

	//Get Alerts
	module.exports.getAllAlerts = function(req, res) {
		 Alerts.find(function (err, alerts) {
	  		if(err) {
	            sendJSONresponse(res, 404, err);
	        }else{
	            sendJSONresponse(res, 200, alerts);
	        }
		});
		
	};

	//Post all alerts
	module.exports.postAlerts = function(req, res) {
		
		
	};
	//Post one alert
	module.exports.postNewAlert = function(req, res) {
		
		
	};
