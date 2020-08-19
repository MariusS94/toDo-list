import React from "react";
import "./ListItem.css";

function ListItem({ children }) {
  return <div className="listItem">{children}</div>;
}

export default ListItem;
