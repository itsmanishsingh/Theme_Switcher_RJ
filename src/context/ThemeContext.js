import React , { createContext } from "react";

// Here in the CreateContext ,we can pass a default value and along with default value we are also passing call back function , its very common
const ThemeContext = React.createContext(["light" , ()=>{}]);


export default ThemeContext;