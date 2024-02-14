//if you want o create siblings like 2 h1 tags inside child div ,we shld use array
const parent=React.createElement("div",{id:"parent"},
                                React.createElement("div",{id:"child"},
                                [React.createElement("h1",{id:"heading"},"hi i am h1 tag"),
                                React.createElement("h1",{id:"heading"},"hi i am h1 tag")]
                                ));
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
/* <div parent>
       <div child>
           <h1></h1>
           <h1></h1>
       </div>
   </div>             */

//    const parent=React.createElement("div",{id:"parent"},[ React.createElement("div",{id:"child"},
//                                                        [React.createElement("h1",{id:"heading"},"hi i am h1 tag"),
//                                                        React.createElement("h1",{id:"heading"},"hi i am h1 tag")], 
//                                                        React.createElement("div",{id:"child"},
//                                                        [React.createElement("h1",{id:"heading"},"hi i am h1 tag"),
//                                                        React.createElement("h1",{id:"heading"},"hi i am h1 tag")]
//                                                        )
//    )])
                               
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);
            
                  //=========================== this code will be created as 
                  /* <div parent>
                       <div child>
                            <h1></h1>
                            <h1></h1>
                       </div>
                       <div child>
                            <h1></h1>
                            <h1></h1>
                       </div>
                     </div>             */