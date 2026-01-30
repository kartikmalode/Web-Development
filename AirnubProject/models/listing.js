const mongoose = require("mongoose");
const Schema =  mongoose.Schema;

const listingschema = new Schema({
    title:{
        type:String,
        required:true,
    },
    description:String,
    image: {
    filename: {
      type: String,
      default: "default-image.jpg"
    },
    url: {
      type: String,
      default: "https://images.unsplash.com/photo-1692045155710-b26bcf5efe5a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8N3w4ODYwNjc4fHxlbnwwfHx8fHw%3D",
      set: (v) =>
        v === "" 
          ? "https://images.unsplash.com/photo-1692045155710-b26bcf5efe5a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8N3w4ODYwNjc4fHxlbnwwfHx8fHw%3D" 
          : v
    }
  },
    price:Number,
    location:String,
    country:String,
});
const Listing = mongoose.model("Listing",listingschema);
module.exports = Listing;