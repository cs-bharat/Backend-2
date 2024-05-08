const express = require("express");
const app = express();
const port = 3000;

app.set("view engine" , "ejs");

app.get("/" , (req,res)=>{
    res.send("Passing data to ejs => suppose data is comming on data base. ");
})

app.get("/rollDice" , (req,res) => {
    let diceData = Math.floor(Math.random() * 6) + 1 
    // random function data base se aa raha he or (render) ke under as a object form me ham ejs template ko data send kar rahe he //
   res.render("rollDice.ejs" , {data : diceData}); // object form me likh kar {key} name ko ejs me likhenge.
})

app.listen(port , ()=>{
    console.log(`app is listenig on port ${port}`);
})

