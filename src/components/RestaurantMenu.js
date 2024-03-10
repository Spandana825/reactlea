import React from 'react';
import Shimmer from './shimmer';
import { useState,useEffect } from 'react';
import { MENU_API } from '../utils/constants';
import { useParams } from 'react-router-dom';

import RestoCategories from './RestoCategories';

// import useRestaurantMenu  from '../utils/useRestaurantMenu';

const RestaurantMenu = () => {
  const [resinfo,setresinfo]=useState(null);
  const {resId}=useParams();
  const [showIndex,setshowIndex]=useState(null);
  console.log(resId);
  // const resinfo=useRestaurantMenu(resId);
    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu= async ()=>{
        const data= await fetch(MENU_API+resId);
        const json=await data.json();
        console.log(json);
        setresinfo(json.data);
    };
  if(resinfo===null) return <Shimmer/>

//   const { name, city, cuisines, costForTwoMessage } = (resinfo?.cards?.[2]?.card?.card?.info) || {};
//   const { itemCards } = (resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card) || {};

// console.log(name);
// console.log(itemCards);
//   return(
//     <div>
//         <h1>{name}</h1>
//         <h2> {city}</h2>
//         <h2>{cuisines?.join(",")}</h2>
//         <h2>{costForTwoMessage}</h2>
//         <h1>menu</h1>
//         <ul>
//           {itemCards?.map((item)=><li key={item?.card?.info?.id}>{item?.card?.info?.name}-Rs.{item?.card?.info?.price/100}</li>)}
//         </ul>
const { name, city, cuisines, costForTwoMessage } = (resinfo?.cards?.[0]?.card?.card?.info) || {};
  const { itemCards } = (resinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card) || {};
    const categories=
             resinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter
             (c=>
               c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
               );
//OTHER TRY
  // const { name, city, cuisines, costForTwoMessage } = (resinfo?.cards?.[0]?.card?.card?.info) || {};
  // const { itemCards } = (resinfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card) || {};

console.log(name);
console.log(itemCards);
console.log(resinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
console.log(categories)
 return(
    <div className='text-center'>
        <h1 className='text-3xl font-bold p-10'>{name}</h1>
        <h2 className='text-lg font-bold px-10 '> {city}</h2>
        <h2 className='text-lg font-bold px-10'>{cuisines?.join(",")}</h2>

        {/* <h1 className='px-10 font-bold'>menu</h1> */}
        {/* <ul>
          {itemCards?.map((item)=><li className='px-10' key={item?.card?.info?.id}>{item?.card?.info?.name}-Rs.{item?.card?.info?.price/100}</li>)}
        </ul>
         */}
         {/*===========lets use accordian=========== */}
       {categories.map((category,index)=>(
        //controlled component
       <RestoCategories 
       key={category?.card?.card.title}
       data={category?.card?.card} 
       showItems={index===showIndex? true: false}
       setshowIndex={()=>setshowIndex(index)}
       />
       ))}
      
    </div>
  )
}

export default RestaurantMenu;

