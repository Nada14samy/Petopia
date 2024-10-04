import { Link } from "react-router-dom";
import bg_image from "../../images/signup/signup-bg.png";
import { useTranslation } from "react-i18next";

const MessageResetPassword = ()=>{
    const {t} = useTranslation();
    return(
        <>
            <section className="w-full h-screen flex justify-center items-center bg-center bg-cover bg-no-repeat max-[600px]:bg-[70%]"
                style={{backgroundImage: `url(${bg_image})`}}>
                <div
                    className="w-[500px] max-[405px]:flex max-[405px]:flex-col max-[405px]:justify-center max-[405px]:h-screen  h-fit px-7 py-6 shadow-[0px_1px_20px_#dbd6d6] rounded-[10px]">
                    <div className="text-center text-[30px] my-5">
                        <span className="bg-[#59bcdab7] px-4 py-2 rounded-[50%]"><i style={{color: "#fff"}} className="fa-solid fa-check"></i></span>
                    </div>
                    <div className="mb-8 mx-5 text-center">
                        <h2 className="text-[25px] font-medium">{t("message reset h2")}</h2>
                        <p className="mt-3 text-[gray]">{t("message reset p")} &#129392;</p>
                    </div>
                    <Link to="/login" className="w-full rounded-[3px] mt-4 bg-[#59bbda] py-2 text-lg text-white">
                        {t("Log In")}
                    </Link>
                </div>
            </section>

        </>
    )
}

export default MessageResetPassword;