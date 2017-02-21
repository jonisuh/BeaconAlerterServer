var mongoose = require('mongoose');

	var alertsschema = new mongoose.Schema({
	    title: String,
	   	genre:  String,
	  	description:  String

	});

	mongoose.model('Alerts', alertsschema);