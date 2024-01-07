const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    sender:{
        type:String
    },
    content:{
        type: String
    }  
}, { timestamps: true });

const MessageModel = mongoose.model('Message', MessageSchema);
module.exports = MessageModel;
