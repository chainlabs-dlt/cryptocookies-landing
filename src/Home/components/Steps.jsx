import React, { useEffect, useState } from "react";
import { stepsList } from "../../Base/moduls";

export default function Steps({ width }) {
  const [anime, setAnime] = useState(false);

  useEffect(() => {
    if (width <= 1024) {
      setAnime(true);
    } else setAnime(false);
  }, [width]);
  return (
    <div className="steps">
      <div className="steps__cookie float2">
        <img
          src={process.env.PUBLIC_URL + "/images/cookies/steps.png"}
          alt="road"
        />
      </div>
      <div className="auto__container">
        <div className="steps__inner">
          <h2
            className=" wow animate__fadeInUp"
            data-wow-duration={anime ? ".5s" : ".8s"}
            data-wow-delay=".2s"
          >
            The Fudge Finance <span className="purple">Revolution fueling</span>{" "}
            your <span className="purple">dApps</span>
          </h2>
          <div className="steps__inner-row">
            {stepsList.map((item, index) => {
              return (
                <StepsItem
                  anime={anime}
                  key={index}
                  {...item}
                  index={index}
                  stepsList={stepsList}
                />
              );
            })}
          </div>
          <div className="steps__inner-base">
            <img
              src={process.env.PUBLIC_URL + "./images/line.svg"}
              alt="line"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
const StepsItem = (props) => {
  return (
    <div
      className="stepsItem wow animate__fadeIn"
      data-wow-duration={props.anime ? ".5s" : ".8s"}
      data-wow-delay={props.anime ? `.2s` : `${0.2 * props.index}s`}
    >
      <div className="stepsItem__icon">
        <img src={process.env.PUBLIC_URL + props.icon} alt="icon" />
      </div>
      <p>
        <strong>{props.id} </strong> {props.text}
      </p>
      {props.stepsList.length - 1 !== props.index && (
        <span className="steps__inner-arrow">
          <img
            src={process.env.PUBLIC_URL + "./images/arrow.svg"}
            alt="arrow"
          />
        </span>
      )}
    </div>
  );
};
