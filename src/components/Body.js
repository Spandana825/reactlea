import RestaurantCard  from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body=()=>{
    const [ListofRestaurants,SetListofRestaurants]=useState(resList);
    return(
       <div className="body">
          <div className="filter">
            <button className="filter-btn" onClick={()=>{
                const filterdList=ListofRestaurants.filter(
                   (res)=>res.info.avgRating>4
                );
                SetListofRestaurants(filterdList);
            }}>Top Rated Restaurants</button>
          </div>
          <div className="res-container">
             {ListofRestaurants.map((restaurant)=>(
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