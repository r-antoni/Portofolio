import Image from "next/image";
import React from "react";
import {LuGitCompare} from "react-icons/lu";
import Title from "../Shared/Title";
import Detail from "./components/Detail";
import Pic from "./components/Pic";
import Skills from "./components/Skills";

type Props = {};

const About = (props: Props) => {
  return (
    <section id="about" className="flex flex-col mx-auto py-10 lg:py-40 px-10 gap-10 max-w-6xl">
      <Title titleNumber="01." title="About Me" />
      <div className="flex flex-col lg:flex-row gap-10">
        <Detail />
        <Pic />
      </div>
      <Skills />
    </section>
  );
};

export default About;
