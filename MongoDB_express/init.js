const mongoose = require("mongoose");
const Chat = require('./models/chat.js');

main().then(() => console.log("connection Successfull"))
    .catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

// documnet pass on Chat collection
let allChat = [
    {
        from: "Viswa",
        to: "bharat",
        msg: "i love you!",
        Created_at: new Date(),
    },
    {
        from: "heerr",
        to: "bharat",
        msg: "merry with me",
        Created_at: new Date(),
    },

    {
        from: "piyush",
        to: "akash",
        msg: "can send you js documentaion file.",
        Created_at: new Date(),
    },

    {
        from: "Jujay",
        to: "ritesh",
        msg: "congra. you selected intern opportunity",
        Created_at: new Date(),
    },

    {
        from: "pravin",
        to: "anuj",
        msg: "send me nots in tomorrow exam.",
        Created_at: new Date(),
    },

    {
        from: "helly",
        to: "bharat",
        msg: "best friend with me collabs.",
        Created_at: new Date(),
    },
];

Chat.insertMany(allChat).then((res) =>{
    console.log(res);
})
