import React , {useState} from 'react'
import { FaRegEyeSlash ,FaRegEye } from "react-icons/fa";

function InputComponent({label , htmlFor , type="text" , className , onChange , name , id , placeholder , value}) {
  const [showPassword , setShowPassword] = useState(false);
  let inputType = type === "password" && !showPassword ? "password" : "text";
  return (
    <>
        <div className="relative flex flex-col">
          {label && <label className="mb-2 font-medium text-lg" htmlFor={htmlFor}>{label}</label>}
          <input 
          type={inputType} 
          onChange={onChange} 
          name={name} 
          id={id}
          placeholder={placeholder}
          value={value} 
          className={`border-[2px] rounded-[5px] border-solid  px-4 py-2 ${className} `}
          />
          {
            type === "password" && 
            (
              <button type="button" 
              onClick={()=>setShowPassword(!showPassword)}
              className="absolute right-3 top-12">
                    {
                      showPassword ? <FaRegEye /> : <FaRegEyeSlash />
                    }
              </button>
            )
          }
        </div>
    </>
  )
}

export default InputComponent;
