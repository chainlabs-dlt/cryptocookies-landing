import React, { useEffect, useState } from "react";
import { teamList } from "../../Base/moduls";

export default function Team({ width }) {
  const [anime, setAnime] = useState(false);

  useEffect(() => {
    if (width <= 1024) {
      setAnime(true);
    } else setAnime(false);
  }, [width]);
  return (
    <div className="team">
      <div className="team__cookie swim">
        <img
          src={process.env.PUBLIC_URL + "./images/cookies/team.png"}
          alt="team"
        />
      </div>
      <div className="auto__container">
        <div className="team__inner">
          <h3
            className=" wow animate__fadeInUp"
            data-wow-duration={anime ? ".5s" : ".8s"}
            data-wow-delay=".2s"
          >
            Chainlabs <span className="orange">R&D</span> Team
          </h3>
          <div className="team__inner-row">
            {teamList.map((item, index) => {
              return (
                <TeamItem {...item} key={index} index={index} anime={anime} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
const TeamItem = (props) => {
  return (
    <div
      className="teamItem wow animate__fadeIn"
      data-wow-duration={props.anime ? ".5s" : ".8s"}
      data-wow-delay={props.anime ? `.2s` : `${0.2 * props.index}s`}
    >
      <div className="teamItem__image">
        <img src={process.env.PUBLIC_URL + props.image} alt="team" />
      </div>
      <h6>{props.name}</h6>
      <h6 className="uniq">{props.prof}</h6>
      <p className="sm">{props.about}</p>
    </div>
  );
};
