import { BrowserRouter } from "react-router-dom";
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
