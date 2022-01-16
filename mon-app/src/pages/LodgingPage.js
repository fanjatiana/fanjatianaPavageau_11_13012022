import React from "react";
import { useParams } from "react-router-dom";
import { dataKasa } from "../data";


const LodgingPage = () => {
  let params = useParams();
  const id = params.id
  const currentItem = dataKasa.find((item) => item.id === id)
  
  return (
    <>
     <h1>{currentItem.description}</h1>
    </>
  );
};

export default LodgingPage;
