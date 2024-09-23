import React ,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import header from "../../images/header/header.png";

const Main = () => {
  useEffect(() => {
    AOS.init(); //Initialize AOS
  }, []);
  return (
    <div className="main w-full flex justify-between items-center">
      <div className="main-text flex items-center flex-col ms-8">
        <h2 style={{textShadow: "0px_2px_3px_rgba(0, 0, 0, 0.363)"}} className="main-text-title ms-9 mt-12 pt-10 text-[70px] font-medium font-montaguSlab" data-aos="fade-up-right">
          find pets for <br />
          <span className="main-text-title-span text-primary">Adoption</span>
        </h2>
      </div>
      <div className="main-img mt-12 pt-9">
        <img width={"100%"} src={header} alt="img" data-aos="zoom-in"/>
      </div>
    </div>
  );
};
export default Main;
