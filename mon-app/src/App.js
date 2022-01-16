import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { dataKasa } from "./data";
import LodgingPage from "./pages/LodgingPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/A-propos" element={<About />} />
          <Route path="*" element={<NotFound />} />
          {dataKasa &&
            dataKasa.length > 0 &&
            dataKasa.map((item) => (
              <Route path={item.id} element={<LodgingPage/>} />
            ))}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
