import React from "react";
/* import { fetchToDos } from "../api/todos"; */
import ListItemText from "../components/ListItemText";
import "../App.css";
import ListItem from "../components/ListItem";
import useAsync from "../hooks/useAsync";
import { fetchToDos } from "../api/todos";

function Home() {
  const { data: tasks, loading, error } = useAsync(fetchToDos);

  /* const [tasks, setTasks] = useState(null); */

  /* useEffect(() => {
    async function fetchData() {
      const toDos = await fetchToDos();
      setTasks(toDos);
    }
    fetchData();
  }, []); */

  return (
    <>
      <header className="app__header">To do list</header>
      <main className="app__main">
        {error && <div>ERROR!</div>}
        {loading && <div>Loading...</div>}
        {tasks?.map((tasks) => (
          <ListItem key={tasks.id}>
            <ListItemText
              primary={tasks.task}
              secondary={tasks.done.toString()}
            />
          </ListItem>
        ))}
      </main>
    </>
  );
}

export default Home;
