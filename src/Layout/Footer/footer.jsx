import React from "react";
import logo from "./img/Logo.jpg"
import img1 from "./img/1.png"
import img2 from "./img/2.png"
import img3 from "./img/3.png"
import img4 from "./img/4.png"

export const Footer = () => {
  return <>
    <div className="Footer mt-[117px] ml-[311px] text-right flex">
      <div className=" w-[285px] h-[307px]">
        <h2 className="text-[30px] text-DarkSlateGray font-bold font-Roboto text-right">
          Contact Us
        </h2>
        <h3 className=" text-[18px] font-Roboto font-extrabold text-[#525C60] text-right mt-[30px]">Email</h3>
        <a href="https://mail.google.com/mail/u/0/#inbox"><p className="text-[18px] font-normal font-Roboto text-[#525C60]">CrayzeSNtBlog@gmail.com</p></a>
        <h3 className=" text-[18px] font-Roboto font-extrabold text-[#525C60] text-right mt-[30px]">
          Phone
        </h3>
        <p className="text-[18px] font-normal font-Roboto text-[#525C60] " >93 635 96 07</p>
        <h3 className=" text-[18px] font-Roboto font-extrabold text-[#525C60] text-right mt-[30px]">Address</h3>
        <p className="text-[18px] font-normal font-Roboto text-[#525C60] " >Uzbekistan, Jizzakh</p>
      </div>
      <hr />
      <div className=" w-[543px] h-[245px] ml-[92px]">
        <div className="flex justify-center">
          <img src={logo} alt="" />
        </div>
        <p className="text-[18px] font-normal font-Roboto text-[#525C60]  text-center mt-[23px]">Simply dummy text of the printing and typesetting industry.
          Lorem Ipsum simply dummy text of the printing </p>
        <div className="flex gap-[15px] justify-center mt-[49px]">

          <img src={img1} alt="img" />
          <img src={img2} alt="img" />
          <img src={img3} alt="img" />
          <img src={img4} alt="img" />
        </div>
      </div>
      <hr />
      <div className="w-[285px] h-[304px] text-left ml-[92px]">
        <h2 className="text-[30px] text-DarkSlateGray font-bold font-Roboto ">Utility Pages</h2>
        <div className="text-[18px] font-normal font-Roboto text-[#525C60]">
          <p className="leading-[48px]">Ptyle Guide</p>
          <p className="leading-[48px]">404 Not Found</p>
          <p className="leading-[48px]">Password Protected</p>
          <p className="leading-[48px]">Licences</p>
          <p className="leading-[48px]">Changelog</p>
        </div>
      </div>
    </div>
    <div className="mt-[18px]">
      <hr />
      <h3 className=" text-center font-Roboto font-semibold text-DarkSlateGray text-[20px]">Site creator CrayzeS. 03/03/2024</h3>
    </div>
  </>;
};
