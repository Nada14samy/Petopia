import React from 'react'

function FlexSection({ img , children}) {
  return (
    <>
      <section className="w-full h-screen flex justify-between">
        <div className='w-1/2 h-fit flex flex-col justify-center items-center'>
            {children}
        </div>
        <div className="fixed top-0 right-0 h-full w-1/2  flex justify-center items-center bg-center bg-no-repeat bg-cover" style={{ backgroundImage : `url(${img})` }}>
        </div>
      </section>
    </>
  )
}

export default FlexSection;