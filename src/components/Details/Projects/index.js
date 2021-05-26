import React from "react";
import { ProjectData } from "./projectdata";
import { motion } from "framer-motion";
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ProjectContainer = styled.div`
  padding: 1.5rem;

  h1 {
    font-size: 2.2rem;
    margin-top: 15px;
    margin-bottom: 1.5rem;
    font-family: "Epilogue", sans-serif;
    font-weight: 800;
    color: #dddddd;
  }
`;

const ProjectList = styled.ul`
  .project__card__item {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 12px;
    border: 1px solid #212121;
    border-radius: 8px;
    background: #212121;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    margin-bottom: 16px;
    cursor: pointer;

    @media (max-width: 1200px) {
      grid-template-columns: 1fr;
    }

    .img__container {
      width: 260px;
      height: 250px;
      overflow-y: hidden;
      text-align: center;
      @media (max-width: 1200px) {
        width: 800px;
      }

      img {
        width: 260px;
        height: 250px;
        object-fit: cover;
        @media (max-width: 1200px) {
          width: 1000px;
        }
      }
    }

    .project__description {
      padding-top: 1rem;
      padding-bottom: 0.6rem;
      padding-right: 1rem;

      @media (max-width: 1200px) {
        padding-left: 1.5rem;
      }

      h2 {
        font-family: "Epilogue", sans-serif;
        font-size: 2rem;
        font-weight: 700;
        overflow-y: hidden;
        padding-right: 1rem;
        color: #dddddd;
        @media (max-width: 1200px) {
          font-size: 28px;
          padding-right: 21.5rem;
        }
      }
      span {
        font-size: 12px;
        color: #f0a500;
        opacity: 1;
        font-family: "IBM Plex Sans", sans-serif;
      }
      p {
        padding-top: 0.7rem;
        padding-right: 1.9rem;
        font-family: "IBM Plex Sans", sans-serif;
        font-weight: 300;
        color: #dddddd;
        line-height: 1.5;
        @media (max-width: 1200px) {
          padding-right: 22rem;
          margin-bottom: 2rem;
        }
      }
    }
  }
`;

const ProjectCard = styled.li``;

const Projects = () => {
  return (
    <ProjectContainer>
      <h1>Recent Projects</h1>
      <ProjectList>
        {ProjectData.map((item, index) => {
          return (
            <motion.li
              initial={{ opacity: 0, y: 2 }}
              animate={{ opacity: 0.7, y: -6 }}
              transition={{ duration: 0.4 }}
              whileHover={{ scale: 0.9, opacity: 1 }}
              key={index}
              className={item.class}
            >
              <div className="img__container">
                <LazyLoadImage effect="blur" src={item.img} />
              </div>
              <div className="project__description">
                <h2>{item.title}</h2>
                <span>{item.bread}</span>
                <p>{item.desc}</p>
              </div>
            </motion.li>
          );
        })}
      </ProjectList>
    </ProjectContainer>
  );
};

export default Projects;
