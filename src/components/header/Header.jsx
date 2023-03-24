import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocial from "./HeaderSocials";
import ME from "../../assets/me.png";
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Aman Khare</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
      </div>
      <a href="#contact" className="scroll__down">
        scroll down
      </a>
    </header>
  );
};

export default Header;
