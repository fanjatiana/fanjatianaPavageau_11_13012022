import img_homePage from "../assets/img_homePage.jpg";
import "../styles/Banner.css";

function Banner() {
  return (
    <div className="banner">
      <div className="bg_filter">
        <img src={img_homePage} alt="img cote sauvage" />
      </div>
      <h2>Chez vous, partout et ailleurs</h2>
    </div>
  );
}

export default Banner;
