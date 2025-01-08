import React, { useState , useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import API_BASE_URL from "../../api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// component
import StyleProfile from "../Style-Profile/StyleProfile.jsx";
import InputComponent from "../Generics/InputComponent.jsx";
import ButtonComponent from "../Generics/ButtonComponent.jsx";
import { userContext } from "../Me/Me.jsx";
// img
// import img from "../../images/section-cards/user.webp";
// icons
import { FaCogs } from "react-icons/fa";

const UpDataPassword = () => {
  const navigate = useNavigate();
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


    // const {t} = useTranslation();
    const[update , setUpdate] = useState({
      passwordCurrent: "",
      password : "",
      rePassword: ""
    });
    const HandleChange = (e)=> setUpdate({...update , [e.target.name] : e.target.value});
    console.log(update)
    const [accept , setAccept] = useState(false);
    const [isLoading , setIsLoading] = useState(false);
    const [err , setErr] = useState("");
    const [ErrorRes , setErrorRes]=useState("");
    const HandleSubmit = async (e)=>{
         e.preventDefault();
        setAccept(true);
        setIsLoading(true);
        setErr("");
        setErrorRes("");
        let flag = true;
        (update.passwordCurrent.length <= 8 && update.password.length <= 8 && update.rePassword === update.password) ? flag=false : flag=true
        try{
         if(flag){
          let res = await axios.patch(`${API_BASE_URL}customers/updatePassword`,{
            "passwordCurrent": update.passwordCurrent,
            "password": update.password,
            "passwordConfirm": update.rePassword
          },{
            withCredentials: true,
          })
          console.log(res);
          toast.success("Bravo , update password successfull", { autoClose: 2000 });
          if(res.status === 200){
             setTimeout(()=>{
               navigate("/profile");
             },3000);
          }
         }
        }catch(err){
          console.log(err);
          if(err.status === 401 && err.response.data.message === "Your current password is wrong."){
            toast.error("Opps , Your current password is wrong.", { autoClose: 2000 });
              setErrorRes("Your current password is wrong.");
          }
        }finally{
          setIsLoading(false);
        }
    }

  return (
    <>
    <ToastContainer />
      <StyleProfile titleChildren={"Update Password"} 
      logo={<FaCogs />}
      rightChildren={
          <>
              <form className="flex flex-col w-full m-auto" onSubmit={HandleSubmit}>
                  <div className="mb-5">
                      <InputComponent
                          placeholder={"Enter a current password"}
                          label={"Current Password"}
                          htmlFor="passwordCurrent"
                          type="password"
                          name="passwordCurrent"
                          id="passwordCurrent"
                          value={update.passwordCurrent}
                          onChange={HandleChange}
                      />
                      {update.passwordCurrent.length <= 8 && accept && (<p className=" text-[red] text-sm">{"password must be more then 8 char"}</p>)}
                      {Error && (<p className=" text-[red] text-sm">{ErrorRes}</p>)}
                  </div>
                  <div className="mb-5">
                      <InputComponent
                          placeholder={"Enter a new password"}
                          label={"New Password"}
                          htmlFor="password"
                          type="password"
                          name="password"
                          id="password"
                          value={update.password}
                          onChange={HandleChange}
                      />
                      {update.password.length <= 8 && accept && (<p className=" text-[red] text-sm">{"password must be more then 8 char"}</p>)}
                  </div>
                  <div className="mt-2 mb-8">
                      <InputComponent
                          placeholder={"Confirm your new password"}
                          type="password" 
                          name="rePassword" 
                          label={"Confirm Password"} 
                          htmlFor="password" 
                          id="rePassword" 
                          value={update.rePassword} 
                          onChange={HandleChange} 
                      />
                      {update.rePassword !== update.password && accept && (<p className=" text-[red] text-sm">{"password dose not match"}</p>)}
                      {err && (<p className=" text-[red] text-sm">{err}</p>)}
                  </div>
                  <div className="w-[200px]">
                    <ButtonComponent isLoading={isLoading}>Save</ButtonComponent>
                  </div>
              </form>
          </>
      }

      leftChildren={
        <>
          <div className='relative w-[90%] border-[1px] border-solid border-[#aca9a9] rounded-md'>
            <img className='w-full h-[310px]' src={userData.photo} alt="user image" />
          </div>
          <div className='mt-4 mb-3'>
            <p className="text-start text-3xl">{userData.name}</p>
          </div>
        </>
      }
      />

    </>
  )
}

export default UpDataPassword
