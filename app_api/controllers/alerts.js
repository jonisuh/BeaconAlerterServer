//MONGOOSE
var mongoose = require('mongoose');

var Alerts = mongoose.model('Alerts');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

	//Get Alerts
	module.exports.getAllAlerts = function(req, res) {
		console.log(req.body)
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
		console.log(req.body)
		Alerts.remove({}, function(err){
			if(err){
				sendJSONresponse(res, 404, err);
			}
		});

		for(var i = 0; i < req.body.alerts.length; i++){
			var alert = req.body.alerts[i]
			console.log(alert)
			var newAlert = new Alerts({ 
				time: alert.time,
			    title: alert.title,
			    days: {
			    	mon : alert.days.mon,
			    	tue : alert.days.tue,
			    	wed : alert.days.wed,
			    	thu : alert.days.thu,
			    	fri : alert.days.fri,
			    	sat : alert.days.sat,
			    	sun : alert.days.sun
			    },
			    repeating: alert.repeating,
			    isEnabled: alert.isEnabled,
			    id: alert.id
			});

			newAlert.save(function (err, newAlert) {
				if(err) {
		            sendJSONresponse(res, 404, err);
		        }
			});
		}
		sendJSONresponse(res, 200, "Successfully added all alerts");
	};

	//Post one alert
	module.exports.postNewAlert = function(req, res) {
		console.log(req.body)
		//console.log(req)

		var newAlert = new Alerts({ 
			time: req.body.time,
		    title: req.body.title,
		    days: {
		    	mon : req.body.days.mon,
		    	tue : req.body.days.tue,
		    	wed : req.body.days.wed,
		    	thu : req.body.days.thu,
		    	fri : req.body.days.fri,
		    	sat : req.body.days.sat,
		    	sun : req.body.days.sun
		    },
		    repeating: req.body.repeating,
		    isEnabled: req.body.isEnabled,
		    id: req.body.id
		});

		newAlert.save(function (err, newAlert) {
			if(err) {
				console.log("Error")
				console.log(err)
	            sendJSONresponse(res, 404, err);
	        }else{
	            sendJSONresponse(res, 200, newAlert);
	        }
		});
	};
