import React from "react";
import {Navigate} from "react-router-dom";
import Cookies from 'js-cookie';

const ProtectedRouter = ({children})=>{
    const token = Cookies.get('userId');
    return token? children : <Navigate to="/signup" />;
}

export default ProtectedRouter;