const mongoose = require('mongoose');
var Schema= mongoose.Schema;
const followSchema = Schema({

    user: {type: Schema.ObjectId, ref:'user'},
    followed: {type: Schema.ObjectId, ref:'user'}

});

const followModel= mongoose.model ('follow',followSchema);

module.exports= followModel; 