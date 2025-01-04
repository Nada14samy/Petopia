import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// api
import API_BASE_URL from "../../api.js";
import axios from 'axios';
import Cookies from "js-cookie";
// loading 
import BeatLoader from "react-spinners/BeatLoader.js";
// toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const DeletePet = ({ id }) => {
    let navigate = useNavigate();
    const [isLoading , setIsLoading] = useState(false);
    console.log(id);
    const HandleDelete = async ()=>{
        setIsLoading(true);
        try{
            let res = await axios.delete(`${API_BASE_URL}pets/${id}`,{
                withCredentials: true,
            });
            console.log(res);
            if(res.status === 204 && res.data === ""){
                // navigate("profile/category");
                toast.success("Delete successfull" , {autoClose : 2000});
            }
        }catch(err){
            console.log(err);
            if(err.status === 401 && err.response.data.message === "You are not logged in! Please log in to get access."){
                navigate("/login");
                Cookies.remove("userId");
            }
        }finally{
            setIsLoading(false);
        }
    }
  return (
      <>
      <ToastContainer />
          <button onClick={HandleDelete} disabled={isLoading}
              className={`${isLoading ? "cursor-not-allowed" : "cursor-pointer"} text-center py-1 px-2 rounded-md bg-err text-light text-lg`}>
              {isLoading ? <BeatLoader /> : "Delete"}
          </button>
      </>
  )
}

export default DeletePet;
