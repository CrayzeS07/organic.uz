import React from "react";
import Data2 from "./data2";
import Data3 from "./data3";
import { AboutData, AboutData2 } from "./aboutData";

export const AbboutData1 = () => {
  return (
    <div className="flex gap-[65px] mt-[46px]">
      {AboutData.map((V) => (
        <Data2 key={V.id} img={V.img} text={V.text} />
      ))}
    </div>
  );
};
export const AbboutData2 = () => {
  return (
    <div className="flex gap-[30px] justify-center">
      {AboutData2.map((N) => (
        <Data3 key={N.id} title={N.title} img={N.img} text={N.text} />
      ))}
    </div>
  );
};
import { Odam2 } from "./AbboutD1";
import { Odamlar } from "./aboutData";

export const OdamData = () => {
  return (
    <>
      <div className="flex gap-[27px] justify-center mt-[42px]">
        {Odamlar.map((Odam) => (
          <Odam2
            key={Odam.id}
            odam={Odam.odam}
            name={Odam.name}
            kasb={Odam.kasb}
            instagram={Odam.instagram}
            Facebook={Odam.Facebook}
            twiter={Odam.twiter} />
        ))}
      </div>
    </>
  )
}