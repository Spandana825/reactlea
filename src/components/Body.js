import RestaurantCard  from "./RestaurantCard";
import resList from "../utils/mockData";
const Body=()=>{
    return(
       <div className="body">
          <div className="search">search</div>
          <div className="res-container">
             {resList.map((restaurant)=>(
             <RestaurantCard key={restaurant.info.id}resData={restaurant}/>
             ))
             }
             
 
             {/* <RestaurantCard resName="KFC" cuisines="burgers,pizza,wings"/>
             <RestaurantCard resName="KFC" cuisines="burgers,pizza,wings"/>
             */}
          </div>
       </div>
 
    );
 }
 

 export default Body;