import React from "react";

import styled from "@emotion/styled";
import useAsync from "../hooks/useAsync";
import { fetchToDos } from "../api/todos";
import ListItem from "./ListItem";
import ListItemText from "./ListItemText";

const MainHomeContainer = styled.main`
  background: grey;
  padding: 10px;
  border: solid;
  border-width: 5px 0px;
  border-color: black;
  overflow: auto;
`;

const MainHome = () => {
  const { data: tasks, loading, error } = useAsync(fetchToDos);

  return (
    <MainHomeContainer>
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
    </MainHomeContainer>
  );
};

export default MainHome;
