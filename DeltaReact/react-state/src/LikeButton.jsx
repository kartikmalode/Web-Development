import { useState } from "react";

export default function LikeButton(){
let [like, setLike] = useState(false);

    let togglelike =()=>{
       setLike(!like);
    };
  let islikestyle ={color:"red"}
    return(
           <>
           <div>
            <p onClick={togglelike}>{
                like ? (<i className="fa-solid fa-heart" style={islikestyle}></i>):
                (<i className="fa-regular fa-heart"></i>)
                } </p>
           </div>
           </>
    );
}