import React from 'react'

function FlexSection({ img , children ,classDiv , classSection}) {
  return (
    <>
      <section className={`w-full ${classSection} flex justify-center items-center bg-no-repeat  max-[600px]:bg-[70%] bg-center bg-cover`} style={{backgroundImage : `url(${img})`}}>
        <div className={`w-[450px] 
                     flex 
                     flex-col
                     justify-center 
                      h-fit
                      px-7 
                      py-6 
                      shadow-[0px_1px_20px_#dbd6d6] 
                      rounded-[10px]
                     ${classDiv}
        `}>
            {children}
        </div>
      </section>
    </>
  )
}

export default FlexSection;