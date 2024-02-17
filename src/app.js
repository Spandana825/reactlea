import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
//header
//--logo
//--nav items

//body
//--search
//--restaurant container
//------resto cards
//--------img
//--------name,start rating,cuisune


const RestaurantCard=(props)=>{
   const {resData}=props;
   const {cloudinaryImageId,name,cuisines,avgRating}=resData?.info;
   const {deliveryTime}=resData?.info.sla;
   return(
      <div className="res-card" style={stylecard}>
         
         <img className="res-card-image"src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/>
         <h3>{name}</h3>
         <h3>{cuisines.join(",")}</h3>
         <h3>{avgRating}{" "}stars</h3>
         <h3>{deliveryTime}{" "}minutes</h3>
      </div>
   );
};

const AppLayout=()=>{
   return (
      <div className="app">
         <Header/>
         <Body/>

      </div>
   )
}
const root=ReactDOM.createRoot(document.getElementById("root"));
 root.render(<AppLayout/>);
