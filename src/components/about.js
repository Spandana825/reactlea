import Usercontext from "../utils/Usercontext";
import User from "./user";
import UserClass from "./userclass";

const About=()=>{
    return(
        <div> 
            loggedinuser:
            <Usercontext.Consumer>
                {({loggedInUser})=><h1 className="font-bold">{loggedInUser}</h1>}
            </Usercontext.Consumer>
           <User name={"abc from functional"}/>
           <UserClass name={"abc from class"} location={"chennai form class"}/>
        </div>
        
    );
}
export default About;