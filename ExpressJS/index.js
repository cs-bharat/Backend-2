const express = require("express");
// express function call kiya jata he
let app = express();

// app object ke under spacific method he (listen) //
let port = 3000; // logical endpoint he 
app.listen(port, ()=>{
    console.log(`app is listhing on port ${port}`);
})

// response (use) is method to used send some response //
app.use((req ,res) => {
console.log("request resiving");

// npm => express =>documentation => api refernce => response,routers //

//  res.send("this is first response to send"); // string response 

let HtmlRes = "<h1>Fruits <ul><li>apple</li><li>Orange</li></ul></h1>";
 res.send(HtmlRes); // html response
})