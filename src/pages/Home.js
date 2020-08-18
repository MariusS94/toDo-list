import React, { useEffect, useState } from "react";
import { fetchToDos } from "../api/todos";
import ListItemText from "../components/ListItemText";

function Home() {
  const [tasks, setTasks] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const toDos = await fetchToDos();
      setTasks(toDos);
    }
    fetchData();
  }, []);

  return (
    <>
      {tasks?.map((tasks) => (
        <ListItemText key={tasks.id} primary={tasks.task} />
      ))}
    </>
  );
}

export default Home;
