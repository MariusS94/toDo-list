import React, { useState } from "react";
import "../App.css";
import { postToDos } from "../api/todos";

const Edit = () => {
  const [task, setTask] = useState("");
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  function handleChangeTask(event) {
    setTask(event.target.value);
  }

  function handleClickDone() {
    setDone(true);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setError(false);

    const todo = {
      task,
      done,
    };
    try {
      await postToDos(todo);
      setTask("");
      setDone(false);
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
    }
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
          <input
            className="submitBtn"
            type="submit"
            value="Add task"
            disabled={!task || loading}
          ></input>
          {error && <p>Something unexpected happend 🤷‍♂️. Please try later.</p>}
        </form>
      </main>
    </>
  );
};

export default Edit;
