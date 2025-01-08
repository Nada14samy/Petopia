import React , {useState , useContext} from 'react';
import { useNavigate , Link } from "react-router-dom";
// loading
import BeatLoader from "react-spinners/BeatLoader";
// api
import axios from "axios";
import API_BASE_URL from "../../api";
// toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// img
import img from "../../images/section-cards/user.webp";
// components
import StyleProfile from "../Style-Profile/StyleProfile.jsx";
import { userContext } from "../Me/Me.jsx";
// icon
import {FaPaintBrush} from "react-icons/fa";

const Edit = () => {

  const context = useContext(userContext);

  if (!context) {
    console.error("userContext is undefined. Ensure the provider is wrapping the component.");
  }
  const { userData } = context;
  console.log(userData);

  if (!userData) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <p>Loading user data...</p>
      </div>
    );
  }

     let navigate = useNavigate();
  const[isLoading , setIsLoading] = useState(false);
//   const [accept , setAccept] = useState(true);
  const [form , setForm]= useState({
    fullName: "",
    address: "",
    city: "",
    phone: "",
  });

    // handle change form
  const HandleChange = (e)=>setForm({...form , [e.target.name] : e.target.value});
  console.log(form)
  const HandleSubmit = async (e)=>{
      
       const filteredForm = Object.fromEntries(
          Object.entries(form).filter(([key, value]) => value.trim() !== "")
        );

      try{
        let res = await axios.patch(`${API_BASE_URL}customers/updateMe` , filteredForm,{
          withCredentials: true,
        });
        if(res.status === 200){
          setTimeout(()=>{
            navigate("/profile");
          } , 2000);
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
       <StyleProfile titleChildren={"Edit Profile"} 
      leftChildren={
        <>
        <div className='relative w-[90%] border-[1px] border-solid border-[#aca9a9] rounded-md'>
          <img className='w-full h-[310px]' src={userData.photo} alt="user image" />
          <div className="absolute bottom-2 right-2 w-[50px] h-[50px] text-light text-2xl rounded-full flex justify-center items-center bg-primary"><FaPaintBrush /></div>
        </div>
        <div className='mt-5 mb-4'>
          <p className="text-start text-3xl">{userData.name}</p>
        </div>
      </>
      }
      rightChildren={
        <div className='w-full h-fit py-3 flex-col gap-5'>
           <div className="w-full flex justify-end">
              <Link to="/profile" className="w-fit h-fit bg-primary mb-5 text-light flex justify-center items-center gap-2 py-2 px-5 rounded-md">
                <span className="text-xl">Back</span>
              </Link>
           </div>
          <form className="w-full h-full flex  items-center justify-between" onSubmit={HandleSubmit}>
            <div className="w-full flex flex-wrap  gap-12">
              <div className="w-[45%] flex flex-col gap-1">
                <label htmlFor="name" className="font-medium ">full Name</label>
                <input placeholder='Full Name...'
                  className="border-[1px] border-solid border-[#000] rounded-md py-2 px-3"
                  type="text" name="fullName"
                  id="name" onChange={HandleChange} />
              </div>
              <div className="w-[45%] flex flex-col gap-1">
                <label htmlFor="adress" className="font-medium ">Address</label>
                <input placeholder='Address...'
                  className="border-[1px] border-solid border-[#000] rounded-md py-2 px-3"
                  type="text" name="address" id="address" onChange={HandleChange} />
              </div>
              <div className="w-[45%] flex flex-col gap-1">
                <label htmlFor="city" className="font-medium ">City</label>
                <input placeholder='City...'
                  className="border-[1px] border-solid border-[#000] rounded-md py-2 px-3"
                  type="text" name="city" id="city" onChange={HandleChange} />
              </div>
              <div className="w-[45%] flex flex-col gap-1">
                <label htmlFor="phoneNumber" className="font-medium ">Phone Number</label>
                <input placeholder='Phone Number...'
                  className="border-[1px] border-solid border-[#000] rounded-md py-2 px-3"
                  type="tell" name="phone" id="phoneNumber" onChange={HandleChange} />
              </div>
              <div className="w-[200px] bg-primary flex flex-col gap-1 rounded-md">
                <button className={`py-3 text-light text-2xl 
            ${isLoading ? "cursor-not-allowed" : "cursor-pointer"}`}
                  disabled={isLoading}>
                  {isLoading ? <BeatLoader color="#fff" /> : "up date"}
                </button>
              </div>
            </div>

          </form>
         
        </div>
      }
      />
    </>
  )
}

export default Edit;
