import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link , useNavigate } from "react-router-dom";
import * as yup from "yup";
import Input from "../../components/generic/Input";
import axios from "axios";
import API_BASE_URL from "../../api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../../components/generic/Button";
import { useState } from "react";
import bg_image from "../../images/signup/signup-bg.png";

const schema = yup.object({
  name: yup.string().required("Full Name is required"),
  email: yup.string().required("Email is required").email("Email is invalid"),
  password: yup.string().required("Password is required").min(8, "Password must be at least 8 characters"),
  rePassword: yup.string().oneOf([yup.ref('password')], "Passwords must match").required("Repeat Password is required")
}).required();

const SignUp = () => {
  let navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, setError } = useForm({
    resolver: yupResolver(schema),
  });
  const[isLoading , setIsLoading]= useState(false);

  const onSubmit = async ({ name, email, password, rePassword }) => {
    try {
      await axios.post(
        `${API_BASE_URL}customers/signup`,
        {
          name,
          email,
          password,
          passwordConfirm: rePassword,
        }
      );
      toast.success("Registration successful!", { autoClose: 2000 });
      setTimeout(() => {
        navigate("/verifyEmail");
      }, 2000);
    } catch (err) {
      if (err.response && err.response.data.error.statusCode === 500) {
        if (err) {
          if (err.response.data.message === "token is not defined") {
            setError("email", { message: "This email is already registered. Please use a different email." });
          }
        }
      } else {
        toast.error("Something went wrong, please try again later.", { autoClose: 2000 });
      }
    }
    finally{
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${bg_image})`}}>
      <ToastContainer />
      <div className="container flex flex-col justify-center items-center h-fit shadow-2xl py-10 w-[500px]">
        <div className="w-10/12 mb-8 flex justify-center items-center">
          <h3 className="text-3xl">Sign Up</h3>
        </div>
        <form
          className="flex flex-col justify-center w-10/12"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            id="name"
            label="Full Name"
            register={register}
            errors={errors}
            placeholder="Name..."
            
          />
          <Input
            id="email"
            label="Email"
            register={register}
            errors={errors}
            placeholder="Email..."
            type="email"
        
          />
          <Input
            id="password"
            label="Password"
            register={register}
            errors={errors}
            placeholder="Password..."
            type="password"
           
          />
          <Input
            id="rePassword"
            label="Repeat Password"
            register={register}
            errors={errors}
            placeholder="Repeat Password..."
            type="password"
           
          />

          <div className="flex justify-center w-full">
            <Button type="submit" isLoading={isLoading}>
              <span>Sign Up</span>
            </Button>
          </div>
        </form>
        <div className="flex flex-col justify-center items-center mt-2">
          <p className="text-lg">Already have an account?</p>
          <Link to="/" className="font-semibold text-xl text-black">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};
export default SignUp;