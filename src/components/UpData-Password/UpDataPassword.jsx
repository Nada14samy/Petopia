import React, { useState } from "react";
// import axios from "axios";
// import { useParams , useNavigate } from "react-router-dom";
// import API_BASE_URL from "../../api";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// component
import StyleProfile from "../Style-Profile/StyleProfile.jsx";
import InputComponent from "../Generics/InputComponent.jsx";
import ButtonComponent from "../Generics/ButtonComponent.jsx";
// img
import img from "../../images/section-cards/user.webp";

const UpDataPassword = () => {
    // const {t} = useTranslation();
    const [password , setPassword] = useState("");
    const [rePassword , setRePassword] = useState("");
    const [accept , setAccept] = useState(false);
    const [isLoading , setIsLoading] = useState(false);
    const [err , setErr] = useState("");
    console.log(password);
    console.log(rePassword);
    const HandleSubmit = async ()=>{
        setAccept(true);
        setIsLoading(true);
        setErr("");
    }

  return (
    <>
      <StyleProfile titleChildren={"Update Password"} 
      rightChildren={
          <>
              <form className="flex flex-col w-full m-auto">
                  <div className="mb-5">
                      {/* <label className="w-full font-medium" htmlFor="password">{t("New password")}</label> */}
                      <InputComponent
                          placeholder={"Enter a new password"}
                          label={"New Password"}
                          htmlFor="password"
                          type="password"
                          name="password"
                          id="password"
                          value={password}
                          onChange={e => setPassword(e.target.value)}
                      />
                      {password.length <= 8 && accept && (<p className=" text-[red] text-sm">{"password must be more then 8 char"}</p>)}
                  </div>
                  <div className="mt-2 mb-10">
                      {/* <label className="w-full font-medium" htmlFor="rePassword">{"Confirm Password"}</label> */}
                      <InputComponent
                          placeholder={"Confirm your new password"}
                          type="password" 
                          name="rePassword" 
                          label={"Confirm Password"} 
                          htmlFor="password" 
                          id="rePassword" 
                          value={rePassword} 
                          onChange={e => setRePassword(e.target.value)} 
                      />
                      {rePassword !== password && accept && (<p className=" text-[red] text-sm">{"password dose not match"}</p>)}
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
            <img className='w-full' src={img} alt="user image" />
          </div>
          <div>
            {/* <p className="text-start text-3xl">{userData.name}</p> */}
          </div>
        </>
      }
      />

    </>
  )
}

export default UpDataPassword
