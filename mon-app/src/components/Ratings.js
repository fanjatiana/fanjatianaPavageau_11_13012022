import React from "react";
import StarGray from "../assets/star_gray.svg";
import StarRed from "../assets/star_red.svg";
import "../styles/Rating.css";

const Ratings = (props) => {
  const { number } = props;
  const arrayStars = Array(5).fill("StarGray");
  const nbOfRating = arrayStars.map((star, index) =>
    index < number ? "StarRed" : "StarGray"
  );

  return (
    <div className="block_rating">
      <ul className="stars_list">
        {nbOfRating.map((rating, index) =>
          rating === "StarRed" ? (
            <div key={"StarRed" + index} className="star_red">
              <li>
                <img src={StarRed} alt="étoile de notation de couleur rouge" />
              </li>
            </div>
          ) : (
            <div key={"star_gray" + index} className="star_gray">
              <li>
                <img src={StarGray} alt="étoile de couleur grise(pas de note)" />
              </li>
            </div>
          )
        )}
      </ul>
    </div>
  );
};

export default Ratings;
