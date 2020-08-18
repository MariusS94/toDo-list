import React from "react";
import "./ListItemText.css";

function ListItemText({ primary }) {
  return (
    <div className="listItemText">
      <span className="listItemText__primary">{primary}</span>
    </div>
  );
}

export default ListItemText;
