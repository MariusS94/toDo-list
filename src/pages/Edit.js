import React from "react";
import AddForm from "../components/Form";
import MainEdit from "../components/MainEdit";
import Header from "../components/Header";
import styled from "@emotion/styled";
import Footer from "../components/Footer";

const ContainerEdit = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

const Edit = () => {
  return (
    <ContainerEdit>
      <Header className="app__header">Edit list</Header>
      <MainEdit>
        <AddForm></AddForm>
      </MainEdit>
      <Footer></Footer>
    </ContainerEdit>
  );
};

export default Edit;
