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

// icon
import { FaAngleDoubleRight ,FaAngleDoubleLeft } from "react-icons/fa";

const AllCard = (props) =>{
    const{category} = useParams();
    const [cards , setCards] = useState([]);
    const [isLoading , setIsLoading] = useState(true);
    // pagination
    const [page , setPage] = useState(1);
    const [totalResult , setTotalResult] = useState(0);

    // card
    const showData = cards.map((item,index)=>(
        <Card space="my-[40px]" key={index} id={item._id} imageUrl={item.imageUrl[0]} 
        color={item.color} age={item.age} breed={item.breed} gender={item.gender} city={item.city} />
    ));
    // fetch total result
    useEffect(()=>{
        const fetchTotalResult = async ()=>{
            try{
               let res= await axios.get(`${API_BASE_URL}pets?type=${category}`)
                setTotalResult(Math.ceil(res.data.results / 10))
            }catch(err){
                console.log(err);
            }finally{
                setIsLoading(false);
            }
        };
        fetchTotalResult();
    },[]);

    // 1- get all pets {category}
    useEffect(() => {
        const fetchData = async ()=>{
            try{
               let res= await axios.get(`${API_BASE_URL}pets?type=${category}&page=${page}&limit=10`)
                setCards(res.data.data.data);
            }catch(err){
                console.log(err);
            }finally{
                setIsLoading(false);
            }
        };
        fetchData();
    }, [ page , category]);

    // page number li
    let pageNumber = [];
     for (let i = 1; i <= totalResult; i++) {pageNumber.push(
        <li key={i} className={`flex text-[18px] items-center justify-center px-4 h-10 border-[#000] border-[1px] ${page === i ? "bg-primary text-[#fff] cursor-not-allowed" : "text-[#000] bg-white cursor-pointer"}`} onClick={()=>setPage(i)}>{i}</li>
     )};
     
  return (
    <>
        <Header />
        <section className='h-fit w-full mt-[40px] mb-[20px] flex flex-col items-center justify-center'>
              <div className="container h-fit w-[91.5%] my-[40px] m-auto ">
                  <TypePet logo={props.logo} type={category} />
                  <div className="w-full h-fit flex  flex-wrap mt-10">
                      {isLoading ?
                          <div className="w-full h-fit my-[10px] flex justify-center items-center">
                              <Loading />
                          </div>
                          : 
                          <>
                              {showData}
                              <div className="w-full mt-10 flex justify-center items-center gap-5">
                                  <nav aria-label="Page navigation example">
                                      <ul className="inline-flex -space-x-px text-base h-10">
                                          <li className={`flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white
                                                ${page === 1 ? "cursor-not-allowed opacity-50": "cursor-pointer"}
                                          `}
                                            onClick={() => {
                                                if(page > 1){setPage(page - 1)}
                                            }}
                                          >
                                            <FaAngleDoubleLeft />
                                          </li>
                                             {pageNumber}
                                          <li className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white
                                                ${page === totalResult ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
                                          `}
                                             onClick={() => {
                                                if(page < totalResult){setPage(page + 1)}
                                            }}
                                          >
                                              <FaAngleDoubleRight />
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
