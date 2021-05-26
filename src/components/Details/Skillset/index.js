import React from "react";
import { SkillsetData, CoreLangs, CodeVersioning } from "../detailsdata";
import styled from "styled-components";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { LazyLoadImage } from "react-lazy-load-image-component";

const SkillsetContainer = styled.div`
  padding: 2rem 1.6rem;

  h1 {
    font-family: "Epilogue", sans-serif;
    margin-bottom: 1.5rem;
  }
  h2 {
    font-family: "Courier Prime", sans-serif;
    font-size: 1rem;
    font-weight: 100;
    opacity: 0.9;

    .Typewriter {
      display: inline !important;
    }

    .Typewriter__cursor {
      color: #32e0c4;
    }

    .white_text {
      color: #32e0c4;
    }

    .bracers {
      color: orange;
    }

    span {
      color: #fff;
    }
  }
`;

const SkillsetList = styled.ul`
  margin: 1rem 0 2rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1.2rem;
  overflow: visible;
`;

const SkillsetCard = styled.li`
  overflow-y: hidden;
  .skillset__card {
    padding: 1rem;
    border: 1px solid #222831;
    border-radius: 7px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #212121;

    img {
      width: 120px;
      height: 120px;
      margin-bottom: 1rem;
    }

    h3 {
      font-weight: 300;
    }
  }
`;

const Skillset = () => {
  return (
    <SkillsetContainer>
      <h1>👨‍🎨 Front End Dev Stack</h1>
      <h2>
        <span>
          <span className="bracers">{"<"}</span>
          <span className="white_text">code</span>
          <span className="bracers">{">"}</span>
        </span>
        <span className="type__effect">
          <Typewriter
            options={{
              strings: [
                "i am more fond of doing front-end designs",
                "i love seeing the final results of my designs",
                "i care about how end-users interact with my apps",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
        <span>
          <span className="bracers">{"<"}</span>
          <span className="white_text">/code</span>
          <span className="bracers">{">"}</span>
        </span>
      </h2>
      <SkillsetList>
        {SkillsetData.map((item, index) => {
          return (
            <SkillsetCard key={index}>
              <motion.div
                transition={{ stiffness: 50, duration: 0.5 }}
                initial={{ scale: 0.9, opacity: 0.5, y: 10 }}
                animate={{ opacity: 1, y: 1 }}
                whileHover={{ scale: 1.1 }}
                className="skillset__card"
              >
                <LazyLoadImage effect="blur" src={item.img} />
                <h3>{item.title}</h3>
              </motion.div>
            </SkillsetCard>
          );
        })}
      </SkillsetList>
      <h1>👨‍💻 Back End Dev Stack</h1>
      <h2>
        <span>
          <span className="bracers">{"<"}</span>
          <span className="white_text">code</span>
          <span className="bracers">{">"}</span>
        </span>
        <span className="type__effect">
          <Typewriter
            options={{
              strings: [
                "i am more fond of doing front-end designs",
                "i love seeing the final results of my designs",
                "i care about how end-users interact with my apps",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
        <span>
          <span className="bracers">{"<"}</span>
          <span className="white_text">/code</span>
          <span className="bracers">{">"}</span>
        </span>
      </h2>
      <SkillsetList>
        {CoreLangs.map((item, index) => {
          return (
            <SkillsetCard key={index}>
              <motion.div
                transition={{ stiffness: 50, duration: 0.5 }}
                initial={{ scale: 0.9, opacity: 0.5, y: 10 }}
                animate={{ opacity: 1, y: 1 }}
                whileHover={{ scale: 1.1 }}
                className="skillset__card"
              >
                <LazyLoadImage effect="blur" src={item.img} />
                <h3>{item.title}</h3>
              </motion.div>
            </SkillsetCard>
          );
        })}
      </SkillsetList>
      <h1>🚀 Code Versioning</h1>
      <h2>
        <span>
          <span className="bracers">{"<"}</span>
          <span className="white_text">code</span>
          <span className="bracers">{">"}</span>
        </span>
        <span className="type__effect">
          <Typewriter
            options={{
              strings: ["i can be found at github lol"],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
        <span>
          <span className="bracers">{"<"}</span>
          <span className="white_text">/code</span>
          <span className="bracers">{">"}</span>
        </span>
      </h2>
      <SkillsetList>
        {CodeVersioning.map((item, index) => {
          return (
            <SkillsetCard key={index}>
              <motion.div
                transition={{ stiffness: 50, duration: 0.5 }}
                initial={{ scale: 0.9, opacity: 0.5, y: 10 }}
                animate={{ opacity: 1, y: 1 }}
                whileHover={{ scale: 1.1 }}
                className="skillset__card"
              >
                <LazyLoadImage effect="blur" src={item.img} />
                <h3>{item.title}</h3>
              </motion.div>
            </SkillsetCard>
          );
        })}
      </SkillsetList>
    </SkillsetContainer>
  );
};

export default Skillset;
