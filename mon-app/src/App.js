/*import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { dataKasa } from "./data";
import LodgingPage from "./pages/LodgingPage";*/
import { BrowserRouter } from "react-router-dom";
import Banner from "./container/Banner";
import Footer from "./container/Footer";
import Header from "./container/Header";
import Router from "./Router";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
