import RestaurantCard  from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState,useEffect } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";

const Body=()=>{
   
   const [ListofRestaurants,SetListofRestaurants]=useState([]);
   const [filteredRestaurant,setfilteredRestaurant]=useState([]);
   const [searchText,setsearchText]=useState("")
    useEffect(()=>{
      fetchData();
   },[]);
   const fetchData=async()=>{
      const data=await fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json=await data.json();
      console.log(json);
      SetListofRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setfilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
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
                   (res)=>res.info.avgRating> 4.2
                );
                console.log(filteredList);
                setfilteredRestaurant(filteredList);
            }}>Top Rated Restaurants</button>
          </div>
          <div className="res-container">
             {filteredRestaurant.map((restaurant)=>(
            <Link
       
            key={restaurant.info.id}
             to={"/restaurants/"+restaurant.info.id}> <RestaurantCard resData={restaurant}/></Link>
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