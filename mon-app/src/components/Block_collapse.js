import React from "react";
import { useState } from "react/cjs/react.development";
import "../styles/Block_collapse.css";

const BlockCollapse = (props) => {
  const [isCollapsed, setIsCollapsed] = useState("collapsed");
  const { title, text } = props;
  return (
    <div className="about_container">
      <button
        className="collapse-button"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {" "}
        <h3>{title}</h3>
      </button>
      <div
        className={`collapse-content ${isCollapsed ? "collapsed" : "expanded"}`}
        aria-expanded={isCollapsed}
      >
        <p>{text}</p>
      </div>
    </div>
  );
};
export default BlockCollapse;
