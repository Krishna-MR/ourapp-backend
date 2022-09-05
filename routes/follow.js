var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
const followModel= require('../models/follow.model');
router.get('/', function(req,res, next) {
    res.send('respond with a resource');
});

module.exports = router;
