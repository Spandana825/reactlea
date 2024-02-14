import React from "react";
import ReactDOM from "react-dom/client";

const parent=React.createElement("div",{id:"parent"},
                                React.createElement("div",{id:"child"},
                                [React.createElement("h1",{id:"heading"},"hi i am  first h1 tag"),
                                React.createElement("h1",{id:"heading"},"hi i am  second h1 tag"),
                                React.createElement("h2",{id:"heading"},"hi i am third h1 tag")]
                                ));
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);