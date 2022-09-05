const mongoose = require('mongoose');
var Schema= mongoose.Schema;
const messageSchema = Schema({
    emitter: {type: Schema.ObjectId, ref: 'user'},
    receiver: {type: Schema.ObjectId, ref: 'user'},
    text: String,
    sent_time: String,
    viewed: String
});

const messageModel= mongoose.model ('message',messageSchema);

module.exports= messageModel;
   