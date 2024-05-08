const express = require("express");
const app = express();
const port = 8080;

app.set("view engine" , "ejs");

app.get("/" , (req,res)=>{
    res.send("Instagram template");
})

app.get("/ig/:username" , (req,res) =>{
    let followers = ["Suresh" ,"dinesh" ,"bharat" ,"vishwa" ,"helly"];
    let { username } = req.params;
    // console.log(username);
    res.render("Instagram.ejs" , {user : username , followers}); // object me as a {key} form me ejs template ko data pase .
})

app.listen(port , () =>{
   console.log(`Instagram Ejs templated is listen on port ${port}`);
})

