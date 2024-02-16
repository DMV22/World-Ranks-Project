import React from "react";
import Banner from "../images/hero-image.jpg";
import Logo from "../images/logo.svg";

function Header() {
  return (
    <header className="header container">
      <img src={Banner} alt="Img: Banner" className="header__image" />
      <img src={Logo} alt="Img: Logo" className="header__logo" />
    </header>
  );
}

export default Header;
