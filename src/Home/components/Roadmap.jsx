import React, { useEffect, useState } from "react";
import { roadmapList } from "../../Base/moduls";
import { tickIcon } from "../../Base/SVG";

export default function Roadmap({ width }) {
  const [anime, setAnime] = useState(false);

  useEffect(() => {
    if (width <= 1024) {
      setAnime(true);
    } else setAnime(false);
  }, [width]);
  return (
    <div className="roadmap">
      <div className="roadmap__cookie swim">
        <img
          src={process.env.PUBLIC_URL + "/images/cookies/road.png"}
          alt="road"
        />
      </div>
      <div className="roadmap__bg"></div>
      <div className="auto__container">
        <div className="roadmap__inner">
          <h3
            className=" wow animate__fadeIn"
            data-wow-duration={anime ? ".5s" : ".8s"}
            data-wow-delay=".2s"
          >
            Our Product <span className="orange">Roadmap</span>
          </h3>

          <div className="roadmap__inner-row">
            <div className="divider">
              {/* <img
                src={process.env.PUBLIC_URL + "/images/progress.png"}
                alt="progress"
              /> */}
            </div>

            {roadmapList.map((item, index) => {
              return (
                <RoadMapItem
                  {...item}
                  key={index}
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
const RoadMapItem = (props) => {
  return (
    <div
      className="roadmapItem wow animate__fadeIn"
      data-wow-duration={props.anime ? ".5s" : ".8s"}
      data-wow-delay={props.anime ? `.2s` : `${0.2 * props.index}s`}
    >
      {props.passed && <span className="tick">{tickIcon}</span>}
      <h6 className="xsm">{props.quarter}</h6>
      <h6>{props.title}</h6>
      {props.text.map((item, index) => {
        return (
          <p className="sm" key={index}>
            {item}
          </p>
        );
      })}
    </div>
  );
};
