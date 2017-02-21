var mongoose = require('mongoose');

	var settingschema = new mongoose.Schema({
	    title: String,
	   	genre:  String,
	  	description:  String

	});

	mongoose.model('Settings', settingschema);