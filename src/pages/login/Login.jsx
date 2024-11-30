import React ,{useState} from "react";
import {Link , useNavigate} from "react-router-dom";
import bg_image from "../../images/signup/signup-bg.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import API_BASE_URL from "../../api";
import axios from "axios";
import Cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import BeatLoader from "react-spinners/BeatLoader";
import imgSection from "../../images/building-page/building-page.png";
import FlexSection from "../../components/Flex-Section/FlexSection.jsx";

const Login = ()=>{
    const {t} = useTranslation();
    let navigate = useNavigate();
    const [accept , setAccept] = useState(false);
    const [isLoading , setIsLoading]=useState(false);
    const [form , setForm] = useState({
        email : "",
        password : "",
    });
    const [errorInput , setErrorInput]=useState("");

    // handle on change
    const HandleForm = (e)=>setForm({...form , [e.target.name] : e.target.value});

    // render
    const HandleSubmit = async (e) => {
        let flag = true;
        setAccept(true);
        e.preventDefault();
        setIsLoading(true);
        setErrorInput("");
        (form.email === "" || form.password.length < 8 ) ?flag = false:flag = true
      try {
        if(flag){
          let res = await axios.post(
            `${API_BASE_URL}customers/login`,
            {
              "email": form.email,
              "password" : form.password,
            },{
              withCredentials: true,
            }
          );
          console.log(res)
          toast.success(t("Hi, Wellcome Back"), { autoClose: 2000 });
         if(res.status === 200){
            // const token = res.data.token;
            const id = res.data.data.user._id;
            // Cookies.set('jwt', token, { expires: 365, path: '/' });
            Cookies.set("userId" , id , {expires: 365, path: '/'});
            setTimeout(()=>{
              navigate("/");
            },3000);
         }
        }
      } catch (err) {
        if(err.status === 401){
          setErrorInput(t("Oops, Please check your email and password again"));
        }
      }
      finally{
        setIsLoading(false);
      }
    };
    return(
        <>
        <FlexSection img={bg_image}>
            <section className="w-full h-screen flex justify-center items-center"
                 >
                    <ToastContainer />
                <div
                    className="container
                     w-[400px] 
                     max-[405px]:flex 
                     max-[405px]:flex-col
                      max-[405px]:justify-center 
                      max-[405px]:h-screen 
                      h-fit
                      px-7 
                      py-6 
                      shadow-[0px_1px_20px_#dbd6d6] 
                      rounded-[10px]">
                    <div className="mb-8 text-center">
                        <p className="text-[25px]">{t("Hi, Wellcome Back")}</p>
                    </div>
                    <form className="flex flex-col w-full m-auto" onSubmit={HandleSubmit}>
                        {errorInput && <p className="text-[#f00] text-center my-2">{errorInput}</p>}
                        <div className="mb-2">
                            <label className="w-full font-medium" htmlFor="email">{t("Email")}</label>
                            <input 
                            className="w-full rounded-[3px] border-[1px] px-3 py-2 border-[#000] border-solid mt-1" 
                                placeholder={t("Enter your Email")} 
                                type="email" 
                                name="email" 
                                id="email" 
                                value={form.email}
                                onChange={HandleForm}
                                />
                        </div>
                        {form.email === "" && accept && (<p className="text-[red] text-sm">{t("Email is required")}</p>)}
                        <div className="mt-2">
                            <label className="w-full font-medium" htmlFor="password">{t("Password")}</label>
                            <input 
                                className="w-full rounded-[3px] border-[1px] px-3 py-2 border-[#000] border-solid mt-1"
                                placeholder={t("Enter your password")} type="password" name="password" id="password" 
                                onChange={HandleForm}
                                value={form.password}
                                />
                        </div>
                        {form.password.length <= 8 && accept && (<p className="text-[red] text-sm">{t("password must be more then 8 char")}</p>)}
                        <div className="text-end">
                            <Link to="/forgot-password" className="mb-6 text-[16px] underline text-[#00f]">{t("forgot password")}</Link>
                        </div>
                        <button className={`w-full rounded-[3px] mt-4 bg-primary py-2 text-lg text-light
                          ${isLoading ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                          disabled={isLoading} 
                        >
                            {isLoading? <BeatLoader color="#fff" /> : t("Log In")}
                        </button>
                    </form>
                    <div className="mt-8 text-center">
                        <p className="text-[20px]">{t("Don't have an account")}</p>
                        <Link to="/signup" className="text-primary">{t("Sign Up")}</Link>
                    </div>
                </div>
            </section>
            </FlexSection>
        </>
    )
}
export default Login;