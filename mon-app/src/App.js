import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import About from "./pages/About"
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element ={<Home/>} />
          <Route path="/A-propos" element ={<About/>} />
          <Route path="*" element ={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
