import React from "react";

const Label = (props)=>{
    return(
        <>
            <label className="w-full mb-2" htmlFor={props.htmlFor}>{props.children}</label>
        </>
    )
}
export default Label;

const Input =(props)=>{
    return(
        <>
            <input className="w-full border-[1px] px-3 py-2 border-[gray] border-solid" 
            placeholder={props.placeholder} 
            type={props.type} 
            name={props.name} 
            id={props.id} 
            />
        </>
    )
}
export {Input};