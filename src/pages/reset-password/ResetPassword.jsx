import React, { useState } from "react";
import bg_image from "../../images/signup/signup-bg.png";
import axios from "axios";
import { useParams } from "react-router-dom";
const ResetPassword = () =>{
    const [password , setPassword] = useState("");
    const [rePassword , setRePassword] = useState("");
    const [accept , setAccept] = useState(false);
    const [isLoading , setIsLoading] = useState(false);
    const {token} = useParams();
    const HandleSubmit = async (e)=>{
        e.preventDefault();
        let flag = true;
        setAccept(true);
        setIsLoading(true);
        password.length <= 8 || rePassword !== password ? flag = false : flag = true;
        try{
            if(flag){
                const res = await axios.patch(`http://farm-build-your-portfolio-project-2.onrender.com/api/v1/customers/resetPassword/${token}`, 
                {
                    "password" : password,
                    "passwordConfirm" : rePassword
                });
                console.log(res);
            }
        }catch(err){
            console.log(err);
        }finally{
            setIsLoading(false);
        }
    }

    return(
        <>
            <section className="w-full h-screen flex justify-center items-center bg-center bg-cover bg-no-repeat max-[600px]:bg-[70%]" style={{ backgroundImage: `url(${bg_image})` }} >
                <div className="container w-[400px] max-[405px]:flex max-[405px]:flex-col max-[405px]:justify-center max-[405px]:h-screen  h-fit px-7 py-6 shadow-[0px_1px_20px_#dbd6d6] rounded-[10px]">
                    <div className="my-2 text-center">
                        <h3 className="text-2xl mb-2 text-[#59bbda] font-medium">New Home</h3>
                        <p className="mb-6 text-[25px]">Reset your password</p>
                    </div>
                    <form className="flex flex-col w-full m-auto" onSubmit={HandleSubmit}>
                        <div className="mb-2">
                            <label className="w-full font-medium" htmlFor="password">New password</label>
                            <input 
                            className="w-full rounded-[3px] border-[1px] px-3 py-2 border-[#000] border-solid mt-1" 
                            placeholder="Enter a new password" 
                            type="password" 
                            name="password" 
                            id="password" 
                            value={password} 
                            onChange={e=>setPassword(e.target.value)}
                            />
                            {password.length <= 8 && accept && ( <p className=" text-[red] text-sm">password must be more then 8 char</p>)}
                        </div>
                        <div className="mt-2">
                            <label className="w-full font-medium" htmlFor="rePassword">Confirm new password</label>
                            <input 
                            className="w-full rounded-[3px] border-[1px] px-3 py-2 border-[#000] border-solid mt-1" 
                            placeholder="Confirm your new password" 
                            type="password" 
                            name="rePassword" 
                            id="rePassword" 
                            value={rePassword} 
                            onChange={e=>setRePassword(e.target.value)}
                            />
                            {rePassword !== password && accept && (<p className=" text-[red] text-sm">password dose not match</p> )}
                        </div>
                        <button className="w-full rounded-[3px] mt-4 bg-[#59bbda] py-2 text-lg text-white">
                            {isLoading? "Loading..." : "Reset Password"}
                        </button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default ResetPassword;