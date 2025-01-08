import React from 'react'

const StyleProfile = ({titleChildren ,leftChildren , rightChildren , logo}) => {
    return (
        <>
            <section className="w-full h-screen my-10 flex flex-col justify-between gap-8">
                <div className='flex items-center gap-5'>
                    <span className='text-[35px] text-primary'>
                        {logo}
                    </span>
                    <h3 className="text-[40px]">{titleChildren}</h3>
                </div>
              
                <div className="w-full h-full flex justify-between pb-10 gap-5 max-lg:flex-col">
                    <div className='w-[300px] h-fit bg-light flex flex-col justify-evenly items-center py-5 border-[1px] border-solid border-[#aca9a9] rounded-lg'>
                        {leftChildren}
                    </div>
                    <div className='w-[580px] max-lg:w-[300px] h-fit px-8 bg-light flex justify-between py-5 border-[1px] border-solid border-[#aca9a9] rounded-lg'>
                        {rightChildren}
                    </div>
                </div>
            </section>
        </>
    )
}

export default StyleProfile;
