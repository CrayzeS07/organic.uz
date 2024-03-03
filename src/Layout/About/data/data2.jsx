import React from "react";

const Data2 = ({ id, img, text }) => {
  return (
    <div className="zavods flex" key={id}>
      <img className="w-[46px] h-[46px] mt-[5px]" src={img} alt="img" />
      <p className=" text-[25px] text-DarkSlateGray font-medium leading-[29.3px] w-[226px] ml-[15px]">
        {text}
      </p>
    </div>
  );
};

export default Data2;


