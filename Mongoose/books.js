const mongoose = require('mongoose');
main().then(() =>{
    console.log("connection success");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');

}

const bookschema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        maxlength : 15,
    },
    author:{
        type:String,
    },
    Price:{
        type:Number,
        min:[1,"price is too low"],
    },
    discount:{
        type:Number,
        default:0,
    },
    category:{
        type:Number,
        enum:["fiction","non-fiction"],
    }
});

const Book = mongoose.model("Book",bookschema);

let book1 = new Book({
    title:"Mathmatics",
    author:"Ramanujan",
    Price:100,
});

book1.save().then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
});

Book.findByIdAndUpdate('687115f3433e72943ecc7431',
    {Price:-100},
    {runValidators:true}
).then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err.errors.Price.properties.message);
});
