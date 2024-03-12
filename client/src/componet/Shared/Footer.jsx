import React from "react";
import Container from "./Container";
import { CiFacebook } from "react-icons/ci";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { TiSocialTwitterCircular } from "react-icons/ti";

import logo from "../../assets/logo/Group 1000008504 (1).svg";

const Footer = () => {
  return (
    <>
      <Container>
        <footer className="background h-full xl;lg:md:h-[110px]  mt-[600px] xl:lg:md:mt-0 ">
          <div className="xl:lg:md:flex xl:lg:md:justify-around  pt-2 xl:lg:md:py-10">
            <div className="justify-center flex">
              <img className="rounded-lg shadow-md" src={logo} alt="" />
            </div>
            <div className="justify-center flex pt-2 gap-5 text-white text-[16px] font-Value_Sans_Pro_one ">
              <span>Terms</span>
              <span>Privacy</span>
              <span>Cookies</span>
            </div>
            <div className="justify-center flex gap-3 text-white ">
              <TiSocialLinkedinCircular className="text-4xl" />
              <CiFacebook className="text-4xl" />
              <TiSocialTwitterCircular className="text-4xl" />
            </div>
          </div>
        </footer>
      </Container>
    </>
  );
};

export default Footer;
