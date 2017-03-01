var mongoose = require('mongoose');
	var settingschema = new mongoose.Schema({
	  	alertSound: String,
	  	hourMode: String,
	  	snoozeOn: Boolean,
	  	snoozeLength: Number,
	  	snoozeAmount: Number,
	  	soundVolume: Number,
		automaticSync: Boolean,
		dateFormat: String,
		beaconID: String
	});

	mongoose.model('Settings', settingschema);