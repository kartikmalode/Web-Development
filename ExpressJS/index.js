const express = require("express");
const app = express();

let port = 3000;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);

})

// app.use((req , res) =>{
//     console.log("Request Received");
//       res.send("this is reponse");
// });

//routing
app.get("/",(req , res) =>{
    res.send("this is root path");
});
app.get("/apple",(req , res) =>{
    res.send("this is apple path");
});

app.post("/",(req , res) =>{
    res.send("you send a post req to root path");
});


//path parameters

app.get("/:username/:id",(req,res) =>{
    let {username,id} = req.params;
    let htmlstr = `<h1 >welcome to the page of @${username}. </h1>`
  res.send(htmlstr);
});

app.get("/search",(req,res) =>{
  let {q} = req.query;
  res.send(`<h1>search result is : ${q}</h1>`);
});