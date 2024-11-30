import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";
import location_tick from "../../images/footer/location-tick.png";
import call_calling from "../../images/footer/call-calling.png";
import sms from "../../images/footer/sms.png";
import clock from "../../images/footer/clock.png";
const Footer = () => {
  return (
    <>
      <footer className="h-fit py-10 flex justify-center items-center bg-lightYellow">
        <div className="container w-10/12 m-auto my-10 flex max-[591px]:flex-col justify-between flex-wrap">
          <div className="logo w-[30%] max-[591px]:w-[100%] max-[591px]:mb-5">
            <h5 className="text-3xl mb-6">
              <Link to="/">My Pets</Link>
            </h5>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nemo eveniet est quia praesentium alias ea
              recusandae aut placeat quasi, minima repudiandae ipsam dolor? Iure.</p>
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
              <Link to="/">Blogs</Link>
            </p>
            <p className="mb-2">
              <Link to="/">How We Work</Link>
            </p>
          </div>
          <div className="max-[591px]:mb-5">
            <h5 className="mb-6 font-bold">Help</h5>
            <p className="mb-2">
              <Link to="/">Privacy Policy</Link>
            </p>
            <p className="mb-2">
              <Link to="/">Terms and Conditions</Link>
            </p>
            <p className="mb-2">
              <Link to="/">Refund and Cancellation</Link>
            </p>
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
                <img src={location_tick} alt="" />
                <span className="ms-2">Cairo ,Cairo Egypt</span>
              </p>
              <p className="mb-2 flex">
                <img src={call_calling} alt="" />
                <span className="ms-2">(+02) 01234567899</span>
              </p>
              <p className="mb-2 flex">
                <img src={sms} alt="" />
                <Link to="/" className="ms-2">Example@gmail.com</Link>
              </p>
              <p className="mb-2 flex">
                <img src={clock} alt="" />
                <span className="ms-2">Fri-Sat: 24H</span>
              </p>
            </div>
            <div className="mt-5">
              <ul className="flex justify-between items-center">
                <li className="text-xl text-primary">
                  <Link to="/">
                    <FaFacebookSquare />
                  </Link>
                </li>
                <li className="text-xl text-primary">
                  <Link to="/">
                    <FaGithubSquare />
                  </Link>
                </li>
                <li className="text-xl text-primary">
                  <Link to="/">
                    <FaInstagramSquare />
                  </Link>
                </li>
                <li className="text-xl text-primary">
                  <Link to="/">
                    <FaLinkedin />
                  </Link>
                </li>
                <li className="text-xl text-primary">
                  <Link to="/">
                    <FaTwitterSquare />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
