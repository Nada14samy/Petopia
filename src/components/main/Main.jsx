import React ,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import header_img from "../../images/header/header.png";
import { useTranslation } from "react-i18next";

const Main = () => {
  const {t} = useTranslation();
  useEffect(() => {
    AOS.init(); //Initialize AOS
  }, []);
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-11/12 flex items-center justify-between">
          <h2 style={{textShadow: "0px_2px_3px_rgba(0, 0, 0, 0.363)"}} className="ms-9 mt-1 text-[70px] font-medium font-montaguSlab" data-aos="fade-up-right">
            {t("Title Header Home")} <br />
            <span className="text-primary">{t("Adoption")}</span>
          </h2>
          <div className="mt-9">
            <img width={"100%"} src={header_img} alt="img" data-aos="zoom-in"/>
          </div>
      </div>
    </div>
  );
};
export default Main;
