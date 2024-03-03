import React from "react";
import { Header } from "../Header/header";
import { Footer } from "../Footer/footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import Top from "../Home/homeImg/top.png"


export const MainLayout = () => {
  return (
    <div className="container">
      <ScrollToTop width="100" height="60"  color="red" smooth component={<img className=" w-[70px] h-[40px]" src={Top} alt="img" />} />
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
