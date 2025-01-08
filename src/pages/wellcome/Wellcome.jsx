import bg_image from "../../images/signup/signup-bg.png";
import PropagateLoader from "react-spinners/PropagateLoader";
// translations
import { useTranslation } from "react-i18next";

const Wellcome = () =>{
    const {t} = useTranslation();
    
    return(
        <>
        <header className="w-full h-screen flex justify-center items-center bg-center bg-cover bg-no-repeat max-[600px]:bg-[70%]"
        style={{ backgroundImage: `url(${bg_image})`}} >
            <div className="w-10/12 h-fit flex flex-col justify-center items-center">
                <p className="text-[35px] text-center mb-3">{t("wellcome")}</p>
                <PropagateLoader color="#73b9d7" />
            </div>
        </header>
        </>
    )
}

export default Wellcome;