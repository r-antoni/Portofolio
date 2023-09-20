import React from "react";
import {p2} from "../../../../public/assets";
import {SlSocialGithub} from "react-icons/sl";
import {IoShareSocialOutline} from "react-icons/io5";
import Image from "next/image";
type Props = {};

const Project2 = (props: Props) => {
  return (
    <div className="flex flex-col xl:flex-row-reverse gap-5 pb-10">
      <a className="w-full xl:w-1/2 h-auto relative group" href="https://globetix.netlify.app/" target="_blank">
        <div>
          <Image src={p2} alt="GlobeTix" className="rounded-lg h-full w-full" />
        </div>
      </a>
      <div className="w-full xl:w-1/2 flex flex-col lg:justify-between items-center xl:items-start text-right xl:-mr-16 gap-5 z-10">
        <p className="text-greentext text-sm tracking-widest">Featured Project</p>
        <h3 className="text-2xl font-bold">GlobeTix</h3>
        <p className="bg-container text-sm md:text-base p-2 md:p-6 rounded-md text-center">
          GlobeTix is a fullstack travel booking website, with several destination to choose in Indonesia. It is created using Next.js 13 with Next`&apos;`s app router and TailwindCSS, it`&apos;`s also using Stripe for payment checkout.
        </p>
        <ul className="flex text-xs md:text-sm tracking-widest gap-5 text-container">
          <li>Next.js</li>
          <li>TailwindCSS</li>
          <li>PostgreSQL</li>
          <li>Netlify</li>
        </ul>
        <div className="flex gap-5">
          <a href="https://github.com/KsatriaXDev/GlobeTix" target="_blank">
            <span className="flex justify-center items-center hover:text-greentext transition-all duration-300">
              <SlSocialGithub size={20} />
            </span>
          </a>
          <a href="https://globetix.netlify.app/">
            <span className="flex justify-center items-center hover:text-greentext transition-all duration-300">
              <IoShareSocialOutline size={20} />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project2;
