import React, {useState , useEffect} from "react";
import { NavLink , Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Cookies from 'js-cookie';
import i18n from '../../Translation.js';
import axios from "axios";
import API_BASE_URL from "../../api.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BeatLoader from "react-spinners/BeatLoader";
const NavbarBrand = () => {
  const {t} = useTranslation();
  const [lng, setLng] = useState(Cookies.get("i18next") || "en");
  const[loading , setLoading] = useState(false);
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
  
  // log out
    const HandleSubmit = async ()=>{
      setLoading(true)
        try{
            let res= await axios.get(`${API_BASE_URL}customers/logout`,{
              headers: {
                Authorization: `Bearer ${Cookies.get('token')}`
              }
            });
            if(res.status === 200){
              Cookies.remove('token');
            }
        }catch(err){
          if(err){
            toast.error(t("Something went wrong, please try again later"), { autoClose: 2000 });
          }
        }finally{
          setLoading(false);
        }
    };


  return (
    <nav className="nav w-full flex justify-center items-center h-fit p-4 ">
      <div className="container flex justify-between w-11/12">
        <div className="nav-brand text-2xl font-medium mt-[5px]">
          <h1 className="text-4xl">
            <Link to="/">{t('Petopia')}</Link>
          </h1>
        </div>
        <ul className="nav-items flex">
          <li className="nav-item m-3">
            <NavLink to="/" className="nav-link text-black font-medium text-lg">
              {t('Home')}
            </NavLink>
          </li>
          <li className="nav-item m-3">
            <NavLink to="/find-a-pet" className="nav-link text-black font-medium text-lg">
              {t("Find a pet")}
            </NavLink>
          </li>
          <li className="nav-item m-3">
            <NavLink to="/about" className="nav-link text-black font-medium text-lg">
              {t('About Us')}
            </NavLink>
          </li>
        </ul>
        <div className="flex gap-4">
          {!Cookies.get('token') ?
            <>
              <div className="btn flex justify-center items-center rounded-xl px-5 py-0 bg-primary">
                <Link to="/signup" className="text-[#fff] m-0 p-0">
                  {t('Sign Up')}
                </Link>
              </div>
              <div className="btn flex justify-center items-center rounded-xl px-5 py-0 bg-primary">
                <Link to="/login" className="text-[#fff] m-0 p-0">
                  {t("Log In")}
                </Link>
              </div>
            </>
            :
            <button onClick={HandleSubmit} className={`text-[#fff] flex justify-center items-center rounded-xl px-5 py-0 bg-primary 
              ${loading ? 'cursor-not-allowed' : 'cursor-pointer'} `}
             disabled={loading} >
                {loading? <BeatLoader color="#fff" /> : t("Log Out")}
            </button>
          }
          <select className="border-[2px] border-solid border-[#000] rounded-[5px]" value={lng} onChange={handleLanguageChange}>
            <option value="en">En</option>
            <option value="ar">Ar</option>
          </select>
        </div>
      </div>
      <ToastContainer />
    </nav>
  );
};
export default NavbarBrand;
