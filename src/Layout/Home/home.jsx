import React from "react";
import { BannerHome } from "./homeImg/imgdata";
import Strek from "../About/abboutimg/Aerrow.png";
import { BannerHome2, Wome12, BannerCustome, BannerHome3, Star1, Tabiyat } from "./homeImg/imgdata";
import { HomD11, HomD12, HomD13 } from "./HomeData/HomD1";
import fructi from "./homeImg/fructi.jpg"
import { HomD14, HomD15, ByCards } from "./HomeData/HomD1";

export const HomePage = () => {
  return (
    <>
      <div className="HomePage">
        <div className="Banner ">
          <BannerHome />
        </div>
        <div className="HomeBannerPage pt-[247px] ml-[260px]">
          <p className="text-[36px] font-normal text-yashil font-Yellowtail">
            100% Natural Food
          </p>

          <h3 className=" text-[50px] font-extrabold text-DarkSlateGray w-[474px] leading-[58.59px] mt-[8px] font-Roboto">
            Choose the best healthier way of life
          </h3>
          <button className="w-[220px] h-[75px] rounded-[16px] bg-[#EFD372] flex justify-center mt-[23px] hover:bg-[#fff] border-[1px] border-[#EFD372]  duration-200">
            <p className="text-[20px] text-DarkSlateGray font-bold mt-[20px] ">
              Explore Now
            </p>
            <img className="ml-[10px] mt-[28px]" src={Strek} alt="" />
          </button>
        </div>
      </div>
      <div className="container">
        <div className="HomePageCard mt-[450px] ">
          <BannerHome2 />
        </div>
      </div>
      <div className="HomrPageFructi flex mt-[207px] bg-[#F9F8F8]">
        <div className="FructiPage ml-[40px]">
          <BannerHome3 />
        </div>
        <div className="FructiCard mt-[100px]">
          <p className="text-[36px] font-normal text-yashil font-Yellowtail">
            About Us
          </p>
          <h3 className="text-[50px] font-extrabold text-DarkSlateGray w-[702px] leading-[58.59px] mt-[8px] font-Roboto">
            We Believe in Working Accredited Farmers
          </h3>
          <p className="text-[18px] font-normal  text-CityColor w-[690px] mt-[14px]">
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
          <HomD11 />
          <div className="mt-[58px]">
            <button className="w-[220px] h-[75px] rounded-[16px] bg-DarkSlateGray flex justify-center ">
              <p className="text-[20px] text-[#fff] font-bold mt-[20px]  ">
                {" "}
                Explore More
              </p>
              <img
                className="ml-[10px] mt-[28px]"
                src={Strek}
                alt="img
                "
              />
            </button>
          </div>
        </div>
      </div>
      <div className="Tavar text-center mt-[126px]">
        <p className="text-[36px] font-normal text-yashil font-Yellowtail">
          Categories{" "}
        </p>
        <h3 className="text-[50px] font-extrabold text-DarkSlateGray leading-[58.59px] mt-[8px]">
          Our Products{" "}
        </h3>
      </div>
      <div className="TavarPage mt-[40px] w-[1400px] justify-center ml-[260px]">
        <HomD12 />
        <div className="btnTAVAR flex justify-center mt-[122px]">
          <button className="w-[220px] h-[75px] rounded-[16px]  bg-DarkSlateGray flex justify-center mt-[23px] ">
            <p className="text-[20px] text-[#fff] font-bold mt-[20px]  ">
              Explore Now
            </p>
            <img className="ml-[10px] mt-[28px]" src={Strek} alt="" />
          </button>
        </div>
      </div>
      <div className="Customer mt-[200px] h-[1267px]">
        <BannerCustome />
        <div className="page12 text-center pt-[164px]">
          <p className="text-[36px] font-normal text-yashil font-Yellowtail">
            Testimonial
          </p>
          <h3 className="text-[50px] font-extrabold  text-DarkSlateGray leading-[58.59px] mt-[8px] font-Roboto">
            What Our Customer Saying?
          </h3>
        </div>
        <div className="Reyting ">
          <div className="flex justify-center mt-[51px]">
            <Wome12 />
          </div>
          <div className="reytingStars flex justify-center mt-[20px]">
            <Star1 />
          </div>
          <div className=" text-center  text-[18px] font-normal text-CityColor flex justify-center mt-[25px]">
            <p className="w-[780px]">Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
          </div>
          <p className=" text-center text-[25px] font-semibold text-DarkSlateGray mt-[20px]">Sara Taylor</p>
        </div>
        <HomD13 />
      </div>
      <div className="Ta h-[1050px] bg-DarkSlateGray " >
        <div className="PageTavar flex">
          <div className="Offer  pt-[201px] pl-[259px] ">
            <p className="text-[36px] font-normal text-yashil font-Yellowtail">Offer</p>
            <h3 className="text-[50px] text-[#fff] font-extrabold font-Roboto">We Offer Organic For You</h3>
          </div>
          <div className="PageBtn mt-[238px] ml-[564px]">
            <button className="w-[220px] h-[75px] rounded-[16px] bg-[#EFD372] flex justify-center mt-[23px] hover:bg-[#fff] border-[1px] border-[#EFD372]  duration-200">
              <p className="text-[20px] text-DarkSlateGray font-bold mt-[20px] ">
                Explore Now
              </p>
              <img className="ml-[10px] mt-[28px]" src={Strek} alt="" />
            </button>
          </div>
        </div>
        <div className="TavarPage mt-[40px] w-[1400px] justify-center ml-[260px]">
          <HomD14 />
        </div>
      </div>
      <div className="flex">
        <div>
          <Tabiyat />
        </div>
        <div className="h-[723px] mt-[100px] bg-[#fff] ml-[-80px] w-[1000px] rounded-[30px]">
          <p className="mt-[78px] ml-[89px] text-[36px] text-yashil font-Yellowtail font-normal">Eco Friendly</p>
          <h3 className=" text-[50px] font-Roboto font-extrabold text-DarkSlateGray w-[600px] ml-[98px]">Econis is a Friendly
            Organic Store</h3>
          <div className="ml-[89px] mt-[35px]">
            <h4 className=" text-[25px] text-DarkSlateGray font-Roboto font-medium">
              Start with Our Company First
            </h4>
            <p className=" text-[18px] font-normal  text-[#525C60] w-[635px]">Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.
            </p>
            <h4 className=" text-[25px] text-DarkSlateGray font-Roboto font-medium">
              Learn How to Grow Yourself
            </h4>
            <p className=" text-[18px] font-normal  text-[#525C60] w-[635px] mt-[35px]">Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</p>
            <h4 className=" text-[25px] text-DarkSlateGray font-Roboto font-medium">
              Farming Strategies of Today
            </h4>
            <p className=" text-[18px] font-normal  text-[#525C60] w-[635px] mt-[35px]">
              Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.
            </p>
          </div>
        </div>
      </div>
      <div className=" h-[688px]">
        <HomD15 />
      </div>
      <div>
        <div className="Ta h-[1050px]" >
          <div className="PageTavar flex">
            <div className="Offer  pt-[201px] pl-[259px] ">
              <p className="text-[36px] font-normal text-yashil font-Yellowtail">News</p>
              <h3 className="text-[50px] w-[702px] text-DarkSlateGray font-extrabold font-Roboto">Discover weekly content about organic food, & more</h3>
            </div>
            <div className="PageBtn mt-[238px] ml-[478px]">
              <button className="w-[220px] h-[75px] rounded-[16px] bg-[#fff] flex justify-center mt-[23px] duration-200 border-[2px] border-[#274C5B]">
                <p className="text-[20px] text-DarkSlateGray font-bold mt-[20px] ">
                  Explore Now
                </p>
                <img className="ml-[10px] mt-[28px]" src={Strek} alt="" />
              </button>
            </div>
          </div>
          <div>
          </div>
        </div>
        <div className="mt-[-550px] h-[815px]">
          <ByCards />
        </div>
      </div>
      <div className="Gmile12 flex justify-center ">
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
