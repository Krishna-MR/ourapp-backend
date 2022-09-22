var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
const userModel= require('../models/user.model');


router.post('/register', function(req,res, next) {
        var params = req.body;
        var user = new userModel();
        if (params.firstName && params.lastName && params.username && params.email && params.password) {
            user.firstName = params.firstName;
            user.lastName = params.lastName;
            user.username = params.username;
            user.email = params.email;
            user.password = params.password;
            user.image = null;
            userModel.find({$or: [
                    {email: user.email.toLowerCase()},
                    {nick: user.nick.toLowerCase()}
                ]}).exec((err, users) => {
                if (err)
                    return res.status(500).send({message: "Creating user error."});
                if (users && users.length >= 1) {
                    return res.status(200).send({message: "User already exists."});
                } else {
                    
                    user.save((err, userStored) => {
                        if (err)
                            return res.status(500).send({message: "Saving user error."});
                        if (userStored) {
                            return res.status(200).send({user: userStored});
                        } else {
                            return res.status(404).send({message: "User Not Found."});
                        }
                    });
             }
            });
        } else {
            return res.status(200).send({message: 'Invalid Data.'});
        }
    
    
});

router.get('/login', function(req,res, next) {
    var params = req.body;
    var email = params.email;
    var password = params.password;
    userModel.findOne({email: email}, (err, user) => {
        if (err)
            return res.status(500).send({message: "Login error."});
        if (user) {
            compare(password, user.password, (err, check) => {
                if (check) {
                    if (params.gettoken) {
                        return res.status(200).send({
                            token: jwt.createtoken(user)
                        });
                    } else {
                        user.password = undefined;
                        return res.status(200).send({user});
                    }
                } else {
                    return res.status(500).send({message: "Wrong email or password."});
                }
            });
        } else {
            return res.status(500).send({message: "Wrong email or password."});
        }
    });

});



module.exports = router;
