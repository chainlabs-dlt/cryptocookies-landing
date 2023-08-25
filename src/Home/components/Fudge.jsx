import React, { useEffect, useState } from "react";
import { lightIcon } from "../../Base/SVG";
import { Link } from "react-router-dom";

export default function Fudge({ width }) {
  const [anime, setAnime] = useState(false);

  useEffect(() => {
    if (width <= 1024) {
      setAnime(true);
    } else setAnime(false);
  }, [width]);
  return (
    <div className="finance">
      <div className="auto__container">
        <div className="finance__inner">
          <div
            className="finance__inner-more wow animate__fadeIn"
            data-wow-duration={anime ? ".5s" : ".8s"}
            data-wow-delay={anime ? ".2s" : ".8s"}
          >
            <div className="finance__inner-image inner">
              <img
                src={
                  process.env.PUBLIC_URL + "./images/finance/financeInner.png"
                }
                alt="team"
              />
            </div>{" "}
            <div className="finance__inner-image outer">
              <img
                src={
                  process.env.PUBLIC_URL + "./images/finance/financeOuter.png"
                }
                alt="team"
              />
            </div>
          </div>
          <div className="finance__inner-content">
            <div
              className="title  wow animate__fadeIn"
              data-wow-duration={anime ? ".5s" : ".8s"}
              data-wow-delay=".2s"
            >
              {" "}
              {lightIcon} Powered by
            </div>
            <h2
              className="big  wow animate__fadeIn"
              data-wow-duration={anime ? ".5s" : ".8s"}
              data-wow-delay={anime ? ".2s" : ".3s"}
            >
              Fudge Finance
              <small>the yield-distributing DeFi Hub</small>
            </h2>
            <p
              className="big  wow animate__fadeIn"
              data-wow-duration={anime ? ".5s" : ".8s"}
              data-wow-delay={anime ? ".2s" : ".4s"}
            >
              Discover the ultimate <strong>investment hub</strong> and{" "}
              <strong> dApp incubator</strong>. Unlocking the future of
              decentralized applications with unrivaled liquidity and high
              capital efficiency.
            </p>
            <Link
              to="/"
              className="button purple  wow animate__fadeIn"
              data-wow-duration={anime ? ".5s" : ".8s"}
              data-wow-delay={anime ? ".2s" : ".5s"}
            >
              Learn More
            </Link>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
