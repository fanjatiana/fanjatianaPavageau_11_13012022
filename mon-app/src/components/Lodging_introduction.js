import React from "react";
import "../styles/Lodging_introduction.css";
import Ratings from "./Ratings";

const LodgingIntroduction = (props) => {
  const { lodgingTitle, location, tagList, SrcPicture, name, nbStars } = props;
  return (
    <div className="block_introduction">
      <div className="location_lodging">
        <h2>{lodgingTitle}</h2>
        <p>{location}</p>
        <ul>
          {tagList.map((tag) => (
            <li>{tag}</li>
          ))}
        </ul>
      </div>
      <div>
        <div className="about_lodging">
          <img src={SrcPicture} alt="emetteur de l'annonce" />
          <p>{name}</p>
        </div>
        <Ratings
        number = {parseInt(nbStars) }/>
      </div>
    </div>
  );
};

export default LodgingIntroduction;
