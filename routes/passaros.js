var express = require('express');
var router = express.Router();
var petsController = require('../controllers/petsControllers')


router.get('/', petsController.passaros)


module.exports = router;