import "../styles/Banner.css";

function Banner(props) {
  const { imgSrc, title, h2Style } = props;

  return (
    <div className="banner">
      <div
        className="bg_filter bg_img"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(${imgSrc})`,
        }}
      >
        <h2 style={{
          display: `${h2Style}`,
        }}>{title}</h2>
      </div>
    </div>
  );
}

export default Banner;
