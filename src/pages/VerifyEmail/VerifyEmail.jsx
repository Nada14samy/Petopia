import {useState} from "react";
import axios from "axios";
import API_BASE_URL from "../../api";
import bg_image from "../../images/signup/signup-bg.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from 'js-cookie';
import { useNavigate , useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import BeatLoader from "react-spinners/BeatLoader";
import imgSection from "../../images/building-page/building-page.png";
import FlexSection from "../../components/Flex-Section/FlexSection.jsx";


const VerifyEmail=()=>{
    const {t} = useTranslation();
    const[otp , setOtp]= useState(new Array(6).fill(""));
    const[message , setMessage]= useState("");
    const[loading , setLoading] = useState(false);
    let navigate = useNavigate();
   
    const HandleChange = (e  , index)=>{
        let value = e.target.value;
        if(/^[0-9]$/.test(value)){
            let newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);
            if(value && index < 5){
                document.getElementById(`otp-input-${index + 1}`).focus();
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
                        Cookies.set("userId" , id , {expires: 365, sameSite: 'None' , path: '/'});
                        setTimeout(() => {
                            navigate("/" );
                        }, 3000);
                    }
            } catch (err) {
                if (err) {
                    if (err.response && err.response.data.error.statusCode === 400) {
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
        <FlexSection img={imgSection} >
            <section className="w-full h-screen flex justify-center items-center bg-center bg-cover bg-no-repeat max-[600px]:bg-[70%]" style={{ backgroundImage: `url(${bg_image})` }}>
                <ToastContainer />
                <div className="w-[420px] flex flex-col items-center max-[335px]:w-full text-center max-[405px]:justify-center max-[405px]:h-screen  h-fit px-7 py-6 shadow-[0px_1px_20px_#dbd6d6] rounded-[10px]">
                    <div className="my-5 w-full">
                        <h3 className="text-3xl">
                            {t("Email Verification")}
                        </h3>
                        <p className="text-lg text-[gray]">
                            {t("We have sent a code to your email")} <span> example@gmail.com </span>
                        </p>
                    </div>
                    <form className="my-2 w-full " onSubmit={HandleSubmit}>
                        <div className="mb-2 flex justify-center gap-2 w-full">
                            {otp.map((value , index)=>(
                                <input 
                                key={index} 
                                id={`otp-input-${index}`}  
                                placeholder={0} 
                                type="text" 
                                value={value} 
                                className="max-[335px]:w-[30px] input w-[40px] h-[50px] border-solid border-[1px] border-[gray] rounded-[10px] text-center" 
                                maxLength={1} 
                                onChange={(e)=>{HandleChange(e, index)}} 
                                />
                            ))}
                            
                        </div>
                        <p className="text-[red] mb-4">{message}</p>
                        <div className="flex flex-col items-center gap-2">
                            <button 
                            className={`text-[20px] bg-[#59bbda] w-full py-1 rounded-[5px] text-[white] hover:border-[#59bbda] hover:border-solid hover:border-[2px] hover:text-[#59bbda] hover:bg-[white]
                            ${loading ? 'cursor-not-allowed' : 'cursor-pointer'} `}
                            disabled={loading}
                            >
                                {loading? <BeatLoader color="#fff" /> : t("Verify")}
                            </button>
                            
                        </div>
                    </form>
                </div>
            </section>
            </FlexSection>
        </>
    )
}

export default VerifyEmail;