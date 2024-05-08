const express  = require("express");
const app = express(); 
const path = require("path"); 

const port  = 8080;

// EJS package ko by default express require kar leta he //
app.set("view engine" , "ejs"); // complasory ejs ko use kare tab 

app.set("views" , path.join(__dirname , "/views"));//path ye package he and backend-2 directory se server
// ko run kare tab error na aay es liye (path.join) used kiya //


// res.send=> ke under Html,js based template bheje to code bualiki hogo esase aacha ham (views)
// directory ke under ejs template bana-kar (res.render) ke under apni file ki location de kar aasani se kam kar sakte he // 

app.get("/" , (req,res)=>{
    // res.send("Hello ejs This is home page!");
    res.render("Home.ejs"); 
    // |^| render views directory ko find karta he and uske under file ko print karta he//
})

app.listen(port , ()=>{
    console.log(`App listing on port ${port}`);
})
