import RestaurantCard  from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState,useEffect } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

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
   const onlinestatus= useOnlineStatus();
   if(onlinestatus==false)
      return(
         <h1>no internet connection</h1>
      )
   
   return ListofRestaurants.length===0?(
    <Shimmer/>
   ):
    (
       <div className="body">
         <div className="filter flex ">
         <div className="search m-4 p-4 ">
            <input type="text" className="search border border-solid border-black" 
            value={searchText} 
            onChange={(e)=>{setsearchText(e.target.value)}}/>
            <button className="px-4 py-1 bg-green-100 m-1"onClick={()=>{
               console.log(searchText)
              const filteredRestaurant= ListofRestaurants.filter(
               (res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()));
               setfilteredRestaurant(filteredRestaurant);
            }}>search</button>
         </div>
          <div className="search m-4 p-4 flex items-center">
          <button className="px-4 py-2 bg-gray-100" onClick={()=>{
                const filteredList=ListofRestaurants.filter(
                   (res)=>res.info.avgRating> 4.2
                );
                console.log(filteredList);
                setfilteredRestaurant(filteredList);
            }}>Top Rated Restaurants</button>
          </div>
            
          </div>
          <div className="flex flex-wrap">
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
 
    )
 }
 

 export default Body;