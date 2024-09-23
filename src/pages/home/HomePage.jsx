import React from "react";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import SectionsHome from "./SectionsHome";
import JoinSection from "../../components/JoinSection/JoinSection";
const HomePage =()=>{
    return(
        <>
            <Header />
            <SectionsHome />
            <JoinSection />
            <Footer />
        </>
    )
}

export default HomePage;