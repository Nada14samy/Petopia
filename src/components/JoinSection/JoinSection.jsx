import React ,{useEffect} from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; //import aos styles
import image_21 from "../../images/JoinSection/image21.png";
import bg_join from "../../images/homepage/Ellipse5.png"
const JoinSection = () => {
    useEffect(() => {
        AOS.init(); //Initialize AOS
    }, []);
    return (
        <>
            <section className="w-full my-12 join h-fit">
                <div className="container w-10/12 max-[1024px]:block m-auto flex">
                    <div className="w-1/2  max-[1024px]:w-full">
                        <div className="title">
                            <h3 className="text-4xl font-medium mb-10" data-aos="fade-right">join our community</h3>
                            <div className="mt-10" data-aos="fade-left" data-aos-duration="3000">
                                <div className="flex items-center my-5" >
                                    <span className="rounded-full w-[20px] h-[20px] bg-primary"></span>
                                    <h4 className="text-2xl mx-5 font-medium">share your pet stories</h4>
                                </div>
                                <p className="w-4/5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio nihil, voluptas doloribus quaerat veniam enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti deserunt voluptas sit temporibus modi dicta repudiandae ut mollitia recusandae? Minima?</p>
                            </div>
                            <div className="mt-10" data-aos="fade-left" data-aos-duration="3000">
                                <div className="flex items-center my-5" >
                                    <span className="rounded-full w-[20px] h-[20px] bg-primary"></span>
                                    <h4 className="text-2xl mx-5 font-medium">get advise from experienced owners</h4>
                                </div>
                                <p className="w-4/5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsum adipisci magni nulla nihil nemo? Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti deserunt voluptas sit temporibus modi dicta repudiandae ut mollitia recusandae? Minima?</p>
                            </div>
                            <div className="mt-10" data-aos="fade-left" data-aos-duration="3000">
                                <div className="flex items-center my-5" >
                                    <span className="rounded-full bg-primary w-[20px] h-[20px]"></span>
                                    <h4 className="text-2xl mx-5 font-medium">connect with fellow pet enthusiasts</h4>
                                </div>
                                <p className="w-4/5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, esse. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti deserunt voluptas sit temporibus modi dicta repudiandae ut mollitia recusandae? Minima?</p>
                            </div>
                        </div>
                        <button className="text-white rounded-full py-3 px-10 my-10 bg-primary">
                            <Link to="/">join our community</Link>
                        </button>
                    </div>
                    <div className="img-sec w-1/2 max-[1024px]:w-full max-[1024px]:m-auto bg-top bg-contain bg-no-repeat" style={{backgroundImage: `url(${bg_join})`}} data-aos="zoom-in" data-aos-duration="3000">
                        <img src={image_21} alt="" className="mt-12 py-10" />
                    </div>
                </div>
            </section>
        </>
    )
}
export default JoinSection;