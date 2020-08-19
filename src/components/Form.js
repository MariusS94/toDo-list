import React from "react";
import "../App.css";

const AddForm = () => {
  return (
    <form>
      <input className="inputfield" placeholder="add to do list point"></input>
      <input type="checkbox"></input>
      <button className="submitBtn">submit</button>
    </form>
  );
};

export default AddForm;
