import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
const HeaderSocials = () => {
  return (
    <div className="header__socials" target="_blank">
      <a href="https://linkedin.com" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com" target="_blank">
        <FiGithub />
      </a>
      <a href="https://leetcode.com" target="_blank">
        <SiLeetcode />
      </a>
    </div>
  );
};

export default HeaderSocials;
