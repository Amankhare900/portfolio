import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { DiGithubBadge } from "react-icons/di";
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Aman Deep Khare
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contacts">Contacts</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com">
          <FaFacebookF />
        </a>
        <a href="https://linkdin">
          <BsLinkedin />
        </a>
        <a href="https://github.com">
          <DiGithubBadge />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Aman Deep Khare, All rights reserved,</small>
      </div>
    </footer>
  );
};

export default Footer;
