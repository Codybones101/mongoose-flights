var express = require('express');
var app = require('../server');
var router = express.Router();
var flightsCtrl = require('../controllers/flights');
var flight = require('../models/flight');


router.get('/', flightsCtrl.index);
router.get('/new', flightsCtrl.newFlight);
router.get('/:id', flightsCtrl.show);
router.post('/', flightsCtrl.create);




module.exports = router;