// package install and require package on - npm
const { faker } = require('@faker-js/faker');
const express = require('express');
const path = require('path');
const app = express();

app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname, "/views"));

//mySql2 package install and require - node(server) and sql(database) ko connect karta he//
const mysql = require('mysql2');

// Create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'B@$19PR.@##',

  });

  let getRandomUser = () => {
    return [
       faker.string.uuid(),
       faker.internet.userName(),
      faker.internet.email(),
     faker.internet.password(),
    ];
  }

  // inserting new data on Database (fake )
  // let q  = "INSERT INTO users (id,username,email,password) VALUES ?";
  //  let data =[];
  //  for(let i=1; i<=100; i++){
  //    //console.log(getRandomUser()); // 100 fake user
  //    data.push(getRandomUser());
  //  }
 
/* terminal ke under sql conneted karne ke liye command use=>
    /usr/local/mysql/bin/mysql -u root -p (enter) => type password */

 

  app.get('/' , (req,res) =>{
    let q = `SELECT count(*) FROM users`;
   
        /* connection ke under use method query = (run query 'show tables')  */
        try{
          connection.query(q ,(err,result) =>{ 
            if(err) throw err;
            let count = result[0][ "count(*)"];
            res.render("Home.ejs" , {count});
          }) 
        }catch(err){
            console.log(err);
            res.send("some error in data base");
        }
    // res.send("success");
  })

  app.get('/user' , (req,res) =>{
    let q = `SELECT * FROM users`;
   
        /* connection ke under use method query = (run query 'show tables')  */
        try{
          connection.query(q ,(err,users) =>{ 
            if(err) throw err;
            // console.log(users);
            // res.send("done");
            res.render("ShowUser.ejs" , {users});
          }) 
        }catch(err){
            console.log(err);
            res.send("some error in data base");
        }
    // res.send("success");
  })


  app.listen("8080" , ()=>{
   console.log("server is listen on port 8080")
  })


  // connection.query(q, [data], (err,result) =>{ 
  //   /* connection ke under use method query = (run query 'show tables')  */
  //   try{
  //       if(err) throw err;
  //       console.log(result);
  //   }catch(err){
  //       console.log(err);
  //   }
   
  // } ) 

  // connection.end();

