import React from "react";
import { Route, Routes } from "react-router-dom";
import { dataKasa } from "./data";
import About from "./pages/About";
import Home from "./pages/Home";
import LodgingPage from "./pages/LodgingPage";
import NotFound from "./pages/NotFound";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/A-propos" element={<About />} />
        <Route path="*" element={<NotFound />} />
        {dataKasa &&
          dataKasa.length > 0 &&
          dataKasa.map((item) => (
            <Route path={item.id} element={<LodgingPage />} />
          ))}
      </Routes>
    </>
  );
};

export default Router;
