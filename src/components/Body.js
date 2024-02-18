import RestaurantCard  from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState,useEffect } from "react";
import Shimmer from "./shimmer";

const Body=()=>{
   
   const [ListofRestaurants,SetListofRestaurants]=useState([]);
   const [filteredRestaurant,setfilteredRestaurant]=useState([]);
   const [searchText,setsearchText]=useState("")
    useEffect(()=>{
      fetchData();
   },[]);
   const fetchData=async()=>{
      const data=await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=12.9351929&lng=77.62448069999999"
      );
      const json=await data.json();
      console.log(json);
      SetListofRestaurants(json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
      setfilteredRestaurant(json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
   };
   if(ListofRestaurants.length===0){
      return <Shimmer/>;
   }
    return(
       <div className="body">
         <div className="filter">
         <div className="search">
            <input type="text" className="search-box" 
            value={searchText} 
            onChange={(e)=>{setsearchText(e.target.value)}}/>
            <button onClick={()=>{
               console.log(searchText)
              const filteredRestaurant= ListofRestaurants.filter(
               (res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()));
               setfilteredRestaurant(filteredRestaurant);
            }}>search</button>
         </div>
          
            <button className="filter-btn" onClick={()=>{
                const filteredList=ListofRestaurants.filter(
                   (res)=>res.info.avgRating>4.5
                );
                SetListofRestaurants(filteredList);
            }}>Top Rated Restaurants</button>
          </div>
          <div className="res-container">
             {filteredRestaurant.map((restaurant)=>(
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