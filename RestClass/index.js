const express = require("express");
const app = express();
const methodOverride = require("method-override")
// override with POST having ?_method=DELETE


const port = 8080;
const path = require("path");
app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

const { v4: uuidv4 } = require('uuid');
app.use(methodOverride('_method'))



let posts = [
    {
        id: uuidv4(),
        username:"apnacollege",
        content: "I Love Coding",
    },
    {
        id: uuidv4(),
        username:"kartik",
        content: "Engineering student",
    },
    {
        id:uuidv4(),
        username:"anand",
        content: "actor",
    }
]

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
});

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
});

app.post("/posts",(req,res)=>{
    let{username,content} = req.body;
    let id = uuidv4();
    posts.push({id,username,content});
    res.redirect("/posts");
});

app.get("/posts/:id",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
   res.render("show.ejs",{post});
});

app.delete("/posts/:id",(req,res)=>{
    let {id} = req.params;
     posts = posts.filter((p) => id !== p.id);
     res.redirect("/posts");

})

app.patch("/posts/:id",(req,res)=>{
    let {id} = req.params;
    let newcon = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newcon;
    console.log(post);
    res.redirect("/posts");
});

app.get("/posts/:id/edit",(req,res)=>{
    let {id} = req.params;  
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs",{post});
})

app.use(express.static(path.join(__dirname,"public")));

app.listen(port, ()=>{

})