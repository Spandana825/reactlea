import { CDN_URL } from "../utils/constants";

const RestaurantCard=(props)=>{
    const {resData}=props;
    const {cloudinaryImageId,name,cuisines,avgRating}=resData?.info;
   //  const {deliveryTime}=resData?.info.sla;
   
    return(
       <div className="m-4 p-4 w-[300px] h-[400px] bg-gray-200 hover:bg-gray-300" >
          
          <img className="h-[200px] w-[300px]"src={CDN_URL+cloudinaryImageId}/>
          <h3 className="font-bold py-5 text-xl">{name}</h3>
          <h3>{cuisines.join(",")}</h3>
          <h3>{avgRating}{" "}stars</h3>
          {/* <h3>{deliveryTime}{" "}minutes</h3> */}
       </div>
    );
 };

 
 export default RestaurantCard;