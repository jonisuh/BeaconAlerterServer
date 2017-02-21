var express = require('express');
var router = express.Router();

var ctrlVideos = require('../controllers/videos');
var ctrlVideos = require('../controllers/videos');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('', { title: 'BeaconAlerter' });
});

//videos api
router.get('/api/videos', ctrlVideos.getAllVideos);
router.post('/api/videos', auth,  ctrlVideos.postNewVideo);
router.get('/api/videos/:id', ctrlVideos.getVideoByID);
router.put('/api/videos/:id', auth, ctrlVideos.updateVideoByID);
router.delete('/api/videos/:id', auth, ctrlVideos.deleteVideo);


//settings api
router.get('/api/settings', ctrlSettings.getSettings);
router.post('/api/settings',  ctrlSettings.postSettings);

//alerts api
router.get('/api/alerts', ctrlAlerts.getAllAlerts);
router.post('/api/alerts/:id',  ctrlAlerts.postNewAlert);
router.post('/api/alerts',  ctrlAlerts.postAlerts);
module.exports = router;
