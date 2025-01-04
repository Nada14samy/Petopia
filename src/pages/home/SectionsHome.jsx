import React,{useRef, useEffect ,useState} from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; //import aos styles
// import CountUp from "react-countup";
// import ScrollTrigger from "react-scroll-trigger";
import image_about_1 from "../../images/homepage/image11.webp";
import image_about_2 from "../../images/homepage/image12.webp";
import image_about_3 from "../../images/homepage/image13.webp";
import image_14 from "../../images/homepage/home-image.webp";
import image_16 from "../../images/homepage/image16.png";
import image_8 from "../../images/homepage/image8.png";
import Group7 from "../../images/homepage/adopt.webp";
import image18 from "../../images/homepage/image_1.webp";
import bg_image_1 from "../../images/background-image/bg.png";
import bg_image_2 from "../../images/homepage/Ellipse4.png";
import bg_image_3 from "../../images/homepage/Rectangle7.png";
import bg_image_4 from "../../images/background-image/image19.png";
import bg_image_5 from "../../images/homepage/Ellipse3.png";
import bg_image_6 from "../../images/background-image/image22.png";
// translations
import { useTranslation } from "react-i18next";

const SectionsHome = () => {
    const {t} = useTranslation();
    // const scrollRef = useRef(null);
    useEffect(() => {
        AOS.init(); //Initialize AOS
    }, []);
    // const[counterOn, setCounterOn] = useState(false);
    return (
        <>
            <section className="about w-full h-fit bg-contain bg-center bg-no-repeat" 
            style={{backgroundImage: `url(${bg_image_1})`}}>
                <div className="container w-10/12 m-auto max-lg:w-11/12">
                    <div className="w-full h-screen flex justify-center items-center max-lg:h-fit max-lg:flex-col">
                        <div className="title mx-1 w-1/2 flex flex-col justify-center max-lg:w-11/12" data-aos="fade-right">
                            <h3 className="text-3xl my-5">{t("findYourNewFriend")}</h3>
                            <p className="w-4/5 mb-7">
                            {t("loremText")}
                            </p>
                            <button className="p-3 bg-cyan-500 text-light rounded-sm w-fit bg-primary">
                                <Link to="/">{t("viewPets")}</Link>
                            </button>
                        </div>
                        <div className="image w-1/2 max-lg:w-11/12">
                            <ul className="w-full flex justify-center items-center">
                                <li className="w-1/3 mx-3 h-28 mb-14">
                                <img src={image_about_1} alt="" className="w-full" data-aos="fade-up" data-aos-duration="4000"/>
                                </li>
                                <li className="w-1/3 h-80 mx-3 mt-3 ">
                                <img src={image_about_2} alt="" className="w-full" data-aos="fade-up" data-aos-duration="5000"/>
                                </li>
                                <li className="w-1/3 mx-3">
                                <img src={image_about_3} alt="" className="w-full" data-aos="fade-up" data-aos-duration="6000"/>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* <!-- end sec1 --> */}
                </div>
                <div className="container relative px-12 mt-12 bg-contain bg-left bg-no-repeat h-screen max-lg:h-fit max-lg:flex max-lg:flex-col max-lg:static" style={{backgroundImage: `url(${bg_image_2 })`}}>
                    <div className="w-11/12 flex flex-col justify-center items-center m-auto">
                        <div className="text-center my-5" data-aos="zoom-in">
                            <span className="text-teal-500 text-2xl text-primary">{t("aboutUs")}</span>
                            <h3 className="text-3xl">{t("whoAreYou")}</h3>
                        </div>
                        <div className="text-title flex mt-10 h-fit max-lg:flex-col max-lg:justify-center max-lg:items-center">
                            <div className="image w-[50%] max-lg:w-11/12">
                                <div className="w-full h-[300px] flex justify-center">
                                    <img className=" h-full" src={image_14} alt="" data-aos="zoom-in-right" data-aos-duration="3000"/>
                                </div>
                                <img src={image_16} alt="" className="absolute bottom-[0px] left-[0px]" />
                            </div>
                            <div className="w-[50%] my-5 px-2 mx-2 max-lg:w-11/12" data-aos="fade-up" data-aos-duration="3000">
                                <h3 className="text-3xl mb-5 font-bold">{t("weSaveThePets")}</h3>
                                <p className="my-5 font-medium">
                                {t("loremText")}
                                {t("loremText")}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="w-full bg-right-bottom bg-no-repeat h-fit" style={{backgroundImage: `url(${bg_image_4})`, backgroundSize: '1065px'}}>
                <div className="container w-10/12 m-auto flex flex-col justify-center ">
                    <div className="w-full text-center">
                        <h3 className="text-4xl my-5 font-medium" data-aos="zoom-in-down" data-aos-duration="2000">{t("adoptionProcess")}</h3>
                    </div>
                    <div className="flex justify-center items-center my-14 max-lg:flex-col ">
                        <div className="w-1/2 h-fit max-lg:w-full max-lg:flex max-lg:justify-center">
                            <img className="w-96" src={Group7} alt="" data-aos="zoom-in-right" data-aos-duration="2000"/>
                        </div>
                        <div className="w-1/2 my-5 max-lg:w-full">
                            <ul className="flex mb-20 w-full max-lg:justify-center">
                                <li className="w-1/2 " data-aos="flip-left">
                                    <span className="p-3 px-5 bg-cyan-500 text-light rounded-full my-5 text-2xl bg-primary">1</span>
                                    <p className="my-7 pt-4 text-xl font-bold">{t("createAccount")}</p>
                                </li>
                                <li className="w-1/2" data-aos="flip-left">
                                    <span className="p-3 px-5 bg-cyan-500 text-light rounded-full my-5 text-2xl bg-primary">2</span>
                                    <p className="my-7 pt-4 text-xl font-bold">{t("findYourPet")}</p>
                                </li>
                            </ul>
                            <ul className="flex w-full">
                                <li className="w-1/2" data-aos="flip-left">
                                    <span className="p-3 px-5 bg-cyan-500 text-light rounded-full my-5 text-2xl bg-primary">3</span>
                                    <p className="my-7 pt-4 text-xl font-bold">{t("completeAdaptionForm")}</p>
                                </li>
                                <li className="w-1/2" data-aos="flip-left">
                                    <span className="p-3 px-5 bg-cyan-500 text-light rounded-full my-5 text-2xl bg-primary">4</span>
                                    <p className="my-7 pt-4 text-xl font-bold">{t("takeYourPetHome")}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full learn my-5 py-5 bg-right-top bg-no-repeat" style={{backgroundImage: `url(${bg_image_5})`, backgroundSize: '400px'}}>
                <div className="learn-bg w-full bg-left-right bg-no-repeat" style={{backgroundImage: `url(${bg_image_6})`, backgroundSize: '1300px'}}>
                    <div className="container w-10/12 m-auto flex flex-col justify-center items-center">
                        <div className="title text-center"  data-aos="zoom-in-down" data-aos-duration="2000">
                            <h3 className="text-4xl">{t("petCareTips")}</h3>
                            <p className="text-lg font-medium">{t("learnHowToCareForYourFunnyFriends")}</p>
                        </div>
                        <div className="w-full h-fit flex flex-col justify-center items-center">
                            <div className="w-full flex rounded-full my-12 bg-secondary" data-aos="fade-right" data-aos-duration="3000">
                                <img className="w-[300px] h-[280px] bg-light m-3 rounded-full" src={image18} alt="" />
                                <div className="flex flex-col justify-center  mx-10">
                                    <h4 className="text-2xl mb-4">Lorem ipsum dolor sit amet.</h4>
                                    <p className="pe-12">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad pariatur magnam totam excepturi. Similique magnam magni necessitatibus mollitia dignissimos ipsum amet repudiandae ex debitis. Consequuntur expedita excepturi in facilis tenetur.</p>
                                </div>
                            </div>
                            <div className="w-full flex rounded-full my-12 bg-secondary" data-aos="fade-left" data-aos-duration="3000">
                                <img className="w-[300px] h-[280px] bg-light m-3 rounded-full" src={image18} alt="" />
                                <div className="flex flex-col justify-center  mx-10">
                                    <h4 className="text-2xl mb-4">Lorem ipsum dolor sit amet.</h4>
                                    <p className="pe-12">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad pariatur magnam totam excepturi. Similique magnam magni necessitatibus mollitia dignissimos ipsum amet repudiandae ex debitis. Consequuntur expedita excepturi in facilis tenetur.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SectionsHome;