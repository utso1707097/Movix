import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import { Link } from "react-router-dom";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          Copyright &copy; 2023-2024, Md Samaul Haque Malik. All rights
          reserved.
          <br />
          This website is not affiliated with any movie studios or production
          companies.
          <br />
          Contact us: utso097.csekuet@gmail.com
        </div>
        <div className="socialIcons">
          <Link to="https://www.facebook.com/utso.97/" target="_blank">
            <span className="icon">
              <FaFacebookF />
            </span>
          </Link>
          <Link to="https://www.instagram.com/uts_o_/" target="_blank">
            <span className="icon">
              <FaInstagram />
            </span>
          </Link>
          <Link to="https://twitter.com/MalikSamaul" target="_blank">
            <span className="icon">
              <FaTwitter />
            </span>
          </Link>
          <Link
            to="https://www.linkedin.com/in/md-samaul-haque-malik-193521191/"
            target="_blank"
          >
            <span className="icon">
              <FaLinkedin />
            </span>
          </Link>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
