import React from "react";
import "./ListItemText.css";

function ListItemText({ primary }) {
  return (
    <div className="listItemText">
      <span className="listItemText__primary">{primary}</span>
      <input type="checkbox"></input>
    </div>
  );
}

export default ListItemText;
