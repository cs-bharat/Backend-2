// path parameters //

const express  = require("express");
let app = express();
let port  = 3000;

app.listen(port ,()=>{
  console.log(`app is listening on port ${port}`);
})

app.get("/" , (req,res) =>{
    res.send("Hello i am working!");
})

// path parameters used //
app.get("/:username" , (req,res) =>{
    let{username} = req.params;
    res.send(`welcome to the page @${username}.`);
})

// multiple path parameters //
app.get("/:username/:id" ,(req,res) =>{
    let{username , id} = req.params;
    let HtmlStr = `<h1>welcome to the page @${username}</h1>`
    res.send(HtmlStr);
})

// query string //
// syntax => search/121/query?q="apple" //

app.get("/:search/:id/:name" , (req,res) =>{
    // request query //
    // console.log(req.query);
    let{q}  = req.query;
    if(!q){
        res.send("<h1>Nothing searched!!</h1>");
    }
    res.send(`search result for query : ${q}`);
})