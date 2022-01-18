import "../styles/Banner.css";

function Banner(props) {
  const { imgSrc, title } = props;

  return (
    <div className="banner">
      <div className="bg_filter bg_img" 
      style={{  
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(${imgSrc})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display:"flex",
        justifyContent:"center",
        alignItems: "center",
        borderRadius:"25px"
      }}
        >
        <h2>{title}</h2>
      </div>
    </div>
  );
}

export default Banner;
