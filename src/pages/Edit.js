import React from "react";
import "../App.css";

const Edit = () => {
  return (
    <>
      <header className="app__header">Edit list</header>
      <main className="app__main edit_main">
        <input
          className="inputfield"
          placeholder="add to do list point"
        ></input>
        <button className="submitBtn">submit</button>
      </main>
    </>
  );
};

export default Edit;
