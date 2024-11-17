import React from "react";
import { Link , useLocation} from "react-router-dom";
import bg_image from "../../images/signup/signup-bg.png";
import { useTranslation } from "react-i18next";
import imgSection from "../../images/building-page/building-page.png";
import FlexSection from "../../components/Flex-Section/FlexSection.jsx";

const MessageForgotPassword = ()=>{
    const {t} = useTranslation();
    const location = useLocation();
    const {email} = location.state || {};
    return(
        <>
        <FlexSection img={imgSection}>
            <section className="w-full h-screen flex justify-center items-center bg-center bg-cover bg-no-repeat max-[600px]:bg-[70%]"
            style={{backgroundImage: `url(${bg_image})`}}>
        <div
            className="w-[500px] max-[405px]:flex max-[405px]:flex-col max-[405px]:justify-center max-[405px]:h-screen  h-fit px-7 py-6 shadow-[0px_1px_20px_#dbd6d6] rounded-[10px]">
            <div className="text-center text-[30px] mb-5">
                <span className="bg-[#59bcdab7] px-3 rounded-[10px]"><i style={{color: "#fff"}} className="fa-solid fa-envelope"></i></span>
            </div>
            <div className="mb-8 mx-5 text-center">
                <h2 className="text-[25px] font-medium">{t("Email Sent")}</h2>
                <p className="mt-3 text-[gray]"> <span> {t("We have sent you an email at")} </span>
                    {email ? <span className="font-medium text-[#000]"> {email} </span> : <span> example@gmail.com </span> }
                  <span> {t("check your inbox and follow the instructions to reset your account password")} </span> </p>
                <p className="mt-5">{t("Wrong Email Address")} <Link to="/forgot-password" className="underline text-[blue]">{t("Change Email Address")}</Link></p>
            </div>
        </div>
    </section>
    </FlexSection>
        </>
    )
}

export default MessageForgotPassword;