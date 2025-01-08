import React,{useState} from "react";
import { Link , useNavigate } from "react-router-dom";
import bg_image from "../../images/signup/signup-bg.png";
import { FaArrowLeft } from "react-icons/fa";
import axios from "axios";
import API_BASE_URL from "../../api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";
import BeatLoader from "react-spinners/BeatLoader";
import imgSection from "../../images/building-page/building-page.png";
import FlexSection from "../../components/Flex-Section/FlexSection.jsx";

const ForgetPassword = ()=>{
    const {t} = useTranslation();
    const[email , setEmail]= useState('');
    const [accept , setAccept] = useState(false);
    const [isLoading , setIsLoading]=useState(false);
    const [errorEmail , setErrorEmail] = useState("")
    let navigate = useNavigate();
    const handleSubmit = async (e)=>{
        let flag = true;
        setAccept(true);
        e.preventDefault();
        email === '' ? flag=false : flag=true ;
        setIsLoading(true);
        setErrorEmail("");
        try{
            if(flag){
                const res = await axios.post(`${API_BASE_URL}customers/forgotPassword` , {"email" : email});
                toast.success(t("checkYourEmail"), { autoClose: 2000 });
                if(res.status === 200){
                    setTimeout(()=>{
                        navigate("/sent-email" , {state : { email }});
                    }, 3000);
                }
            }
        }catch(err){
            if(err.message === "Network Error"){
                toast.error(t("Something went wrong, please try again later"), { autoClose: 2000 });
            }
            if(err.response.data.message === "There is no user with email address."){
                setErrorEmail(t("There is no user with email address"));
            }else{
                navigate("/not-found");
            }
        }finally{
            setIsLoading(false);
        }
    };
    return(
        <>
        <FlexSection img={imgSection}>
            <section 
            className="w-full h-screen flex justify-center items-center bg-center bg-cover bg-no-repeat max-[600px]:bg-[70%]" style={{backgroundImage: `url(${bg_image})`}} >
                
                <ToastContainer />
                <div className="container w-[400px] max-[405px]:flex max-[405px]:flex-col max-[405px]:justify-center max-[405px]:h-screen  h-fit px-7 py-6 shadow-[0px_1px_20px_#dbd6d6] rounded-[10px]">
                    <div className="link mb-5">
                        <Link to="/login" className="text-xl flex items-center gap-1"> <FaArrowLeft /> {t("Back to login")} </Link>
                    </div>
                    <div className="my-7">
                        <h3 className="text-2xl mb-5">{t("Forgot your password")}</h3>
                        <p className="mb-5 text-[gray]">{t("Don't worry, happens to all of us, Enter your email below to recover your password")}</p>
                    </div>
                    <form className="flex flex-col w-full m-auto" onSubmit={handleSubmit}>
                        <label className="w-full mb-2" htmlFor="email">{t("Email")}</label>
                        <input
                            className="w-full border-[1px] px-3 py-2 border-[gray] border-solid" 
                         placeholder={t("Enter your Email")}
                         type="email" 
                         name="email" 
                         id="email" 
                         value={email} 
                         onChange={(e)=>setEmail(e.target.value)} 
                         />
                        {email === '' && email.indexOf("@gmail.com") === -1 && accept && (<p className=" text-[red] text-lg">{t("Email is required")}</p>)}
                        {errorEmail && (<p className=" text-[red] text-lg">{errorEmail}</p>)}
                        <button className={`w-full mt-4 bg-primary py-2 text-xl text-light ${isLoading ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                        disabled={isLoading} >
                            {isLoading? <BeatLoader color="#fff" /> : t("Submit")}
                        </button>
                    </form>
                    <div >
                        <p className="my-5 text-center">{t("remeber password")} <Link className="font-medium" to="/login">{t("Log In")}</Link></p>
                    </div>
                </div>
            </section>
            </FlexSection>
        </>
    )
}

export default ForgetPassword;