import {useState , useEffect , Suspense} from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage.jsx";
import SignUp from "./pages/SignUp/SignUp.jsx";
import VerifyEmail from "./pages/VerifyEmail/VerifyEmail.jsx";
import FindPets from "./pages/find-pets/FindPets.jsx";
import CardDetails from "./pages/card-details/CardDetails.jsx";
import ProtectedRouter from "./components/protectedRouter/ProtectedRouter.jsx";
import ErrorSection from "./components/error/ErrorSection";
import ForgetPassword from "./pages/forget-password/ForgetPassword.jsx";
import ResetPassword from "./pages/reset-password/ResetPassword.jsx";
import MessageResetPassword from "./pages/reset-password/MessageResetPassword.jsx";
import Login from "./pages/login/Login.jsx";
import MessageForgotPassword from "./pages/forget-password/MessageForgotPassword.jsx";
import Wellcome from "./pages/wellcome/Wellcome.jsx";
import GuestRouter from "./components/GuestRouter/GuestRoute.jsx";
import NotFound from "./pages/not-found/NotFound.jsx";
import FormAdopt from "./pages/form-adopt/FormAdopt.jsx";
import CreateCard from "./pages/create-card/CreateCard.jsx";
import AllCard from "./pages/all-card/AllCard.jsx";
import BuildingPage from "./pages/building-Page/BuildingPage.jsx";
// import ErrWebsite from "./components/err-website/ErrWebsite.jsx";
import Profile from "./pages/profile/Profile.jsx";
import Me from "./components/Me/Me.jsx";
import Edit from "./components/Edit/Edit.jsx";
import UpDataPassword from "./components/UpData-Password/UpDataPassword.jsx";
import Setting from "./components/Setting/Setting.jsx";
import Category from "./components/Category/Category.jsx";
import UpDatePet from "./components/UpDate-Pet/UpDatePet.jsx";

const App = () => {
    const [isLoading , setIsLoading] = useState(false);
    useEffect(()=>{
      window.onload = () => {
        setIsLoading(false);
      };
    } , []);


  return (
    <>
      {
        isLoading ? <Wellcome loading={isLoading} /> :
        // <Me>
          <BrowserRouter>
            <Suspense fallback={<Wellcome />}>
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
                } />
                <Route path="/find-a-pet" element={<FindPets />} />
                <Route path="/pet/:id" element={
                  <ProtectedRouter>
                    <CardDetails />
                  </ProtectedRouter>
                  } />
                <Route path="/no-data" element={<ErrorSection />} /> 
                 <Route path="/forgot-password" element={<ForgetPassword /> } /> 
                 <Route path="/sent-email" element={<MessageForgotPassword />} /> 
               <Route path="/reset-password/:token" element={<ResetPassword />} /> 
                 <Route path="/successfull-reset-password" element={<MessageResetPassword />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/form-adoption" element={
                <GuestRouter>
                  <FormAdopt />
                </GuestRouter>
              } /> 

                <Route path="/add-card-pet" element={
                  <ProtectedRouter>
                    <CreateCard />
                  </ProtectedRouter>} />
                <Route path="/all-card/:category" element={<AllCard />} />
                <Route path="/Form-Adopt" element={<FormAdopt />} />
                <Route path="/message" element={<BuildingPage />} />
                <Route path="/profile" element={<Me><Profile /></Me>}>
                  <Route index element={ <Setting /> } />
                  {/* <Route path="" element={<Setting />} /> */}
                  <Route path="setting" element={ <UpDataPassword /> } />
                  <Route path="edit" element={ <Edit /> } />
                  <Route path="category" element={ <Category /> } />
                  <Route path="category/update-pet/:idPet" element={ <UpDatePet /> } />
                </Route>
              </Routes>
            </Suspense>
          </BrowserRouter>
        // </Me>
      }
    </>
  );
};

export default App;