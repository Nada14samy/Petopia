import React from 'react'
import bg_sections from "../../images/section-cards/bg-section.png";

const TypePet = (props) => {
    return (
        <>
            <div className="title-head h-[90px] flex justify-start items-center bg-contain bg-left bg-no-repeat mx-3" style={{ backgroundImage: `url(${bg_sections})` }}>
                <img className="w-14" src={props.logo} alt="" />
                <h3 className="text-3xl ml-2">{props.type === "New" ? props.type : `${props.type}s`} </h3>
            </div>
        </>
    )
}

export default TypePet
