import React, { useState } from 'react'
// import img from "../../images/form/form.png";
import bg from "../../images/signup/signup-bg.png";
// import Header from "../../components/Header/Header.jsx";
import axios from "axios";
import API_BASE_URL from "../../api.js";
import Cookies from "js-cookie";
import BeatLoader from "react-spinners/BeatLoader";
import { toast , ToastContainer } from 'react-toastify';
import "react-toastify/ReactToastify.css";
import imgSection from "../../images/building-page/building-page.png";
import FlexSection from "../../components/Flex-Section/FlexSection.jsx";

const FormAdopt = () => {
    const [Form, setForm] = useState({
        fullName: "",
        email: "",
        date: "",
        phoneNumber: "",
        job: {
            hasJob: "",
            jobTitle: "",
        },
        homeLocation: "",
        animalExperience: "",
        understandsSocializing: "",
        additionalHelpers: "",
        budgetForAnimalCare: "",
    });
    const [err, setErr] = useState({
        errAllInput : "",
        errInput : ""
    });
    const [isLoading, setIsLoading] = useState(false);
    const [accept, setAccept] = useState(false);
    const [jobErr, setJobErr] = useState("");
    // handle change all input
    const HandleChange = (e)=>{
        const {name , value}= e.target;
        setForm((prevForm)=>({
            ...prevForm , [name] : value
        }))
    }
    // handle change input hasJob and jobTitle
    const HandleJobChange = (e)=>{
        const {name , value} = e.target;
        if(name === "hasJob"){
            setForm((preForm) =>({
                ...preForm , job: {
                    ...preForm.job,
                    hasJob : value
                }
            }))
        }else if(name === "jobTitle"){
            setForm((prevForm)=>({
                ...prevForm , job:{
                    ...prevForm.job,
                    jobTitle : value
                }
                
            }))
        }
    }
    console.log(Form);

    // fetch data
    const HandleSubmit = async (e)=>{
        e.preventDefault();
        setAccept(true);
        setIsLoading(true);
        setErr({...err , errAllInput:"" , errInput:"" });
        setJobErr("");
        let flag = true;
        let requiredForm = [
            Form.fullName,
            Form.email,
            Form.date,
            Form.homeLocation,
            Form.additionalHelpers,
            Form.animalExperience,
            Form.budgetForAnimalCare,
            Form.phoneNumber,
            Form.understandsSocializing,
        ];
        if(Form.job.hasJob === "true"){
            if(Form.job.jobTitle === ""){
                setJobErr("input required");
                flag= false;
            }else{
                setJobErr("");
                flag = true;
            }
        }

        flag = flag && requiredForm.every((field)=> field !== "");

        if(flag){
            try{
                const res = await axios.post(`${API_BASE_URL}adoptionForms/adoption`, {
                    "fullName": Form.fullName,
                    "email": Form.email,
                    "date": Form.date,
                    "phoneNumber": Form.phoneNumber,
                    "homeLocation": Form.homeLocation,
                    "animalExperience": Form.animalExperience,
                    "understandsSocializing": Form.understandsSocializing,
                    "additionalHelpers": Form.additionalHelpers,
                    "budgetForAnimalCare": Form.budgetForAnimalCare,
                    "job": {
                        "hasJob": Form.job.hasJob,
                        "jobTitle": Form.job.jobTitle
                    }
                },{
                    headers:{
                        Authorization: `Bearer ${Cookies.get('token')}`,
                    }
                })
                console.log(res);
                if(res.status === 201){
                    console.log("success");
                    toast.success("sccess adoption" , {autoClose : 2000})
                }
            }catch(err){
                console.log(err);
                if(err.status && err.response.data.error.statusCode === 500){
                    if(err.response.data && err.response.data.message.includes("index: email_1")){
                        window.scrollTo({
                            top: 700,
                        });
                        setErr({...err , errInput:"This email is already registered. Please use a different email"})
                    }
                }else {
                    toast.error("Something went wrong, please try again later", { autoClose: 2000 });
                }
                
            }finally{
                setIsLoading(false);
            }
        }else{
            setErr({...err ,errInput:"" , errAllInput : "input is required" });
            setIsLoading(false);
        }
    }

        return (
            <>
                {/* <Header /> */}
                <FlexSection img={imgSection}>
                <header className="w-full h-fit flex justify-center py-5 items-center bg-center bg-cover bg-no-repeat max-[600px]:bg-[70%]"
                    style={{ backgroundImage: `url(${bg})` }} >
                    <ToastContainer />
                    <div className="w-11/12 m-auto flex flex-col justify-center items-center h-fit" >
                        <form className="flex flex-col w-full m-auto" onSubmit={HandleSubmit}>
                            {/* name */}
                            <div className="mb-5 bg-[#F5F5F5] py-6 px-4">
                                <label className="label w-full font-medium" htmlFor="fullName">Full Name</label>
                                <input
                                    className="w-full rounded-[3px] border-[1px] px-3 py-2 border-[gray] border-solid mt-1"
                                    placeholder="Full Name..."
                                    type="text"
                                    name="fullName"
                                    id="fullName"
                                    value={Form.fullName}
                                    onChange={HandleChange} />
                                {Form.fullName.trim() === "" && accept && (<p className='text-err'>{err.errAllInput}</p>)}
                            </div>
                            {/* email */}
                            <div className="mb-5  py-6 px-6">
                                <label className="w-full font-medium" htmlFor="email">Email</label>
                                <input
                                    className="w-full rounded-[3px] border-[1px] px-3 py-2 border-[gray] border-solid mt-1"
                                    placeholder="Email..."
                                    id="email"
                                    name="email"
                                    value={Form.email}
                                    onChange={HandleChange} />
                                {Form.email.trim() === "" && accept && (<p className='text-err'>{err.errAllInput}</p>)}
                                {(<p className='text-err'>{err.errInput}</p>)}
                            </div>
                            {/* date */}
                            <div className="mb-5 bg-[#F5F5F5] py-6 px-6">
                                <label className="w-full font-medium" htmlFor="date">Date</label>
                                <input
                                    className="w-full rounded-[3px] border-[1px] px-3 py-2 border-[gray] border-solid mt-1"
                                    placeholder="Date..."
                                    type="date"
                                    name="date"
                                    id="date"
                                    value={Form.date}
                                    onChange={HandleChange} />
                                {Form.date.trim() === "" && accept && (<p className='text-err'>{err.errAllInput}</p>)}
                            </div>
                            {/* phone number */}
                            <div className="mb-5  py-6 px-4">
                                <label className="w-full font-medium" htmlFor="phoneNumber">Phone Number</label>
                                <input
                                    className="w-full rounded-[3px] border-[1px] px-3 py-2 border-[gray] border-solid mt-1"
                                    placeholder="Phone Number..."
                                    type="tel"
                                    name="phoneNumber"
                                    id="phoneNumber"
                                    value={Form.phoneNumber}
                                    onChange={HandleChange} />
                                {Form.phoneNumber.trim() === "" && accept && (<p className='text-err'>{err.errAllInput}</p>)}
                            </div>
                            {/* job */}
                            <div className="mb-5 bg-[#F5F5F5] py-6 px-6">
                                <p className="w-full font-medium text-[21px] mb-3">Do you have a job?</p>
                                {/* yes */}
                                <div className="flex items-center mb-3">
                                    <input
                                        value="true"
                                        className="cursor-pointer"
                                        type="radio"
                                        name="hasJob"
                                        id="trueHasJob"
                                        checked={Form.job.hasJob === "true"}
                                        onChange={HandleJobChange} />
                                    <label htmlFor="trueHasJob" className="ml-2 cursor-pointer text-[20px]">Yes</label>
                                </div>
                                {/* no */}
                                <div className="flex items-center mb-3">
                                    <input value="false"
                                        className="cursor-pointer rounded-[3px] border-[1px] px-3 py-2 border-[gray] border-solid mt-1"
                                        type="radio"
                                        name="hasJob"
                                        id="falseHasJob"
                                        checked={Form.job.hasJob === "false"}
                                        onChange={HandleJobChange} />
                                    <label htmlFor="falseHasJob" className="ml-2 cursor-pointer text-[20px]">No</label>
                                </div>
                                {Form.job.hasJob === "" && accept && (<p className='text-err'>{err.errAllInput}</p>)}
                            </div>
                            {/* job Title */}
                            <div className="mb-5 bg-[#F5F5F5] py-6 px-6">
                                <label className="label w-full font-medium" htmlFor="jobTitle">Job Title</label>
                                <input className="w-full rounded-[3px] border-[1px] px-3 py-2 border-[gray] border-solid mt-1"
                                    placeholder="write your job..."
                                    type="text"
                                    name="jobTitle"
                                    id="jobTitle"
                                    value={Form.job.jobTitle}
                                    onChange={HandleJobChange}
                                    disabled={Form.job.hasJob === "false"}
                                />
                                {Form.job.hasJob === "true" && jobErr && accept && (<p className='text-err'>{jobErr}</p>)}
                            </div>
                            {/* home Location */}
                            <div className="mb-5  py-6 px-6">
                                <p className="w-full font-medium text-[21px] mb-3">where is your home?</p>
                                {/* Urban */}
                                <div className="flex items-center mb-3">
                                    <input value="Urban"
                                        className="cursor-pointer rounded-[3px] border-[1px] px-3 py-2 border-[gray] border-solid mt-1"
                                        type="radio"
                                        name="homeLocation"
                                        id="Urban"
                                        checked={Form.homeLocation === "Urban"}
                                        onChange={HandleChange} />
                                    <label htmlFor="Urban" className="ml-2 cursor-pointer text-[20px]">Urban</label>
                                </div>
                                {/* Rural */}
                                <div className="flex items-center mb-3">
                                    <input value="Rural"
                                        className="cursor-pointer rounded-[3px] border-[1px] px-3 py-2 border-[gray] border-solid mt-1"
                                        type="radio"
                                        name="homeLocation" id="Rural"
                                        checked={Form.homeLocation === "Rural"}
                                        onChange={HandleChange} />
                                    <label htmlFor="Rural" className="ml-2 cursor-pointer text-[20px]">Rural</label>
                                </div>
                                {/* Homeless */}
                                <div className="flex items-center mb-3">
                                    <input value="Homeless"
                                        className="cursor-pointer rounded-[3px] border-[1px] px-3 py-2 border-[gray] border-solid mt-1"
                                        type="radio"
                                        name="homeLocation"
                                        id="Homeless"
                                        checked={Form.homeLocation === "Homeless"}
                                        onChange={HandleChange} />
                                    <label htmlFor="Homeless" className="ml-2 cursor-pointer text-[20px]">Homeless</label>
                                </div>
                                {Form.homeLocation === "" && accept && (<p className='text-err'>{err.errAllInput}</p>)}
                            </div>
                            {/* animal Experience */}
                            <div className="mb-5 bg-[#F5F5F5] py-6 px-6">
                                <p className="w-full font-medium text-[21px] mb-3">
                                    Do you have any previous experience in raising animals?
                                </p>
                                {/* yes */}
                                <div className="flex items-center mb-3">
                                    <input value="true"
                                        className="cursor-pointer rounded-[3px] border-[1px] px-3 py-2 border-[gray] border-solid mt-1"
                                        type="radio"
                                        name="animalExperience"
                                        id="trueAnimalExperience"
                                        checked={Form.animalExperience === "true"}
                                        onChange={HandleChange} />
                                    <label htmlFor="trueAnimalExperience" className="ml-2 cursor-pointer text-[20px]">Yes</label>
                                </div>
                                {/* no */}
                                <div className="flex items-center mb-3">
                                    <input value="false"
                                        className="cursor-pointer rounded-[3px] border-[1px] px-3 py-2 border-[gray] border-solid mt-1"
                                        type="radio"
                                        name="animalExperience"
                                        id="falseAnimalExperience"
                                        checked={Form.animalExperience === "false"}
                                        onChange={HandleChange} />
                                    <label htmlFor="falseAnimalExperience" className="ml-2 cursor-pointer text-[20px]">No</label>
                                </div>
                                {Form.animalExperience === "" && accept && (<p className='text-err'>{err.errAllInput}</p>)}
                            </div>
                            {/* understands Socializing */}
                            <div className="mb-5 py-6 px-6">
                                <p className="w-full font-medium text-[21px] mb-3">
                                    Do you understand the importance of socializing animals?
                                </p>
                                {/* yes */}
                                <div className="flex items-center mb-3">
                                    <input value="true"
                                        className="cursor-pointer rounded-[3px] border-[1px] px-3 py-2 border-[gray] border-solid mt-1"
                                        type="radio"
                                        name="understandsSocializing"
                                        id="trueUnderstandsSocializing"
                                        checked={Form.understandsSocializing === "true"}
                                        onChange={HandleChange} />
                                    <label htmlFor="trueUnderstandsSocializing" className="ml-2 cursor-pointer text-[20px]">Yes</label>
                                </div>
                                {/* no */}
                                <div className="flex items-center mb-3">
                                    <input value="false"
                                        className="cursor-pointer rounded-[3px] border-[1px] px-3 py-2 border-[gray] border-solid mt-1"
                                        type="radio"
                                        name="understandsSocializing"
                                        id="falseUnderstandsSocializing"
                                        checked={Form.understandsSocializing === "false"}
                                        onChange={HandleChange} />
                                    <label htmlFor="falseUnderstandsSocializing" className="ml-2 cursor-pointer text-[20px]">No</label>
                                </div>
                                {Form.understandsSocializing === "" && accept && (<p className='text-err'>{err.errAllInput}</p>)}
                            </div>
                            {/* additional Helpers */}
                            <div className="mb-5 bg-[#F5F5F5] py-6 px-6">
                                <p className="w-full font-medium text-[21px] mb-3">
                                    Are there other individuals in the home who help with
                                    this task?
                                </p>
                                {/* yes */}
                                <div className="flex items-center mb-3">
                                    <input value="true"
                                        className="cursor-pointer rounded-[3px] border-[1px] px-3 py-2 border-[gray] border-solid mt-1"
                                        type="radio"
                                        name="additionalHelpers"
                                        id="trueAdditionalHelpers"
                                        checked={Form.additionalHelpers === "true"}
                                        onChange={HandleChange} />
                                    <label htmlFor="trueAdditionalHelpers" className="ml-2 cursor-pointer text-[20px]">Yes</label>
                                </div>
                                {/* no */}
                                <div className="flex items-center mb-3">
                                    <input value="false"
                                        className="cursor-pointer rounded-[3px] border-[1px] px-3 py-2 border-[gray] border-solid mt-1"
                                        type="radio"
                                        name="additionalHelpers"
                                        id="falseAdditionalHelpers"
                                        checked={Form.additionalHelpers === "false"}
                                        onChange={HandleChange} />
                                    <label htmlFor="falseAdditionalHelpers" className="ml-2 cursor-pointer text-[20px]">No</label>
                                </div>
                                {Form.additionalHelpers === "" && accept && (<p className='text-err'>{err.errAllInput}</p>)}
                            </div>
                            {/* budget For Animal Care */}
                            <div className="mb-5 py-6 px-6">
                                <p className="w-full font-medium text-[21px] mb-3">
                                    Do you have a budget allocated for animal care?
                                </p>
                                {/* yes */}
                                <div className="flex items-center mb-3">
                                    <input value="true"
                                        className="cursor-pointer rounded-[3px] border-[1px] px-3 py-2 border-[gray] border-solid mt-1"
                                        type="radio"
                                        name="budgetForAnimalCare"
                                        id="trueBudget"
                                        checked={Form.budgetForAnimalCare === "true"}
                                        onChange={HandleChange} />
                                    <label htmlFor="true" className="ml-2 cursor-pointer text-[20px]">Yes</label>
                                </div>
                                {/* no */}
                                <div className="flex items-center mb-3">
                                    <input value="false"
                                        className="cursor-pointer rounded-[3px] border-[1px] px-3 py-2 border-[gray] border-solid mt-1"
                                        type="radio"
                                        name="budgetForAnimalCare"
                                        id="falseBudget"
                                        checked={Form.budgetForAnimalCare === "false"}
                                        onChange={HandleChange} />
                                    <label htmlFor="falseBudget" className="ml-2 cursor-pointer text-[20px]">No</label>
                                </div>
                                {Form.budgetForAnimalCare === "" && accept && (<p className='text-err'>{err.errAllInput}</p>)}
                            </div>
                            <button
                                className={`w-full rounded-[3px] mt-4 bg-[#59bbda] py-2 text-lg text-[#fff] 
                            ${isLoading ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                                disabled={isLoading}
                            >
                                {isLoading ? <BeatLoader color="#fff" /> : <span>Send Message</span>}
                            </button>
                        </form>
                    </div>
                </header>
                </FlexSection>
            </>
        )
  
}

export default FormAdopt;