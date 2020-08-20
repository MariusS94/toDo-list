import React from "react";
import styled from "@emotion/styled";

const ListContainer = styled.div`
  border-bottom: solid 1px;
  padding: 1em;
`;

function ListItem({ children }) {
  return <ListContainer className="listItem">{children}</ListContainer>;
}

export default ListItem;
