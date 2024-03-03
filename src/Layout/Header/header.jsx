import React from "react";
import { Logo } from "./header_img/Logo";
import { Link } from "react-router-dom";
import { Search1 } from "./header_img/Logo";
import { Korzinka } from "./header_img/Logo";
export const Header = () => {
  return (
    <>
      <div className="HeaderBlock h-[100px]">
        <div className="container">
          <div className="header ml-[162px] mt-[40px] flex ">
            <div className="Logo">
              <Logo />
            </div>
            <div className="Header_tiltle flex gap-[40px] ml-[140px] mt-[12px] ">
              <Link to={`/`}>
                <li className="li12 text-DarkSlateGray text-[20px] font-bold font-roboto hover:text-yashil transition duration-300 ease">
                  Home
                </li>
              </Link>
              <Link to={`/about`}>
                <li className="li12 text-DarkSlateGray text-[20px] font-bold font-roboto hover:text-yashil transition duration-300 ease">
                  About
                </li>
              </Link>
              <li className="li12 text-DarkSlateGray text-[20px] font-bold font-roboto hover:text-yashil transition duration-300 ease cursor-pointer">
                Pages
              </li>
              <Link to={`/shop`}>
                <li className="li12 text-DarkSlateGray text-[20px] font-bold font-roboto hover:text-yashil transition duration-300 ease">
                  Shop
                </li>
              </Link>
              <li className="li12 text-DarkSlateGray text-[20px] font-bold font-roboto hover:text-yashil transition duration-300 ease cursor-pointer">
                Projects{" "}
              </li>
              <li className="li12 text-DarkSlateGray text-[20px] font-bold font-roboto hover:text-yashil transition duration-300 ease cursor-pointer">
                News
              </li>
            </div>
            <div className="data flex">
              <div className="inputSerach  bg-DoctorColor rounded-[36px] flex  hover:text-yashil ml-[130px] duration-300 easy">
                <input
                  className=" bg-DoctorColor w-[350px] h-[66px]  rounded-[36px] outline-none px-[40px] text-[18px] font-semibold text"
                  type="text"
                />
                <div className="img12 cursor-pointer mt-[4px] ml-[-60px]">
                  <Search1 />
                </div>
                <search />
              </div>
              <div className="korzinka w-[159px] h-[66px] rounded-[33px] flex  border-[1px] border-[#E0E0E0] ml-[18px] cursor-pointer">
                <div className="KorzinkaImg mt-[5px] ml-[6px]">
                  <Korzinka />
                </div>
                <p className=" text-DarkSlateGray text-[18px] font-bold mt-[16px] ml-[12px]">
                  Cart (0)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
