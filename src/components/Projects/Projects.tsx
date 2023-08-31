import React from "react";
import Title from "../Shared/Title";
import Archive from "./components/Archive";
import Project1 from "./components/Project1";
import Project2 from "./components/Project2";
import Project3 from "./components/Project3";

type Props = {};

const Projects = (props: Props) => {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-5 py-32">
      <Title title="Things that I have Built" titleNumber="02." />
      <div className="flex flex-col justify-center items-center w-full gap-20 mt-10">
        <Project1 />
        <Project2 />
        <Project3 />
      </div>
      <Archive />
    </section>
  );
};

export default Projects;
