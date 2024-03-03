import React from "react";
import Strek from "../../About/abboutimg/Aerrow.png"

const HomD7 = ({ id, img, user1, }) => {
    return (
        <>
            <div className="container" key={id}>
                <div>
                    <img className="rounded-[30px] z-[-1000] absolute" src={img} alt="img" />
                </div>
                <div className="w-[82px] h-[82px] rounded-full bg-[#fff] mt-[43px] ml-[32px]">
                    <h2 className="text-[25px] font-extrabold font-Roboto leading-[25px] pt-[15px] text-center text-DarkSlateGray w-[36px] ml-[23px]">25 Nov</h2>
                </div>
                <div className="w-[613px] h-[330px] bg-[#fff] mt-[162px] ml-[32px] rounded-[31px] flex justify-center shadow-[0px_20px_35px_0px_#A7A7A740]">
                    <div>
                        <div className="flex gap-[8px] mt-[46px]">
                            <img className="w-[18px] h-[20px]" src={user1} alt="img" />
                            <p className=" text-DarkSlateGray text-[18px] font-Roboto font-normal">By Rachi Card</p>
                        </div >
                        <h3 className=" mt-[15px] text-[25px] font-Roboto font-extrabold text-DarkSlateGray">The Benefits of Vitamin D & How to Get It</h3>
                        <p className="text-[18px] text-[#525C60] font-Roboto font-normal w-[444px]">Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                        <button className="w-[220px] h-[75px] rounded-[16px] bg-[#EFD372] flex justify-center mt-[23px] hover:bg-[#fff] border-[1px] border-[#EFD372]  duration-200">
                            <p className="text-[20px] text-DarkSlateGray font-bold mt-[20px] ">
                                Explore Now
                            </p>
                            <img className="ml-[10px] mt-[28px]" src={Strek} alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomD7;
