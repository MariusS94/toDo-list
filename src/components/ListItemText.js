import React from "react";
import styled from "@emotion/styled";

const ContainerItemText = styled.div`
  display: flex;
`;

const SpanPrimary = styled.span`
  flex-grow: 1;
`;

function ListItemText({ primary, secondary }) {
  return (
    <ContainerItemText className="listItemText">
      <SpanPrimary className="listItemText__primary">{primary}</SpanPrimary>
      <span>{secondary}</span>
    </ContainerItemText>
  );
}

export default ListItemText;
