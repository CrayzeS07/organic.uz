import React from "react";

const HomD6 = ({ id, img, btn }) => {
    return (
        <>
            <div className="container">
                <div key={id}>
                    <img className=" z-[-10] absolute" src={img} alt="img" />
                    <button className="w-[316px] h-[96px] bg-[#FFFFFF] rounded-[20px] mt-[244px] ml-[146px] text-[25px] font-Roboto font-medium text-DarkSlateGray">{btn}</button>
                </div>
            </div>
        </>
    );
};

export default HomD6;

