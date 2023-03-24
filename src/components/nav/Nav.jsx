import React from "react";
import "./nav.css";
import { FaHome } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { IoMdContact } from "react-icons/io";
import { useState } from "react"; /* to change the background color when on click */
const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <FaHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <FaUserAlt />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <IoMdContact />
      </a>
    </nav>
  );
};

export default Nav;
