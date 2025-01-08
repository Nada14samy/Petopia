import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SectionCards from "../../components/sectionCards/SectionCards";
import JoinSection from "../../components/JoinSection/JoinSection";
import Cats_image from "../../images/section-cards/cats.png";
import Dogs_image from "../../images/section-cards/dogs.png";
import New_image from "../../images/section-cards/new.png";
import bg_cat from "../../images/homepage/Ellipse3.png";
import bg_dog from "../../images/homepage/Ellipse4.png";
import bg_new from "../../images/background-image/image19.png";

const FindPets = ()=>{
    return(
        <>
            <Header />
            <div className="w-full h-fit bg-right bg-contain bg-no-repeat" style={{backgroundImage: `url(${bg_new})`}}>
                <SectionCards type={"New"} logo={New_image} />
            </div>
            <div className="w-full h-fit bg-right bg-contain bg-no-repeat" style={{backgroundImage: `url(${bg_cat})`}}>
                <SectionCards type={"Cat"} logo={Cats_image} />
            </div>
            <div className="w-full h-fit bg-left bg-contain bg-no-repeat" style={{backgroundImage: `url(${bg_dog})`}}>
                <SectionCards type={"Dog"} logo={Dogs_image} />
            </div>
            <JoinSection />
            <Footer />
        </>
    )
}

export default FindPets;