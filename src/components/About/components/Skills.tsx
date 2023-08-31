import React from "react";
import {LuGitCompare} from "react-icons/lu";

type Props = {};

const Skills = (props: Props) => {
  return (
    <div className="flex flex-col items-center gap-10 pt-10 max-w-7xl mx-auto">
      <p className="flex items-center justify-center text-lg">
        These are the the technologies that I have been working with recently:
      </p>
      <ul className="grid grid-cols-3 xl:gap-x-40 gap-y-5 mt-5 text-sm px-5 text-body">
        <li className="flex items-center gap-2">
          <span className="text-tertiary">
            <LuGitCompare />
          </span>
          Javascript (ES6+)
        </li>
        <li className="flex items-center gap-2">
          <span className="text-tertiary">
            <LuGitCompare />
          </span>
          React JS
        </li>
        <li className="flex items-center gap-2">
          <span className="text-tertiary">
            <LuGitCompare />
          </span>
          Next JS
        </li>
        <li className="flex items-center gap-2">
          <span className="text-tertiary">
            <LuGitCompare />
          </span>
          TailwindCSS
        </li>
        <li className="flex items-center gap-2">
          <span className="text-tertiary">
            <LuGitCompare />
          </span>
          Javascript (ES6+)
        </li>
      </ul>
    </div>
  );
};

export default Skills;
