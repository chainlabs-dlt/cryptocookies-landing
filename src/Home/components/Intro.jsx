import React, { useEffect, useState } from "react";
import Parallax from "../../Base/Parallax";
export default function Intro({ width }) {
  const [anime, setAnime] = useState(false);

  useEffect(() => {
    if (width <= 1024) {
      setAnime(true);
    } else setAnime(false);
  }, [width]);
  return (
    <div className="intro">
      <div className="auto__container">
        <div className="intro__inner">
          <div className="intro__cookie top swim">
            <img
              src={process.env.PUBLIC_URL + "/images/cookies/introTop.png"}
              alt="road"
            />
          </div>
          <Parallax addClass="intro__cookie bottom " reverse="true">
            <img
              src={process.env.PUBLIC_URL + "/images/cookies/introBot.png"}
              alt="road"
            />
          </Parallax>

          <div className="intro__cookie right swim">
            <img
              src={process.env.PUBLIC_URL + "/images/cookies/introRight.png"}
              alt="road"
            />
          </div>
          <div className="intro__more">
            <Parallax addClass="intro__more-image">
              <img
                src={process.env.PUBLIC_URL + "./images/introHand.png"}
                alt="introHand"
              />
            </Parallax>
          </div>
          <div className="intro__content">
            <h1
              className=" wow animate__fadeIn"
              data-wow-duration={anime ? ".5s" : ".8s"}
              data-wow-delay=".2s"
            >
              <span>
                Define
                <strong> your </strong>
              </span>
              yield & risk.
            </h1>
            <p
              className="big wow animate__fadeIn"
              data-wow-duration={anime ? ".5s" : ".8s"}
              data-wow-delay={anime ? ".2s" : ".4s"}
            >
              A new era of gaming, where DeFi meets play-to-earn. Define your
              destiny in a competitive arena.
            </p>
            <div
              className="button orange wow animate__fadeIn"
              data-wow-duration={anime ? ".5s" : ".8s"}
              data-wow-delay={anime ? ".2s" : ".6s"}
            >
              <span>Learn More</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
