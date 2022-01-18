import React from "react";
import Banner from "../container/Banner";
import Main from "../container/Main";
import img_homePage from "../assets/img_homePage.jpg";
import "../styles/Home.css"


const Home = () => {
  
  return (
    <>
      <Banner 
      imgSrc = {img_homePage}
      title = {"Chez vous, partout et ailleurs"}
      />
      <Main />
    </>
  );
};

export default Home;
