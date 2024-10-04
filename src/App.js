import React , {useState , useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage.jsx";
import SignUp from "./pages/SignUp/SignUp.jsx";
import VerifyEmail from "./pages/VerifyEmail/VerifyEmail.jsx";
import FindPets from "./pages/find-pets/FindPets.jsx";
import CardDetails from "./pages/card-details/CardDetails.jsx";
import ProtectedRouter from "./components/protectedRouter/ProtectedRouter.jsx";
// import ErrorSection from "./components/error/ErrorSection";
import ForgetPassword from "./pages/forget-password/ForgetPassword.jsx";
import ResetPassword from "./pages/reset-password/ResetPassword.jsx";
import MessageResetPassword from "./pages/reset-password/MessageResetPassword.jsx";
import Login from "./pages/login/Login.jsx";
import MessageForgotPassword from "./pages/forget-password/MessageForgotPassword.jsx";
import Wellcome from "./pages/wellcome/Wellcome.jsx";
import GuestRouter from "./components/GuestRouter/GuestRoute.jsx";
import NotFound from "./pages/not-found/NotFound.jsx";

const App = () => {
    const [isLoading , setIsLoading] = useState(false);
    useEffect(()=>{
        setIsLoading(true);
        setTimeout(()=>{
          setIsLoading(false);
        } , 5000);
    } , []);


  return (
    <>
      {
        isLoading ? <Wellcome /> :
          <>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/signup" element={
                <GuestRouter>
                    <SignUp />
                </GuestRouter>
                } />
              <Route path="/verifyEmail" element={
                <GuestRouter>
                    <VerifyEmail />
                </GuestRouter>
                } />
              <Route path='/login' element={
                <GuestRouter>
                    <Login />
                </GuestRouter>
                }/>
              <Route path="/find-a-pet" element={<FindPets />} />
              <Route path="/pet/:id" element={
              <ProtectedRouter>
                  <CardDetails />
              </ProtectedRouter>
          } />
              {/* <Route path="/no-data" element={<ErrorSection />} /> */}
              <Route path="/forgot-password" element={<ForgetPassword /> } />
              <Route path="/sent-email" element={<MessageForgotPassword />} />
              <Route path="/reset-password/:token" element={<ResetPassword />} />
              <Route path="/successfull-reset-password" element={<MessageResetPassword />} />
                <Route path="/not-found" element={<NotFound />} />
            </Routes>
          </>
      }
    </>
  );
};

export default App;