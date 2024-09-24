import React , {useState} from "react";
import Button from "../../components/generic/Button";
import axios from "axios";
import API_BASE_URL from "../../api";
import bg_image from "../../images/signup/signup-bg.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
const VerifyEmail=()=>{
    const[otp , setOtp]= useState("");
    const[message , setMessage]= useState("");
    const [accept , setAccept] = useState(false);
    const[loading , setLoading] = useState(false);
    let navigate = useNavigate();
    const HandleSubmit = async (e)=>{
        let flag = true;
        e.preventDefault();
        setAccept(true);
        setMessage("");
        if(otp.length === 5 ){
            flag = false;
        }else{
            flag = true;
        }
        try{
            if(flag){
                const res = await axios.patch(`${API_BASE_URL}customers/verify-email` , { 
                    "token" : otp
                }); 
                toast.success("Registration successful!", { autoClose: 2000 });
                if (res.status === 200) {
                    const token = res.data.token;
                    Cookies.set('token', token, { expires: 365 , path: '/' });
                    setTimeout(() => {
                        navigate("/");
                    }, 3000);
                }
            }
        }catch(err){
            if(err){
                if(err.response && err.response.data.error.statusCode === 400){
                    setMessage("otp is invalid or has expired");
                }
            }else {
                toast.error("Something went wrong, please try again later.", { autoClose: 2000 });
            }
        }
        finally{
            setLoading(false);
        }
    }
    return(
        <>
            <div className="w-full h-screen flex justify-center items-center bg-cover bg-no-repeat bg-center" style={{backgroundImage: `url(${bg_image})`}}>
                <ToastContainer />
                <div className="container shadow-lg w-[380px] p-5 rounded-md">
                    <div className="text-center my-4">
                        <h3 className="text-3xl my-4">
                            Email Verification
                        </h3>
                        <p className="text-xs text-opacity-100">
                            We have sent a code to your email
                        </p>
                    </div>
                    <form onSubmit={HandleSubmit} className="flex flex-col justify-center items-center w-full my-3">
                        <input type="number" placeholder="Verify Account..." id="otp" value={otp} className="w-full my-2 px-3 py-2" onChange={(e)=> setOtp(e.target.value)}/>
                        {otp.length === 5 && accept && (<p className="error text-sm text-start">Otp must be then 6 char</p>)}
                        <Button type="submit" isLoading={loading}>
                            <span>Verify Account</span>
                        </Button>
                        <p>{message}</p>
                    </form>
                    <div className="text-center">
                        <p>Didn't recieve code? <span className="text-darkBlue">Resend OTP</span></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VerifyEmail;