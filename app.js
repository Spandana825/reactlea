import React from "react";
import ReactDOM from "react-dom/client";
//header
//--logo
//--nav items
const Header=()=>{
   return(
      <div className="header">
         <div className="logo-container">
            <img  className="logo"src="https://www.zilliondesigns.com/blog/wp-content/uploads/Restaurant-Logo-7-1.jpg"/>
            </div>


         <div className="nav-items">

            <ul>
               <li>home</li>
               <li>about</li>
               <li>contact us</li>
               <li>cart</li>
            </ul>

         </div>
      </div>
   )
};
//body
//--search
//--restaurant container
//------resto cards
//--------img
//--------name,start rating,cuisune
const stylecard={
   backgroundColor:"#f0f0f0",
};
const resList=[
   {
     "info": {
       "id": "682268",
       "name": "The Filter Coffee",
       "cloudinaryImageId": "e707e3eb3c241c42d7bce2b6314a8ddf",
       "locality": "80 Feet Road",
       "areaName": "Indiranagar",
       "costForTwo": "₹250 for two",
       "cuisines": [
         "South Indian",
         "Beverages",
         "Desserts"
       ],
       "avgRating": 4.6,
       "veg": true,
       "parentId": "21001",
       "avgRatingString": "4.6",
       "totalRatingsString": "5K+",
       "promoted": true,
       "adTrackingId": "cid=11298465~p=2~eid=0000018d-afbe-171c-163d-0afd00b50218~srvts=1708050487068~45995",
       "sla": {
         "deliveryTime": 33,
         "lastMileTravel": 6.1,
         "serviceability": "SERVICEABLE",
         "slaString": "30-35 mins",
         "lastMileTravelString": "6.1 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2024-02-16 22:00:00",
         "opened": true
       },
       "badges": {
         
       },
       "isOpen": true,
       "aggregatedDiscountInfoV2": {
         
       },
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "textExtendedBadges": {
             
           },
           "textBased": {
             
           },
           "imageBased": {
             
           }
         }
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       },
       "externalRatings": {
         "aggregatedRating": {
           "rating": "--"
         }
       },
       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
     },
     "analytics": {
       
     },
     "cta": {
       "link": "swiggy://menu?restaurant_id=682268",
       "text": "RESTAURANT_MENU",
       "type": "DEEPLINK"
     }
   },
   {
     "info": {
       "id": "201224",
       "name": "Asha tiffins",
       "cloudinaryImageId": "n15vckntsiboiod3gpco",
       "locality": "HSR Layout",
       "areaName": "Hsr Layout",
       "costForTwo": "₹200 for two",
       "cuisines": [
         "South Indian",
         "North Indian",
         "Chinese",
         "Desserts",
         "Beverages"
       ],
       "avgRating": 4.5,
       "parentId": "236243",
       "avgRatingString": "4.5",
       "totalRatingsString": "10K+",
       "sla": {
         "deliveryTime": 24,
         "lastMileTravel": 4,
         "serviceability": "SERVICEABLE",
         "slaString": "20-25 mins",
         "lastMileTravelString": "4.0 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2024-02-16 15:30:00",
         "opened": true
       },
       "badges": {
         "imageBadges": [
           {
             "imageId": "v1695133679/badges/Pure_Veg111.png",
             "description": "pureveg"
           }
         ]
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             "badgeObject": [
               {
                 "attributes": {
                   "imageId": "v1695133679/badges/Pure_Veg111.png",
                   "description": "pureveg"
                 }
               }
             ]
           },
           "textExtendedBadges": {
             
           },
           "textBased": {
             
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "50% OFF",
         "subHeader": "UPTO ₹100"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       },
       "externalRatings": {
         "aggregatedRating": {
           "rating": "--"
         }
       },
       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
     },
     "analytics": {
       
     },
     "cta": {
       "link": "swiggy://menu?restaurant_id=201224",
       "text": "RESTAURANT_MENU",
       "type": "DEEPLINK"
     }
   },
   {
     "info": {
       "id": "743426",
       "name": "Paakashala",
       "cloudinaryImageId": "7aa73d0f39edf023a1499664ee25fc99",
       "locality": "Shanthinagara",
       "areaName": "Indiranagar",
       "costForTwo": "₹500 for two",
       "cuisines": [
         "Indian",
         "Chinese"
       ],
       "avgRating": 4.3,
       "veg": true,
       "parentId": "6959",
       "avgRatingString": "4.3",
       "totalRatingsString": "500+",
       "sla": {
         "deliveryTime": 34,
         "lastMileTravel": 5,
         "serviceability": "SERVICEABLE",
         "slaString": "30-35 mins",
         "lastMileTravelString": "5.0 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2024-02-16 23:00:00",
         "opened": true
       },
       "badges": {
         
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             
           },
           "textExtendedBadges": {
             
           },
           "textBased": {
             
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "50% OFF",
         "subHeader": "UPTO ₹95"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       },
       "externalRatings": {
         "aggregatedRating": {
           "rating": "--"
         }
       },
       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
     },
     "analytics": {
       
     },
     "cta": {
       "link": "swiggy://menu?restaurant_id=743426",
       "text": "RESTAURANT_MENU",
       "type": "DEEPLINK"
     }
   },
   {
     "info": {
       "id": "422863",
       "name": "Jose Mess",
       "cloudinaryImageId": "lltunkievzpxrrcarfmy",
       "locality": "Maruti Nagar",
       "areaName": "Btm Layout",
       "costForTwo": "₹150 for two",
       "cuisines": [
         "South Indian"
       ],
       "avgRating": 4.4,
       "parentId": "20129",
       "avgRatingString": "4.4",
       "totalRatingsString": "5K+",
       "sla": {
         "deliveryTime": 23,
         "lastMileTravel": 2.2,
         "serviceability": "SERVICEABLE",
         "slaString": "20-25 mins",
         "lastMileTravelString": "2.2 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2024-02-16 23:00:00",
         "opened": true
       },
       "badges": {
         "textExtendedBadges": [
           {
             "iconId": "guiltfree/GF_Logo_android_3x",
             "shortDescription": "options available",
             "fontColor": "#7E808C"
           }
         ]
       },
       "isOpen": true,
       "aggregatedDiscountInfoV2": {
         
       },
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "textExtendedBadges": {
             "badgeObject": [
               {
                 "attributes": {
                   "iconId": "guiltfree/GF_Logo_android_3x",
                   "description": "",
                   "shortDescription": "options available",
                   "fontColor": "#7E808C"
                 }
               }
             ]
           },
           "textBased": {
             
           },
           "imageBased": {
             
           }
         }
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       },
       "externalRatings": {
         "aggregatedRating": {
           "rating": "--"
         }
       },
       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
     },
     "analytics": {
       
     },
     "cta": {
       "link": "swiggy://menu?restaurant_id=422863",
       "text": "RESTAURANT_MENU",
       "type": "DEEPLINK"
     }
   },
   {
     "info": {
       "id": "660675",
       "name": "Cafe Amudham",
       "cloudinaryImageId": "384d020ad18d2752ddd119cb585024d7",
       "locality": "5th Block Kormangala",
       "areaName": "Koramangala",
       "costForTwo": "₹200 for two",
       "cuisines": [
         "South Indian",
         "Snacks"
       ],
       "avgRating": 4.6,
       "veg": true,
       "parentId": "396620",
       "avgRatingString": "4.6",
       "totalRatingsString": "5K+",
       "promoted": true,
       "adTrackingId": "cid=11300255~p=3~eid=0000018d-afbe-171c-163d-0afe00b5034c~srvts=1708050487068~45995",
       "sla": {
         "deliveryTime": 18,
         "lastMileTravel": 0.7,
         "serviceability": "SERVICEABLE",
         "slaString": "15-20 mins",
         "lastMileTravelString": "0.7 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2024-02-16 23:59:00",
         "opened": true
       },
       "badges": {
         "textExtendedBadges": [
           {
             "iconId": "guiltfree/GF_Logo_android_3x",
             "shortDescription": "options available",
             "fontColor": "#7E808C"
           }
         ]
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             
           },
           "textExtendedBadges": {
             "badgeObject": [
               {
                 "attributes": {
                   "iconId": "guiltfree/GF_Logo_android_3x",
                   "description": "",
                   "shortDescription": "options available",
                   "fontColor": "#7E808C"
                 }
               }
             ]
           },
           "textBased": {
             
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "20% OFF",
         "subHeader": "UPTO ₹50"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       },
       "externalRatings": {
         "aggregatedRating": {
           "rating": "--"
         }
       },
       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
     },
     "analytics": {
       
     },
     "cta": {
       "link": "swiggy://menu?restaurant_id=660675",
       "text": "RESTAURANT_MENU",
       "type": "DEEPLINK"
     }
   },
   {
     "info": {
       "id": "325",
       "name": "Sree Krishna Kafe",
       "cloudinaryImageId": "us72sjlfo9opsmi8fi6u",
       "locality": "Koramangala",
       "areaName": "Koramangala",
       "costForTwo": "₹137 for two",
       "cuisines": [
         "South Indian"
       ],
       "avgRating": 4.5,
       "parentId": "898",
       "avgRatingString": "4.5",
       "totalRatingsString": "10K+",
       "sla": {
         "deliveryTime": 25,
         "lastMileTravel": 0.6,
         "serviceability": "SERVICEABLE",
         "slaString": "25-30 mins",
         "lastMileTravelString": "0.6 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2024-02-16 22:30:00",
         "opened": true
       },
       "badges": {
         "imageBadges": [
           {
             "imageId": "v1695133679/badges/Pure_Veg111.png",
             "description": "pureveg"
           }
         ]
       },
       "isOpen": true,
       "aggregatedDiscountInfoV2": {
         
       },
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "textBased": {
             
           },
           "imageBased": {
             "badgeObject": [
               {
                 "attributes": {
                   "imageId": "v1695133679/badges/Pure_Veg111.png",
                   "description": "pureveg"
                 }
               }
             ]
           },
           "textExtendedBadges": {
             
           }
         }
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       },
       "externalRatings": {
         "aggregatedRating": {
           "rating": "--"
         }
       },
       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
     },
     "analytics": {
       
     },
     "cta": {
       "link": "swiggy://menu?restaurant_id=325",
       "text": "RESTAURANT_MENU",
       "type": "DEEPLINK"
     }
   },
   {
     "info": {
       "id": "269402",
       "name": "The Tea Brewery",
       "cloudinaryImageId": "v4s7ectlujr8325ejrnc",
       "locality": "1st Block",
       "areaName": "Koramangala",
       "costForTwo": "₹100 for two",
       "cuisines": [
         "Beverages",
         "Snacks",
         "Bakery",
         "Desserts",
         "Fast Food",
         "Chaat",
         "Healthy Food"
       ],
       "avgRating": 4.6,
       "parentId": "21147",
       "avgRatingString": "4.6",
       "totalRatingsString": "10K+",
       "sla": {
         "deliveryTime": 28,
         "lastMileTravel": 1.6,
         "serviceability": "SERVICEABLE",
         "slaString": "25-30 mins",
         "lastMileTravelString": "1.6 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2024-02-17 00:00:00",
         "opened": true
       },
       "badges": {
         "textExtendedBadges": [
           {
             "iconId": "guiltfree/GF_Logo_android_3x",
             "shortDescription": "options available",
             "fontColor": "#7E808C"
           }
         ]
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             
           },
           "textExtendedBadges": {
             "badgeObject": [
               {
                 "attributes": {
                   "fontColor": "#7E808C",
                   "iconId": "guiltfree/GF_Logo_android_3x",
                   "description": "",
                   "shortDescription": "options available"
                 }
               }
             ]
           },
           "textBased": {
             
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "50% OFF",
         "subHeader": "UPTO ₹100"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       },
       "externalRatings": {
         "aggregatedRating": {
           "rating": "--"
         }
       },
       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
     },
     "analytics": {
       
     },
     "cta": {
       "link": "swiggy://menu?restaurant_id=269402",
       "text": "RESTAURANT_MENU",
       "type": "DEEPLINK"
     }
   },
   {
     "info": {
       "id": "526109",
       "name": "Arogya Ahaara",
       "cloudinaryImageId": "d0jnosd8rwjljcjnxkec",
       "locality": "5th Sector",
       "areaName": "HSR Layout",
       "costForTwo": "₹300 for two",
       "cuisines": [
         "South Indian",
         "North Indian",
         "Sweets",
         "Chinese"
       ],
       "avgRating": 4.4,
       "veg": true,
       "parentId": "301948",
       "avgRatingString": "4.4",
       "totalRatingsString": "5K+",
       "sla": {
         "deliveryTime": 23,
         "lastMileTravel": 3,
         "serviceability": "SERVICEABLE",
         "slaString": "20-25 mins",
         "lastMileTravelString": "3.0 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2024-02-16 11:00:00",
         "opened": true
       },
       "badges": {
         "imageBadges": [
           {
             "imageId": "v1695133679/badges/Pure_Veg111.png",
             "description": "pureveg"
           }
         ]
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "textExtendedBadges": {
             
           },
           "textBased": {
             
           },
           "imageBased": {
             "badgeObject": [
               {
                 "attributes": {
                   "imageId": "v1695133679/badges/Pure_Veg111.png",
                   "description": "pureveg"
                 }
               }
             ]
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "20% OFF",
         "subHeader": "UPTO ₹50"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       },
       "externalRatings": {
         "aggregatedRating": {
           "rating": "--"
         }
       },
       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
     },
     "analytics": {
       
     },
     "cta": {
       "link": "swiggy://menu?restaurant_id=526109",
       "text": "RESTAURANT_MENU",
       "type": "DEEPLINK"
     }
   },
   {
     "info": {
       "id": "58058",
       "name": "Sri Vishnu Grand",
       "cloudinaryImageId": "rnwbomus9ldg57l25hs3",
       "locality": "Bellandur Gate",
       "areaName": "Sarjapur Road",
       "costForTwo": "₹250 for two",
       "cuisines": [
         "South Indian",
         "Indian",
         "Chinese"
       ],
       "avgRating": 4.3,
       "veg": true,
       "parentId": "5697",
       "avgRatingString": "4.3",
       "totalRatingsString": "10K+",
       "promoted": true,
       "adTrackingId": "cid=11299287~p=4~eid=0000018d-afbe-171c-163d-0aff00b50464~srvts=1708050487068~45995",
       "sla": {
         "deliveryTime": 33,
         "lastMileTravel": 6.9,
         "serviceability": "SERVICEABLE",
         "slaString": "30-35 mins",
         "lastMileTravelString": "6.9 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2024-02-16 22:45:00",
         "opened": true
       },
       "badges": {
         "imageBadges": [
           {
             "imageId": "v1695133679/badges/Pure_Veg111.png",
             "description": "pureveg"
           }
         ]
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "textExtendedBadges": {
             
           },
           "textBased": {
             
           },
           "imageBased": {
             "badgeObject": [
               {
                 "attributes": {
                   "imageId": "v1695133679/badges/Pure_Veg111.png",
                   "description": "pureveg"
                 }
               }
             ]
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "40% OFF",
         "subHeader": "UPTO ₹80"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       },
       "externalRatings": {
         "aggregatedRating": {
           "rating": "--"
         }
       },
       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
     },
     "analytics": {
       
     },
     "cta": {
       "link": "swiggy://menu?restaurant_id=58058",
       "text": "RESTAURANT_MENU",
       "type": "DEEPLINK"
     }
   },
   {
     "info": {
       "id": "16197",
       "name": "Kullad Cafe",
       "cloudinaryImageId": "6ba232b342c03ae95a41965735d8e517",
       "locality": "BTM Layout",
       "areaName": "BTM Layout",
       "costForTwo": "₹150 for two",
       "cuisines": [
         "North Indian",
         "Snacks",
         "Fast Food",
         "Beverages"
       ],
       "avgRating": 4.2,
       "parentId": "21550",
       "avgRatingString": "4.2",
       "totalRatingsString": "10K+",
       "sla": {
         "deliveryTime": 33,
         "lastMileTravel": 3.9,
         "serviceability": "SERVICEABLE",
         "slaString": "30-35 mins",
         "lastMileTravelString": "3.9 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2024-02-16 23:00:00",
         "opened": true
       },
       "badges": {
         "imageBadges": [
           {
             "imageId": "v1695133679/badges/Pure_Veg111.png",
             "description": "pureveg"
           }
         ],
         "textExtendedBadges": [
           {
             "iconId": "guiltfree/GF_Logo_android_3x",
             "shortDescription": "options available",
             "fontColor": "#7E808C"
           }
         ]
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "textBased": {
             
           },
           "imageBased": {
             "badgeObject": [
               {
                 "attributes": {
                   "imageId": "v1695133679/badges/Pure_Veg111.png",
                   "description": "pureveg"
                 }
               }
             ]
           },
           "textExtendedBadges": {
             "badgeObject": [
               {
                 "attributes": {
                   "fontColor": "#7E808C",
                   "iconId": "guiltfree/GF_Logo_android_3x",
                   "description": "",
                   "shortDescription": "options available"
                 }
               }
             ]
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "₹125 OFF",
         "subHeader": "ABOVE ₹249",
         "discountTag": "FLAT DEAL"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       },
       "externalRatings": {
         "aggregatedRating": {
           "rating": "--"
         }
       },
       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
     },
     "analytics": {
       
     },
     "cta": {
       "link": "swiggy://menu?restaurant_id=16197",
       "text": "RESTAURANT_MENU",
       "type": "DEEPLINK"
     }
   },
   {
     "info": {
       "id": "92389",
       "name": "Muthashy's",
       "cloudinaryImageId": "fifv8bhm4mzqausmynfa",
       "locality": "BTM Layout",
       "areaName": "BTM",
       "costForTwo": "₹300 for two",
       "cuisines": [
         "South Indian",
         "Kerala",
         "Seafood",
         "North Indian"
       ],
       "avgRating": 4.4,
       "parentId": "21429",
       "avgRatingString": "4.4",
       "totalRatingsString": "10K+",
       "sla": {
         "deliveryTime": 25,
         "lastMileTravel": 2.8,
         "serviceability": "SERVICEABLE",
         "slaString": "20-25 mins",
         "lastMileTravelString": "2.8 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2024-02-16 23:00:00",
         "opened": true
       },
       "badges": {
         
       },
       "isOpen": true,
       "aggregatedDiscountInfoV2": {
         
       },
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "textBased": {
             
           },
           "imageBased": {
             
           },
           "textExtendedBadges": {
             
           }
         }
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       },
       "externalRatings": {
         "aggregatedRating": {
           "rating": "--"
         }
       },
       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
     },
     "analytics": {
       
     },
     "cta": {
       "link": "swiggy://menu?restaurant_id=92389",
       "text": "RESTAURANT_MENU",
       "type": "DEEPLINK"
     }
   },
   {
     "info": {
       "id": "289694",
       "name": "Sri Udupi Sagar",
       "cloudinaryImageId": "z7q1fmri5lvk29mdzrof",
       "locality": "Gangothri Circle",
       "areaName": "Btm Layout",
       "costForTwo": "₹150 for two",
       "cuisines": [
         "South Indian",
         "North Indian",
         "Chinese"
       ],
       "avgRating": 4.2,
       "veg": true,
       "parentId": "194698",
       "avgRatingString": "4.2",
       "totalRatingsString": "1K+",
       "sla": {
         "deliveryTime": 22,
         "lastMileTravel": 2.9,
         "serviceability": "SERVICEABLE",
         "slaString": "20-25 mins",
         "lastMileTravelString": "2.9 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2024-02-16 22:30:00",
         "opened": true
       },
       "badges": {
         "imageBadges": [
           {
             "imageId": "v1695133679/badges/Pure_Veg111.png",
             "description": "pureveg"
           }
         ]
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "textExtendedBadges": {
             
           },
           "textBased": {
             
           },
           "imageBased": {
             "badgeObject": [
               {
                 "attributes": {
                   "imageId": "v1695133679/badges/Pure_Veg111.png",
                   "description": "pureveg"
                 }
               }
             ]
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "10% OFF",
         "subHeader": "UPTO ₹40"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       },
       "externalRatings": {
         "aggregatedRating": {
           "rating": "--"
         }
       },
       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
     },
     "analytics": {
       
     },
     "cta": {
       "link": "swiggy://menu?restaurant_id=289694",
       "text": "RESTAURANT_MENU",
       "type": "DEEPLINK"
     }
   },
   {
     "info": {
       "id": "241027",
       "name": "Namaste",
       "cloudinaryImageId": "dtcwa1rxdskp3crqvpr3",
       "locality": "3rd Sector",
       "areaName": "Hsr Layout",
       "costForTwo": "₹100 for two",
       "cuisines": [
         "South Indian",
         "Thalis",
         "Biryani",
         "Desserts",
         "Beverages",
         "Indian"
       ],
       "avgRating": 4.2,
       "veg": true,
       "parentId": "366271",
       "avgRatingString": "4.2",
       "totalRatingsString": "10K+",
       "promoted": true,
       "adTrackingId": "cid=10968495~p=8~eid=0000018d-afbe-171c-163d-0b0300b50875~srvts=1708050487068~45995",
       "sla": {
         "deliveryTime": 30,
         "lastMileTravel": 4.2,
         "serviceability": "SERVICEABLE",
         "slaString": "25-30 mins",
         "lastMileTravelString": "4.2 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2024-02-17 01:00:00",
         "opened": true
       },
       "badges": {
         "imageBadges": [
           {
             "imageId": "v1695133679/badges/Pure_Veg111.png",
             "description": "pureveg"
           }
         ]
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             "badgeObject": [
               {
                 "attributes": {
                   "imageId": "v1695133679/badges/Pure_Veg111.png",
                   "description": "pureveg"
                 }
               }
             ]
           },
           "textExtendedBadges": {
             
           },
           "textBased": {
             
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "₹100 OFF",
         "subHeader": "ABOVE ₹199",
         "discountTag": "FLAT DEAL"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       },
       "externalRatings": {
         "aggregatedRating": {
           "rating": "--"
         }
       },
       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
     },
     "analytics": {
       
     },
     "cta": {
       "link": "swiggy://menu?restaurant_id=241027",
       "text": "RESTAURANT_MENU",
       "type": "DEEPLINK"
     }
   },
   {
     "info": {
       "id": "162807",
       "name": "Indori Poha",
       "cloudinaryImageId": "ouoogs5bw5mbq3sgljra",
       "locality": "1st Block",
       "areaName": "Koramangala",
       "costForTwo": "₹200 for two",
       "cuisines": [
         "North Indian",
         "Snacks",
         "Beverages",
         "Jain",
         "Fast Food"
       ],
       "avgRating": 4.2,
       "veg": true,
       "parentId": "107001",
       "avgRatingString": "4.2",
       "totalRatingsString": "1K+",
       "sla": {
         "deliveryTime": 32,
         "lastMileTravel": 3,
         "serviceability": "SERVICEABLE",
         "slaString": "30-35 mins",
         "lastMileTravelString": "3.0 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2024-02-23 00:00:00",
         "opened": true
       },
       "badges": {
         
       },
       "isOpen": true,
       "aggregatedDiscountInfoV2": {
         
       },
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "textExtendedBadges": {
             
           },
           "textBased": {
             
           },
           "imageBased": {
             
           }
         }
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       },
       "externalRatings": {
         "aggregatedRating": {
           "rating": "--"
         }
       },
       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
     },
     "analytics": {
       
     },
     "cta": {
       "link": "swiggy://menu?restaurant_id=162807",
       "text": "RESTAURANT_MENU",
       "type": "DEEPLINK"
     }
   },
   {
     "info": {
       "id": "619503",
       "name": "Litti Heist",
       "cloudinaryImageId": "kq5fmu174kikep8wfljh",
       "locality": "1st Block",
       "areaName": "Koramangala",
       "costForTwo": "₹200 for two",
       "cuisines": [
         "Indian",
         "Beverages",
         "Chaat"
       ],
       "avgRating": 4.3,
       "parentId": "369080",
       "avgRatingString": "4.3",
       "totalRatingsString": "5K+",
       "sla": {
         "deliveryTime": 31,
         "lastMileTravel": 2.7,
         "serviceability": "SERVICEABLE",
         "slaString": "30-35 mins",
         "lastMileTravelString": "2.7 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2024-02-17 03:00:00",
         "opened": true
       },
       "badges": {
         
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             
           },
           "textExtendedBadges": {
             
           },
           "textBased": {
             
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "50% OFF",
         "subHeader": "UPTO ₹100"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       },
       "externalRatings": {
         "aggregatedRating": {
           "rating": "--"
         }
       },
       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
     },
     "analytics": {
       
     },
     "cta": {
       "link": "swiggy://menu?restaurant_id=619503",
       "text": "RESTAURANT_MENU",
       "type": "DEEPLINK"
     }
   },
   {
     "info": {
       "id": "55894",
       "name": "The Mylapore Cafe",
       "cloudinaryImageId": "kkoolvdfpqtc2hxsq0lc",
       "locality": "HSR Layout",
       "areaName": "HSR",
       "costForTwo": "₹100 for two",
       "cuisines": [
         "South Indian"
       ],
       "avgRating": 4.5,
       "parentId": "211770",
       "avgRatingString": "4.5",
       "totalRatingsString": "10K+",
       "sla": {
         "deliveryTime": 28,
         "lastMileTravel": 3,
         "serviceability": "SERVICEABLE",
         "slaString": "25-30 mins",
         "lastMileTravelString": "3.0 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2024-02-16 22:00:00",
         "opened": true
       },
       "badges": {
         "imageBadges": [
           {
             "imageId": "v1695133679/badges/Pure_Veg111.png",
             "description": "pureveg"
           }
         ]
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "textExtendedBadges": {
             
           },
           "textBased": {
             
           },
           "imageBased": {
             "badgeObject": [
               {
                 "attributes": {
                   "imageId": "v1695133679/badges/Pure_Veg111.png",
                   "description": "pureveg"
                 }
               }
             ]
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "10% OFF",
         "subHeader": "UPTO ₹40"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       },
       "externalRatings": {
         "aggregatedRating": {
           "rating": "--"
         }
       },
       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
     },
     "analytics": {
       
     },
     "cta": {
       "link": "swiggy://menu?restaurant_id=55894",
       "text": "RESTAURANT_MENU",
       "type": "DEEPLINK"
     }
   }
 ]
const RestaurantCard=(props)=>{
   const {resData}=props;
   const {cloudinaryImageId,name,cuisines,avgRating}=resData?.info;
   const {deliveryTime}=resData?.info.sla;
   return(
      <div className="res-card" style={stylecard}>
         
         <img className="res-card-image"src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.info.cloudinaryImageId}/>
         <h3>{name}</h3>
         <h3>{cuisines.join(",")}</h3>
         <h3>{avgRating}{" "}stars</h3>
         <h3>{deliveryTime}{" "}minutes</h3>
      </div>
   );
};
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
