import React from "react";

export const Odam2 = ({ id, odam, name, kasb, instagram, Facebook, twiter }) => {
    return (
        <>
            <div className=" bg-[#F9F8F8] rounded-[25px] hover:bg-[#fff] hover:shadow-[0px_20px_35px_0px_#A7A7A740] duration-300 h-[616px]" key={id}>
                <img className="rounded-[25px]" src={odam} alt="img" />
                <div className=" flex ml-[28px]">
                    <div>
                        <h3 className=" text-[25px] text-DarkSlateGray font-Roboto font-extrabold mt-[35px]">{name}</h3>
                        <p className=" text-[22px] font-normal text-yashil font-Yellowtail">{kasb}</p>
                    </div>
                    <div className="flex gap-[17px]  mt-[74px]">
                        <img className=" ml-[100px] w-[22.33px] h-[21.37px]" src={instagram} alt="img" />
                        <img className=" w-[22.33px] h-[21.37px]" src={Facebook} alt="Facebook" />
                        <img className=" w-[22.33px] h-[21.37px]" src={twiter} alt="img" />
                    </div>
                </div>
            </div>
        </>
    )
}