const mongoose= require("mongoose");
const Chat = require("./models/chat.js")

main().then((res)=>{
    console.log("connection succesfull");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
let chats = [
    {
    from:"kartik",
    to:"parth",
    msg:"how are you",
    created_at:new Date(),
},
 {
    from:"vijay",
    to:"ajay",
    msg:"hey",
    created_at:new Date(),
},
 {
    from:"viraj",
    to:"janvi",
    msg:"hi",
    created_at:new Date(),
},
 {
    from:"sandesh",
    to:"aish",
    msg:"hey whats up",
    created_at:new Date(),
},
]
Chat.insertMany(chats);
