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
<<<<<<< HEAD
// icon
import { FaAngleDoubleRight ,FaAngleDoubleLeft } from "react-icons/fa";
=======
>>>>>>> fda92af3d33a4179e0bef65e4228e4a26a902770

const AllCard = (props) =>{
    const{category} = useParams();
    const [cards , setCards] = useState([]);
    const [isLoading , setIsLoading] = useState(true);
    // pagination
<<<<<<< HEAD
    const [page , setPage] = useState(1);
    const [totalResult , setTotalResult] = useState(0);
    console.log(totalResult);
    console.log(page)
=======
    const [currentPage, setCurrentPage] = useState(1);
    const [limit , setLimit] = useState(10);
    const [totalPages, setTotalPages] = useState(0);
    
>>>>>>> fda92af3d33a4179e0bef65e4228e4a26a902770
    // card
    const showData = cards.map((item,index)=>(
        <Card space="my-[40px]" key={index} id={item._id} imageUrl={item.imageUrl[0]} 
        color={item.color} age={item.age} breed={item.breed} gender={item.gender} city={item.city} />
    ));
<<<<<<< HEAD
    // fetch total result
    useEffect(()=>{
        const fetchTotalResult = async ()=>{
            try{
               let res= await axios.get(`${API_BASE_URL}pets?type=${category}`)
                console.log("totalResult: " , res.data.results)
                setTotalResult(Math.ceil(res.data.results / 10))
                console.log("totalResult: " , Math.ceil(res.data.results / 10));

            }catch(err){
                console.log(err);
            }finally{
                setIsLoading(false);
            }
        };
        fetchTotalResult();
    },[]);
=======
>>>>>>> fda92af3d33a4179e0bef65e4228e4a26a902770
    // 1- get all pets {category}
    useEffect(() => {
        const fetchData = async ()=>{
            try{
<<<<<<< HEAD
               let res= await axios.get(`${API_BASE_URL}pets?type=${category}&page=${page}&limit=10`)
                setCards(res.data.data.data);
                // console.log(res.data)
=======
               let res= await axios.get(`${API_BASE_URL}pets?type=${category}&page=${currentPage}&limit=${limit}`)
                setCards(res.data.data.data);
                console.log(res.data)
                // setCurrentPage(res.data.paginate);
                // setLimit(res.data.results)
                setTotalPages(res.data.paginate); 
>>>>>>> fda92af3d33a4179e0bef65e4228e4a26a902770
            }catch(err){
                console.log(err);
            }finally{
                setIsLoading(false);
            }
        };
        fetchData();
<<<<<<< HEAD
    }, [ page , category]);


    // page number li
    let pageNumber = [];
     for (let i = 1; i <= totalResult; i++) {pageNumber.push(
        <li key={i} className={`flex text-[18px] items-center justify-center px-4 h-10 border-[#000] border-[1px] ${page === i ? "bg-primary text-[#fff] cursor-not-allowed" : "text-[#000] bg-white cursor-pointer"}`} onClick={()=>setPage(i)}>{i}</li>
     )}
    console.log(pageNumber);

=======
    }, [ currentPage ,limit , category]);
    
    const HandleNext = () => {
        setLimit(limit + 10);
    };

    const HandlePrevious = () => {
            setLimit(limit - 10);
    };

    
    
>>>>>>> fda92af3d33a4179e0bef65e4228e4a26a902770
  return (
    <>
        <Header />
        <section className='h-fit w-full mt-[40px] mb-[20px] flex flex-col items-center justify-center'>
              <div className="container h-fit w-[91.5%] my-[40px] m-auto ">
                  <TypePet logo={props.logo} type={category} />
<<<<<<< HEAD
                  <div className="w-full h-fit flex  flex-wrap mt-10">
=======
                  <div className="w-full h-fit flex  flex-wrap">
>>>>>>> fda92af3d33a4179e0bef65e4228e4a26a902770
                      {isLoading ?
                          <div className="w-full h-fit my-[10px] flex justify-center items-center">
                              <Loading />
                          </div>
                          : 
                          <>
                              {showData}
<<<<<<< HEAD
                              <div className="w-full mt-10 flex justify-center items-center gap-5">
                                  <nav aria-label="Page navigation example">
                                      <ul class="inline-flex -space-x-px text-base h-10">
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
=======
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
>>>>>>> fda92af3d33a4179e0bef65e4228e4a26a902770
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
