import React from "react";
import Image from "next/image";
import {p1} from "../../../../public/assets";
import {SlSocialGithub} from "react-icons/sl";
import {IoShareSocialOutline} from "react-icons/io5";

type Props = {};

const Project1 = (props: Props) => {
  return (
    <div className="flex flex-col xl:flex-row gap-5 pb-10">
      <a className="w-full xl:w-1/2 h-auto relative group" href="https://github.com/r-antoni/Attendify-Frontend" target="_blank">
        <div>
          <Image src={p1} alt="attendify" className="rounded-lg h-full w-full" />
        </div>
      </a>
      <div className="w-full xl:w-1/2 flex flex-col lg:justify-between items-center xl:items-end text-right xl:-ml-16 gap-5 z-10">
        <p className="text-greentext text-sm tracking-widest">Featured Project</p>
        <h3 className="text-2xl font-bold">Attendify</h3>
        <p className="bg-container text-sm md:text-base p-2 md:p-6 rounded-md text-center">
          Attendify is an attendance management app with role based authorization. At its core Attendify is a simple CRUD app with a main purpose of being an activity management and monitoring tool.
        </p>
        <ul className="flex text-xs md:text-sm tracking-widest gap-5 text-container">
          <li>React</li>
          <li>TailwindCSS</li>
          <li>Express.js</li>
          <li>MySQL</li>
          <li>Netlify</li>
        </ul>
        <div className="flex gap-5">
          <a href="https://github.com/r-antoni/Attendify-Frontend" target="_blank">
            <span className="flex justify-center items-center hover:text-greentext transition-all duration-300">
              <SlSocialGithub size={20} />
            </span>
          </a>
          <a href="https://attendify.netlify.app/dashboard">
            <span className="flex justify-center items-center hover:text-greentext transition-all duration-300">
              <IoShareSocialOutline size={20} />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project1;
