import { Link , useNavigate } from "react-router-dom";
import axios from "axios";
import API_BASE_URL from "../../api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import bg_image from "../../images/signup/signup-bg.png";
import { useTranslation } from "react-i18next";
import BeatLoader from "react-spinners/BeatLoader";
import imgSection from "../../images/building-page/building-page.png";
import FlexSection from "../../components/Flex-Section/FlexSection.jsx";

const SignUp = () => {
  const {t} = useTranslation();
  let navigate = useNavigate();
  const[isLoading , setIsLoading]= useState(false);
  const [accept , setAccept] = useState(false);
  const [form , setForm] = useState({
    fullName : "",
    email : "",
    password : "",
    rePassword : "",
    city: "",
    address: "",
    phone: ""
  });
  
  const [errorInput , setErrorInput] = useState({
      errorEmail : "",
      errorName : "",
  });
 
  // handle on change form
  const handleForm = (e)=> setForm({...form , [e.target.name] : e.target.value});
  const HandleSubmit = async (e) => {
    e.preventDefault();
    let flag = true;
    setAccept(true);
     setIsLoading(true);
    setErrorInput({...errorInput , errorEmail : "" , errorName : "" });
    (form.fullName === "" || form.email === "" || form.email.indexOf("@gmail.com") === -1 || form.password.length < 8 || form.rePassword !== form.password)?flag = false:flag = true;
    try {
      if(flag){
       await axios.post(
          `${API_BASE_URL}customers/signup`,
          {
            "name": form.fullName,
            "email": form.email,
            "password" : form.password,
            "passwordConfirm": form.rePassword,
            "city": form.city,
            "address": form.address,
            "phone": form.phone
          }
        );
        setTimeout(() => {
          navigate("/verifyEmail" );
        }, 2000);
      }
    } catch (err) {
      console.log(err)
      if (err.response && err.response.data.error.statusCode === 500) {
        if (err) {
          if (err.response.data.message === "token is not defined") {
            setErrorInput({...errorInput , errorEmail: t("This email is already registered. Please use a different email") })
          }
          if(err.response.data.stack.includes("index: name_1")){
            setErrorInput({...errorInput , errorName : t("This user name has been used. Please use a different name")})
          }
        }
      } else {
        toast.error( t("Something went wrong, please try again later"), { autoClose: 2000 });
      }
    }
    finally{
      setIsLoading(false);
    }
  };

  return (
    <>
    <FlexSection img={imgSection} >
      <section className="w-full h-fit flex justify-center items-center bg-center bg-cover bg-no-repeat max-[600px]:bg-[70%]"
        style={{backgroundImage: `url(${bg_image})`}}>
        <ToastContainer />
        <div
          className="container  w-[400px] max-[405px]:flex max-[405px]:flex-col max-[405px]:justify-center max-[405px]:h-screen  h-fit px-7 py-6 shadow-[0px_1px_20px_#dbd6d6] rounded-[10px]">
          <div className="my-2 text-center">
            <p className="mb-6 text-[35px]">{t("Sign Up")}</p>
          </div>
          <form className="flex flex-col w-full m-auto" onSubmit={HandleSubmit}>
            <div className="mb-2">
              <label className="w-full font-medium" htmlFor="name">{t("Name")}</label>
              <input className="w-full rounded-[3px] border-[1px] px-3 py-2 border-[gray] border-solid mt-1"
                placeholder={t("Enter your Name")} 
                type="text" name="fullName" id="name" autoFocus
                onChange={handleForm} />
              {errorInput.errorName && (<p className=" text-[red] text-sm">{errorInput.errorName}</p>)}
              {form.fullName === "" && accept && (<p className=" text-[red] text-sm">{t("Name is required")}</p>)}
            </div>
            <div className="mb-2">
              <label className="w-full font-medium" htmlFor="email">{t("Email")}</label>
              <input className="w-full rounded-[3px] border-[1px] px-3 py-2 border-[gray] border-solid mt-1"
                placeholder={t("Enter your Email")}
                type="email" name="email" id="email"
                onChange={handleForm} />
              {errorInput.errorEmail  && 
              (<p className=" text-[red] text-sm">{errorInput.errorEmail}</p>)}
              {form.email === "" && form.email.indexOf("@gmail.com") === -1  && accept &&
              (<p className=" text-[red] text-sm">{t("Email is required")}</p>)}
            </div>
            <div className="mt-2">
              <label className="w-full font-medium" htmlFor="password">{t("Password")}</label>
              <input className="w-full rounded-[3px] border-[1px] px-3 py-2 border-[gray] border-solid mt-1"
                placeholder={t("Enter your password")} type="password" name="password" id="password"
                onChange={handleForm} />
              {form.password.length <= 8  && accept && 
              (<p className=" text-[red] text-sm">{t("password must be more then 8 char")}</p>)}
            </div>
            <div className="mt-2">
              <label className="w-full font-medium" htmlFor="rePassword">{t("Confirm Password")}</label>
              <input className="w-full rounded-[3px] border-[1px] px-3 py-2 border-[gray] border-solid mt-1"
                placeholder={t("Confirm Password")} type="password" name="rePassword" id="rePassword" 
                onChange={handleForm} />
              {form.rePassword !== form.password && accept && (<p className=" text-[red] text-sm">{t("password dose not match")}</p>)}
            </div>
            <div className="mt-2">
              <label className="w-full font-medium" htmlFor="phone">phone</label>
              <input className="w-full rounded-[3px] border-[1px] px-3 py-2 border-[gray] border-solid mt-1"
                placeholder="phone" type="tell" name="phone" id="phone" 
                onChange={handleForm} />
              {/* {form.rePassword !== form.password && accept && (<p className=" text-[red] text-sm">{t("password dose not match")}</p>)} */}
            </div>
            <div className="mt-2">
              <label className="w-full font-medium" htmlFor="city">city</label>
              <input className="w-full rounded-[3px] border-[1px] px-3 py-2 border-[gray] border-solid mt-1"
                placeholder="city" type="text" name="city" id="city" 
                onChange={handleForm} />
              {/* {form.rePassword !== form.password && accept && (<p className=" text-[red] text-sm">{t("password dose not match")}</p>)} */}
            </div>
            <div className="mt-2">
              <label className="w-full font-medium" htmlFor="address">address</label>
              <input className="w-full rounded-[3px] border-[1px] px-3 py-2 border-[gray] border-solid mt-1"
                placeholder="address" type="text" name="address" id="address" 
                onChange={handleForm} />
              {/* {form.rePassword !== form.password && accept && (<p className=" text-[red] text-sm">{t("password dose not match")}</p>)} */}
            </div>
            <button 
            className={`w-full rounded-[3px] mt-4 bg-[#59bbda] py-2 text-lg text-white 
              ${isLoading ? 'cursor-not-allowed' : 'cursor-pointer'}`}
            disabled={isLoading} 
            >
              {isLoading? <BeatLoader color="#fff" /> : t("Sign Up")}
            </button>
          </form>
          <div className="flex flex-col justify-center items-center mt-2">
            <p className="text-lg">{t("Already have an account")}</p>
            <Link to="/login" className="font-semibold text-xl text-black">
              {t("Log In")}
            </Link>
          </div>
        </div>
      </section>
      </FlexSection>
    </>
  );
};
export default SignUp;