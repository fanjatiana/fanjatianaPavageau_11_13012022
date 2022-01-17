import React from "react";
import { useParams } from "react-router-dom";
import BlockCollapse from "../components/Block_collapse";
import LodgingIntroduction from "../components/Lodging_introduction";
import Banner from "../container/Banner";
import { dataKasa } from "../data";


const LodgingPage = () => {
  let params = useParams();
  const id = params.id
  const currentItem = dataKasa.find((item) => item.id === id)
  const currentTaglist = []
  const tagsOnJson = currentItem.tags.map((tag)=> (currentTaglist.push(tag)));

  const currentEquipmentList = []
  currentItem.equipments.map((item)=> (currentEquipmentList.push(item)));
  console.log(currentEquipmentList)


  return (
    <>
     <LodgingIntroduction
     lodgingTitle = {currentItem.title}
     location ={currentItem.location}
     tagList={currentTaglist}
     SrcPicture ={currentItem.host.picture}
     name = {currentItem.host.name}
     />
     <BlockCollapse
     title = {"Description"}  text = {currentItem.description}
     />
      <BlockCollapse
     title = {"Equipement"}  text = {currentEquipmentList}
     />
    </>
  );
};

export default LodgingPage;
