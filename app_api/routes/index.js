var express = require('express');
var router = express.Router();

var ctrlSettings = require('../controllers/settings');
var ctrlAlerts = require('../controllers/alerts');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('', { title: 'BeaconAlerter' });
});

//settings api
router.get('/api/settings', ctrlSettings.getSettings);
router.post('/api/settings',  ctrlSettings.postSettings);

//alerts api
router.get('/api/alerts', ctrlAlerts.getAllAlerts);
router.post('/api/alerts/:id',  ctrlAlerts.postNewAlert);
router.post('/api/alerts',  ctrlAlerts.postAlerts);
module.exports = router;
