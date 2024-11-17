import React, { useState, useEffect } from 'react';
// api
import Cookies from 'js-cookie';
import API_BASE_URL from '../../api';
import axios from "axios";


function Me() {
    let token = Cookies.get("token");
    console.log(token)
    useEffect(()=>{
        let fetchData = async ()=>{
           if(token){
                try{
                    let res = await axios.get(`${API_BASE_URL}customers/me`,{
                        headers : {
                            Authorization : `Bearer ${token}`
                        }
                    })
                    console.log(res)
                }
                catch(err){
                    console.log(err);
               }
               finally{
                console.log("finally finish");
               }
           }else{
            console.log("no token");
           }
        }
        fetchData();
    } , [token]);
};

export default Me;
