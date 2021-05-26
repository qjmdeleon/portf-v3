import React, { useState } from "react";
import styled from "styled-components";
import Contact from "./Contact";
import { DetailsNavData, MobileIcons } from "./detailsnavdata";
import { Switch, Link, Route } from "react-router-dom";
import Projects from "./Projects";
import Skillset from "./Skillset";
import UsuallyDo from "./UsuallyDo";
import { motion } from "framer-motion";

const DetailsContainer = styled.div`
  width: 850px;
  background: #201b1b;
  font-family: "Space Grotesk", sans-serif;
  color: #dddddd;
  overflow: hidden;

  .default__nav__model {
    @media (max-width: 1200px) {
      display: none;
    }
  }

  .mobile__nav__model {
    text-align: center;
    display: none;
    .inactive {
      padding-left: 0;
    }

    @media (max-width: 1200px) {
      display: grid;
    }
  }

  @media (max-width: 1200px) {
    width: 100vw;
  }
`;

const DetailsNav = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, auto);
  padding-top: 2rem;
  padding-left: 3rem;
  padding-bottom: 1rem;
  background: #0d0d0d;

  a {
    text-decoration: none;
    color: #fff;
  }

  .inactive {
    padding-left: 1rem;
    color: #fff;
    text-decoration: none;
  }

  .active {
    color: orange;
    text-decoration: none;
    padding-left: 1rem;
    transform: scale(1.1);
    transition: all 0.5s ease-out;
  }
`;

const Details = () => {
  const [active, setActive] = useState({
    activeObj: null,
    objects: [
      {
        id: 1,
        title: "Skillset",
        url: "#",
        to: "/skills",
        class: "details__nav__item",
        classactive: "details__nav__item active",
      },
      {
        id: 2,
        title: "Projects I've done",
        url: "#",
        to: "/projects",
        class: "details__nav__item",
        classactive: "details__nav__item active",
      },
      {
        id: 3,
        title: "What I usually do",
        url: "#",
        to: "/hobbies",
        class: "details__nav__item",
        classactive: "details__nav__item active",
      },
      {
        id: 4,
        title: "Contact",
        url: "#",
        to: "/contact",
        class: "details__nav__item",
        classactive: "details__nav__item active",
      },
    ],
  });

  function toggleActive(index) {
    setActive({ ...active, activeObj: active.objects[index] });
  }

  function toggleStyle(index) {
    if (active.objects[index] === active.activeObj) {
      return "active";
    } else {
      return "inactive";
    }
  }

  return (
    <DetailsContainer>
      <DetailsNav className="default__nav__model">
        {active.objects.map((item, index) => {
          return (
            <Link
              to={item.to}
              key={index}
              className={toggleStyle(index)}
              onClick={() => {
                toggleActive(index);
              }}
            >
              <motion.p whileHover={{ x: 5 }}>{item.title}</motion.p>
            </Link>
          );
        })}
      </DetailsNav>
      <DetailsNav className="mobile__nav__model">
        {MobileIcons.map((item, index) => {
          return (
            <Link
              to={item.to}
              key={index}
              className={toggleStyle(index)}
              // onClick={() => {
              //   toggleActive(index);
              // }}
            >
              <img src={item.img} width="25" height="25" />
            </Link>
          );
        })}
      </DetailsNav>
      <Switch>
        <Route path="/" exact>
          <Skillset />
        </Route>
        <Route path="/skills">
          <Skillset />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/hobbies">
          <UsuallyDo />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </DetailsContainer>
  );
};

export default Details;
