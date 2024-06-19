const express = require("express");
const app = express();
const port = 8080;

const expressError  = require("./expressError");
// middleware //
/* 
execute any code
make changes to the request and the response object
end the request-response cycle
call the next middleware function in the stack  
*/


/* middleware are two work
   1- some response send 
   2- execute hone ke bad apna control aage de dena. */

  //------- create middleware ------- //
// app.use((req,res)=>{
//     console.log("hi i am middleware");
//     res.send("middleware complated");
//  }) 

 //------------ channing middleware ----------//
// app.use((req,res,next)=>{
//     console.log("hi i am middleware");
//     // res.send("middleware complated");
//     next();
//     /* next ke bad bhi ham code write kar sakte he but this is not best ways 
//           and good developer to use (' return next() ')*/
//  }) 

//------------------ logger middleware------------------- //
  // morgan,cookinger , expressjs document 
// app.use("/random" , (req,res,next) =>{
//     // console.log(req); // many method printed
//     req.time = new Date(Date.now()).toString(); // exact
//     console.log(req.method , req.path , req.hostname, req.time);
//     next();
// })

// autantication token query me dena chate he //
app.use("/api" , (req,res,next)=>{
    let {token} = req.query;
    // url me => ( ?token=giveaccess )
    if(token === "giveaccess"){
        next();
    }
    // res.send("ACCESS DENIED");
    throw new expressError(401, "Access denied!!");
    
})

// middelware ko variable form me bhi access kar sakte h
// const checkToken = (req,res,next)=>{
//     let{token } = req.query;
//     if(token === "giveaccess"){
//         next();
//     } 
//     res.send("access denied!!");
// }
// app.get me bhi (checkToken) pass karna padega //


app.get("/api" , (req,res)=>{
    res.send("data on database");
})
app.get("/" , (req,res)=>{
    res.send("Hi i am root.");
})  

app.get("/random" , (req,res)=>{
    res.send("Hello i randome page.");
})

//error page on middleware  (api path not exist tab used)//
// app.use((req,res)=>{
//     res.status(400).send("sorry page not found!!...!!")
// })

  // ----- err temprary route ----- //

app.get("/err" , (req,res)=>{
   abcd = abcd ;
})

app.get("/admin" , (req,res)=>{
    throw new expressError(403, "access to admin is forbidan.");
})

app.use((err,req,res,next)=>{
      let{status ,message} = err;
     res.status(status).send(message);
});

app.listen(port , ()=>{
    console.log(`app is lishening on port : ${port}`)
})