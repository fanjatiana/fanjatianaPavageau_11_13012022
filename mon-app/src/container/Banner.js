import "../styles/Banner.css";

function Banner(props) {
  const {imgSrc, title} = props;
  return (
    <div className="banner">
      <div className="bg_filter">
        <img src={imgSrc} alt="" />
      </div>
      <h2>{title}</h2>
    </div>
  );
}

export default Banner;
