import React from "react";
import { useState } from "react/cjs/react.development";
import goToPreviousIcon from "../assets/arrow_left.svg";
import gotToNextIcon from "../assets/arrow_right.svg";
import "../styles/Carousel.css";

const Carousel = (props) => {
  console.log(props);
  const { imgSrc } = props;
  const [index, setNewIndex] = useState(0);
  const lastIndex = imgSrc.length - 1;
  console.log(lastIndex);
  // Si nous sommes sur la 1ère image (index = 0) retour à la dernière image de la gallerie (lastIndex)
  const backToLastPicture = index === 0;
  // Si nous sommes sur la dernière image (index = lastIndex) retour à la 1ère image de la gallerie (index = 0)
  const backToFirstPicture = index === lastIndex;

  // ligne 27 ternaire: si + d'une image présence d'icône précédent et suivant, sinon pas d'icône
  return (
    <div className="carousel_container">
      <div className="block_currentImage">
        <img className="currentImg" src={imgSrc[index]} alt="" />
      </div>
      <p className="page-counter">
        {index + 1}/{imgSrc.length}
      </p>
      {imgSrc.length > 1 ? (
        <div className="block_carousel-icon">
          <div
            className="goToPreviousIcon"
            onClick={() => {
              const newIndex = backToLastPicture ? lastIndex : index - 1;
              setNewIndex(newIndex);
            }}
          >
            <img src={goToPreviousIcon} alt="icone aller au précédent" />
          </div>
          <div
            className="goToNextIcon"
            onClick={() => {
              const newIndex = backToFirstPicture ? 0 : index + 1;
              setNewIndex(newIndex);
            }}
          >
            <img src={gotToNextIcon} alt="icone aller au suivant" />
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Carousel;
