var mongoose = require('mongoose');

	var videoschema = new mongoose.Schema({
	    title: String,
	   	genre:  String,
	  	description:  String

	});

	mongoose.model('Video', videoschema);