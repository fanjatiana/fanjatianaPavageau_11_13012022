import { dataKasa } from "../data";
import "../styles/Cards.css";
import '../styles/Banner.css';

const Cards = () => {
  console.log(dataKasa);
  return (
    <>
      {dataKasa &&
        dataKasa.length > 0 &&
        dataKasa.map((item) => (
          <article className="card">
            <a href="#" id={item.id} title="">
              <div className="bg_filter">
                <img className="cards_img" alt="" src={item.cover} />
              </div>
              <h3 className="cards">{item.title}</h3>
            </a>
          </article>
        ))}
    </>
  );
};

export default Cards;
