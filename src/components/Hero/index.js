import React from "react";
import styled from "styled-components";
import bg_hero from "../../images/bg_hero.jpg";

const HeroMain = styled.div`
  height: 400px;
  background: url(${bg_hero}) no-repeat center center/cover;
  position: relative;
  z-index: -999;
`;

export default function Hero() {
  return <HeroMain></HeroMain>;
}
