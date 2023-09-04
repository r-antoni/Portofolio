import Image from "next/image";
import React from "react";
import { git, js, netlify, next, nodejs, react, tailwind, ts, vite } from "../../../../public/assets";

type Props = {};

const Skills = (props: Props) => {
  return (
    <div className="flex flex-col items-center gap-10 pt-10 max-w-7xl mx-auto">
      <p className="flex items-center justify-center text-lg">
        These are the the technologies that I have been working with recently:
      </p>
      <ul className="grid grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-x-40 mt-5 text-sm px-5 text-body">
        <li className="flex items-center gap-3">
          <Image src={js} alt="Javascript Logo" className="w-6 lg:w-8 rounded-lg"/>
          Javascript (ES6+)
        </li>
        <li className="flex items-center gap-3">
        <Image src={react} alt="Javascript Logo" className="w-6 lg:w-8 rounded-lg"/>
          React.js
        </li>
        <li className="flex items-center gap-3">
        <Image src={next} alt="Javascript Logo" className="w-6 lg:w-8 rounded-lg"/>
          Next.js
        </li>
        <li className="flex items-center gap-3">
        <Image src={tailwind} alt="Javascript Logo" className="w-6 lg:w-8 rounded-lg"/>
          TailwindCSS
        </li>
        <li className="flex items-center gap-3">
        <Image src={ts} alt="Javascript Logo" className="w-6 lg:w-8 rounded-lg"/>
          Typescript
        </li>
        <li className="flex items-center gap-3">
        <Image src={nodejs} alt="Javascript Logo" className="w-6 lg:w-8 rounded-lg"/>
          Node.js
        </li>
        <li className="flex items-center gap-3">
        <Image src={vite} alt="Javascript Logo" className="w-6 lg:w-8 rounded-lg"/>
          Vite
        </li>
        <li className="flex items-center gap-3">
        <Image src={netlify} alt="Javascript Logo" className="w-6 lg:w-8 rounded-lg"/>
          Netlify
        </li>
        <li className="flex items-center gap-3">
        <Image src={git} alt="Javascript Logo" className="w-6 lg:w-8 rounded-lg"/>
          Github
        </li>
      </ul>
    </div>
  );
};

export default Skills;
