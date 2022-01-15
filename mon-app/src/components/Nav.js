import "../styles/nav.css";
import {NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="nav-links">
      <NavLink
        to="/Accueil" 
        className={({ isActive }) =>
          "header_Nav_link" + (isActive ? " activated" : "")
        }
      >
        Accueil
      </NavLink>
      <NavLink
        to="/A-propos" 
        className={({ isActive }) =>
          "header_Nav_link" + (isActive ? " activated" : "")
        }
      >
        A propos
      </NavLink>
    </div>
  );
}

export default Nav;
