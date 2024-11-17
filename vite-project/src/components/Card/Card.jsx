import React from "react";
import { Link } from "react-router-dom";
const Card = (props) => {
    return (
        <>
            <Link to={`/pet/${props.id}`}>
                <div id={props.id} className={`card w-[200px] h-[300px] bg-[#D9D9D9] flex justify-center items-center flex-col rounded-[70px] border-[10px] border-solid border-[#c7c4c450] relative shadow-[10px_10px_0px_#a3a1a15d] ${props.space} my-[10px] mx-[23px] cursor-pointer`}>
                    <div className="card-img w-3/4 h-[130px] absolute top-[-50px] rounded-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${props.imageUrl})` }} >

                    </div>
                    <div className="card-item w-[200px] mt-[45px] pt-5">
                        <ul className="w-[200px] flex flex-wrap justify-center">
                            <li className="text-xl my-[10px] mx-3">{props.color}</li>
                            <li className="text-xl my-[10px] mx-3">{props.breed}</li>
                            <li className="text-xl my-[10px] mx-3">{props.age}years</li>
                            <li className="text-xl my-[10px] mx-3">{props.gender}</li>
                            <li className="text-xl my-[10px] mx-3">{props.city}</li>
                        </ul>
                    </div>
                </div>
            </Link>
        </>
    )
}
export default Card;