const express = require("express");
let app = express();

let port = 8080;
app.listen(port , ()=>{
    console.log(`app is listening on port ${port}`);
})

// routing is used //
app.get("/" , (req,res) =>{
    res.send("you contacted root path.");
})

app.get("/apple" , (req,res) =>{
    res.send("this is contacted a apple path.");
})

app.get("/orange" , (req,res) =>{
    res.send("this is contacted a orange path.");
})

app.get("*" , (req,res) =>{
    res.send("this path is not exist.");
})