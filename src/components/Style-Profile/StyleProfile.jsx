import React from 'react'

const StyleProfile = ({titleChildren ,leftChildren , rightChildren}) => {
    return (
        <>
            <section className="w-full h-fit my-5 flex flex-col justify-between gap-8">
                <h3 className="text-[40px]">{titleChildren}</h3>
                <div className="w-full h-full flex justify-between items-center">
                    <div className='w-[30%] h-[420px] bg-light flex flex-col justify-evenly items-center py-1 border-[1px] border-solid border-[#aca9a9] rounded-lg'>
                        {leftChildren}
                    </div>
                    <div className='w-[65%] h-[420px] px-8 bg-light flex justify-between py-5 border-[1px] border-solid border-[#aca9a9] rounded-lg'>
                        {rightChildren}
                    </div>
                </div>
            </section>
        </>
    )
}

export default StyleProfile;
