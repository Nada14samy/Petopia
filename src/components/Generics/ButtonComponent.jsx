import React from 'react'
// loading 
import BeatLoader from "react-spinners/BeatLoader.js";

function ButtonComponent({ isLoading , children }) {
  return (
    <>
      <button type="submit"
        className={`w-full mt-3 bg-primary text-light flex justify-center py-2 text-2xl rounded-lg ${isLoading ? "cursor-not-allowed" : "cursor-pointer"}`}
            disabled={isLoading}> 
            {isLoading ? 
            (<span className='flex justify-center items-center gap-2 '><BeatLoader color="#fff" /></span>) 
            : 
            (<span className='flex justify-center items-center gap-2 '>{children}</span>)}
        </button>
    </>
  )
}

export default ButtonComponent;
