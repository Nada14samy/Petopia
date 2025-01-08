import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import SectionsHome from "./SectionsHome";
import JoinSection from "../../components/JoinSection/JoinSection";
const HomePage =()=>{
    return(
        <div className="w-full overflow-x-hidden">
            <Header />
            <SectionsHome />
            <JoinSection />
            <Footer />
        </div>
    )
}

export default HomePage;