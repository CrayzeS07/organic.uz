import React from "react";
import "./App.css";
import { MainLayout } from "./Layout/mainPage/main-layout";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./Layout/Home/home";
import { About } from "./Layout/About/about";
import { NotFound } from "./Layout/errorPage/404NotFound";
import { Shop } from "./Layout/shop/shop";
import { ShopSingli } from "./Layout/Home/HomeData/ShopSingle";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="not" element={<NotFound />} />
          <Route path="shop" element={<Shop />} />
          <Route path="shop/:ShopSingli" element={<ShopSingli />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
