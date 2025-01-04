import {useState , useEffect } from "react";
import { NavLink , Link  } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Cookies from 'js-cookie';
import i18n from '../../Translation.js';
import imgUser from "../../images/section-cards/no-image.png";
import logo from "../../images/navbar/logo-petopia.webp";
import { FaBars , FaTimes} from "react-icons/fa";


const NavbarBrand = () => {
  const {t} = useTranslation();
  const [lng, setLng] = useState(Cookies.get("i18next") || "en");
  const [clickNav , setClickNav] = useState(false);
  useEffect(()=>{
       window.document.dir = i18n.dir(lng);
       Cookies.set("i18next", lng);
  },[lng]);
  // select language
  const handleLanguageChange = (newLang) => {
    let selectLang = newLang.target.value;
    setLng(selectLang);

    i18n.changeLanguage(selectLang);  
  };  

  return (
    <>

      <header className="h-15vh py-5">
        <nav className='flex justify-between  w-11/12 max-lg:w-[95%] items-center max-lg:h-14 h-14 mx-auto'>
          <div>
            <h1 className=" w-[150px]">
              <Link to="/">
                <img className="w-full h-full" src={logo} alt={"logo petopia"} />
              </Link>
            </h1>
          </div>
          <div className={`${clickNav
              ? "top-[15%] flex justify-center py-10 right-0 w-full h-[500px] mb-5 z-[99] bg-primary"
              : "hidden top-[14%] right-[-100%]"
            } lg:static lg:flex lg:justify-center lg:w-auto lg:h-auto lg:py-0 lg:mb-0 lg:bg-transparent absolute text-center transition-all duration-500 ease-in-out lg:transition-none lg:opacity-100 w-full min-h-[30vh] opacity-90`}
          >

            <ul className='flex lg:flex-row mx-auto flex-col lg:items-center lg:gap-[4vw] gap-6 font-sans font-medium item-center'>
              <li><NavLink to="/">{t('Home')}</NavLink></li>
              <li><NavLink to="/find-a-pet">{t("Find a pet")}</NavLink></li>
              <li><NavLink to="/about">{t('About Us')}</NavLink></li>
            </ul>
          </div>
          <div className='flex items-center gap-4'>
            {
              Cookies.get('userId') ?
                <>
                  <Link to="/profile" type="button" className="flex text-sm bg-gray-800 rounded-full lg:me-0 " id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                    <img className="w-10 h-10 rounded-full" src={imgUser} alt="" />
                  </Link>
                </>
                :
                <>
                  <button className="rounded-lg px-3 text-light py-2 bg-primary duration-500 hover:bg-darkBlue"><Link to="/login">{t("Log In")}</Link></button>
                </>
            }
            <select className="border-[2px] py-2 border-solid border-primary rounded-[5px]" value={lng} onChange={handleLanguageChange}>
              <option value="en">En</option>
              <option value="ar">Ar</option>
            </select>
            <button onClick={() => setClickNav(!clickNav)} className="cursor-pointer text-4xl lg:hidden">
              <span className={`${clickNav ? "hidden" : "block"}`}><FaBars /></span>
              <span className={`${clickNav ? "block" : "hidden"}`}><FaTimes /></span>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};
export default NavbarBrand;
