import React from "react"
const HomD4 = ({ id, reytings, text }) => {
    return (
        <>
            <div className="w-[211px] h-[211px] rounded-full bg-[#F1F1F1] border-4 border-solid border-[#7EB693]" key={id}>
                <h3 className="text-[50px] text-DarkSlateGray  font-extrabold mt-[44px] font-Roboto" >{reytings}</h3>
                <p className=" text-[18px] text-DarkSlateGray font-semibold font-Roboto">{text}</p>
            </div>
        </>
    )
}

export default HomD4
