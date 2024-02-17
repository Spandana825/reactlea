import { CDN_URL } from "../utils/constants";

const RestaurantCard=(props)=>{
    const {resData}=props;
    const {cloudinaryImageId,name,cuisines,avgRating}=resData?.info;
    const {deliveryTime}=resData?.info.sla;
    const stylecard={
        backgroundColor:"#f0f0f0",
     };
    return(
       <div className="res-card" style={stylecard}>
          
          <img className="res-card-image"src={CDN_URL+cloudinaryImageId}/>
          <h3>{name}</h3>
          <h3>{cuisines.join(",")}</h3>
          <h3>{avgRating}{" "}stars</h3>
          <h3>{deliveryTime}{" "}minutes</h3>
       </div>
    );
 };

 
 export default RestaurantCard;