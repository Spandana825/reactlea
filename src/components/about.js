import User from "./user";
import UserClass from "./userclass";

const About=()=>{
    return(
        <div> 
           <User name={"abc from functional"}/>
           <UserClass name={"abc from class"} location={"chennai form class"}/>
        </div>
        
    );
}
export default About;