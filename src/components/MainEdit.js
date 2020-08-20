import React from "react";
import styled from "@emotion/styled";

const MainEditContainer = styled.div`
  background: grey;
  padding: 10px;
  border: solid;
  border-width: 5px 0px;
  border-color: black;
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const MainEdit = ({ children }) => {
  return <MainEditContainer>{children}</MainEditContainer>;
};

export default MainEdit;
