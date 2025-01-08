import React from 'react'
import img from "../../images/building-page/building-page.png";
// components
import FlexSection from '../../components/Flex-Section/FlexSection';
// import NavbarBrand from '../../components/navbar/Navbar';
import { Link } from 'react-router-dom';
function BuildingPage() {
  return (
    <section className='h-screen w-full flex flex-col '>
    <Link to="/" className='text-2xl mt-5 mx-5'> Back Home</Link>
      <FlexSection img={img}>
        <div className='w-full h-full flex flex-col justify-center items-center'>
            <span className='text-2xl'>we're still</span>
            <h2 className='text-[50px] text-primary font-bold mb-3'>
                cooking our website
            </h2>
            <p className='text-xl'>
                we are going to launch our website very soon
            </p>
          </div>
      </FlexSection>
    </section>
  )
}

export default BuildingPage;
