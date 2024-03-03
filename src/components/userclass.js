import React from "react"

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            // count:0,
            // count1:1,
            // count2:2,
            // count3:3
            userinfo:{
                name:"dummy",
                location:"default",
                avatar_url:""
            }
        };
    }
    async componentDidMount(){
        const data=await fetch("https://api.github.com/users/spandana825")
        const json= await data.json();
        console.log(json);
        this.setState({
            userinfo:json,
        })
    }
    
    render(){
        const {name,location,avatar_url}=this.state.userinfo;
        // const {count,count1,count2,count3}=this.state;
        return(
            <div className="user-card">
                {/* <h1>count1:{count1}</h1>
                <h1>count2:{count2}</h1>
                <h1>count3:{count3}</h1>
                {/* setstate to update */}
                {/* <button onClick={()=>{
                    this.setState({
                        count2:this.state.count2+1,
                        count3:this.state.count3+3,
                    })
                }}>increase the count2</button>
                <h1>count:{count}</h1>  */}
                <img src={avatar_url    }/>
            <h1>name:{name}</h1>
            <h2>location:{location}</h2>
            

        </div>

        )
    }
}
export default UserClass;