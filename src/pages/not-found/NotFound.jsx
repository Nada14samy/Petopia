import React from "react";
import bg_image from "../../images/signup/signup-bg.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import FlexSection from "../../components/Flex-Section/FlexSection.jsx";

const NotFound = ()=>{
    const {t} = useTranslation();
    return(
        <>
        <FlexSection img={bg_image} classSection={"h-screen"}>
            <section className="w-full h-screen flex flex-col justify-center items-center bg-center bg-cover bg-no-repeat max-[600px]:bg-[70%]"
                style={{ backgroundImage: `url(${bg_image})` }}>
                <h2 className="mb-8 text-[100px] text-center font-bold text-primary">404</h2>
                <p className="mb-2 text-[20px]">{t("Not found")}</p>
                <Link className="mt-2" to="/">{t("Back To Home")}</Link>
            </section>
            </FlexSection>
        </>
    )
}

export default NotFound;