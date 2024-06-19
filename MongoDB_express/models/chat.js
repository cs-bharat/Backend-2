// const { kMaxLength } = require("buffer");
const mongoose = require("mongoose");
// const { type } = require("os");
// const { stripVTControlCharacters } = require("util");

const chatSchema = new mongoose.Schema({
    // schema create //
    from:{
        type : String,
        require: true,
    },
    to: {
        type:String,
        require: true,
    },
    msg:{
        type : String,
        maxLength : 50,
    },
    Created_at:{
        type: Date,
        require: true,
    }

})

// create model (collection)  => chat automatic database me = (chats hoga small case ) on DB //
const Chat = mongoose.model("Chat" , chatSchema);
module.exports = Chat;