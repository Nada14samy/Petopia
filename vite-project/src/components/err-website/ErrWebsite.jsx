import React from 'react'
import img from "../../images/building-page/building-page.png";
// components
import FlexSection from '../Flex-Section/FlexSection';

function ErrWebsite() {
  return (
    <>
      <FlexSection img={img}>
            <span className='text-2xl'>Sorry,</span>
            <h2 className='text-[50px] text-primary font-bold mb-3'>
                Something went wrong.
            </h2>
            <p className='text-xl'>
                We will work on fixing the issue, please try again later.
            </p>
      </FlexSection>
    </>
  )
}

export default ErrWebsite
