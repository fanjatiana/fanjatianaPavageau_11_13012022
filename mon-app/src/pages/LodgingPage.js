import React from "react";
import { useParams } from "react-router-dom";
import BlockCollapse from "../components/Block_collapse";
import LodgingIntroduction from "../components/Lodging_introduction";
import "../styles/Lodging-page.css";
import Carousel from "../container/Carousel";
import { useFetchItemById } from "../hooks";
import NotFound from "./NotFound";

const LodgingPage = () => {
  let params = useParams();
  const id = params.id;
  const { data, isLoading, error } = useFetchItemById("../data.json", id);
  console.log(data)
  if (error) {
    return (
      <>
        <NotFound />
      </>
    );
  }
  return isLoading ? (
    <div>Is Loading</div>
  ) : (
    <main>
      <Carousel imgSrc={data.pictures} />
      <LodgingIntroduction
        lodgingTitle={data.title}
        location={data.location}
        tagList={data.tags}
        SrcPicture={data.host.picture}
        name={data.host.name}
        nbStars={data.rating}
      />
      <div className="block-collapse_container">
        <BlockCollapse title={"Description"} text={data.description} />
        <BlockCollapse title={"Equipement"} text={data.equipments} />
      </div>
    </main>
  );
};

export default LodgingPage;
