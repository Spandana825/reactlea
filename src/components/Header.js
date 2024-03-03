import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import {Link} from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";
const Header=()=>{
   const [btnName,setbtnName]=useState("login");
   const onlinestatus=useOnlineStatus();
    return(
       <div className="flex justify-between bg-orange-500">
          <div className="logo-container">
             <img  className="w-24"src={LOGO_URL}/>
             </div>
 
 
          <div className="flex items-center">
 
             <ul className="flex p-4 m-4 ">
               <li className="px-4">online status:{onlinestatus?"true":"false"}</li>
             <li> 
               <Link to="/" >home</Link>
             </li>
             <li className="px-4"><Link to="/about" >about</Link></li>
             <li  className="px-4"><Link to="/contact" >contact us</Link></li>
             <li  className="px-4"><Link to="/grocery">grocery</Link></li>
               
                <button className="login" onClick={()=>{
                  btnName==="login"? setbtnName("logout"):
                  setbtnName("login")
                
               }}>{btnName}</button>
             </ul>
 
          </div>
       </div>
    )
 };
 export default Header;