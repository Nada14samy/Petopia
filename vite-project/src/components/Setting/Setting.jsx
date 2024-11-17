import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
// loading
import BeatLoader from "react-spinners/BeatLoader";
// api
import axios from "axios";
import API_BASE_URL from "../../api";
// toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// cookie
import Cookies from "js-cookie";

function Setting() {
  let navigate = useNavigate();
  const[isLoading , setIsLoading] = useState(false);
  const [accept , setAccept] = useState(true);
  const [form , setForm]= useState({
    fullName: "",
    address: "",
    city: "",
    phone: "",
  });
  const HandleChange = (e)=>setForm({...form , [e.target.name] : e.target.value});
  console.log(form)
  const HandleSubmit = async (e)=>{
      e.preventDefault();
      setIsLoading(true);
      setAccept(false);
       const filteredForm = Object.fromEntries(
          Object.entries(form).filter(([key, value]) => value.trim() !== "")
        );

      try{
        let res = await axios.patch(`${API_BASE_URL}customers/updateMe` , filteredForm,{
          headers: {
            Authorization: `Bearer ${Cookies.get('token')}`
          }
        });
        console.log(res);
        if(res.status === 200){
          setTimeout(()=>{
            navigate("/profile" , {state : {
              email : res.data.data.user.email , 
              name :res.data.data.user.name,
              photo : res.data.data.user.photo,
            } 
          })
          } , 2000)
        }
      }catch(err){
        console.log(err);
        if(err.status === 404){
            toast.error("please try again later" , {autoClose : 2000});
        }
      }finally{
        setIsLoading(false)
      }
  }
  return (
    <>
    <ToastContainer />
      <form className="w-11/12 h-full flex flex-col items-center justify-center gap-7" onSubmit={HandleSubmit}>
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="name" className="font-medium ">full Name</label>
          <input placeholder='Full Name...' 
          className="border-[1px] border-solid border-[#000] rounded-md py-2 px-3" 
          type="text" name="fullName" 
          id="name" onChange={HandleChange} />
          
        </div>
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="adress" className="font-medium ">Address</label>
          <input placeholder='Address...' 
          className="border-[1px] border-solid border-[#000] rounded-md py-2 px-3" 
          type="text" name="address" id="address"  onChange={HandleChange} />
        </div>
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="city" className="font-medium ">City</label>
          <input placeholder='City...'
           className="border-[1px] border-solid border-[#000] rounded-md py-2 px-3" 
           type="text" name="city" id="city"  onChange={HandleChange}/>
        </div>
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="phoneNumber" className="font-medium ">Phone Number</label>
          <input placeholder='Phone Number...' 
          className="border-[1px] border-solid border-[#000] rounded-md py-2 px-3" 
          type="tell" name="phone" id="phoneNumber"  onChange={HandleChange} />
        </div>
        <div className="w-full bg-primary flex flex-col gap-1 rounded-md">
          <button className={`py-3 text-light text-2xl 
            ${isLoading? "cursor-not-allowed" : "cursor-pointer"}`}
            disabled={isLoading}>
               {isLoading? <BeatLoader color="#fff" /> : "up date"}
            </button>
        </div>
      </form>
    </>
  )
}

export default Setting;
