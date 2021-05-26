import React from "react";
import styled from "styled-components";
import avatar from "../../images/avatar.png";
import ph from "../../images/Philippines.svg";
import work from "../../images/innovate.png";
import s1 from "../../images/s1.svg";
import s2 from "../../images/s2.svg";
import s3 from "../../images/s3.svg";
import s4 from "../../images/s4.svg";
import s5 from "../../images/s5.svg";
import online from "../../images/online.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";

const AvatarBody = styled.div`
  padding: 1px;
  width: 300px;

  @media (max-width: 1200px) {
    width: 500px;
    display: flex;
    justify-content: center;
  }
`;

const AvatarContainer = styled.div`
  margin-top: -7rem;
  height: 250px;
  width: 250px;
  background: url(${avatar}) no-repeat center center/cover;
  border-radius: 10px;
  border: 2px solid #1e212d;
  position: absolute;
  z-index: 5;
`;

const AvatarDetails = styled.div`
  font-family: "Space Grotesk", sans-serif;
  color: #fff;
  margin-top: 10rem;
  @media (max-width: 1200px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  h2 {
    font-size: 20px;
    @media (max-width: 1200px) {
      font-size: 27px;
    }
  }

  hr {
    width: 80%;
    background-color: #faf1e6;
    opacity: 0.2;
    height: 0;
  }
  .avatar__motto {
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 300;
    font-size: 15px;
    font-style: italic;
    margin-top: 1rem;
    margin-bottom: 0.7rem;
    line-height: 1.1;
    overflow-y: hidden;
    padding-right: 4rem;
    color: #dddddd;

    @media (max-width: 1200px) {
      padding-right: 0;
    }

    @media (max-width: 570px) {
      padding: 1rem 2rem;
      text-align: center;
    }
  }

  .profile__socials {
    display: grid;
    grid-template-columns: repeat(5, auto);
    grid-gap: 1px;

    @media (max-width: 1200px) {
      grid-gap: 25px;
    }
    img {
      margin-top: 1rem;
      height: 25px;
      width: 25px;
    }
  }

  .details {
    margin-top: 1rem;
    padding-right: 3rem;
    color: #dddddd;
    font-size: 15px;
    p {
      margin: 0.5rem 0;
    }

    @media (max-width: 1200px) {
      display: none;
    }
  }

  .stats {
    margin-top: 1rem;
    padding-right: 3rem;
    color: #dddddd;
    font-size: 15px;
    margin-bottom: 1rem;

    @media (max-width: 1200px) {
      display: flex;
      padding-right: 3rem;
      p {
        margin-right: 5px;
      }
    }
    @media (max-width: 570px) {
      padding: 0;
      text-align: center;
      flex-direction: column;
    }
  }

  .level__up {
    color: #e93b81;
  }

  .innovate {
    img {
      margin: 1rem 0;
      object-fit: cover;
    }

    @media (max-width: 1200px) {
      display: none;
    }
  }
`;

export default function Avatar() {
  return (
    <AvatarBody>
      <AvatarContainer></AvatarContainer>
      <AvatarDetails>
        <h2>
          John Marvic de Leon, &nbsp;23&nbsp;
          <span>
            <LazyLoadImage effect="blur" src={online} />
          </span>
        </h2>
        <ul className="profile__socials">
          <li>
            <a href="https://www.pinterest.ph/faveblessing1" target="blank">
              <LazyLoadImage effect="blur" src={s1} />
            </a>
          </li>
          <li>
            <a href="https://t.me/marvymarvic" target="blank">
              <LazyLoadImage effect="blur" src={s2} />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/leon_marvic" target="blank">
              <LazyLoadImage effect="blur" src={s3} />
            </a>
          </li>
          <li>
            <a href="http://www.facebook.com/fave.blessing.1" target="blank">
              <LazyLoadImage effect="blur" src={s4} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/john-marvic-de-leon-9145971b6/"
              target="blank"
            >
              <LazyLoadImage effect="blur" src={s5} />
            </a>
          </li>
        </ul>
        <p className="avatar__motto">
          "Passionate about innovating, developing and not re-inventing the
          wheel"
        </p>

        <div className="details">
          <p>
            Lives @ Quezon City, Philippines <img src={ph} />
          </p>
          <p>
            Education: Bachelor of Science in Financial Management and
            Accounting, 2019
          </p>
        </div>

        <div className="stats">
          <p>
            Mobile#: (+63)<span className="level__up"> 917-373-1706</span>
          </p>
          <p>
            {/*  eslint-disable-next-line */}
            @:<span className="level__up"> jmarvicdeleon21@gmail.com</span>
          </p>
        </div>
        <hr />
        <div className="innovate">
          <LazyLoadImage effect="blur" src={work} />
        </div>
      </AvatarDetails>
    </AvatarBody>
  );
}
