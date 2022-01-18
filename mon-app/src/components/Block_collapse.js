import React from "react";
import { useState } from "react/cjs/react.development";
import "../styles/Block_collapse.css";
import "../styles/Lodging_introduction.css";


const BlockCollapse = (props) => {
  const [isCollapsed, setIsCollapsed] = useState("collapsed");
  const { title, text } = props;
  return (
    <div className="collapse_container ">
      <button
        className="collapse-button"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <h3 className="collapse-h3">{title}</h3>
        <i className={`fas fa-chevron-down ${isCollapsed ? "" : "rotate"}`}></i>
      </button>
      <div
        className={`collapse-content ${isCollapsed ? "collapsed" : "expanded"}`}
        aria-expanded={isCollapsed}
      >
        {typeof text === "string" ? (
          <p className="collapse_about">{text}</p>
        ) : (
          <ul>
            {text.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
export default BlockCollapse;
