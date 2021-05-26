import React, { useState } from "react";
import styled from "styled-components";
import { NavData } from "./navdata";
import { motion } from "framer-motion";

const NavbarMain = styled.nav`
  background: #fff;
  height: 75px;
  display: flex;
  justify-content: center;
  font-family: "Space Grotesk", sans-serif;
  font-weight: 400;
`;

const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  padding: 1rem;

  .navbar__logo {
    justify-content: flex-start;

    @media (max-width: 1200px) {
      position: absolute;
      top: 5;
      left: 0;
      width: 90vw;
      padding-left: 3rem;
    }
  }

  .nav__menu {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    right: -100%;
    opacity: 1;
    transition: all 0.5s ease-out;
    overflow: hidden;

    .main__nav__item {
      color: #dddddd;
      display: flex;
      justify-content: flex-end;
      padding: 1.5rem 2.5rem;
      font-size: 1.7rem;
      font-family: "Epilogue", sans-serif;
      font-weight: 800;
      cursor: pointer;
    }

    .contain__items {
      margin-top: 5rem;
      overflow: hidden;
    }
  }

  .nav__menu.active {
    background: #201b1b;
    right: 0;
    opacity: 1;
    transition: all 0.5s ease;
    z-index: 998;
  }
  .menu-icon {
    display: none;

    .fa-times {
      color: #fff;
      font-weight: 100;
    }

    @media (max-width: 1200px) {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      position: absolute;
      top: 5.5;
      right: 0;
      width: 80vw;
      padding-right: 2.3rem;
      font-size: 25px;
      z-index: 999;
    }
  }

  .navbar__list__full {
    justify-content: center;
  }
`;

const NavbarDeskItems = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 100px;
  width: 50vw;

  a {
    text-decoration: none;
    color: #000;
    font-weight: 500;
  }

  @media (max-width: 1200px) {
    display: none;
  }
`;

export default function Navbar() {
  const [active, setActive] = useState(false);

  const clickHandler = () => {
    setActive(!active);
  };

  return (
    <NavbarMain>
      <NavbarContainer>
        <div className="navbar__logo">
          <h2>Hi I'm Marvic</h2>
        </div>
        <div className="menu-icon" onClick={clickHandler}>
          <i className={active ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={active ? "nav__menu active" : "nav__menu"}>
          <div className="contain__items">
            {NavData.map((item, index) => {
              return (
                <motion.li
                  whileHover={{ scale: 1.1, x: -50 }}
                  key={index}
                  className={item.class}
                >
                  {item.title}
                </motion.li>
              );
            })}
          </div>
        </ul>
        <NavbarDeskItems className="navbar__list__full">
          {NavData.map((item, index) => {
            return (
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.3 }}
                key={index}
                className={item.index}
              >
                <a href="#">{item.title}</a>
              </motion.li>
            );
          })}
        </NavbarDeskItems>
      </NavbarContainer>
    </NavbarMain>
  );
}
