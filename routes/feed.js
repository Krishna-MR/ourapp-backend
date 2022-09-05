var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
const feedModel= require('../models/feed.model');

router.get('/', function(req,res, next) {
    res.send('respond with a resource');
});

module.exports = router;
