import React, { useEffect, useState } from "react";
import { featureList } from "../../Base/moduls";

export default function Feature({ width }) {
  const [anime, setAnime] = useState(false);

  useEffect(() => {
    if (width <= 1024) {
      setAnime(true);
    } else setAnime(false);
  }, [width]);
  return (
    <div className="feature">
      <div className="auto__container">
        <div className="feature__inner">
          <h2
            className=" wow animate__fadeInUp"
            data-wow-duration={anime ? ".5s" : ".8s"}
            data-wow-delay=".2s"
          >
            <span className="orange">CryptoCookies</span>, Reinventing the
            <span className="orange"> Play-to-Earn </span> industry
          </h2>
          <div className="feature__inner-row">
            {featureList.map((item, index) => {
              return (
                <FeatureItem
                  key={index}
                  {...item}
                  index={index}
                  anime={anime}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
const FeatureItem = (props) => {
  return (
    <div
      className="featureItem  wow animate__fadeIn"
      data-wow-duration={props.anime ? ".5s" : ".8s"}
      data-wow-delay={props.anime ? `.2s` : `${0.2 * props.index}s`}
    >
      <div className="featureItem__icon">
        <img src={process.env.PUBLIC_URL + props.icon} alt="team" />
      </div>
      <h5>{props.title}</h5>
      <p>{props.text}</p>
    </div>
  );
};
