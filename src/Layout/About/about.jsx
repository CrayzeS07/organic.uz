import React from "react";
import { Banner } from "./abboutimg/ImgAbbout";
import { Mewalar } from "./abboutimg/ImgAbbout";
import { AbboutData1 } from "./data/AboutData1";
import Aerrow from "./abboutimg/Aerrow.png";
import { AbboutData2 } from "./data/AboutData1";
import { Image1 } from "./abboutimg/ImgAbbout";
import { OdamData } from "./data/AboutData1";

export const About = () => {
  return (
    <>
      <div className="About">
        <div className="Banner">
          <Banner />
        </div>
        <div className="AbboutUss mt-[120px] flex">
          <div className="Mewalar">
            <Mewalar />
          </div>
          <div className="Suces ml-[30px] mt-[20px]">
            <p className="text-[36px] font-normal text-yashil font-Yellowtail">
              About Us
            </p>
            <h3 className="text-[50px] font-extrabold text-DarkSlateGray w-[474px] leading-[58.59px] mt-[8px]">
              We do Creative Things for Success
            </h3>
            <p className="text-[18px] font-normal  text-CityColor w-[671px] mt-[14px]">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley. <br /> <br />{" "}
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </p>
            <div className="data12">
              <AbboutData1 />
            </div>
            <div className="mt-[58px]">
              <button className="w-[220px] h-[75px] rounded-[16px] bg-DarkSlateGray flex justify-center ">
                <p className="text-[20px] text-[#fff] font-bold mt-[20px]  ">
                  {" "}
                  Explore More
                </p>
                <img
                  className="ml-[10px] mt-[28px]"
                  src={Aerrow}
                  alt="img
                "
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F9F8F8] mt-[30px] h-[1429px]">
        <div className="container">
          <div className="Abbout-Page1 ml-[260px] pt-[190px] flex">
            <div className="Page1">
              <p className="text-[36px] font-normal text-yashil font-Yellowtail">
                Why Choose us?
              </p>
              <h3 className="text-[50px] font-extrabold text-DarkSlateGray w-[524pxpx] leading-[58.59px] ">
                We do not buy from the <br /> open market & traders.
              </h3>
              <p className="text-[18px] font-normal  text-CityColor w-[671px] mt-[14px]">
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to been the industry's standard the 1500s, when
                an unknown
              </p>
              <div className="Natural1 w-[320px] h-[75px] rounded-[49px] bg-[#ECECEC] mt-[36px] text-center">
                <p className="pt-[22px] text-[20px] text-DarkSlateGray font-medium">
                  {" "}
                  🟢 100% Natural Product
                </p>
              </div>
              <p className="text-[18px] font-normal  text-CityColor w-[444px] mt-[14px]">
                Simply dummy text of the printing and typesetting industry Lorem
                Ipsum
              </p>
              <div className="Natural2  w-[320px] h-[75px] rounded-[49px] bg-[#ECECEC] mt-[24px] text-center">
                <p className="pt-[22px] text-[20px] text-DarkSlateGray font-medium">
                  🟢 Increases resistance
                </p>
              </div>
              <p className="text-[18px] font-normal  text-CityColor w-[444px] mt-[14px]">
                Filling, and temptingly healthy, our Biona Organic Granola with
                Wild Berries is just the thing
              </p>
            </div>
            <div className="Page2 ">
              <Image1 />
            </div>
          </div>
          <div className="box_bl">
            <AbboutData2 />
          </div>
        </div>
      </div>
      <div className=" text-center mt-[177px]">
        <p className="text-[36px] font-Yellowtail font-normal text-yashil">Team</p>
        <h3 className="text-[50px] font-extrabold font-Roboto text-DarkSlateGray">Our Organic Experts</h3>
        <div className="flex justify-center">
          <p className="w-[852px] text-[18px] text-[#525C60] text-center">Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
        </div>
      </div>
      <div>
        <OdamData />
      </div>
    </>
  );
};
