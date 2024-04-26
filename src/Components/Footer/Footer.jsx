import React from "react";
import "./Footer.css";
import logo from "../../Images/logo.png";

const Footer = () => {
  return (
    <div id="footer-container">
      <div id="footer-text-container">
        <div style={{ marginLeft: "5%" }}>
          <img src={logo} id="footer-logo" />
          <p id="footer-description">
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve single objective - your
            business results.
          </p>
        </div>
        <div className="footer-technologies">
          <p className="footer-column-titles">Our Technologies</p>
          <ul>
            <li>React Js</li>
            <li>Gatsby</li>
            <li>NextJS</li>
            <li>NodeJS</li>
          </ul>
        </div>
        <div className="footer-technologies">
          <p className="footer-column-titles">Our Services</p>
          <ul>
            <li>Social media Marketing</li>
            <li>Web & Mobile App Development</li>
            <li>Data & Analytics</li>
          </ul>
        </div>
      </div>
      <hr id="footer-horizontal-line" />
      <p id="privacy-term">Privacy Policy | Terms & Conditions</p>
    </div>
  );
};

export default Footer;
