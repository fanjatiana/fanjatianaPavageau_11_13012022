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
            <NavLink to={`/Hebergement/${item.id}`}>
              <div className="bg_filter">
                <img className="cards_img" alt="" src={item.cover} />
              </div>
              <h3 className="cards">{item.title}</h3>
            </NavLink>
          </article>
        ))}
    </>
  );
};

export default Cards;
