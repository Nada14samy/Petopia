import React from 'react'
import { Link , NavLink , Outlet } from 'react-router-dom';
// component
import LogOut from "../../components/log-out/LogOut.jsx";
// import Setting from '../../components/Setting/Setting.jsx';
// icons
import { FaHouseUser , FaComment , FaEnvelope ,FaHeart , FaSignOutAlt } from "react-icons/fa";
// images
// import img_user from "../../images/section-cards/no-image.png";


function Profile() { 

  return (
    <>
      <section className="profile w-full h-screen ">
        <div className="profile-container w-full h-full flex relative">
          <aside className="profile-sidebar w-[20%] bg-primary flex flex-col items-center fixed top-0 left-0 bottom-0">
            <div className='my-5'>
              <h1 className='text-[45px] text-light'>Petopia</h1>
            </div>
            <div className='profile-nav w-full mt-10 h-full flex flex-col justify-evenly items-center'>
              <ul className="profile-items h-full flex flex-col gap-5">
                <li className='profile-link w-full flex items-center gap-2'>
                  <span className='text-xl text-light'>
                    <FaHouseUser />
                  </span>
                  <NavLink to="/profile" className="nav-profile-link text-xl text-light">Profile</NavLink>
                </li>
                <li className='profile-link flex items-center gap-2'>
                  <span className='text-xl text-light'>
                    <FaHouseUser />
                  </span>
                  <NavLink to="/profile/setting" className="nav-profile-link text-xl text-light">Setting</NavLink>
                </li>
                <li className='profile-link flex items-center gap-2'>
                  <span className='text-xl text-light'>
                    <FaHeart />
                  </span>
                  <NavLink to="/category" className='nav-profile-link text-xl text-light'>Category</NavLink>
                </li>
                <li className='profile-link flex items-center gap-2'>
                  <span className='text-xl text-light'>
                     <FaEnvelope />
                  </span>
                  <NavLink to="/inbox" className='nav-profile-link text-xl text-light'>Inbox</NavLink>
                </li>
                <li className='profile-link flex items-center gap-2'>
                  <span className='text-xl text-light'>
                     <FaComment />
                  </span>
                  <NavLink to="/message" className='nav-profile-link text-xl text-light'>Message</NavLink>
                </li>
              </ul>
              <div className='w-full flex justify-center pb-8 pt-5'>
                  <Link className='text-xl text-light flex items-center '>
                    <FaSignOutAlt />
                    <LogOut />
                  </Link>
              </div>
            </div>
          </aside>
          <article className='w-[80%] h-full absolute right-0 bg-[#e7e5e5a1] '>
            <div className="w-full h-full flex justify-center items-center">
              <section className='w-[85%]  h-full '>
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
