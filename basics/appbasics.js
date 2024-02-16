import React from "react";
import ReactDOM from "react-dom/client";




//REACT ELEMENT 

// const parent=React.createElement("div",{id:"parent"},
//                                 React.createElement("div",{id:"child"},
//                                 [React.createElement("h1",{id:"heading"},"hi i am  first h1 tag"),
//                                 React.createElement("h1",{id:"heading"},"hi i am  second h1 tag"),
//                                 React.createElement("h2",{id:"heading"},"hi i am third h1 tag")]
//                                 ));
//-----------react.creaele=>js object=>html ele wen rendered
//1...
   // const jsxheading=<h1 className="heading">hello namste</h1>;
//2...
   const jsxheading=(
   <h1 className="heading">hello i am react element</h1>
   );
//-----------jsx=>react.createle by babel=>js obejct=>html ele wen rendered
// const jsxheading=(<h1 className="heading">hello namste</h1>);
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxheading);

//REACT FUNCTIONAL COMPONENT 

// 1...const Heading1=()=>{
//        return <h1>this is functional commponent</h1>
//      };
//2...
const Title=()=> <h1>hello i  first am functional component</h1>

//3..
 //component composition
const Heading=()=>(
    <div>
    {jsxheading}
    <Title/>
     <h1>hi this is second functional component</h1>
     </div>
)
const root=ReactDOM.createRoot(document.getElementById("root"));
 root.render(<Heading/>);
