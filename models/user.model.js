const mongoose = require('mongoose');
var Schema= mongoose.Schema;
const userSchema = Schema({

    firstName: String,
    lastName: String,
    email: String,
    username: String,
    password: String,
    image: String

});

const userModel= mongoose.model('user',userSchema);

module.exports= userModel; 