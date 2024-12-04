import { useState } from 'react'
import BeatLoader from "react-spinners/BeatLoader";
import axios from "axios";
import API_BASE_URL from "../../api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';
import FlexSection from "../../components/Flex-Section/FlexSection.jsx";
// import img from "../../images/building-page/building-page.png";
import Header from "../../components/Header/Header.jsx";
import bg_image from "../../images/signup/signup-bg.png";

function CreateCard() {
    // const token = Cookies.get('token');
    const[isLoading , setIsLoading]= useState(false);
    const [accept , setAccept] = useState(false);
    const navigate = useNavigate();
    const [Form , setForm]= useState({
        imageUrl : [],
        description : "",
        name : "",
        age: "",
        gender : "",
        type: "Cat",
        color: "black",
        address : "",
        city: "",
        phone: "",
        breed: "",
        weight: "",
        typeWeight: "kilogram",
    });
    const [inputError , setInputError] = useState("");
    const [err , setErr] = useState("");
    // handle change inputs
    const HandleChange = (e)=> setForm({...Form , [e.target.name] : e.target.value});
    const HandleImageChange = (e) => {
        const files = Array.from(e.target.files);
        
        if (Form.imageUrl.length + files.length > 3 || Form.imageUrl.length + files.length < 1) {
            setInputError("You must upload between 1 and 3 images");
            return;
        }

        setInputError("");
        setForm({ ...Form, imageUrl: [...Form.imageUrl, ...files] });
    };
    const HandleClickBtn = ()=> document.querySelector("#imageBtn").click();
   const HandleDelete = (index)=>{
        const updataImage = Form.imageUrl.filter((_,i)=> i !== index);
        if(updataImage.length === 0){
            setInputError("You must upload between 1 and 3 images");
        }else{
            setInputError("");
        }
        setForm({...Form , imageUrl: updataImage});
   }
    console.log(Form);
    const HandleSubmit = async (e)=>{
        e.preventDefault();
        setAccept(true);
        setIsLoading(true);
        let flag = true;
        setInputError("");
        setErr("");
        const requiredFields = [
            Form.description,
            Form.address,
            Form.age,
            Form.breed,
            Form.city,
            Form.color,
            Form.gender,
            Form.name,
            Form.type,
            Form.typeWeight,
            Form.weight,
            Form.phone
        ];
        flag = requiredFields.every(field => field !== "") && (Form.imageUrl.length > 0 && Form.imageUrl.length <= 3);
        if (flag) {
            try{
                let formData = new FormData();
                formData.append("description" , Form.description);
                formData.append("age" , Form.age);
                formData.append("address" , Form.address);
                formData.append("breed" , Form.breed);
                formData.append("city" , Form.city);
                formData.append("color" , Form.color);
                formData.append("gender" , Form.gender);
                formData.append("name" , Form.name);
                formData.append("type" , Form.type);
                formData.append("typeWeight" , Form.typeWeight);
                formData.append("weight" , Form.weight);
                formData.append("phone" , Form.phone);
               for(let i=0; i< imageUrl.length ; i++){
                    formData.append(`image${i}`, imageUrl[i]);
               }
                let res = await axios.post(`${API_BASE_URL}pets`, formData, {
                    headers: {
                      'Content-Type': 'multipart/form-data',
                    },
                        withCredentials: true,
                  });
                console.log(res);
                console.log("success")
                toast.success("Pet added successfully!", { autoClose: 2000 });
            }catch(err){
                console.log(err);
                if(err.message === "Network Error"){
                    console.log("net work")
                    toast.error("Something went wrong, please try again later", { autoClose: 2000 });
                }
                if(err.response.data.message === "You are not logged in! Please log in to get access."){
                    console.log("login")
                    toast.error("You are not logged in!", { autoClose: 2000 });
                    setTimeout(()=>{
                        navigate("/signup");
                    } , 4000);
                }
            }finally{
                setIsLoading(false);
            }
        } else {
            setInputError("You must upload between 1 and 3 images");
            setErr("All fields are required");
            setIsLoading(false);
        }
    }
  return ( 
      <>
      <Header />
        <FlexSection img={bg_image}>
          <header className="w-full h-fit py-5 flex justify-center items-center bg-center bg-cover bg-no-repeat max-[600px]:bg-[70%]">
            <ToastContainer />
              <div className=" w-11/12 max-[405px]:flex max-[405px]:flex-col max-[405px]:justify-center max-[405px]:h-screen  h-fit px-7 py-6  rounded-[10px]">
                  <form className="flex flex-col w-full m-auto" onSubmit={HandleSubmit}>
                      <div className="mb-2">
                          <div className="input-file w-full text-[#59bbda] flex justify-between items-center">
                              <p className="text-[20px]">upLoad image</p>
                              <span className="text-[30px] mb-[5px] cursor-pointer" onClick={HandleClickBtn}>+</span>
                              <input id="imageBtn" className="file w-full" multiple type="file" onChange={HandleImageChange} accept="image/*" hidden />
                          </div>
                          <div className="img w-full gap-3 my-3 flex flex-wrap justify-center">
                          {Form.imageUrl.length > 0 &&
                                    Form.imageUrl.map((url, index) => (
                                        <div className="relative" key={index}>
                                            <img src={URL.createObjectURL(url)} alt={`upload-${index}`} className="w-[100px] h-[100px] object-cover rounded-md" />
                                            <span className="absolute top-[5px] right-[5px] bg-primary text-[#fff] 
                                                rounded-full h-[20px] w-[20px] flex justify-center items-center 
                                                cursor-pointer pb-[2px]" onClick={()=> HandleDelete(index)}>&times;</span>
                                        </div>
                                    ))
                            }
                          </div>
                          <p className="text-[red] text-center ">{inputError} </p>
                        {Form.imageUrl.length > 3 && Form.imageUrl.length  === 0 && accept && (<p className="text-[red]">{err}</p>)}
                      </div>
                      <div className="mb-2">
                          <label className="w-full font-medium" htmlFor="dis">Write about your animal</label>
                          <textarea rows={5} className="w-full rounded-[3px] border-[1px] px-3 py-2 border-[gray] border-solid mt-1" 
                          placeholder="Ex. my animal is looking for home" id="dis" value={Form.description} name="description"
                          onChange={HandleChange}  />
                          {Form.description === "" && accept && (<p className="text-[red]">{err}</p>)}
                      </div>
                      <div className="mb-2">
                          <label className="w-full font-medium" htmlFor="name">Name</label>
                          <input 
                          className="w-full rounded-[3px] border-[1px] px-3 py-2 border-[gray] border-solid mt-1" 
                          placeholder="Name..." type="text" name="name" id="name" 
                          onChange={HandleChange} />
                          {Form.name === "" && accept && (<p className="text-[red]">{err}</p>)}
                      </div>
                      <div className="mb-2" >
                          <label className="w-full font-medium" htmlFor="age">Age</label>
                          <input 
                          className="w-full rounded-[3px] border-[1px] px-3 py-2 border-[gray] border-solid mt-1" 
                          placeholder="Age..." type="number" name="age" id="age" 
                          onChange={HandleChange}/>
                          {Form.age === "" && accept && (<p className="text-[red]">{err}</p>)}
                      </div>
                      <div className="mb-2">
                          <p className="w-full font-medium">Gender</p>
                          <div className="flex items-center">
                              <input value="male" 
                              className="cursor-pointer rounded-[3px] border-[1px] px-3 py-2 border-[gray] border-solid mt-1" 
                              type="radio" name="gender" id="male"
                              checked={Form.gender === "male"}
                              onChange={HandleChange} />
                              <label htmlFor="male" className="ml-2 cursor-pointer">Male</label>
                          </div>
                          <div className="flex items-center">
                              <input value="female" 
                              className="cursor-pointer rounded-[3px] border-[1px] px-3 py-2 border-[gray] border-solid mt-1" 
                              type="radio" name="gender" id="female" 
                              checked={Form.gender === "female"}
                              onChange={HandleChange}/>
                              <label htmlFor="female" className="ml-2 cursor-pointer">Female</label>
                          </div>
                          {Form.gender === "" && accept && (<p className="text-[red]">{err}</p>)}
                      </div>
                      <div className="mb-2">
                          <p className="w-full font-medium">Type</p>
                          <select name="type" id="type" defaultValue={Form.type} onChange={HandleChange} 
                          className="w-full cursor-pointer rounded-[3px] border-[1px] px-3 py-2 border-[gray] border-solid mt-1">
                              <option value="Cat">Cat</option>
                              <option value="Dog">Dog</option>
                          </select>
                          {Form.type === "" && accept && (<p className="text-[red]">{err}</p>)}
                      </div>
                      <div className="mb-2">
                          <p className="w-full font-medium">Color</p>
                          <select name="color" id="color" defaultValue={Form.color} onChange={HandleChange}
                          className="w-full cursor-pointer rounded-[3px] border-[1px] px-3 py-2
                           border-[gray] border-solid mt-1">
                              <option value="black">black</option>
                              <option value="white">white</option>
                              <option value="gray">gray</option>
                              <option value="brown">brown</option>
                              <option value="orange">orange</option>
                              <option value="cream">cream</option>
                          </select>
                          {Form.color === "" && accept && (<p className="text-[red]">{err}</p>)}
                      </div>
                      <div className="mb-2">
                          <label className="w-full font-medium" htmlFor="address">Address</label>
                          <input 
                          className="w-full rounded-[3px] border-[1px] px-3 py-2 border-[gray] border-solid mt-1" 
                          placeholder="Address..." type="text" name="address" id="address"
                          onChange={HandleChange} />
                          {Form.address === "" && accept && (<p className="text-[red]">{err}</p>)}
                      </div>
                      <div className="mb-2">
                          <label className="w-full font-medium" htmlFor="city">City</label>
                          <input 
                          className="w-full rounded-[3px] border-[1px] px-3 py-2 border-[gray] border-solid mt-1" 
                          placeholder="City..." type="text" name="city" id="city" 
                          onChange={HandleChange}/>
                          {Form.city === "" && accept && (<p className="text-[red]">{err}</p>)}
                      </div>
                      <div className="mb-2">
                          <label className="w-full font-medium" htmlFor="phone">Phone</label>
                          <input 
                          className="w-full rounded-[3px] border-[1px] px-3 py-2 border-[gray] border-solid mt-1" 
                          placeholder="Phone..." type="text" name="phone" id="phone" 
                          onChange={HandleChange}/>
                          {Form.phone === "" && accept && (<p className="text-[red]">{err}</p>)}
                      </div>
                      <div className="mb-2">
                          <label className="w-full font-medium" htmlFor="breed">Breed</label>
                          <input 
                          className="w-full rounded-[3px] border-[1px] px-3 py-2 border-[gray] border-solid mt-1" 
                          placeholder="Breed..." type="text" name="breed" id="breed" 
                          onChange={HandleChange}/>
                          {Form.breed === "" && accept && (<p className="text-[red]">{err}</p>)}
                      </div>
                      <div className="mb-2 flex justify-between">
                          <div className="input-weight w-[45%]">
                              <label className="w-full font-medium" htmlFor="weight">Weight</label>
                              <input 
                              className="w-full rounded-[3px] border-[1px] px-3 py-2 border-[gray] border-solid mt-1" 
                              placeholder="Weight..." type="number" name="weight" id="weight" 
                              onChange={HandleChange}/>
                              {Form.weight === "" && accept && (<p className="text-[red] text-center">{err}</p>)}
                          </div>
                          <div className="input-typeWeight  w-[45%]">
                              <p className="w-full font-medium">Type Weight</p>
                              <select name="typeWeight" id="typeWeight" defaultValue={Form.typeWeight} onChange={HandleChange}
                              className="w-full cursor-pointer rounded-[3px] border-[1px] px-3 py-2 border-[gray] border-solid mt-1">
                                  <option value="kilogram">kilogram</option>
                                  <option value="pound">pound</option>
                              </select>
                          </div>
                      </div>
                      <button 
                            className={`w-full rounded-[3px] mt-4 bg-[#59bbda] py-2 text-lg text-[#fff] 
                            ${isLoading ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                            disabled={isLoading} 
                            >
                            {isLoading? <BeatLoader color="#fff" /> : <span>Add pet</span>}
                      </button>
                  </form>
              </div>
          </header>
      </FlexSection>
      </>
  )
}

export default CreateCard