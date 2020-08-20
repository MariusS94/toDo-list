import React from "react";

import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const FooterApp = styled.div`
  background: var(--bg-gradient);
  text-align: center;
  padding: 1.5em;
  display: flex;
  justify-content: center;
  justify-content: space-between;
  text-decoration: none;
`;

const Footer = () => {
  return (
    <FooterApp>
      <div>
        <Link className="home" to="/">
          HOME
        </Link>
      </div>
      <div>
        <Link className="edit" to="/edit">
          EDIT LIST
        </Link>
      </div>
    </FooterApp>
  );
};

export default Footer;
