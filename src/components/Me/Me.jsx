import {useState,  useEffect , createContext , useMemo } from 'react';
// api
import API_BASE_URL from '../../api';
import axios from "axios";

export const userContext = createContext();

// import Setting from "../Setting/Setting.jsx";
import Loading from "../Loading/Loading.jsx";

function Me({children}) {
    const [userData , setUserData]=useState([]);
    const [isLoading , setIsLoading] = useState(true);
    const [Error , setError] = useState(null);
    let fetchUserData = async () => {
        setIsLoading(true); 
        setError(null);
        try {
            let res = await axios.get(`${API_BASE_URL}customers/me`, {
                withCredentials: true,
            });
            console.log(res.data.data.data)
            setUserData(res.data.data.data);
        }
        catch (err) {
            console.log(err);
            if(err.status === 500){
                setError("Opps , Something went very wrong!")
            }
        }
        finally {
            console.log("finally finish");
            setIsLoading(false);
        }
    }
    useEffect(()=>{
        fetchUserData();
    } , []);

    const providerValue = useMemo(() => ({ userData }), [userData]);

    if (isLoading || Error) {
        return( 
        <div className="w-full h-screen flex justify-center items-center">
                <Loading />
        </div>
        )};

    return (
        <userContext.Provider value={providerValue}>
          {children}
        </userContext.Provider>
    
    );
};




// function User({userData }){
//     return(
//         <>
//             <div className="px-4 py-3">
//                 <span className="block text-xl text-light dark:text-white">{userData.name}</span>
//                 <span className="block text-[16px] text-[gray] truncate dark:text-gray-400">{userData.email}</span>
//             </div>
//         </>
//     )
// }

export default Me;
