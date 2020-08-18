import React from "react";
import "./ListItem.css";

function ListItem({ children }) {
  return <p className="listItem">{children}</p>;
}

export default ListItem;
