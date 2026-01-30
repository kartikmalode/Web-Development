import { useState } from "react"

export default function Form(){
    let [formData,setformData] = useState({
        fullName:"",
        username:"",
        
    });
    let handleinputData = (event)=>{
        setformData((currData)=>{
        return{...currData, [event.target.name]:event.target.value};
        })
    }

    let handlesubmit=(event)=>{
   event.preventDefault();
    console.log(formData);
    setformData({
     fullName:"",
     username:"",
   });
    }

    // let changename =(event)=>{
    //    return setfullName(event.target.value);
    // }

    return (
        <form onSubmit={handlesubmit}>
            <label htmlFor="fullName">Full Name</label>
            <input type="text" placeholder="enter name" value={formData.fullName} onChange={handleinputData} id="fullName" name="fullName" />
            <br />
            <br />
             <label htmlFor="username">User Name</label>
            <input type="text" placeholder="enter username" value={formData.username} onChange={handleinputData} id="username" name="username" />
            <br />
            <button>Submit</button>
        </form>
    )
}