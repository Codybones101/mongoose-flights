var express = require('express');
var app = require('../server');
var router = express.Router();
var flightsCtrl = require('../controllers/flights');
var flight = require('../models/flight');


router.get('/', flightsCtrl.index);




module.exports = router;