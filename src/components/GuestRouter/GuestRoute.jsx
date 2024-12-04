import React from "react";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
const GuestRouter =(props)=>{
   let token = Cookies.get('userId');
   return token ? <Navigate to='/not-found' /> : props.children; 
}
export default GuestRouter;