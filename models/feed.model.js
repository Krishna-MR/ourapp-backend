const mongoose = require('mongoose');
var Schema= mongoose.Schema;
const feedSchema = Schema({

    post: String,
    imagefile: String,
    time_created: String,
    user: {type: Schema.ObjectId, ref: 'user'}
});

const feedModel= mongoose.model ('feed',feedSchema);

module.exports= feedModel; 
