import LogoKasa from "../components/Logo";
import Nav from "../components/Nav";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="bloc-header">
      <a href="">
        <h1>
          <LogoKasa />
        </h1>
      </a>
      <Nav />
    </header>
  );
};

export default Header;