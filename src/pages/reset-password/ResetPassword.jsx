import React, { useState } from "react";
import bg_image from "../../images/signup/signup-bg.png";
import axios from "axios";
import { useParams , useNavigate } from "react-router-dom";
import API_BASE_URL from "../../api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";
import BeatLoader from "react-spinners/BeatLoader";
import imgSection from "../../images/building-page/building-page.png";
import FlexSection from "../../components/Flex-Section/FlexSection.jsx";

const ResetPassword = () =>{
    const {t} = useTranslation();
    const [password , setPassword] = useState("");
    const [rePassword , setRePassword] = useState("");
    const [accept , setAccept] = useState(false);
    const [isLoading , setIsLoading] = useState(false);
    const [err , setErr] = useState("");
    const {token} = useParams();
    const navigate = useNavigate();
    const HandleSubmit = async (e)=>{
        e.preventDefault();
        let flag = true;
        setAccept(true);
        setIsLoading(true);
        password.length <= 8 || rePassword !== password ? flag = false : flag = true;
        try{
            if(flag){
                const res = await axios.patch(`${API_BASE_URL}customers/resetPassword/${token}`, 
                {
                    "password" : password,
                    "passwordConfirm" : rePassword
                },{
                    withCredentials: true,
                });
                toast.success( t("Password changed successfully"), { autoClose: 2000 });
                if(res.status === 200){
                    setTimeout(() => {
                        navigate("/login");
                    }, 3000);
                }
            }
        }catch(err){
            if(err.response.data.message === "Token is invalid or has expired"){
                setErr(t("Token is invalid or has expired"));
            }
            if(err.response.status === 404){
                navigate("/not-found");
            }
        }finally{
            setIsLoading(false);
        }
    }

    return(
        <>
        <FlexSection img={imgSection}>
            <section className="w-full h-screen flex justify-center items-center bg-center bg-cover bg-no-repeat max-[600px]:bg-[70%]" style={{ backgroundImage: `url(${bg_image})` }} >
                <ToastContainer />
                <div className="container w-[400px] max-[405px]:flex max-[405px]:flex-col max-[405px]:justify-center max-[405px]:h-screen  h-fit px-7 py-6 shadow-[0px_1px_20px_#dbd6d6] rounded-[10px]">
                    <div className="my-2 text-center">
                        <h3 className="text-2xl mb-2 text-[#59bbda] font-medium">{t("Petopia")}</h3>
                        <p className="mb-6 text-[25px]">{t("Reset your password")}</p>
                    </div>
                    <form className="flex flex-col w-full m-auto" onSubmit={HandleSubmit}>
                        <div className="mb-2">
                            <label className="w-full font-medium" htmlFor="password">{t("New password")}</label>
                            <input 
                            className="w-full rounded-[3px] border-[1px] px-3 py-2 border-[#000] border-solid mt-1" 
                            placeholder={t("Enter a new password")} 
                            type="password" 
                            name="password" 
                            id="password" 
                            value={password} 
                            onChange={e=>setPassword(e.target.value)}
                            />
                            {password.length <= 8 && accept && ( <p className=" text-[red] text-sm">{t("password must be more then 8 char")}</p>)}
                        </div>
                        <div className="mt-2">
                            <label className="w-full font-medium" htmlFor="rePassword">{t("Confirm Password")}</label>
                            <input 
                            className="w-full rounded-[3px] border-[1px] px-3 py-2 border-[#000] border-solid mt-1" 
                            placeholder={t("Confirm your new password")} 
                            type="password" 
                            name="rePassword" 
                            id="rePassword" 
                            value={rePassword} 
                            onChange={e=>setRePassword(e.target.value)}
                            />
                            {rePassword !== password && accept && (<p className=" text-[red] text-sm">{t("password dose not match")}</p> )}
                            {err && (<p className=" text-[red] text-sm">{err}</p> )}
                        </div>
                        <button 
                        className={`w-full rounded-[3px] mt-4 bg-[#59bbda] py-2 text-lg text-white ${isLoading ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                        disabled={isLoading} 
                        >
                            {isLoading? <BeatLoader color="#fff" /> : t("Reset Password")}
                        </button>
                    </form>
                </div>
            </section>
            </FlexSection>
        </>
    )
}

export default ResetPassword;