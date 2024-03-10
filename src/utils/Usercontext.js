import React from "react";
import { createContext } from "react";
const Usercontext= createContext({
    loggedInUser:'default user',
});
export default Usercontext;  