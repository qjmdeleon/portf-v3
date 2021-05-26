import React from "react";
import styled from "styled-components";
import { HobbyDataAnime, HobbyDataFood } from "./HobbyData";
import Masonry from "react-masonry-css";
import Typewriter from "typewriter-effect";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const UsuallyContainer = styled.div`
  padding: 10px;

  .Typewriter {
    display: inline !important;
  }

  .my-masonry-grid {
    display: -webkit-box; /* Not needed if autoprefixing */
    display: -ms-flexbox; /* Not needed if autoprefixing */
    display: flex;
    margin-left: -10px; /* gutter size offset */
    width: auto;
  }
  .my-masonry-grid_column {
    padding-left: 10px; /* gutter size */
    background-clip: padding-box;
  }
  .my-masonry-grid_column > div {
    /* change div to reference your elements you put in <Masonry> */
    background: grey;
    margin-bottom: 30px;
  }

  .header__container {
    margin: 1rem 0;
    font-family: "Epilogue", sans-serif;
    @media (max-width: 1200px) {
      padding: 0 1rem;
    }
    h1 {
      margin-bottom: 1rem;

      span {
        font-family: "Noto Sans JP", sans-serif;
        font-weight: 300;
        color: orange;
      }

      .Typewriter__cursor {
        color: #32e0c4;
      }
    }

    p {
      font-family: "Courier Prime", sans-serif;
      font-weight: 300;
      padding: 1rem 10rem 1rem 1rem;
      margin-top: 10px;
      background: #0d0d0d;
      border-radius: 6px;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
        rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

      @media (max-width: 1200px) {
        padding: 1rem;
      }
    }
  }
`;

const HobbyContainer = styled.ul`
  padding: 1px;
`;

const HobbyCard = styled.li`
  img {
    width: 100%;
    object-fit: cover;
    margin-top: 5px;
    border-radius: 5px;
  }
`;

const breakpointColumnsObj = {
  default: 3,
  900: 2,
  700: 1,
};

const UsuallyDo = () => {
  return (
    <UsuallyContainer>
      <div className="header__container">
        <h1>
          👨‍🦱 Marvic
          <span>
            {" "}
            <Typewriter
              options={{
                strings: [
                  "codes a lot.",
                  "debugs a lot.",
                  "sleeps occasionally.",
                  "アニメをたくさん見る.",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </h1>
        <p>
          "Binge watches anime after a long-day of sitting and coding completes
          my daily routine, some say it's unhealthy and unproductive but I grew
          up liking the character portrayals and various stories japanese anime
          offer."
        </p>
      </div>
      <HobbyContainer>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {HobbyDataAnime.map((item, index) => {
            return (
              <HobbyCard key={index}>
                <LazyLoadImage effect="blur" src={item.img} key={index} />
              </HobbyCard>
            );
          })}
        </Masonry>
      </HobbyContainer>
      <div className="header__container">
        <p>
          "Binge watches anime after a long-day of sitting and coding completes
          my daily routine, some say it's unhealthy and unproductive but I grew
          up liking the character portrayals and various stories japanese anime
          offer."
        </p>
      </div>
      <HobbyContainer>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {HobbyDataFood.map((item, index) => {
            return (
              <HobbyCard key={index}>
                <LazyLoadImage effect="blur" src={item.img} key={index} />
              </HobbyCard>
            );
          })}
        </Masonry>
      </HobbyContainer>
    </UsuallyContainer>
  );
};

export default UsuallyDo;
