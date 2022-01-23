
import "../styles/Cards.css";
import "../styles/Banner.css";
import { NavLink } from "react-router-dom";
import { useFetch } from "../hooks";
import NotFound from "../pages/NotFound";

const Cards = () => {
  const { data, isLoading, error } = useFetch("/data.json");

  if (error) {
    return (
      <>
      <NotFound/>
      </>
    );
  }
  return isLoading ? (
    <div>Is Loading</div>
  ) :  (
    <>
      {data.map((item) => (
          <article className="card" key={item.id}>
            <NavLink className="link_go-to-lodging-page" to={`/Hebergement/${item.id}`}>
              <div
                className="img_bg-filter"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5)100%),url(${item.cover})`,
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
