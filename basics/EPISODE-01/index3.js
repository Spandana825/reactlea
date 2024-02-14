const parent=React.createElement("div",{id:"parent"},
                                React.createElement("div",{id:"child"},
                                React.createElement("h1",{id:"heading"},"hi i am h1 tag")));
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
/* <div parent>
       <div child>
           <h1></h1>
       </div>
   </div>             */



