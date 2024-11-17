import React, {useState , useEffect} from "react";
import { NavLink , Link  } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Cookies from 'js-cookie';
import i18n from '../../Translation.js';
import imgUser from "../../images/section-cards/no-image.png";
import LogOut from "../log-out/LogOut.jsx";


const NavbarBrand = ({userProfile}) => {
  // const {userData , isLoading} = Me();
  const {t} = useTranslation();
  const [lng, setLng] = useState(Cookies.get("i18next") || "en");
  const [user , setUser] = useState(false);
  
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
    // <nav className="nav w-full flex justify-center items-center h-fit p-4 ">
    //   <div className="container flex justify-between w-11/12">
    //     <div className="nav-brand text-2xl font-medium mt-[5px]">
    //       <h1 className="text-4xl">
    //         <Link to="/">{t('Petopia')}</Link>
    //       </h1>
    //     </div>
    //     <ul className="nav-items flex">
    //       <li className="nav-item m-3">
    //         <NavLink to="/" className="nav-link text-black font-medium text-lg">
    //           {t('Home')}
    //         </NavLink>
    //       </li>
    //       <li className="nav-item m-3">
    //         <NavLink to="/find-a-pet" className="nav-link text-black font-medium text-lg">
    //           {t("Find a pet")}
    //         </NavLink>
    //       </li>
    //       <li className="nav-item m-3">
    //         <NavLink to="/about" className="nav-link text-black font-medium text-lg">
    //           {t('About Us')}
    //         </NavLink>
    //       </li>
    //     </ul>
    //     <div className="flex gap-4">
    //       {!Cookies.get('token') ?
    //         <>
    //           <div className="btn flex justify-center items-center rounded-xl px-5 py-0 bg-primary">
    //             <Link to="/signup" className="text-[#fff] m-0 p-0">
    //               {t('Sign Up')}
    //             </Link>
    //           </div>
    //           <div className="btn flex justify-center items-center rounded-xl px-5 py-0 bg-primary">
    //             <Link to="/login" className="text-[#fff] m-0 p-0">
    //               {t("Log In")}
    //             </Link>
    //           </div>
    //         </>
    //         :
    //         <>
    //           <div className="btn flex justify-center items-center rounded-xl px-4 py-2 bg-primary text-light">
    //               <Link to="/add-card-pet" className="m-0 p-0">+ {t("Add pet")}</Link>
    //           </div>
    //           <button onClick={HandleSubmit} className={`text-light flex justify-center items-center rounded-xl px-4 py-2 bg-primary ${loading ? 'cursor-not-allowed' : 'cursor-pointer'}`} disabled={loading}>
    //             {loading ? <BeatLoader color="#fff" /> : t("Log Out")}
    //           </button>
    //         </>
    //       }
    //       <select className="border-[2px] border-solid border-[#000] rounded-[5px]" value={lng} onChange={handleLanguageChange}>
    //         <option value="en">En</option>
    //         <option value="ar">Ar</option>
    //       </select>
    //    
    //     </div>
    //   </div>
    //   <ToastContainer />
    // </nav>
    


<nav className="bg-white border-gray-200 dark:bg-gray-900">

  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <div className="nav-brand text-2xl font-medium mt-[5px]">
      <h1 className="text-4xl">
        <Link to="/">{t('Petopia')}</Link>
      </h1>
  </div>
        <div className="relative flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-4">
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
            <>
              <button onClick={() => setUser(!user)} type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                <span className="sr-only">Open user menu</span>
                <img className="w-10 h-10 rounded-full" src={imgUser} alt="" />
              </button>

              <div className={`z-50 ${user ? "block" : "hidden"} absolute top-5 right-2 my-4 text-base list-none bg-primary divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 `} id="user-dropdown">
                <div className="px-4 py-3">
                  <span className="block text-sm text-light dark:text-white">user name</span>
                  <span className="block text-sm  text-[gray] truncate dark:text-gray-400">email</span>
                </div>
                <ul className="py-2" aria-labelledby="user-menu-button">
                  <li>
                    <a href="/profile" className="block px-4 py-1 text-lg text-light hover:bg-gray-100  hover:text-white">Profile</a>
                  </li>
                  <li>
                    <a href="/add-card-pet" className="block px-4 py-1 text-lg text-light hover:bg-gray-100  hover:text-white">Add Card</a>
                  </li>
                  <li>
                    <LogOut />
                  </li>
                </ul>
              </div>
            </>
          }


          <select className="border-[2px] border-solid border-[#000] rounded-[5px]" value={lng} onChange={handleLanguageChange}>
            <option value="en">En</option>
            <option value="ar">Ar</option>
          </select>
        </div>
 
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
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
  </div>
  </div>

</nav>

  );
};
export default NavbarBrand;
