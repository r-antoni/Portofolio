import React from "react";
import Title from "../Shared/Title";
import Detail from "./components/Detail";
import Pic from "./components/Pic";
import Skills from "./components/Skills";

const About = () => {
  return (
    <section id="about" className="flex flex-col mx-auto py-32 px-10 gap-10 max-w-6xl">
      <Title titleNumber="01." title="About Me" />
      <div className="flex flex-col lg:flex-row gap-20">
        <Detail />
        <Pic />
      </div>
      <Skills />
    </section>
  );
};

export default About;
