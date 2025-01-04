import React from 'react'
import { Link , NavLink , Outlet } from 'react-router-dom';
// component
import LogOut from "../../components/log-out/LogOut.jsx";
// icons
import { FaHouseUser , FaComment , FaEnvelope ,FaHeart , FaSignOutAlt , FaCogs } from "react-icons/fa";
// images
import logo from "../../images/navbar/logo-petopia.webp";
// translations
import { useTranslation } from "react-i18next";

function Profile() { 
  const {t} = useTranslation();

  return (
    <>
      <section className="profile w-full h-screen ">
        <div className="profile-container w-full h-full flex flex-wrap max-lg:block relative max-lg:static">
          <aside className="profile-sidebar w-[20%] max-lg:w-full max-lg:h-[15%] bg-primary flex max-lg:flex-row flex-col items-center fixed top-0 left-0 bottom-0">
            <div className='my-5'>
            <h1 className=" w-[150px]">
              <Link to="/">
                <img className="w-full h-full" src={logo} alt={"logo petopia"} />
              </Link>
            </h1>
            </div>
            <div className='profile-nav w-full mt-10 h-full flex flex-col max-lg:flex-row justify-evenly items-center'>
              <ul className="profile-items h-full flex flex-col max-lg:flex-row gap-5">
                <li className='profile-link w-full flex items-center gap-x-5'>
                  <span className='text-xl text-darkBlue'>
                    <FaHouseUser />
                  </span>
                  <NavLink to="/" className="nav-profile-link text-xl text-light">{t("Home")}</NavLink>
                </li>
                <li className='profile-link w-full flex items-center gap-x-5'>
                  <span className='text-xl text-darkBlue'>
                    <FaHouseUser />
                  </span>
                  <NavLink to="/profile" className="nav-profile-link text-xl text-light">{t("profile")}</NavLink>
                </li>
                <li className='profile-link flex items-center gap-x-5'>
                  <span className='text-xl text-darkBlue'>
                    <FaCogs />
                  </span>
                  <NavLink to="/profile/setting" className="nav-profile-link text-xl text-light">{t("setting")}</NavLink>
                </li>
                <li className='profile-link flex items-center gap-x-5'>
                  <span className='text-xl text-darkBlue'>
                    <FaHeart />
                  </span>
                  <NavLink to="category" className='nav-profile-link text-xl text-light'>{t("category")}</NavLink>
                </li>
                <li className='profile-link flex items-center gap-x-5'>
                  <span className='text-xl text-darkBlue'>
                     <FaEnvelope />
                  </span>
                  <NavLink to="inbox" className='nav-profile-link text-xl text-light'>{t("inbox")}</NavLink>
                </li>
                <li className='profile-link flex items-center gap-x-5'>
                  <span className='text-xl text-darkBlue'>
                     <FaComment />
                  </span>
                  <NavLink to="message" className='nav-profile-link text-xl text-light'>{t("message")}</NavLink>
                </li>
              </ul>
              <div className='w-full flex justify-center pb-8 pt-5'>
                  <Link className='text-xl text-darkBlue flex items-center '>
                    <FaSignOutAlt />
                    <LogOut />
                  </Link>
              </div>
            </div>
          </aside>
          <article className='w-[80%] h-fit absolute max-lg:static right-0 max-lg:w-full'>
            <div className="w-full h-full flex justify-center items-center">
              <section className='w-[85%] h-fit '>
                <Outlet />
              </section>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}

export default Profile;
