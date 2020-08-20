import React from "react";
import styled from "@emotion/styled";

const HeaderContainer = styled.div`
  font-size: 1.5rem;
  background: var(--bg-gradient);
  padding: 1.2em;
  display: grid;
  place-items: center;
`;

const Header = ({ children }) => {
  return <HeaderContainer>{children}</HeaderContainer>;
};

export default Header;
