import React from "react";
import "./Footer.style.scss";
import {
  FacebookFilled,
  LinkedinFilled,
  InstagramFilled,
  YoutubeFilled,
} from "@ant-design/icons";

const iconStyle = {
  fontSize: "1.4rem",
  padding: "0 0.3rem",
};

const Footer = () => {
  return (
    <section className='footer__container'>
      <div className='footer__content__container'>
        <div className='footer__text'>&copy; 2020 All Rights Reserved</div>
        <div className='footer__contact-icon'>
          <FacebookFilled style={iconStyle} />
          <LinkedinFilled style={iconStyle} />
          <InstagramFilled style={iconStyle} />
          <YoutubeFilled style={iconStyle} />
        </div>
      </div>
    </section>
  );
};

export default Footer;
