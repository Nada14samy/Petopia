import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/home/HomePage.jsx";
// import SignUp from "./Pages/SignUp/SignUp.jsx";
// import VerifyEmail from "./Pages/VerifyEmail/VerifyEmail.jsx";
// import FindPets from "./Pages/find-pets/FindPets.jsx";
// import CardDetails from "./Pages/card-details/CardDetails.jsx";
// import ProtectedRouter from "./components/protectedRouter/ProtectedRouter.jsx";
// import ErrorSection from "./components/error/ErrorSection";
import ForgetPassword from "./Pages/forget-password/ForgetPassword.jsx";
import ResetPassword from "./Pages/reset-password/ResetPassword.jsx";
import MessageResetPassword from "./Pages/reset-password/MessageResetPassword.jsx";
const App = () => {
  return (
    <>
     <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/signup" element={<SignUp />} /> */}
          {/* <Route path="/verifyEmail" element={<VerifyEmail />} /> */}
          {/* <Route path="/find-a-pet" element={<FindPets />} /> */}
          {/* <Route path="/pet/:id" element={
              <ProtectedRouter>
                  <CardDetails />
              </ProtectedRouter>
          } /> */}
          {/* <Route path="/no-data" element={<ErrorSection />} /> */}
          <Route path="/forgot-password" element={<ForgetPassword /> } />
          {/* <Route path="/reset-password" element={<ResetPassword />} /> */}
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/successfull-reset-password" element={<MessageResetPassword />} />
      </Routes> 
    </>
  );
};

export default App;