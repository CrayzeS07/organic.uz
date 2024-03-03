import React from "react";
import HomD2 from "./HomD2";
import { HomData, ReytingSite } from "./HomData";
import { Link } from "react-router-dom";

export const HomD11 = () => {
  return (
    <>
      <div>
        {HomData.map((NT) => (
          <HomD2 key={NT.id}
            img={NT.img}
            title={NT.title}
            text={NT.text} />
        ))}
      </div>
    </>
  );
};

import HomD3 from "./HomD3";
import { HomData1 } from "./HomData";

export const HomD12 = () => {
  return (
    <>
      <div className=" grid grid-cols-4 ">
        {HomData1.map((Y) => (
          <Link to={`/shop/${Y.id}`} key={Y.id}>
            <HomD3
              key={Y.id}
              img={Y.img}
              title={Y.title}
              prise={Y.prise}
              TotalPrise={Y.TotolPrise}
              Star={Y.Star}
            />
          </Link>
        ))}
      </div>
    </>
  );
};
import { HomData2 } from "./HomData";
import HomD5 from "./HomD5";


export const HomD14 = () => {
  return (
    <>
      <div className=" grid grid-cols-4">
        {HomData2.map((N) => (
          <Link to={`/shop/${N.id}`} key={N.id}>
            <HomD5
              key={N.id}
              img={N.img}
              title={N.title}
              prise={N.prise}
              TotalPrise={N.TotolPrise}
              Star={N.Star}
            />
          </Link>
        ))}
      </div>
    </>
  )
}
import HomD7 from "./HomD7";
import { byCard } from "./HomData";

export const ByCards = () => {
  return (
    <>
      <div className="flex px-[240px]">
        {byCard.map((By) => (
          <HomD7 key={By.id}
            img={By.img}
            user1={By.user} />
        ))}
      </div>
    </>
  )
}



import HomD4 from "./HomeD4";

export const HomD13 = () => {
  return (
    <>

      <div className="flex justify-center text-center gap-[62px] mt-[204px]">
        {
          ReytingSite.map((C) => (
            <HomD4 key={C.id}
              reytings={C.reytings}
              text={C.text} />
          ))
        }
      </div>
    </>
  )
}
import HomD6 from "./HomD6";
import { Banner4 } from "./HomData";

export const HomD15 = () => {
  return (
    <>
      <div className="flex justify-between mt-[134px]">
        {Banner4.map((Z) => (
          <HomD6 key={Z.id}
            img={Z.img}
            btn={Z.btn}
          />
        ))}
      </div>
    </>
  )
}