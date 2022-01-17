import React from "react";
import { useParams } from "react-router-dom";
import BlockCollapse from "../components/Block_collapse";
import LodgingIntroduction from "../components/Lodging_introduction";
import "../styles/Lodging-page.css"
import { dataKasa } from "../data";
import Carousel from "../container/Carousel";

const LodgingPage = () => {
  let params = useParams();
  const id = params.id;
  const currentItem = dataKasa.find((item) => item.id === id);
  const currentTaglist = [];
  currentItem.tags.map((tag) => currentTaglist.push(tag));
  const currentEquipmentList = [];
  currentItem.equipments.map((item) => currentEquipmentList.push(item));

  return (
    <main>
      <Carousel
      imgSrc = {currentItem.pictures}/>
      <LodgingIntroduction
        lodgingTitle={currentItem.title}
        location={currentItem.location}
        tagList={currentTaglist}
        SrcPicture={currentItem.host.picture}
        name={currentItem.host.name}
        nbStars = {currentItem.rating}
      />
      <div className="block-collapse_container">
        <BlockCollapse title={"Description"} text={currentItem.description} />
        <BlockCollapse title={"Equipement"} text={currentEquipmentList} />
      </div>
    </main>
  );
};

export default LodgingPage;
