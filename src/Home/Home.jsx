import React from "react";
import Team from "./components/Team";
import Roadmap from "./components/Roadmap";
import Feature from "./components/Feature";
import Fudge from "./components/Fudge";
import Steps from "./components/Steps";
import Intro from "./components/Intro";

export default function Home({ width }) {
  return (
    <>
      <Intro width={width} />
      <Feature width={width} />
      <Fudge width={width} />
      <Steps width={width} />
      <Roadmap width={width} />
      <Team width={width} />
    </>
  );
}
