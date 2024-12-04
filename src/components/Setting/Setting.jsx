import React, {useContext} from 'react';
import { Link } from "react-router-dom";
// img
import img from "../../images/section-cards/user.webp";
// icon
import {FaPaintBrush} from "react-icons/fa";
// componet
import { userContext } from "../Me/Me.jsx";
import StyleProfile from "../Style-Profile/StyleProfile.jsx";

function Setting() {

  const context = useContext(userContext);

  if (!context) {
    console.error("userContext is undefined. Ensure the provider is wrapping the component.");
  }
  const { userData } = context;
  console.log(userData);
 
  return (
    <>
      <StyleProfile titleChildren={"Profile"} 
      rightChildren={
        <>
          <div>
            <ul className="flex flex-col gap-7">
              <li className="flex flex-col gap-3">
                <span className='text-xl font-medium text-primary'>Name</span>
                <span className='text-2xl'>{userData.name}</span>
              </li>
              <li className="flex flex-col gap-3">
                <span className='text-xl font-medium text-primary'>Phone</span>
                <span className='text-xl'>{userData.phone}</span>
              </li>
              <li className="flex flex-col gap-3">
                <span className='text-xl font-medium text-primary'>Address</span>
                <span className='text-xl'>{userData.address}</span>
              </li>
              <li className="flex flex-col gap-3">
                <span className='text-xl font-medium text-primary'>City</span>
                <span className='text-xl'>{userData.city}</span>
              </li>
            </ul>
          </div>
          <Link to="edit" className="h-fit bg-primary text-light flex justify-center items-center gap-2 py-2 px-5 rounded-md">
            <span className="text-xl">Edit</span>
            <FaPaintBrush />
          </Link>
        </>
      }

      leftChildren={
        <>
          <div className='relative w-[90%] border-[1px] border-solid border-[#aca9a9] rounded-md'>
            <img className='w-full' src={img} alt="user image" />
            <div className="absolute bottom-2 right-2 w-[50px] h-[50px] text-light text-2xl rounded-full flex justify-center items-center bg-primary"><FaPaintBrush /></div>
          </div>
          <div>
            <p className="text-start text-3xl">{userData.name}</p>
          </div>
        </>
      }
      />

      {/* <section className="w-full h-fit my-5 flex flex-col justify-between gap-8">
        <h3 className="text-[40px]">Profile</h3>
        <div className="w-full h-full flex justify-between items-center">
          <div className='w-[30%] h-[420px] bg-light flex flex-col justify-evenly items-center py-1 border-[1px] border-solid border-[#aca9a9] rounded-lg'>
            <div className='relative w-[90%] border-[1px] border-solid border-[#aca9a9] rounded-md'>
              <img className='w-full' src={img} alt="user image" />
              <div className="absolute bottom-2 right-2 w-[50px] h-[50px] text-light text-2xl rounded-full flex justify-center items-center bg-primary"><FaPaintBrush /></div>
            </div>
            <div>
              <p className="text-start text-3xl">{userData.name}</p>
            </div>
          </div>
          <div className='w-[65%] h-[420px] px-8 bg-light flex justify-between py-5 border-[1px] border-solid border-[#aca9a9] rounded-lg'>
          <div>
                <ul className="flex flex-col gap-7">
                    <li className="flex flex-col gap-3">
                        <span className='text-xl font-medium text-primary'>Name</span>
                        <span className='text-2xl'>{userData.name}</span>
                    </li>
                    <li className="flex flex-col gap-3">
                        <span className='text-xl font-medium text-primary'>Phone</span>
                        <span className='text-xl'>{userData.phone}</span>
                    </li>
                    <li className="flex flex-col gap-3">
                        <span className='text-xl font-medium text-primary'>Address</span>
                        <span className='text-xl'>{userData.address}</span>
                    </li>
                    <li className="flex flex-col gap-3">
                        <span className='text-xl font-medium text-primary'>City</span>
                        <span className='text-xl'>{userData.city}</span>
                    </li>
                </ul>
            </div>
            <Link to="edit" className="h-fit bg-primary text-light flex justify-center items-center gap-2 py-2 px-5 rounded-md">
              <span className="text-xl">Edit</span>
              <FaPaintBrush />
            </Link>
          </div>
        </div>
      </section> */}
    </>
  )
}

export default Setting;
