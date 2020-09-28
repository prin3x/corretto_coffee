import React from "react";
import { Button } from "antd";
import ".//Header.style.scss";
import {
  CoffeeOutlined,
  HeartOutlined,
  QrcodeOutlined,
} from "@ant-design/icons";

const buttonStyle = {
  borderRadius: "20px",
  textTransform: "uppercase",
  padding: "1.25rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  fontWeight: "500",
};

const Header = () => {
  return (
    <div>
      <section className='header'>
        <div className='circle-light circle-light-1'></div>
        <div className='circle-light circle-light-2'></div>
        <div className='circle-light circle-light-3'></div>

        <div className='header__content-container'>
          <div className='header__brand'>
            <h3 className='heading-3'> </h3>
          </div>
          <div className='header__highlight-text'>
            <h1 className='heading-1'>
              Fresh Coffee <span className='heading-1 space'>Everyday</span>
            </h1>
          </div>
          <div className='header__cta'>
            <Button style={buttonStyle} href='#preview'>
              Shop Now
            </Button>
          </div>
          <div className='header__subcontent'>
            <div className='header__subcontent__container header__subcontent__container--1'>
              <div className='header__subcontent--icon'>
                <CoffeeOutlined style={{ fontSize: "4rem" }} />
              </div>
              <div className='header__subcontent--text'>
                <h4 className='heading-4'>Brew from our secret sauce</h4>
                <p className='subtext--light'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                  nostrum at tempore quaerat molestiae illo
                </p>
              </div>
            </div>
            <div className='header__subcontent__container header__subcontent__container--2'>
              <div className='header__subcontent--icon'>
                <HeartOutlined style={{ fontSize: "4rem" }} />
              </div>
              <div className='header__subcontent--text'>
                <h4 className='heading-4'>Brew from our secret sauce</h4>
                <p className='subtext--light'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                  nostrum at tempore quaerat molestiae illo
                </p>
              </div>
            </div>
            <div className='header__subcontent__container header__subcontent__container--2'>
              <div className='header__subcontent--icon'>
                <QrcodeOutlined style={{ fontSize: "4rem" }} />
              </div>
              <div className='header__subcontent--text'>
                <h4 className='heading-4'>Brew from our secret sauce</h4>
                <p className='subtext--light'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                  nostrum at tempore quaerat molestiae illo
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
