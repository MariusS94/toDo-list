import React, { useState } from "react";
import styled from "@emotion/styled";
import { postToDos } from "../api/todos";

const AddTaskInput = styled.input`
  padding: 0.5em;
  width: 100%;
  border-radius: 1em;
  border: none;
  align-self: center;
  align-self: start;
  font-size: 1.1em;
  margin-top: 0.4em;
`;

const SubmitBtn = styled.button`
  border-radius: 1em;
  padding: 0.5em 3em;
  margin: 1em;
  background: #527ae8;
  align-self: center;
  justify-self: center;
  align-self: flex-end;
  margin-bottom: 4em;
  font-size: 1.1em;
`;

const AddForm = () => {
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
    <form onSubmit={handleSubmit}>
      <AddTaskInput
        placeholder="Add new task"
        value={task}
        onChange={handleChangeTask}
      ></AddTaskInput>
      <input
        className="checkbox"
        type="checkbox"
        value={done}
        onChange={handleClickDone}
      ></input>
      <SubmitBtn type="submit" value="Add task" disabled={!task || loading}>
        Submit
      </SubmitBtn>
      {error && <p>Something unexpected happend 🤷‍♂️. Please try later.</p>}
    </form>
  );
};

export default AddForm;
