import React from "react";

const HomD3 = ({ id, img, title, prise, TotalPrise, Star }) => {
  window.scrollTo({
    top: 600,
    left: 0,
    behavior: 'smooth',
  });
  return (
    <>
      <div onClick={() => window.scrollBy} className=" scroll-smooth w-[335px] h-[500px] bg-[#fff] rounded-[30px] duration-300  shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] mt-[20px] ">
        <div key={id}>
          <button className="w-[96px] h-[31px] bg-DarkSlateGray rounded-[8px]  text-[#fff] mt-[20px] ml-[30px]">
            Vegetable
          </button>
          <img className="w-[375px] h-[375px]" src={img} alt="img" />
          <h3 className="text-[20px] font-semibold text-DarkSlateGray ml-[30px]">
            {title}
          </h3>
          <div className="w-[274.99px] ml-[30px]">
            <hr />
          </div>
          <div className="Reyting flex">
            <span className="text-[15px] text-[#B8B8B8] font-bold ml-[30px] mt-[10px]">
              {prise}
            </span>
            <span className="text-[18px] text-[#274C5B] font-bold ml-[8px] mt-[10px]">
              {TotalPrise}
            </span>
            <img
              className="w-[84px] h-[20px] ml-[81px] mt-[10px]"
              src={Star}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomD3;

