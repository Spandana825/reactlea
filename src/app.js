import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/about";
import Contact from "./components/contact";
import Errorpage from "./components/errorpage";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter,RouterProvider, Outlet } from "react-router-dom";
//header
//--logo
//--nav items

//body
//--search
//--restaurant container
//------resto cards
//--------img
//--------name,start rating,cuisune

const AppLayout=()=>{
   return (
      <div className="app">
         <Header/>
         <Outlet/>

      </div>
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
            element:<About/>,
      
         },
         {
            path:"/contact",
            element:<Contact/>,
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
