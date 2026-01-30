const express = require("express");
const app = express();
const mongoose = require("mongoose");
const MONGO_URL = 'mongodb://127.0.0.1:27017/wanderlust';
const Listing = require("./models/listing");
const path = require("path");
const methodOverride = require("method-override");
const ejsmate = require("ejs-mate");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));
app.engine('ejs',ejsmate);
app.use(express.static(path.join(__dirname,"/public")));

main().then(()=>{
    console.log("connect to db");
})
.catch((err)=>{
    console.log(err);
});

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
async function main() {
    await mongoose.connect(MONGO_URL);
}

app.get("/",(req,res)=>{
    res.send("hi root");
});
app.get("/listings",async(req,res)=>{
   const alllisting = await Listing.find({});
   res.render("./listing/index",{alllisting});
    
});

//new route
app.get("/listings/new",(req,res)=>{
    res.render("./listing/new");
});

//show route
app.get("/listings/:id", async(req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("./listing/show",{listing});
});

//create route
app.post("/listings",async(req,res)=>{
  const newlisting = new Listing(req.body.listing);
  await newlisting.save();
  res.redirect("/listings");
});

//edit
app.get("/listings/:id/edit",async(req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("./listing/edit",{listing});
});

//update route
app.put("/listings/:id" ,async(req,res)=>{
    let {id}= req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    res.redirect(`/listings/${id}`);
});

//delete 
app.delete("/listings/:id", async(req,res)=>{
    let {id}=req.params;
    let deltedlisting= await Listing.findByIdAndDelete(id);
    console.log(deltedlisting);
    res.redirect("/listings");
});

// app.get("/testlisting",async(req,res)=>{
//     let samplelist = new Listing({
//         title:"My new vella",
//         description:"this place is very nice",
//         price:50000,
//         location:"canada",
//         country:"Canada",

//     });
//     await samplelist.save();
//     console.log("sample list done");
//     res.send("success");
// });


app.listen(8080,()=>{
    console.log("welcome port 8080");
});

