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
        <ul className="tags_list">
          {tagList.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
      <div className="info_lodging">
        <div className="transmitter-and-rating">
          <div className="block_img">
            <img src={SrcPicture} alt="emetteur de l'annonce" />
          </div>
          <p className="transmitter_name">{name}</p>
        </div>
        <Ratings number={parseInt(nbStars)} />
      </div>
    </div>
  );
};

export default LodgingIntroduction;
