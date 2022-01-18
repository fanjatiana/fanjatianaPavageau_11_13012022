import { dataKasa } from "../data";
import "../styles/Cards.css";
import "../styles/Banner.css";
import { NavLink } from "react-router-dom";

const Cards = () => {
  console.log(dataKasa);
  return (
    <>
      {dataKasa &&
        dataKasa.length > 0 &&
        dataKasa.map((item) => (
          <article className="card" key={item.id}>
            <NavLink className="link_go-to-lodging-page" to={`/Hebergement/${item.id}`}>
              <div
                className="img_bg-filter"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5)100%),url(${item.cover})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "end",
                  borderRadius: "10px",
                  width: "340px",
                  height: "340px",
                }}
              >
              <h3 className="cards">{item.title}</h3>
              </div>
            </NavLink>
          </article>
        ))}
    </>
  );
};

export default Cards;
