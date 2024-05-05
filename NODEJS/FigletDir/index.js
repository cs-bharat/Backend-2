// npm packages install and used //
// npmjs.com -> install - and used any packages //

// require package 
const figlet = require("figlet");

figlet("Hello World!!", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });