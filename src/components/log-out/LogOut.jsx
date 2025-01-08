import {useState} from 'react';
import {useNavigate} from "react-router-dom";
// api
import axios from "axios";
import API_BASE_URL from "../../api.js";
// toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// loading
import BeatLoader from "react-spinners/BeatLoader";
// cookie
import Cookies from 'js-cookie';

function LogOut() {
  const[loading , setLoading] = useState(false);
  const navigate = useNavigate();
  const HandleSubmit = async ()=>{
      setLoading(true)
        try{
            let res= await axios.get(`${API_BASE_URL}customers/logout`,{
              withCredentials: true,
            });
            if(res.status === 200){
              Cookies.remove('userId');
              navigate('/');
            }
        }catch(err){
          console.log(err);
            if (err.response && err.response.status === 401) {
              // إذا كان الـ token غير صالح
              Cookies.remove('userId');
              toast.error('Your session has expired. Please log in again.' , {autoClose: 2000});
              navigate('/'); // إعادة التوجيه لتسجيل الدخول
            } else {
                toast.error('Something went wrong, please try again later' , {autoClose: 2000});
            }
        }finally{
          setLoading(false);
        }
    };
  return (
    <>
        <ToastContainer />
        <button onClick={HandleSubmit} className={`block px-4 py-1 text-lg text-light hover:bg-gray-100  hover:text-white 
                      ${loading ? 'cursor-not-allowed' : 'cursor-pointer'}`} disabled={loading}>
                      {loading ? <BeatLoader color="#fff" /> : "Log Out"}
        </button>
    </>
  )
}

export default LogOut;
