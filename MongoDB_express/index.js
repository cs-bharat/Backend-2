const express = require("express");
const app = express();
const port = 8080;
const mongoose = require("mongoose");
const path = require("path"); 
const Chat = require('./models/chat.js');
// put ke liye method-override
const methodOverride = require("method-override");

app.set("views" , path.join(__dirname, "views"));
app.set("view engine" , "ejs");
app.use(express.static(path.join(__dirname, "public"))); // static file use kare
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));

// index.route created
app.get('/Chats', async(req,res) =>{
    let chats  =  await Chat.find();
    // console.log(chats);
    res.render("index.ejs" , {chats});
})


// new route created ---(new / created route interconnectd to each other );
app.get('/Chats/new' , (req,res)=>{
    res.render("new.ejs");
})

// create route created for add chat on db //
app.post('/Chats' , (req,res)=>{
    // post ke under data body me store hota he or - parse karne ke liye one line use karni padti he//
     let {from,to,msg} = req.body;
     let newChat = new Chat({
        from:from,
        to : to,
        msg : msg,
        Created_at: new Date(),
     });
    //  console.log(newChat);

    // save chat on database//
    newChat.save()
    .then((res)=>{
        console.log("chat was saved on database!");

    }).catch((err)=>{
        console.log(err);
    })
    //  res.send("ok done");
    res.redirect("./Chats");
})

// edit route created//
app.get('/Chats/:id/edit' , async(req,res)=>{
    // id excess karne keliye //
    let {id} = req.params;
    let chat = await Chat.findById(id); // id ko database me find kiya
    console.log(chat);
    res.render("edit.ejs" , {chat}); // id ko edit route ko bheja.
})

// update route created //
app.put("/Chats/:id", async(req,res)=>{
    let {id} = req.params;
    let{msg : newMsg} =req.body;
    let updatedChat = await Chat.findByIdAndUpdate(
        id,
        {msg :newMsg},
        {runValidators : true, new:true}
    );
    console.log(updatedChat);
    res.redirect("/Chats");
});

// delete route created //

app.delete("/Chats/:id" , async(req,res)=>{
    let {id} = req.params;
    let chatToBeDeleted =  await Chat.findByIdAndDelete(id);
    // console.log(chatToBeDeleted);
    res.redirect("/Chats");
})

// mongoose website docs .//
main().then(() => console.log("connection Successfull"))
.catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}


app.get("/" , (req,res)=>{
    res.send("Welcome to whatsapp small chat app");
})

app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`)
})

