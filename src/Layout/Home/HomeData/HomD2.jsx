import React from "react";

const HomD2 = ({ id, img, title, text }) => {
  return (
    <>
      <div className="flex mt-[48px]">
        <div key={id}>
          <img src={img} alt="" />
        </div>
        <div className="ml-[19px]">
          <h3 className=" text-DarkSlateGray font-extrabold text-[25px]">
            {title}
          </h3>
          <p className="text-[18px] text-CityColor w-[444px] mt-[7px]">
            {text}
          </p>
        </div>
      </div>
    </>
  );
};

export default HomD2;
