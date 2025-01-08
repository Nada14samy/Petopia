import React from "react";
import { Link } from "react-router-dom";
import sms from "../../images/footer/sms.png";
import clock from "../../images/footer/clock.png";
import logo from "../../images/navbar/logo-petopia.webp";

const Footer = () => {
  return (
    <>
      <footer className="h-fit py-10 flex justify-center items-center bg-lightYellow">
        <div className="container w-10/12 m-auto my-10 flex max-[591px]:flex-col justify-between flex-wrap">
          <div className="logo w-[30%] max-[591px]:w-[100%] max-[591px]:mb-5">
            <h5 className="w-[200px] mb-6">
              <Link className="w-full" to="/">
                <img className="w-full" src={logo} alt={"logo petopia"} />
              </Link>
            </h5>
            <p className="text-sm"></p>
          </div>
          <div className="max-[591px]:mb-5">
            <h5 className="mb-6 font-bold">Site Map </h5>
            <p className="mb-2">
              <Link to="/">Home</Link>
            </p>
            <p className="mb-2">
              <Link to="/">Sign In</Link>/ <Link to="/">Create Account</Link>
            </p>
            <p className="mb-2">
              <Link to="/find-a-pet">Find a pets</Link>
            </p>
          </div>
          <div className="max-[591px]:mb-5">
            <h5 className="mb-6 font-bold">Help</h5>
            <p className="mb-2">
              <Link to="/">About Us</Link>
            </p>
            <p className="mb-2">
              <Link to="/">Contact Us</Link>
            </p>
          </div>
          <div className="max-[591px]:mb-5">
            <div>
              <h5 className="mb-6 font-bold">Our Contact</h5>
              <p className="mb-2 flex">
                <img src={sms} alt="" />
                <Link to="/" className="ms-2">Example@gmail.com</Link>
              </p>
              <p className="mb-2 flex">
                <img src={clock} alt="" />
                <span className="ms-2">Fri-Sat: 24H</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
