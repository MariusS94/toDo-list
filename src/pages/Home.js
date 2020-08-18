import React, { useEffect, useState } from "react";
import { fetchToDos } from "../api/todos";
import ListItemText from "../components/ListItemText";
import "../App.css";
import ListItem from "../components/ListItem";

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
      <header className="app__header">To do list</header>
      <main className="app__main">
        {tasks?.map((tasks) => (
          <ListItem>
            <ListItemText key={tasks.id} primary={tasks.task} />
          </ListItem>
        ))}
      </main>
    </>
  );
}

export default Home;
