import {useEffect, useState} from "react";
import { useNavigate , useLocation } from "react-router-dom";
// api
import axios from "axios";
import API_BASE_URL from "../../api";
import Cookies from 'js-cookie';
// images
import bg_image from "../../images/signup/signup-bg.png";
// toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// translation
import { useTranslation } from "react-i18next";
// components
import FlexSection from "../../components/Flex-Section/FlexSection.jsx";
import InputComponent from "../../components/Generics/InputComponent.jsx";
import ButtonComponent from "../../components/Generics/ButtonComponent.jsx";

const VerifyEmail=()=>{
    const {t} = useTranslation();
    const[otp , setOtp]= useState(new Array(6).fill(""));
    const[message , setMessage]= useState("");
    const[loading , setLoading] = useState(false);
    let navigate = useNavigate();
    const location = useLocation();
    const {email} = location.state || {};
    const [time , setTime] = useState(10);
    useEffect(()=>{
        if(time > 0){
            setTimeout(()=>{
                setTime(time - 1);
            },1000);
        }
    },[time]);

    const HandleChange = (e, index) => {
        let value = e.target.value;
    
        if (/^[0-9]?$/.test(value)) { 
            let newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);
    
            if (value && index < otp.length - 1) {
                document.getElementById(`otp-input-${index + 1}`).focus();
            }
    
            if (!value && index > 0) {
                document.getElementById(`otp-input-${index - 1}`).focus();
            }
        }
    };


    const HandleSubmit = async (e)=>{
        e.preventDefault();
        setMessage("");
        setLoading(true);
       const fullOtp = otp.join('');
        if (fullOtp.length === 6) {
            try {
                    const res = await axios.patch(`${API_BASE_URL}customers/verify-email`, {
                        "token": fullOtp
                    },{
                        withCredentials: true,
                    });
                    toast.success(t("Registration successful"), { autoClose: 2000 });
                    if (res.status === 200) {
                        const id = res.data.data.user._id;
                        Cookies.set("userId" , id , {expires: 365, path: '/'});
                        setTimeout(() => {
                            navigate("/" );
                        }, 3000);
                    }
            } catch(err) {
                console.log(err);
                if (err) {
                    if (err.status === 400 && err.response.data.message === "Token is invalid or has expired") {
                        setMessage(t("otp is invalid or has expired"));
                    }else {
                    toast.error(t("Something went wrong, please try again later"), { autoClose: 2000 });
                    }
                }
            }
            finally {
                setLoading(false);
            }
        }else{
            setMessage(t("please , enter a valid 6-digit OTP"));
            setLoading(false);
        }
    }
    return(
        <>
        <FlexSection img={bg_image} classSection={"h-screen"} classDiv={"max-[335px]:px-[3px]"}>
            <ToastContainer />
                    <div className="my-5 w-full flex flex-col items-center">
                        <h3 className="text-3xl">
                            {t("Email Verification")}
                        </h3>
                        <p className="text-lg text-[gray] text-center max-[335px]:text-[13px]">
                            {t("We have sent a code to your email")} <span> {email} </span>
                        </p>
                    </div>
                    <form className="my-2 w-full " onSubmit={HandleSubmit}>
                        <div className="mb-2 flex justify-center gap-2 w-full">
                            {otp.map((value , index)=>(
                                <InputComponent 
                                key={index} 
                                id={`otp-input-${index}`}  
                                placeholder={0} 
                                type="text" 
                                value={value} 
                                className="max-[335px]:w-[30px] w-[45px] h-[50px] border-solid border-[1px] border-[gray] rounded-[10px] text-center" 
                                maxLength={1} 
                                onChange={(e)=>{HandleChange(e, index)}} 
                                />
                            ))}
                            
                        </div>
                        <p className="text-[gray] mb-2 text-2xl text-center">
                            {
                                time === 0 ?
                                (<>time is finished</>)
                                :
                                (
                                    <>
                                    {<>00:{time === 10 ? time : `0${time}`}</>}
                                    </>
                                )
                            }
                        </p>
                        {message && (<p className="text-[red] mb-4 text-center">{message}</p>)}
                        <div className="flex flex-col items-center gap-2">
                            <ButtonComponent 
                            className={`bg-primary`}
                                isLoading={loading}
                            >
                                {t("Verify")}
                            </ButtonComponent>
                        </div>
                    </form>
                
            </FlexSection>
        </>
    )
}

export default VerifyEmail;