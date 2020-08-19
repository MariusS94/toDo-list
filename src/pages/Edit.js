import React, { useState } from "react";
import "../App.css";
import { postToDos } from "../api/todos";

const Edit = () => {
  const [task, setTask] = useState("");
  const [done, setDone] = useState(false);

  function handleChangeTask(event) {
    setTask(event.target.value);
  }

  function handleClickDone() {
    setDone(true);
  }
  async function handleSubmit(event) {
    event.preventDefault();
    const todo = {
      task,
      done,
    };
    await postToDos(todo);
    setTask("");
    setDone(false);
  }

  console.log(task);
  return (
    <>
      <header className="app__header">Edit list</header>
      <main className="app__main edit_main">
        <form onSubmit={handleSubmit}>
          <input
            className="inputfield"
            placeholder="Add new task"
            value={task}
            onChange={handleChangeTask}
          ></input>
          <input
            type="checkbox"
            value={done}
            onChange={handleClickDone}
          ></input>
          <input className="submitBtn" type="submit" value="Add task"></input>
        </form>
      </main>
    </>
  );
};

export default Edit;
