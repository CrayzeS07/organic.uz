import React from "react";
const Data3 = ({ id, img, title, text }) => {
  return (
    <>
      <div
        className="data w-[257px] h-[335px] bg-[#fff] rounded-[30px] mt-[91px] text-center"
        key={id}
      >
        <img className=" ml-[79px] mt-[50px]" src={img} alt="img" />
        <h3 className="mt-[15px] text-center text-[25px] text-DarkSlateGray font-extrabold">
          {title}
        </h3>
        <p className=" text-center mt-[12px] text-[18px] text-[#525C60]">
          {text}
        </p>
      </div>
    </>
  );
};
export default Data3;
