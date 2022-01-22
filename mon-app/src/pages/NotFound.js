import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/NotFound.css";
const NotFound = () => {
  return (
    <main className="notFound_container">
      <div className="error-message">
        <h2>404</h2>
        <p>Oups! La page que vous demandez n'existe pas.</p>
      </div>
      <div className="link_backToHome">
        <NavLink to="/">Retourner sur la page d'accueil</NavLink>
      </div>
    </main>
  );
};

export default NotFound;
