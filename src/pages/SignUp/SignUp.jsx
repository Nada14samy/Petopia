import { useState } from "react";
import { Link , useNavigate } from "react-router-dom";
// api
import axios from "axios";
import API_BASE_URL from "../../api";
// toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// translation
import { useTranslation } from "react-i18next";
// components
import FlexSection from "../../components/Flex-Section/FlexSection.jsx";
import ButtonComponent from "../../components/Generics/ButtonComponent.jsx";
import InputComponent from "../../components/Generics/InputComponent.jsx";
// image
import bg_image from "../../images/signup/signup-bg.png";

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
      errorPhone : "",
      errorCity : "",
      errorAddress : ""
  });
 
  // handle on change form
  const handleForm = (e)=> setForm({...form , [e.target.name] : e.target.value});
  const HandleSubmit = async (e) => {
    e.preventDefault();
    let flag = true;
    setAccept(true);
     setIsLoading(true);
    setErrorInput({...errorInput , errorEmail : "" , errorName : "" });
    (form.fullName === "" || form.email === "" ||
       form.email.indexOf("@gmail.com") === -1 ||
        form.password.length < 8 || form.rePassword !== form.password
      || form.address === "" || form.city === "" || form.phone.length < 11 
      )?flag = false:flag = true;
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
          navigate("/verifyEmail" , {state : form.email} );
        }, 2000);
      }
    } catch (err) {
      console.log(err);
      if (err.response && err.response.data.message === `Duplicate field value: ${form.email}. Please use another value!`){
        setErrorInput({...errorInput , errorEmail: t("This email is already registered. Please use a different email") });
      }
      // if (err.response && err.response.data.error.statusCode === 500) {
      //   if (err) {
      //     if (err.response.data.message === "token is not defined") {
      //       setErrorInput({...errorInput , errorEmail: t("This email is already registered. Please use a different email") })
      //     }
      //     if(err.response.data.stack.includes("index: name_1")){
      //       setErrorInput({...errorInput , errorName : t("This user name has been used. Please use a different name")})
      //     }
      //   }
      // } else {
      //   toast.error( t("Something went wrong, please try again later"), { autoClose: 2000 });
      // }
    }
    finally{
      setIsLoading(false);
    }
  };

  return (
    <>
    <FlexSection img={bg_image} classSection={"h-fit"} classDiv={"my-10"}>
    <ToastContainer />
      <div className="my-2  text-center">
            <p className="mb-6 text-[30px]">{t("wellcome")}</p>
          </div>
          <form className="flex flex-col w-full m-auto" onSubmit={HandleSubmit}>
            <div className="mb-2">
              <InputComponent 
                placeholder={t("Enter your Name")} 
                type="text" 
                name="fullName" 
                id="name" 
                onChange={handleForm} 
                htmlFor="name"
                label={t("Name")} 
                />
              {errorInput.errorName && (<p className=" text-[red] text-sm">{errorInput.errorName}</p>)}
              {form.fullName === "" && accept && (<p className=" text-[red] text-sm">{t("Name is required")}</p>)}
            </div>
            <div className="mb-2">
              <InputComponent 
                placeholder={t("Enter your Email")}
                type="email" 
                name="email" 
                id="email"
                onChange={handleForm}
                htmlFor="email"
                label={t("Email")}
                 />
              {errorInput.errorEmail  && 
              (<p className=" text-[red] text-sm">{errorInput.errorEmail}</p>)}
              {form.email === "" && form.email.indexOf("@gmail.com") === -1  && accept &&
              (<p className=" text-[red] text-sm">{t("Email is required")}</p>)}
            </div>
            <div className="mt-2">
              <InputComponent 
                placeholder={t("Enter your password")} 
                type="password" 
                name="password" 
                id="password"
                onChange={handleForm} 
                htmlFor="password"
                label={t("Password")}
                />
              {form.password.length <= 8  && accept && 
              (<p className=" text-[red] text-sm">{t("password must be more then 8 char")}</p>)}
            </div>
            <div className="mt-2">
              <InputComponent 
                placeholder={t("Confirm Password")} 
                type="password" 
                name="rePassword" 
                id="rePassword" 
                onChange={handleForm} 
                htmlFor="rePassword"
                label={t("Confirm Password")}
                />
              {form.rePassword !== form.password && accept && (<p className=" text-[red] text-sm">{t("password dose not match")}</p>)}
            </div>
            <div className="mt-2">
              <InputComponent 
                placeholder={t("phone")} 
                type="tell" 
                name="phone" 
                id="phone" 
                onChange={handleForm} 
                htmlFor="phone"
                label={t("phone")}
                />
              {errorInput.errorPhone && (<p className=" text-[red] text-sm">{errorInput.errorPhone}</p>)}
              {form.phone.length < 11  && accept && (<p className=" text-[red] text-sm">{t("yourPhoneIsRequired")}</p>)}
            </div>
            <div className="mt-2">
              <InputComponent 
                placeholder={t("city")}
                 type="text" 
                 name="city" 
                 id="city" 
                onChange={handleForm} 
                htmlFor="city"
                label={t("city")}
                />
              {errorInput.errorCity && (<p className=" text-[red] text-sm">{errorInput.errorCity}</p>)}
              {form.city === "" && accept && (<p className=" text-[red] text-sm">{t("cityIsRequired")}</p>)}
            </div>
            <div className="mt-2">
              <InputComponent 
                placeholder={t("address")} 
                type="text"
                 name="address" 
                 id="address" 
                onChange={handleForm} 
                htmlFor="address"
                label={t("address")}
                />
              {errorInput.errorAddress && (<p className=" text-[red] text-sm">{errorInput.errorAddress}</p>)}
              {form.address === "" && accept && (<p className=" text-[red] text-sm">{t("yourAddressIsRequired")}</p>)}
            </div>
            <ButtonComponent 
              className={`bg-primary `}
              isLoading={isLoading} 
            >
               {t("Sign Up")}
            </ButtonComponent>
          </form>
          <div className="flex flex-col justify-center items-center mt-2">
            <p className="text-lg">{t("Already have an account")}</p>
            <Link to="/login" className="font-semibold text-xl text-primary">
              {t("Log In")}
            </Link>
          </div>
      </FlexSection>
    </>
  );
};
export default SignUp;