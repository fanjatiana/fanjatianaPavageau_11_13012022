import LogoKasa from "../components/Logo";
import Nav from "../components/Nav";
import "../styles/Header.css";
import {Link}  from "react-router-dom";

const Header = () => {
  return (
    <header className="bloc-header">
      <Link to="/">
        <h1>
          <LogoKasa />
        </h1>
      </Link>
      <Nav />
    </header>
  );
};

export default Header;
