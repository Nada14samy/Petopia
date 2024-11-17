import React from 'react'
import { Link , useLocation } from 'react-router-dom';
// component
import LogOut from "../../components/log-out/LogOut.jsx";
import Setting from '../../components/Setting/Setting.jsx';
// icons
import { FaHouseUser , FaComment , FaEnvelope ,FaHeart , FaSignOutAlt } from "react-icons/fa";
// images
import img_user from "../../images/section-cards/no-image.png";


function Profile() { 

  return (
    <>
      <section className="w-full h-screen ">
        <div className="w-full h-full flex relative">
          <aside className="w-1/4 bg-primary flex flex-col items-center fixed top-0 left-0 bottom-0">
            <div className='mb-10'>
              <h1 className='text-[55px]'>Petopia</h1>
            </div>
            <div className='w-full mt-10 h-full flex flex-col justify-evenly items-center'>
              <ul className="h-full flex flex-col gap-5">
                <li className='flex items-center gap-3'>
                  <span className='text-2xl text-light'>
                    <FaHouseUser />
                  </span>
                  <Link to="/profile" className="text-2xl text-light">Profile</Link>
                </li>
                <li className='flex items-center gap-3'>
                  <span className='text-2xl text-light'>
                    <FaHeart />
                  </span>
                  <Link to="/profile/category" className='text-2xl text-light'>Category</Link>
                </li>
                <li className='flex items-center gap-3'>
                  <span className='text-2xl text-light'>
                     <FaEnvelope />
                  </span>
                  <Link to="/profile/inbox" className='text-2xl text-light'>Inbox</Link>
                </li>
                <li className='flex items-center gap-3'>
                  <span className='text-2xl text-light'>
                     <FaComment />
                  </span>
                  <Link to="/profile/message" className='text-2xl text-light'>Message</Link>
                </li>
              </ul>
              <div className='w-full flex justify-center pb-8 pt-5 border-t-[1px] border-solid border-[gray]'>
                  <Link className='text-2xl text-light flex items-center gap-2'>
                    <FaSignOutAlt />
                    <LogOut />
                  </Link>
              </div>
            </div>
          </aside>
          <article className='w-[75%] h-fit flex justify-center items-center  absolute right-0'>
            <div className="w-full flex flex-col items-center">
              <section className='w-full h-[15vh] m-auto flex items-center justify-center  shadow-[1px_1px_5px_gray]'>
                <div className='w-[98%] flex mx-10'>
                  <div >
                    <img className='w-14 rounded-full' src={img_user} alt="" />
                  </div>
                  <div className='flex flex-col mx-5'>
                    <h3 className='text-2xl'>user name</h3>
                    <p className='text-lg text-[gray]'>email@example.com</p>
                  </div>
                </div>
              </section>
              <section className='w-[85%] mt-10 h-fit flex justify-center items-center'>
                <Setting />
              </section>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}

export default Profile;
