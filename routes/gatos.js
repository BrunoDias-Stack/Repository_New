var express = require('express');
var router = express.Router();
var petsController = require('../controllers/petsControllers')
var cards = require('../data/card')

router.get('/', petsController.gatos)


module.exports = router;