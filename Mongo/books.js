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

// create schema with validation (rule) propare way //
// validation -=> schematypes ==> number,string,date,
 const bookSchema = new mongoose.Schema({
    title :{
       type:String,
       require:true,
       
    }, 
    author :{
        type:String,
    },
    price:{
        type:Number,
        min:[1, "price is to low for amazon selling"],
    }, 
    discount:{
        type:Number,
        default:0,
    },
    category:{
      type:String,
      enm:["fiction" , "non-fiction"],
    },
    genre:[String]
  });

  // create collection
  const Book = new mongoose.model("Book" , bookSchema); 
  
  // document 1 in Book collection
//   let book1 = new Book({
//     title:"mathamatics XII",
//     author:"RD sharma",
//     price:1000,
//   })

//   book1.save()
//   .then((res)=>{
//     console.log(res);
//   }).catch((err)=>{
//     console.log(err);
//   })


// create second book document and schema type operation.
/* validations rule insersion ke time hi kam karte he ye updation ke time
   kam nhi karte he or agr un rule ko apply karvana he to 
    update timming per , {runvalidators:true}  karo. */

let book2 = new Book({
    title:"marvel part-2",
    price:-230,
    genre:["comics" , "fiction" , "childern story" , "cartons story"]
  })

  book2.save()
  .then((res)=>{
    console.log(res);
  }).catch((err)=>{
    // console.log(err.errors.price.properties.message); // for error handling and avery error than custom message type and so .
    console.log(err)
  })