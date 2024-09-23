import { Link } from "react-router-dom";
import bg_image from "../../images/signup/signup-bg.png";

const MessageResetPassword = ()=>{
    return(
        <>
            <section className="w-full h-screen flex justify-center items-center bg-center bg-cover bg-no-repeat max-[600px]:bg-[70%]" style={{ backgroundImage: `url(${bg_image})` }}>
                <div className="container w-[500px] max-[405px]:flex max-[405px]:flex-col max-[405px]:justify-center max-[405px]:h-screen  h-fit px-7 py-6 shadow-[0px_1px_20px_#dbd6d6] rounded-[10px]">
                    <div className="my-2 text-center">
                        <h3 className="text-2xl mb-2 text-[#59bbda] font-medium">New Home</h3>
                        <p className="mb-6 text-[23px]">Successful password reset!</p>
                        <p className="mb-6 text-[18px] px-6">You can now use your new password to login to your account</p>
                    </div>
                    <div className="w-full rounded-[3px] mt-4 bg-[#59bbda] py-2 text-center">
                        <Link to="/login" className="text-lg text-white">Login</Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MessageResetPassword;