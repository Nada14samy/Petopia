import React, { useState , useEffect } from 'react';
// react router dom
import { useParams } from 'react-router-dom';
// api
import axios from 'axios';
import API_BASE_URL from '../../api.js';
// components
import Header from "../../components/Header/Header.jsx";
import Card from "../../components/Card/Card.jsx";
import Loading from "../../components/Loading/Loading.jsx";
import TypePet from "../../components/type-pet/TypePet.jsx";
import SectionCards from '../../components/sectionCards/SectionCards.jsx';
import Footer from "../../components/Footer/Footer.jsx";
import JoinSection from "../../components/JoinSection/JoinSection.jsx";
// images
// import bg_cat from "../../images/homepage/Ellipse3.png";
import bg_dog from "../../images/homepage/Ellipse4.png";
import bg_new from "../../images/background-image/image19.png";
import Dogs_image from "../../images/section-cards/dogs.png";
import New_image from "../../images/section-cards/new.png";

const AllCard = (props) =>{
    const{category} = useParams();
    const [cards , setCards] = useState([]);
    const [isLoading , setIsLoading] = useState(true);
    // pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [limit , setLimit] = useState(10);
    const [totalPages, setTotalPages] = useState(0);
    
    // card
    const showData = cards.map((item,index)=>(
        <Card space="my-[40px]" key={index} id={item._id} imageUrl={item.imageUrl[0]} 
        color={item.color} age={item.age} breed={item.breed} gender={item.gender} city={item.city} />
    ));
    // 1- get all pets {category}
    useEffect(() => {
        const fetchData = async ()=>{
            try{
               let res= await axios.get(`${API_BASE_URL}pets?type=${category}&page=${currentPage}&limit=${limit}`)
                setCards(res.data.data.data);
                console.log(res.data)
                // setCurrentPage(res.data.paginate);
                // setLimit(res.data.results)
                setTotalPages(res.data.paginate); 
            }catch(err){
                console.log(err);
            }finally{
                setIsLoading(false);
            }
        };
        fetchData();
    }, [ currentPage ,limit , category]);
    
    const HandleNext = () => {
        setLimit(limit + 10);
    };

    const HandlePrevious = () => {
            setLimit(limit - 10);
    };

    
    
  return (
    <>
        <Header />
        <section className='h-fit w-full mt-[40px] mb-[20px] flex flex-col items-center justify-center'>
              <div className="container h-fit w-[91.5%] my-[40px] m-auto ">
                  <TypePet logo={props.logo} type={category} />
                  <div className="w-full h-fit flex  flex-wrap">
                      {isLoading ?
                          <div className="w-full h-fit my-[10px] flex justify-center items-center">
                              <Loading />
                          </div>
                          : 
                          <>
                              {showData}
                              <div className="w-full text-center">
                                  <nav aria-label="w-full Page navigation example">
                                      <ul className="w-full flex justify-between ">
                                      <li className="w-[45%] mt-[40px]">
                                                <button
                                                    onClick={HandlePrevious}
                                                    disabled={limit === 10}
                                                    className={`flex items-center justify-start px-6 w-full h-[60px] text-light bg-primary border border-primary rounded-lg
                                                      ${limit === 10 ? "opacity-50 cursor-not-allowed" : "opacity-100 cursor-pointer"} `}
                                                >
                                                    <svg className="w-10 h-4 me-2 rtl:rotate-180" aria-hidden="true" fill="none" viewBox="0 0 14 10">
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
                                                    </svg>
                                                    <span className="text-3xl mb-[2px]">Prev</span>
                                                </button>
                                            </li>
                                            <li className="w-[45%] mt-[40px]">
                                                <button
                                                    onClick={HandleNext}
                                                    
                                                    className={`flex items-center justify-end px-6 w-full h-[60px] text-light bg-primary border border-primary rounded-lg
                                                        `}
                                                >
                                                    <span className="text-3xl mb-[2px]">Next</span>
                                                    <svg className="w-10 h-4 ms-2 rtl:rotate-180" aria-hidden="true" fill="none" viewBox="0 0 14 10">
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                                    </svg>
                                                </button>
                                            </li>
                                      </ul>
                                  </nav>
                              </div>
                          </> 
                      }
                  </div>

              </div>
        </section>
        <section className=''>
            <div className="w-full h-fit bg-left bg-contain bg-no-repeat" 
            style={{backgroundImage: `url(${bg_dog})`}}>
                <SectionCards type={category === "Cat" ? "Dog" : "Cat"} 
                logo={Dogs_image} />
            </div>
            <div className="w-full h-fit bg-right bg-contain bg-no-repeat" style={{backgroundImage: `url(${bg_new})`}}>
                <SectionCards type={"New"} logo={New_image} />
            </div>
        </section>
        <JoinSection />
        <Footer />
    </>
  )
}

export default AllCard
