import React from "react";
import fructi from "../Home/homeImg/fructi.jpg"
import { ShopImgP } from "./ShopImg/ShopImg";
import { HomD12 } from "../Home/HomeData/HomD1";
import { HomD14 } from "../Home/HomeData/HomD1";

export const Shop = () => {
  return <>
    <div className="ShopHome">
      <div className="ShopBanner">
        <ShopImgP />
        <div className="TavarPage mt-[40px] w-[1400px] justify-center ml-[260px]">
          <HomD12 />
          <HomD14 />
        </div>
      </div>
    </div>
    <div className="Gmile12 flex justify-center mt-[140px]">
      <div className="Gmail w-[1400px] h-[323px]">
        <img className="rounded-[20px] z-[-8] absolute" src={fructi} alt="" />
        <div className="subscribe flex  ml-[71px]">
          <div className="sub1">
            <h2 className="text-[50px] text-[#fff] font-extrabold w-[380px] mt-[105px]">Subscribe to
              our Newsletter
            </h2>
          </div>
          <div className="sub2 mt-[121px] ml-[326px] ">
            <input className="w-[349px] h-[80px] rounded-[16px] outline-none px-[23px] text-[18px] italic font-normal text-[#ABABAB]" type="email" placeholder="Your Email Address" />
            <button className="ml-[8px] w-[220px] h-[80px] bg-DarkSlateGray text-[#fff] font-bold text-[20px] rounded-[16px] hover:bg-[#fff] hover:text-DarkSlateGray  duration-300">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  </>;
};
