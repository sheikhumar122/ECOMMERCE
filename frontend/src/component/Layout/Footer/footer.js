import React from "react";
import playStore from "../../images/playstore.png";
import appStore from "../../images/appstore.png";
import "./footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>ECOMMERCE.</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2023 &copy; umar asraar</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com/s.umar122">Instagram</a>
        <a href="http://facebook.com/sheikhumar">Facebook</a>
        <a href="http://snapchat.com/s_umar122">snapchat</a>
      </div>
    </footer>
  );
};

export default Footer;