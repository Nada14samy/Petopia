import React, {useState , useEffect} from "react";
import bg_card_1 from "../../images/homepage/Ellipse3.png";
import bg_card_2 from "../../images/background-image/bg.png";
import bg_card_3 from "../../images/homepage/Ellipse4.png";
import no_image from "../../images/section-cards/no-image.png";
import { Link , useParams , useNavigate } from "react-router-dom";
import axios from "axios";
import API_BASE_URL from "../../api";
import Loading from "../../components/Loading/Loading";
import Cookies from 'js-cookie';
import moment from "moment";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ErrorSection from "../../components/error/ErrorSection";
import { FaMapMarkerAlt } from "react-icons/fa";
import Header from "../../components/Header/Header.jsx";

const CardDetails = () => {
    const[cardDetails , setCardDetails]= useState(null);
    const {id} = useParams();
    const token = Cookies.get('token');
    const navigate = useNavigate();
    console.log(cardDetails);
    useEffect(()=>{
        let fetchData = async ()=>{
            try{
                let res = await axios.get(`${API_BASE_URL}pets/${id}`,
                    {withCredentials: true }
                );
                setCardDetails(res.data.data.data);
                console.log(setCardDetails(res.data.data.data));
                console.log(res);
            }
            catch(err){
                console.log(err);
                if(err.message === "Network Error"){
                    toast.error("Oops! Something went wrong. please refresh the page.", { autoClose: 2000 });
                }else if(err.response && err.response.status === 404){
                    // navigate("/no-data");
                    setCardDetails(null);
                }
            }
        }
        fetchData();
    }, [id,token,navigate]);

    if (!cardDetails){
        return <div className="w-full h-screen flex justify-center items-center"> <Loading /> </div> ;
    }
    if(cardDetails == null){
        return (
        <div className="w-full h-screen flex justify-center items-center"> 
            <ErrorSection title="Sorry, data is not available now. please try again later" /> 
        </div> 
        )
    }
    return (
        <>
        <Header />
            <section className="w-full h-fit flex flex-col bg-right bg-contain bg-no-repeat" 
            style={{ backgroundImage: `url(${bg_card_1})` }}>
                <ToastContainer />
                <div className="w-10/12 m-auto flex flex-wrap gap-11 my-12 max-[737px]:gap-5 max-[737px]:justify-center">
                    <div className="w-[230px] h-[300px] rounded-[60px] shadow-[-10px_10px_1px_#c4bcbc8a] border-[10px] border-[#8f8c8c8a] ">
                        <img src={cardDetails.imageUrl[0]} alt="" className="w-full h-full rounded-[49px]" />
                    </div>
                    <div className="w-[480px] flex flex-col justify-center max-[737px]:h-fit max-[904px]:w-[380px] max-[785px]:w-[340px] max-[737px]:w-fit ">
                        <ul className="flex flex-wrap gap-7 my-3 max-[737px]:justify-center">
                            <li className="text-2xl mx-5 max-[300px]:mx-2 ">
                                <span className="text-[gray] text-xl">breed: </span> 
                                {cardDetails.breed}
                            </li>
                            <li className="text-2xl mx-5 max-[300px]:mx-2 ">
                                <span className="text-[gray] text-xl">gender: </span> 
                                {cardDetails.gender}
                            </li>
                            <li className="text-2xl mx-5 max-[300px]:mx-2 ">
                                <span className="text-[gray] text-xl">age: </span> 
                                {cardDetails.age} years
                            </li>
                            <li className="text-2xl mx-5 max-[300px]:mx-2 ">
                                <span className="text-[gray] text-xl">city: </span> 
                                {cardDetails.city}
                            </li>
                            <li className="text-2xl mx-5 max-[300px]:mx-2 ">
                                <span className="text-[gray] text-xl">color: </span> 
                                {cardDetails.color}
                            </li>
                            <li className="text-2xl mx-5 max-[300px]:mx-2 ">
                                <span className="text-[gray] text-xl">weight: </span> 
                                {cardDetails.weight}
                            </li>
                            <li className="text-2xl mx-5 max-[300px]:mx-2 ">
                                <span className="text-[gray] text-xl">phone: </span> 
                                {cardDetails.phone}
                            </li>
                            <li className="flex text-2xl mx-5 max-[300px]:mx-2 max-[300px]:text-[23px]">
                                <FaMapMarkerAlt /> {cardDetails.address}
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="w-full bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${bg_card_2})` }}>
                <div className="w-full flex flex-col bg-left bg-contain bg-no-repeat" style={{ backgroundImage: `url(${bg_card_3})` }} >
                    <div className="w-10/12 m-auto my-12 ">
                        <div className="flex gap-7">
                            <div className="w-[80px] ">
                                <img className="w-full" src={no_image} alt="" />
                            </div>
                            <div className="flex flex-col justify-center">
                                <span className="text-lg text-[gray]">owner by</span>
                                <p className="text-2xl">{cardDetails.name}</p>
                                <p className="text-[gray] text-bold text-sm">{moment(cardDetails.dateAdded).fromNow()}</p>
                            </div>
                        </div>
                        <div className="my-10">
                            <p className="mx-5 text-xl w-10/12 leading-8">
                                {cardDetails.description}
                            </p>
                        </div>
                        <div className="flex justify-evenly flex-wrap">
                            <Link to="/Form-Adopt" className="rounded-full bg-primary h-fit py-2 px-10 text-2xl text-light mb-2">
                                adapt me
                            </Link>
                            <Link to="/message" className="rounded-full bg-lightYellow h-fit py-2 px-10 text-2xl text-light mb-2">
                                message
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CardDetails;