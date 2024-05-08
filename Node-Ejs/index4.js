const express  = require("express");
const app = express();
const port = 8080;
const path  = require("path");

app.get("/" , (req,res) =>{
   res.send("Instagram 2 templated data so. and data get in data base.");
})

// static file serverd //
app.use(express.static(path.join(__dirname , "/public/css")));
app.use(express.static(path.join(__dirname , "/public/js")));


// app.get("*" , (req,res) =>{
//     res.send("This username Account is not exist!!");
// })

app.get("/ig/:username" , (req,res) =>{
    let {username} = req.params;
    // console.log(username);
    const instaData  = require("./data.json");
    const data = instaData[username];
    // console.log(data);
    if(data){
        res.render("Instagram2.ejs" , {data});
    }else{
        res.render("error.ejs");
    }
    
})
app.listen(port , ()=>{
    console.log(`App is listening on port ${port}`);
})