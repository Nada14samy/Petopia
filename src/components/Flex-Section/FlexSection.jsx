import React from 'react'

function FlexSection({ img , children}) {
  return (
    <>
      <section className="w-full h-screen flex justify-center bg-no-repeat bg-center max-[600px]:bg-[70%] bg-cover" style={{backgroundImage : `url(${img})`}}>
        <div className='w-1/2 h-fit flex flex-col justify-center items-center'>
            {children}
        </div>
      </section>
    </>
  )
}

export default FlexSection;