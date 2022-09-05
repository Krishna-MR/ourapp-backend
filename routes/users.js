var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
const userModel= require('../models/user.model');


router.post('/register', function(req,res, next) {
    let userObj= new userModel();
    var params=req.body;
    
    userObj.save(function(err, userObj){
        if (err) {
            res.send({status: 500, message: 'Registration failed'});
        } else {
            res.send({status: 200, message: 'Registration successful. login', userDetails: userObj });
        }
    });
    
});

router.get('/login', function(req,res, next) {
    var email = req.body.email;
    var password = req.body.password;
    let user = new userModel();
    userModel.find({email: email}, function (err, user) {
        if (err) {
            res.send({status: 500, message: 'login failed'});
        } 
        else {
            if(user)
            {
                res.send({status: 200, message: 'logged in ', userdetails: user});
                
            }
            else {
                res.send({status: 500, message: 'wrong email or password '});
                
            }
            
        }
    });

});

module.exports = router;
