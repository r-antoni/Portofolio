import React from "react";
import ArchiveCard from "./ArchiveCard";
import {SlSocialGithub} from "react-icons/sl";

type Props = {};

const Archive = (props: Props) => {
  return (
    <div className="max-w-7xl mx-auto mt-20">
      <h2 className="flex justify-center w-full items-center text-2xl font-semibold">Other Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-10 px-5 lg:px-10">
        <ArchiveCard
          projectTitle="Small Project 1"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius molestiae cum fugiat, sunt illum repellat magni! Cumque quod aliquam quam expedita odio ipsum et sint alias sunt, repellendus tenetur beatae?"
          link="https://www.google.com"
          listItem={["React", "Tailwind", "Netlify"]}
        />
        <ArchiveCard
          projectTitle="Small Project 2"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius molestiae cum fugiat, sunt illum repellat magni! Cumque quod aliquam quam expedita odio ipsum et sint alias sunt, repellendus tenetur beatae?"
          link="https://www.google.com"
          listItem={["React", "Tailwind", "Netlify"]}
        />
        <ArchiveCard
          projectTitle="Small Project 3"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius molestiae cum fugiat, sunt illum repellat magni! Cumque quod aliquam quam expedita odio ipsum et sint alias sunt, repellendus tenetur beatae?"
          link="https://www.google.com"
          listItem={["React", "Tailwind", "Netlify"]}
        />
        <ArchiveCard
          projectTitle="Small Project 4"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius molestiae cum fugiat, sunt illum repellat magni! Cumque quod aliquam quam expedita odio ipsum et sint alias sunt, repellendus tenetur beatae?"
          link="https://www.google.com"
          listItem={["React", "Tailwind", "Netlify"]}
        />
        <ArchiveCard
          projectTitle="Small Project 5"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius molestiae cum fugiat, sunt illum repellat magni! Cumque quod aliquam quam expedita odio ipsum et sint alias sunt, repellendus tenetur beatae?"
          link="https://www.google.com"
          listItem={["React", "Tailwind", "Netlify"]}
        />
        <ArchiveCard
          projectTitle="Small Project 6"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius molestiae cum fugiat, sunt illum repellat magni! Cumque quod aliquam quam expedita odio ipsum et sint alias sunt, repellendus tenetur beatae?"
          link="https://www.google.com"
          listItem={["React", "Tailwind", "Netlify"]}
        />
      </div>
      <div className="flex justify-center items-center py-10">
        <a href="https://github.com/R-Antoni" target="_blank">
          <button className="flex items-center h-full gap-3 bg-gray-500 px-5 py-3 rounded-md hover:bg-tertiary duration-300">
            More on Github <SlSocialGithub />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Archive;
