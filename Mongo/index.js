const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/test');

main()
.then(()=>{
    console.log("connections success!");
})
.catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

// create schema //
const userSchema = new mongoose.Schema({
  name : String,
  email : String,
  age : Number,
  contact : Number,
  Gender : String,
})

//______ mongoose => special class ya method (Model) = to used a create documents in collection _____//
 //_____ create a new collection(table) in a database. collection name is => User _______//

 const User = mongoose.model("User" , userSchema)
//  const Employee = mongoose.model("Employee" , userSchema)

// +++++++++ create a document in a model. +++++++++ //

// const user1 = new User({
//   name:"Bharat",
//   email:"bharatkm8866@gmail.com",
//   age:17,
//   contact:9898098906,
//   Gender:"male",
// });

// user1.save() // method he special jo promise return karta he

// ++++++++++++ create document 2 +++++++++++//

// const user2 = new User({
//   name:"viswa",
//   email:"vishu8866@gmail.com",
//   age:16,
//   contact:9898098909,
//   Gender:"female",
// });

// user2.save()
// .then((res) =>{
//   console.log(res);
// })
// .catch((err) =>{
//   console.log(err);
// })


// ++++++++++++ many user insert data many document in User collection ++++++++++//

// User.insertMany([{name:"john" , email:"john@gmail.com" , age:28,contact:9898434343,Gender:"male"}, 
// {name:"avee" , email:"avey@gmail.com" , age:22,contact:9822434343,Gender:"male"}, 
// {name:"heer" , email:"heer@gmail.com" , age:16,contact:9878434343,Gender:"female"}])

// .then((res)=>{
//   console.log(res);
// });

//+++++++ find all document ++++++//
// User.find({age:{$gt : 20}})
// .then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(err);
// })

//+++++ find only one document ++++++//
// User.findOne({age:{$gt : 17}})
// .then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(err);
// })


// ++++++  find document based on id +++++//
// User.findOne({_id:"6652fda40e2d37ac3929248a"})
// .then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(err);
// })

//++++ find document in ID method special and most used ++++++++++++//
// User.findById("6652fda40e2d37ac3929248a")
// .then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(err);
// })

//----------- update one item at a time --------//
// User.updateOne({name:"viswa"} , {name:"vishuu"})
// .then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(err);
// })

//----------- updateOne name ke base per find and update age.
// User.updateOne({name:"vishuu"} , {age:18})
// .then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(err);
// })

//-----find and  update document-----------//
User.findOneAndUpdate({name:"vishuu"} , {age:17} , {new:true}) // option passes
.then((res)=>{
  console.log(res);
}).catch((err)=>{
  console.log(err);
})


//--------- update many item db -----//
// User.updateMany({age:{$gt:18}} , {age:24})
// .then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(err);
// })



//+++++ delete document only one at a time +++++//
// User.deleteOne({name: "heer"})
// .then((res) =>{
//   console.log(res);
// })

//------- findByIdAndDelete ----//
// User.findByIdAndDelete("66530c51891acfc18ac2da11")
// .then((res)=>{
//   console.log(res);
// })
