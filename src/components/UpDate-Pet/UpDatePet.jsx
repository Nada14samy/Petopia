import { useState } from "react";
import { useParams } from "react-router-dom";
// components
import InputComponent from "../Generics/InputComponent.jsx";
import ButtonComponent from "../Generics/ButtonComponent.jsx";
// icons
import { FaHeart } from "react-icons/fa";
import axios from "axios";
import API_BASE_URL from "../../api.js";

const UpDatePet = () => {
  const { idPet } = useParams();
  const [Form , setForm]= useState({
         
          description : "",
          name : "",
          age: "",
          gender : "",
          type: "",
          color: "",
          address : "",
          city: "",
          phone: "",
          breed: "",
          weight: "",
          typeWeight: "",
      });
      const [inputError , setInputError] = useState("");
      const [err , setErr] = useState("");
      // const [accept , setAccept] = useState(true);
      const [isLoading , setIsLoading] = useState(false);
      // handle change inputs
      const HandleChange = (e)=> setForm({...Form , [e.target.name] : e.target.value});

      const HandleSubmit = async (e)=>{
        e.preventDefault();
        setIsLoading(true);
        // setAccept(false);
        setErr("");
        const filteredForm = Object.fromEntries(
          Object.entries(Form).filter(([key, value]) => value.trim() !== "")
        );
        if (Object.keys(filteredForm).length === 0) {
          setIsLoading(false);
          setErr("Please fill in at least one field");
          return;
        }
        try{
          let res = await axios.patch(`${API_BASE_URL}pets/${idPet}`, filteredForm ,{
            withCredentials: true,
          });
          console.log(res);
        }catch(err){
          console.log(err);
        }finally{
          setIsLoading(false)
        }
      }

  return (
    <>
      <section className="w-full h-fit my-7 flex flex-col justify-between gap-8">
        <div className='flex items-center gap-5'>
          <span className='text-[35px] text-primary'>
            <FaHeart />
          </span>
          <h3 className="text-[40px]">Update Pet</h3>
        </div>
        <div className="w-full h-fit flex justify-center">
        <div className="w-[450px] p-7 h-fit shadow-[1px_1px_10px_gray] rounded-xl">
          {err && (<p className="text-err text-center py-4 px-3 mb-5 border-[1px] border-err border-solid">{err}</p>)}
          <form className="flex flex-col w-full m-auto" onSubmit={HandleSubmit}>
            {/* <div className="mb-2">
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
                                                cursor-pointer pb-[2px]" onClick={() => HandleDelete(index)}>&times;</span>
                    </div>
                  ))
                }
              </div>
              <p className="text-[red] text-center ">{inputError} </p>
              {Form.imageUrl.length > 3 && Form.imageUrl.length === 0   && (<p className="text-[red]">{err}</p>)}
            </div> */}
            <div className="mb-2">
              <label className="w-full font-medium" htmlFor="dis">Write about your animal</label>
              <textarea rows={5} className="w-full rounded-[3px] border-[1px] px-3 py-2 border-[gray] border-solid mt-1"
                placeholder="Ex. my animal is looking for home" id="dis" value={Form.description} name="description"
                onChange={HandleChange} />
              
            </div>
            <div className="mb-2">
              <InputComponent
              label={"Name"}
              htmlFor={"name"}
                placeholder="Name..." 
                type="text" 
                name="name" 
                id="name"
                onChange={HandleChange} 
                />
            </div>
            <div className="mb-2" >
              <InputComponent
              label={"Age"}
              htmlFor={"age"}
                placeholder="Age..." 
                type="number" 
                name="age" 
                id="age"
                onChange={HandleChange} />
            </div>
            <div className="mb-2">
              <p className="w-full font-medium">Gender</p>

              <div className="flex items-center">
                <input value="male"
                  className="cursor-pointer rounded-[3px] border-[1px] px-3 py-2 border-[gray] border-solid mt-1"
                  type="radio" 
                  name="gender"
                  id="male"
                  checked={Form.gender === "male"}
                  onChange={HandleChange} />
                <label htmlFor="male" className="ml-2 cursor-pointer">Male</label>
              </div>

              <div className="flex items-center">
                <input value="female"
                  className="cursor-pointer rounded-[3px] border-[1px] px-3 py-2 border-[gray] border-solid mt-1"
                  type="radio" 
                  name="gender"
                  id="female"
                  checked={Form.gender === "female"}
                  onChange={HandleChange} />
                <label htmlFor="female" className="ml-2 cursor-pointer">Female</label>
              </div>
            </div>

            <div className="mb-2">
              <p className="w-full font-medium">Type</p>
              <select name="type" id="type" defaultValue={Form.type} onChange={HandleChange}
                className="w-full cursor-pointer rounded-[3px] border-[1px] px-3 py-2 border-[gray] border-solid mt-1">
                <option value="Cat">Cat</option>
                <option value="Dog">Dog</option>
              </select>
            
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
            </div>

            <div className="mb-2">
              <InputComponent
              label={"Address"}
              htmlFor={"address"}
                placeholder="Address..." 
                type="text"
                name="address" 
                id="address"
                onChange={HandleChange} />
            </div>

            <div className="mb-2">
              <InputComponent
              label={"City"}
              htmlFor={"city"}
                placeholder="City..." 
                type="text" 
                name="city" 
                id="city"
                onChange={HandleChange} />
            </div>

            <div className="mb-2">
              <InputComponent
              label={"Phone"}
              htmlFor={"phone"}
                placeholder="Phone..." 
                type="text" 
                name="phone" 
                id="phone"
                onChange={HandleChange} />
            </div>

            <div className="mb-2">
              <InputComponent
              label={"Breed"}
              htmlFor={"breed"}
                placeholder="Breed..." 
                type="text" 
                name="breed" 
                id="breed"
                onChange={HandleChange} />
            </div>

            <div className="mb-2 flex justify-between">
              <div className="input-weight w-[45%]">
                <InputComponent
                label={"Weight"}
                htmlFor={"weight"}
                  placeholder="Weight..." 
                  type="number" 
                  name="weight" 
                  id="weight"
                  onChange={HandleChange} />
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
            <ButtonComponent isLoading={isLoading} >Save</ButtonComponent>
          </form>
        </div>
        </div>
      </section>
    </>
  )
}

export default UpDatePet;
