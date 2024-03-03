import img from "./banner23.jpg";
import React from "react";
import Cards from "./Offer.jpg";
import Photo from "./Photo.png";


export const BannerHome = () => {
  return (
    <>
      <img className="z-[-10] absolute" src={img} alt="" />
    </>
  );
};
export const BannerHome2 = () => {
  return (
    <>
      <div className=" flex justify-center">
        <img src={Cards} alt="" />
      </div>
    </>
  );
};
export const BannerHome3 = () => {
  return (
    <>
      <div>
        <img src={Photo} alt="" />
      </div>
    </>
  );
};
import customer from "./customer.png"

export const BannerCustome = () => {
  return (
    <>
      <img className=" z-[-10] absolute" src={customer} alt="uzs" /></>
  )
}
import Stars from "./Star.png"
import wome from "./wome.jpg"

export const Star1 = () => {
  return (
    <>
      <img src={Stars} alt="" />
    </>
  )
}
export const Wome12 = () => {
  return (
    <>
      <img className=" rounded-full" src={wome} alt="" />
    </>
  )
}

import tabiyat1 from "./tabiyat.jpg"
export const Tabiyat = () => {
  return (
    <>
      <img src={tabiyat1} alt="" />
    </>
  )
}