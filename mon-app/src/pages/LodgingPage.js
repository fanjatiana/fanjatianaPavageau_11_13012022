import React from "react";
import { useParams } from "react-router-dom";
import LodgingIntroduction from "../components/Lodging_introduction";
import Banner from "../container/Banner";
import { dataKasa } from "../data";


const LodgingPage = () => {
  let params = useParams();
  const id = params.id
  const currentItem = dataKasa.find((item) => item.id === id)
  const currentTaglist = []
  const tagsOnJson = currentItem.tags.map((tag)=> (currentTaglist.push(tag)))
  return (
    <>
     <LodgingIntroduction
     lodgingTitle = {currentItem.title}
     location ={currentItem.location}
     tagList={currentTaglist}
     SrcPicture ={currentItem.host.picture}
     name = {currentItem.host.name}
     />
    </>
  );
};

export default LodgingPage;
