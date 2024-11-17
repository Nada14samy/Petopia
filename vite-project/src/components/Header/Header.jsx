import React from "react";
import NavbarBrand from "../../components/navbar/Navbar";
import Main from "../../components/main/Main";
import bgImage from "../../images/background-image/bg.png";
const Header = () => {
  return (
    <div className="header bg-lightYellow bg-contain bg-center bg-no-repeat w-full h-[450px] mb-3 max-lg:h-fit" style={{backgroundImage: `url(${bgImage})`}}>
      <NavbarBrand />
      <header>
        <Main />
      </header>
    </div>
  );
};
export default Header;
