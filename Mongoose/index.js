const mongoose = require('mongoose');
main().then(() =>{
    console.log("connection success");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

}

const userschema = new mongoose.Schema({
  name:String,
  email: String,
  age:Number,
});

const User = mongoose.model("User",userschema);
  // const Employee = mongoose.model("Employee",userschema);
// const user1 = new User({
//   name:"kartik",
//   email:"kartikmalode01@gmail.com",
//   age: 20,
// });  //inserting the value;
// user1.save();

// //insert many
// User.insertMany([
//   {name:"ajay",email:"ajay@gmail.com",age:21},
//   {name:"vijay",email:"vvijay@gmail.com",age:25},
//   {name:"viraj",email:"viraj@gmail.com",age:30},
// ]).then((res) =>{
//   console.log(res);
// });


//finding
// User.find({age:{$gt:20}}).then((res)=>{
//   // console.log(res);
//   console.log(res[0].name);
// });

//updating

// User.updateOne({name:"viraj"},{age:31})
// .then((res)=>{
//   console.log(res);
// });
// User.updateMany({age:{$gt:20}},{age:40})
// .then((res)=>{
//   console.log(res);
// })
// .catch((err)=>{
//   console.log(err);
// });

// User.findOneAndUpdate({name:"viraj"},{age:55},{new:true})//     the new true is used to print newly updated value in terminal its optional
// .then((res)=>{
//   console.log(res);
// });



//deleting
// User.deleteMany({name:"ajay"}).then((res)=>{
//   console.log(res);
// });

User.findOneAndDelete({name:"viraj"}).then((res)=>{
  console.log(res);
});
User.findByIdAndDelete('6870fed4c1537fd76c297f97').then((res)=>{
  console.log(res);
});