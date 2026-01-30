import { useState } from "react";


 function init(){
    console.log("init was executed");
        return Math.random();
    }



export default function Counter(){

    let [count,setCount] =useState(init); //when we pass init() so it will uses the resource/function execute  repeateadly so we only pass name so it will automatically excuted

    console.log("component is renrenderd");
    console.log(`count = ${count}`);

   
    function incount(){
        //callback in state to update values
        // setCount((currcount)=>{
        //   return currcount+2;
        // });

      
        setCount(count+1);
         console.log(`new count is = ${count}`);

         //we can also set the fix value in state
         //setCount(25);
        
    }
    return(
        <div>
        <h3>Count = {count}</h3>   {/* in this case count is increse and display only console not in the webpage therefore we use the state in react */}
        <button onClick={incount}>Increment count</button>
       </div>
    );
}