import "./Footer.css";
import { FooterOverlay, Newsletter } from "../../components";

import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import React from "react";
import { images } from "../../constants";

const Footer = () => {
  return (
    <div className="app__footer section__padding">
      <FooterOverlay />
      <Newsletter />

      <div className="app__footer-links">
        <div className="app__footer-links_contact ">
          <h1 className="app__footer-headtext">Contact Us</h1>
          <p className="p__opensans">9 W 54rk, New Yor, Ny 100019, Usa</p>
          <p className="p__opensans">+1 314-145-2345</p>
          <p className="p__opensans">+1 314-145-2345</p>
        </div>
        <div className="app__footer-links_logo">
          <img src={images.gericht} alt="footer logo" />
          <p className="p__opensans">
            The best way to find yourself in the service of others
          </p>
          <img
            src={images.spoon}
            alt="spoon img"
            className="spoon__img"
            style={{ marginTop: "15px" }}
          />
          <div className="app__footer-links_icons">
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>
        <div className="app__footer-links_work">
          <h1 className="app__footer-headtext">Working Hours</h1>
          <p className="p__opensans">Monday-Friday:</p>
          <p className="p__opensans">08:00 am - 12:00 am</p>
          <p className="p__opensans">Saturday_Sunday</p>
          <p className="p__opensans">07:00 am - 11:00 am</p>
        </div>
      </div>
      <div className="footer__copyright">
        <p className="p__opensans">2021 Gericht. All Right reserved</p>
      </div>
    </div>
  );
};

export default Footer;
