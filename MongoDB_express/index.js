const express = require("express");
const app = express();
const port = 8080;
const mongoose = require("mongoose");
const path = require("path"); 
const Chat = require('./models/chat.js');
// put ke liye method-override
const methodOverride = require("method-override");

// expressError (index.js) access //
const ExpressError = require("./ExpressError.js");

app.set("views" , path.join(__dirname, "views"));
app.set("view engine" , "ejs");
app.use(express.static(path.join(__dirname, "public"))); // static file use kare


//  put or patch , delete rmethod ka use karna padta he tab = form ke under //
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));

// index.route created
app.get('/Chats', async(req,res) =>{
    let chats  =  await Chat.find();
    // console.log(chats);
    res.render("index.ejs" , {chats});
})


// new route created ---(new / create route interconnectd to each other );
app.get('/Chats/new' , (req,res)=>{
    // throw new ExpressError(404,"page not found");
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

// ------ all route ko async(type ke) try and catch block me rape karenge jisje error handle ho sake
// error handling ke liye route created //
app.get("/Chats/:id" ,async (req,res,next)=>{
  try{
    let {id}  = req.params;
    let chat = await Chat.findById(id);
    if(!chat){
      next(new ExpressError(500,"chat not found..")); // async ke liye explictly next ko call karnapadta he
    }
   //  throw new ExpressError(404,"page not found"); // server crash
  
    res.render("edit.ejs" , {chat});
  }catch(err){
    next(err);
  }
     
})

// edit route created//
app.get('/Chats/:id/edit' , async(req,res)=>{
    try{
        // id excess karne keliye //
    let {id} = req.params;
    let chat = await Chat.findById(id); // id ko database me find kiya
    // console.log(chat);
    res.render("edit.ejs" , {chat}); // id ko edit route ko bheja.
    }catch (err){
       next(err);
    }
   
})

// update route created //
app.put("/Chats/:id", async(req,res)=>{
    try{
        let {id} = req.params;
        let{msg : newMsg} =req.body;
        let updatedChat = await Chat.findByIdAndUpdate(
            id,
            {msg :newMsg},
            {runValidators : true, new:true}
        );
        console.log(updatedChat);
        res.redirect("/Chats");
    }catch(err){
        next(err);
    }
   
});

// delete route created //
app.delete("/Chats/:id" , async(req,res)=>{
    try{
        let {id} = req.params;
        let chatToBeDeleted =  await Chat.findByIdAndDelete(id);
        // console.log(chatToBeDeleted);
        res.redirect("/Chats");
    }catch(err){
        next(err);
    }
 
})

// mongoose website docs .//
// main().then(() => console.log("connection Successfull"))
// .catch(err => console.log(err));
// async function main() {
//   await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
// }

main().then(() => console.log("connection Successfull"))
.catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
}


app.get("/" , (req,res)=>{
    res.send("Welcome to whatsapp small chat app");
})

// mongoose error and validation error handle //
const handleValidationErr = (err) =>{
        console.log("this is validation error .please follow rules");
        console.log(dir.message);
        return err;
}

app.use((err,req,res,next)=>{
    console.log(err.name);
    if(err.name == "ValidationError"){
        // message print kar do. ya ==> function create karke usko call karo or fir message print karo //
      err  =  handleValidationErr(err);

    }
    next(err);
})

// error route (path not exist then so error.)  middleware //
app.use((err,req,res,next,)=>{
    let{status = 500 , message = "some error occurred"}  = err;
    res.status(status).send(message);

});



//  top me likh sakte he //
// wrapasync (used for multple route to handle errors) if not used (try/catch) then used wrapasync.

/* 
----- syntax ----
fuction wrapasync(fn){
       return function(req,res,next){
       fn(req,res,next).catch((err) => next(err));
    }
}
*/

app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`)
})

