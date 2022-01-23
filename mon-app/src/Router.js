import React from "react";
import { Route, Routes } from "react-router-dom";
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
        <Route path="/Hebergement/:id" element={<LodgingPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Router;
