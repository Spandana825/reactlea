import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import {Link} from "react-router-dom"
const Header=()=>{
   const [btnName,setbtnName]=useState("login")
    return(
       <div className="header">
          <div className="logo-container">
             <img  className="logo"src={LOGO_URL}/>
             </div>
 
 
          <div className="nav-items">
 
             <ul>
             <li> 
               <Link to="/" >home</Link>
             </li>
             <li><Link to="/about" >about</Link></li>
             <li><Link to="/contact" >contact us</Link></li>
               
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