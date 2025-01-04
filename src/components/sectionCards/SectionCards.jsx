import React, {useState, useEffect , useRef} from "react";
import { Link } from "react-router-dom";

import Card from "../Card/Card";
import Loading from "../Loading/Loading";
import axios from "axios";
import API_BASE_URL from "../../api";
import ErrorSection from "../error/ErrorSection";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TypePet from "../../components/type-pet/TypePet.jsx";

const SectionCards = (props)=>{
    const [cards , setCards] = useState([]);
    const[isLoading , setIsLoading]= useState(true);
    const showData = cards.map((item,index)=>(
        <Card key={index} id={item._id} imageUrl={item.imageUrl[0]} 
        color={item.color} age={item.age} breed={item.breed} gender={item.gender} city={item.city} />
    ));
    const typeRef = useRef(props.type);
    useEffect(() => {
        let type = typeRef.current;
        const fetchCards = async ()=>{
            let endPoint;
            switch (type) {
                case "Cat":
                    endPoint = `pets?type=Cat&limit=5`;
                    break;
                case "Dog":
                    endPoint = `pets?type=Dog&limit=5`;
                    break;
                case "New":
                    endPoint = `pets?limit=5&sort=-dateAdded`;
                    break;
                default:
                    endPoint = "pets?limit=5";
                    break;
            }
            try {
                const response = await axios.get(`${API_BASE_URL}${endPoint}`);
                setCards(response.data.data.data);
            }catch(err){
                console.log(err);
                if(err.message === "Network Error"){
                    toast.error("Oops! Something went wrong. please refresh the page.", { autoClose: 2000 });
                }else{
                    <ErrorSection title="Sorry, data is not available now. please try again later" />
                }
            }
            finally{
                setIsLoading(false);
            }
        };
        fetchCards();
    }, [typeRef]);
    
    return(
        <>
            <section className="component w-full my-14 mx-0 h-fit">
            <ToastContainer />
                <div className="container w-[91%] max-lg:w-[98%] m-auto flex justify-center flex-col">
                    <TypePet logo={props.logo}  type={props.type} />
                    <div className="cards h-fit mt-14 mb-10 flex items-center">
                        {isLoading?(
                            <div className="w-full h-[300px] my-[10px] flex justify-center items-center">
                                <Loading />
                            </div>
                        ):cards.length=== 0?(
                            <div className="w-full h-[300px] my-[10px] flex justify-center items-center">
                                <Loading /> 
                            </div>
                        ):
                        <div className="w-full flex flex-col justify-center">
                            <div className="flex justify-start flex-wrap ">
                                {showData}
                            </div>
                            {/* the button will only be displayed if showData length is 5 */}
                            <div className={`${showData.length === 5 ? "block" : "hidden"} btn w-full mt-6 flex justify-center`}>
                                <Link to={`/all-card/${props.type}`} className="w-36 py-3 flex justify-center items-center bg-primary text-light" >
                                    Show more
                                </Link>
                            </div>
                        </div>
                        }
                    </div>
                   
                </div>
            </section>
        </>
    )
}
export default SectionCards;