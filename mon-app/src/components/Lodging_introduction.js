import React from "react";

const LodgingIntroduction = (props) => {
  const { lodgingTitle, location, tagList, SrcPicture, name } = props;
  return (
    <div className="block_introduction">
      <div className="location_logdging">
        <h2>{lodgingTitle}</h2>
        <p>{location}</p>
        <ul>
        {tagList.map((tag)=>(<li>{tag}</li>))}
        </ul>
      </div>
      <div>
        <div className="about_lodgding">
          <img src={SrcPicture} alt="photo de l'emetteur de l'annonce" />
          <p>{name}</p>
        </div>
        <div className="rating">rating</div>
      </div>
    </div>
  );
};

export default LodgingIntroduction;
