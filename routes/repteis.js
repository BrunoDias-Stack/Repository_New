var express = require('express');
var router = express.Router();
var petsController = require('../controllers/petsControllers')


router.get('/', petsController.repteis)


module.exports = router;