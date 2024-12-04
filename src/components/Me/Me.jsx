import {useState,  useEffect , createContext  } from 'react';
// api
import API_BASE_URL from '../../api';
import axios from "axios";

export const userContext = createContext();

import Setting from "../Setting/Setting.jsx"

function Me() {
    const [userData , setUserData]=useState([]);
    const [isLoading , setIsLoading] = useState(true);
    let fetchUserData = async () => {
        setIsLoading(true); 
        try {
            let res = await axios.get(`${API_BASE_URL}customers/me`, {
                withCredentials: true,
            });
            console.log(res.data.data.data)
            setUserData(res.data.data.data);
        }
        catch (err) {
            console.log(err);
        }
        finally {
            console.log("finally finish");
            setIsLoading(false);
        }
    }
    useEffect(()=>{
        fetchUserData();
    } , []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <userContext.Provider value={{ userData }}>
          <Setting />
        </userContext.Provider>
    
    );
};




function User({userData }){
    return(
        <>
            <div className="px-4 py-3">
                <span className="block text-xl text-light dark:text-white">{userData.name}</span>
                <span className="block text-[16px] text-[gray] truncate dark:text-gray-400">{userData.email}</span>
            </div>
        </>
    )
}

// function Profile({userData}) {
//     return(
//         <>
           
//         </>
//     )
// }







export default Me;

export {User};
// export {Profile};