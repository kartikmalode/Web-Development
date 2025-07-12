const express = require("express");
const app = express();
const mongoose= require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodoveride = require("method-override");

app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(methodoveride("_method"));


app.set("view engine","ejs");

main().then((res)=>{
    console.log("connection succesfull");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

//Index route
app.get("/chats", async(req,res)=>{
    let allchats = await Chat.find();
    
    res.render("index.ejs",{allchats});
});

//new route
app.get("/chats/new",(req,res)=>{
    res.render("newchat.ejs");
});

//create route
app.post("/chats",(req,res)=>{
  let {from,to ,msg} = req.body;
  let newchats = new Chat({
    from:from,
    msg:msg,
    to:to,
    created_at:new Date(),
  });
  newchats.save()
  .then((res)=>{
    console.log("chat was saved");
  })
  .catch((err)=>{
    console.log(err);
  });
  res.redirect("/chats");
});
//edit route
app.get("/chats/:id/edit",async(req,res)=>{
  let {id} = req.params;
  let chat = await Chat.findById(id);
  res.render("edit.ejs",{chat});
});

//update route
app.put("/chat/:id", async(req,res)=>{
    let {id} = req.params;
    let {msg:newmsg} = req.body;
    let {newupdatechat} = await Chat.findByIdAndUpdate(
        id,
        {msg:newmsg},
        {runValidators:true, new:true},
        
    );
    console.log(newupdatechat);
    res.redirect("/chats");
});

//destoy chat
app.delete("/chats/:id",async(req,res)=>{
    let {id} = req.params;
    let deletedchat = await Chat.findByIdAndDelete(id);
    res.redirect("/chats");
})

let chat1 = new Chat({
    from:"kartik",
    to:"parth",
    msg:"how are you",
    created_at:new Date(),
});

chat1.save().then((res)=>{
    console.log(res);
});

app.get("/",(req,res)=>{
    res.send("root is working");
});
app.listen(8080,()=>{
    console.log("server is listening port 8080");
});