const express = require("express");
const app = express();
const port = 8080;

// post request standard line //
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/register" , (req,res) =>{
    let {username} = req.query;
    // get request se data send karne per vo (req.query) me store hota he//
    // console.log(username);
    res.send(`Standard Get response welcome ${username}!`);
})

app.post("/register" , (req,res) =>{
    // post request se data send karne par vo (req.body) me store hota he//
    // console.log(req.body);
    let {username} = req.body;
    res.send(`Standard post response welcome ${username}`);
})

app.listen(port , ()=>{
  console.log(`app listening on port ${port}`);
})