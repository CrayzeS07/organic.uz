import React from "react";
import { useParams } from "react-router-dom";
import { HomData1 } from "./HomData";
import strelka from "../../About/abboutimg/Aerrow.png"
import banner12 from "../homeImg/banner12.svg";
import fructi from "../homeImg/fructi.jpg"
import { HomData2 } from "./HomData";
import { HomD14 } from "./HomD1";

export const ShopSingli = () => {
  const params = useParams();
  const Crayzes1 = HomData1.find((B) => B.id === Number(params.ShopSingli));
  const Crayzes2 = HomData2.find((X) => X.id === Number(params.ShopSingli));
  const Crayzes = { ...Crayzes1, ...Crayzes2 };
  return (
    <>
      <div className="container">
        <div className="ShopSingli">
          <div className="data1">
            <img src={banner12} alt="" />
          </div>
          <div className="tavarSotish flex mt-[114px] ml-[257px]">
            <div className="CardTavar">
              <img className="w-[591px] h-[563px] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded-[40px]" src={Crayzes.img} alt="Tavar" />
            </div>
            <div className="Tavars1 tavar12 ml-[83px] text-[40px] text-DarkSlateGray font-semibold">
              <h3>{Crayzes.title}</h3>
              <img src={Crayzes.Star} alt="" />
              <span className="text-[20px] text-[#B8B8B8] font-bold mt-[10px]">{Crayzes.prise}</span>
              <span className="text-[25px] text-[#274C5B] font-bold ml-[8px] mt-[10px]">{Crayzes.TotolPrise}</span>
              <p className="text-[18px] font-light text-[#525C60] w-[550px] mt-[20px]">
                Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
              </p>
              <div className="tavarSoni flex">
                <p className="text-[20px] text-DarkSlateGray font-bold mt-[30px]">Quantity :</p>
                <div className="input123 ml-[22px]">
                  <form className="max-w-xs mx-auto">
                    <label htmlFor="quantity-input" className="block mb-2 text-sm font-medium text-DarkSlateGray dark:text-white">
                      Choose quantity:
                    </label>
                    <div className="relative flex items-center max-w-[8rem]">
                      <button type="button" id="decrement-button" data-input-counter-decrement="quantity-input" className="bg dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                        <svg className="w-3 h-3 text-DarkSlateGray dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                        </svg>
                      </button>
                      <input
                        type="text"
                        id="quantity-input"
                        data-input-counter
                        aria-describedby="helper-text-explanation"
                        className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="0"
                        required
                      />
                      <button type="button" id="increment-button" data-input-counter-increment="quantity-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                        <svg className="w-3 h-3 text-DarkSlateGray dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                        </svg>
                      </button>
                    </div>
                  </form>
                </div>
                <div className="btn mt-[10px] ml-[20px]">
                  <button className="w-[220px] h-[75px] rounded-[16px] bg-DarkSlateGray flex justify-center ">
                    <p className="text-[20px] text-[#fff] font-bold mt-[20px]">Explore More</p>
                    <img className="ml-[10px] mt-[28px]" src={strelka} alt="img" />
                  </button>
                </div>
              </div>
            </div>

          </div>
          <div className="pduct mt-[90px] flex justify-center gap-[20px]">
            <button className=" bg-DarkSlateGray w-[330px] h-[65px] text-[#fff] text-[25px] font-bold rounded-[16px] border-[1px] duration-300 border-DarkSlateGray hover:bg-[#fff] hover:text-DarkSlateGray  ">Product Description</button>
            <button className="w-[290px] h-[65px] bg-[#EFF6F1] text-[25px] font-bold text-DarkSlateGray hover:bg-DarkSlateGray hover:text-[#fff] rounded-[16px] duration-300">Additional Info</button>
          </div>
          <div className="text flex justify-center mt-[27px]">
            <p className="w-[1137px] text-center text-[18px] text-[#525C60] font-medium">Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.</p>
          </div>
          <h2 className=" text-center mt-[140px]  text-[50px] text-DarkSlateGray font-extrabold">Related Products</h2>
        </div>
        <div className="tavarA">
          <div className="TavarPage mt-[40px] w-[1400px] justify-center ml-[260px]">
            <HomD14 />
          </div>
        </div>
        <div className="pageFructi">
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
    </>
  );
};
