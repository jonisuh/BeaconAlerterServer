
var jwt = require('express-jwt');
var auth = jwt({
	secret: process.env.JWT_SECRET,
	userProperty: 'payload'
});
//MONGOOSE
var mongoose = require('mongoose');

var Video = mongoose.model('Video');
var User = mongoose.model('User');


var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

//mongoose db connection
console.log("test 4");
console.log(process.env.JWT_SECRET);

 	console.log("test 3");

	//Mongoose get
	//router.get('/', function(req, res) {
	module.exports.getAllVideos = function(req, res) {
			 Video.find(function (err, videos) {
	   			console.log("test 2");
		  		if (err) return console.error(err);
		  		
		  		res.json(videos);
			});
		
	};

	//Mongoose post
	//router.post('/', auth, function(req, res){
	module.exports.postNewVideo = function(req, res) {	
		console.log("me not that kinda orc");
		getUser(req, res, function(req, res, userName){
			console.log("nametest "+userName);
			var newvid = new Video({ 
				title: req.body.title,
				description: req.body.description
			});

			//console.log(newvid.title+" "+newvid.description);
			newvid.save(function (err, newvideo) {
				if (err) return console.error(err);

				res.json(newvideo);
			});
		});
	};

	//Mongoose get by id
	//router.get('/:id', function(req, res) {
	module.exports.getVideoByID = function(req, res) {
	    Video.findById(req.params.id, function (err, videos) {
		  if (err) return console.error(err);
		  res.json(videos);
		});
	};

	//Mongoose put
	//router.put('/:id', auth, function(req,res){
	module.exports.updateVideoByID = function(req, res) {
		Video.findByIdAndUpdate(req.params.id, { $set: { title: req.body.title, description: req.body.description }}, function (err, video) {
			if(err) throw err;
			res.json(video);
		});
	};

	//Mongoose remove
	//router.delete('/:id', auth, function(req, res){
	module.exports.deleteVideo = function(req, res) {
		Video.remove({ _id: req.params.id }, function(err, video) {
		    if(err) throw err;
		    res.json(video);
		});
	};


var getUser = function(req, res, callback){
	console.log("zug zug");
	if (req.payload && req.payload.email){
		User
		.findOne({email: req.payload.email })
		.exec(function(err, user){
			if(!user){
				sendJSONresponse(res, 404, {
					'message' : 'User not found'
				});
				return;
			}else if (err){
				console.log(err);
				sendJSONresponse(res, 404, err);
				return;
			}
			callback(req, res, user.name);
		});
	}else{
		sendJSONresponse(res, 404, {
			'message' : 'User not found'
		});
		return;
	}
};