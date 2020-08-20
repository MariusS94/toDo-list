import React from "react";
/* import { fetchToDos } from "../api/todos"; */
/* import ListItemText from "../components/ListItemText"; */
/* import "../App.css"; */
/* import ListItem from "../components/ListItem";
import useAsync from "../hooks/useAsync";
import { fetchToDos } from "../api/todos"; */
import MainHome from "../components/MainHome";
import Header from "../components/Header";
import styled from "@emotion/styled";
import Footer from "../components/Footer";

const ContainerHome = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

function Home() {
  /* const { data: tasks, loading, error } = useAsync(fetchToDos); */

  return (
    <ContainerHome>
      <Header>To do list</Header>
      <MainHome></MainHome>
      <Footer></Footer>
    </ContainerHome>
  );
}

export default Home;
