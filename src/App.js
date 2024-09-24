import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage.jsx";
// import SignUp from "./pages/SignUp/SignUp.jsx";
// import VerifyEmail from "./pages/VerifyEmail/VerifyEmail.jsx";
import FindPets from "./pages/find-pets/FindPets.jsx";
import CardDetails from "./pages/card-details/CardDetails.jsx";
import ProtectedRouter from "./components/protectedRouter/ProtectedRouter.jsx";
import ErrorSection from "./components/error/ErrorSection";
import ForgetPassword from "./pages/forget-password/ForgetPassword.jsx";
import ResetPassword from "./pages/reset-password/ResetPassword.jsx";
import MessageResetPassword from "./pages/reset-password/MessageResetPassword.jsx";
import Login from "./pages/login/Login.jsx";

const App = () => {
  return (
    <>
     <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/signup" element={<SignUp />} /> */}
          {/* <Route path="/verifyEmail" element={<VerifyEmail />} /> */}
          <Route path='/login' element={<Login />}/>
          <Route path="/find-a-pet" element={<FindPets />} />
          <Route path="/pet/:id" element={
              <ProtectedRouter>
                  <CardDetails />
              </ProtectedRouter>
          } />
          <Route path="/no-data" element={<ErrorSection />} />
          <Route path="/forgot-password" element={<ForgetPassword /> } />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/successfull-reset-password" element={<MessageResetPassword />} />
          
      </Routes> 
    </>
  );
};

export default App;