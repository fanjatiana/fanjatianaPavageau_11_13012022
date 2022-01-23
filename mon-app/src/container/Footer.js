import "../styles/Footer.css";
import logo_nb from "../assets/logo_nb.jpg";

const Footer = () => {
  return (
    <footer className="container_footer">
      <img src={logo_nb} alt="" className="reverse-color" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
