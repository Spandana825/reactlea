import { useState } from "react";

const User=({name})=>{
    const [count1,setcount1]=useState(1);
    const [count2]=useState(2);
    

    return (
      
        <div className="user-card">
            <h1>count1:{count1}</h1>
            <h1>count2:{count2}</h1>
            
            <h1>name:{name}</h1>
            <h2>location:belandakaluru</h2>
            

        </div>
    )
}
export default User;