import React from "react";
import Banner from "../container/Banner";
import img_AboutPage from "../assets/img_AboutPage.jpg";
import BlockCollapse from "../components/Block_collapse";
import "../styles/About.css";

const About = () => {
  const collapseText = {
    Fiabilité:
      "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
    Respect:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    Service:
      "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    Sécurité:
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  };
  return (
    <>
      <Banner imgSrc={img_AboutPage} title="" />
      <main className="about_container">
        <BlockCollapse title={"Fiabilité"} text={collapseText.Fiabilité} />
        <BlockCollapse title={"Respect"} text={collapseText.Respect} />
        <BlockCollapse title={"Service"} text={collapseText.Service} />
        <BlockCollapse title={"Sécurité"} text={collapseText.Sécurité} />
      </main>
    </>
  );
};

export default About;
