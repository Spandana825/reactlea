import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/about";
import Contact from "./components/contact";
import Errorpage from "./components/errorpage";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter,RouterProvider, Outlet } from "react-router-dom";
import { lazy,Suspense } from "react";
import Usercontext from "./utils/Usercontext";
import Usercontext from "./utils/Usercontext";
// import Grocery from "./components/Grocery";
//header
//--logo
//--nav items

//body
//--search
//--restaurant container
//------resto cards
//--------img
//--------name,start rating,cuisune
const Grocery=lazy(()=>import("./components/Grocery"));
const About=lazy(()=>import("./components/about"));
const AppLayout=()=>{
   const [userName,setUserName]=useState();
   // authentication
   useEffect(()=>{
      //api call 
      const data={
         name:"abcdedffgf",
      };
      setUserName(data.name);
   },[]);
  
   return (
      <Usercontext.Provider value={{loggedInUser:userName, setUserName}}>
         <div className="app">
         <Header/>
         <Outlet/>

      </div>
      </Usercontext.Provider>
      
   )
}

const appRouter=createBrowserRouter([
   {
      path:"/",
      element:<AppLayout/>,
      children:[
         {
            path:"/",
            element:<Body/>,

         },
         {
            path:"/about",
            element:<Suspense fallback={<h1>loading</h1>}><About/></Suspense>
      
         },
         {
            path:"/contact",
            element:<Contact/>,
         },
         {
            path:"/grocery",
            element:<Suspense fallback={<h1>loading</h1>}><Grocery/></Suspense>
         },
         {
            path:"/restaurants/:resId",
            element:<RestaurantMenu/>,

         },

      ],
      errorElement:<Errorpage/>

   },
   
]);
const root=ReactDOM.createRoot(document.getElementById("root"));
 root.render(<RouterProvider router={appRouter}/>);
