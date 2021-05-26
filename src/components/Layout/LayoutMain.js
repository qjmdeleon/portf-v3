import React from "react";
import Navbar from "../Navbar";
import styled from "styled-components";
import Hero from "../Hero";
import Avatar from "../Avatar";
import Details from "../Details";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  z-index: 10;

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
`;

export default function LayoutMain() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <AppContainer>
        <Avatar />
        <Details />
      </AppContainer>
    </Router>
  );
}
