import {useContext} from 'react';

import { userContext } from "../Me/Me.jsx";
import { Link } from 'react-router-dom';
import Loading from "../Loading/Loading.jsx"
// import Card from '../Card/Card.jsx';
// icons
import { FaHeart } from "react-icons/fa";
import DeletePet from "../Delete-Pet/DeletePet.jsx";

const Category = () => {
    const context = useContext(userContext);
    if (!context) {
        console.error("userContext is undefined. Ensure the provider is wrapping the component.");
    }
    const { userData } = context;
    console.log("userData:", userData.pet);
    if (!userData?.pet) {
        return (
        <div className="w-full h-full flex justify-center items-center">
            <Loading />
        </div>
        );
    }

  return (
    <>
      <section className="w-full h-fit my-7 flex flex-col justify-between gap-8">
        <div className='flex items-center gap-5'>
          <span className='text-[35px] text-primary'>
            <FaHeart />
          </span>
          <h3 className="text-[40px]">Category</h3>
        </div>
        <div className="w-full h-full flex flex-col justify-between items-center gap-5 ">
          <div className="w-full flex justify-end">
            <Link to="/add-card-pet" className='w-[200px] text-center py-3 rounded-md bg-primary text-light text-2xl'>Add New Pet</Link>
          </div>
          <div className="w-full my-2 flex flex-wrap gap-x-12 gap-y-20">
            {userData.pet.map((item) => (
              <div
                key={item._id}
                className="card w-[230px] h-[350px] bg-[#D9D9D9] flex justify-center items-center flex-col rounded-[30px] border-[10px] border-solid border-[#c7c4c450] relative shadow-[10px_10px_0px_#a3a1a15d] my-[10px] mx-[23px] cursor-pointer"
              >
                <div
                  className="card-img w-full h-[120px] rounded-[30px] bg-contain bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${item.imageUrl[0]})` }}
                ></div>
                <div className="card-item w-[200px] mt-3">
                  <ul className="w-[200px] flex flex-wrap justify-center">
                    <li className="text-xl my-[10px] mx-3">{item.name}</li>
                    {item.gender && <li className="text-xl my-[10px] mx-3">{item.gender}</li>}
                    <li className="text-xl my-[10px] mx-3">{item.age} years</li>
                  </ul>
                </div>
                <div className="w-11/12 flex justify-evenly mt-5">
                  <Link
                    to={`update-pet/${item._id}`}
                    className="text-center py-1 px-2 rounded-md bg-primary text-light text-lg"
                  >
                    Update
                  </Link>
                  <DeletePet id={item._id} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Category;
