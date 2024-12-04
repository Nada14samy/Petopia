import React from 'react'
// loading 
import ClipLoader from "react-spinners/ClipLoader.js";

function ButtonComponent({ isLoading , children }) {
  return (
    <>
      <button 
        className={`w-full mt-3 bg-darkRed text-lightWhite flex justify-center py-2 text-2xl rounded-lg ${isLoading ? "cursor-not-allowed" : "cursor-pointer"}`}
            disabled={isLoading}> 
            {isLoading ? 
            (<span className='flex justify-center items-center gap-2 '><ClipLoader size="30px"  color="#fff" /> Loading</span>) 
            : 
            (<span className='flex justify-center items-center gap-2 '>{children}</span>)}
        </button>
    </>
  )
}

export default ButtonComponent;
