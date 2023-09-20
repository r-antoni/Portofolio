import React from "react";
import {SlSocialGithub} from "react-icons/sl";
import {IoShareSocialOutline} from "react-icons/io5";
import Image from "next/image";
import {p3} from "../../../../public/assets";

type Props = {};

const Project3 = (props: Props) => {
  return (
    <div className="flex flex-col xl:flex-row gap-5 pb-10">
      <a className="w-full xl:w-1/2 h-auto relative group" href="https://cryptohub123.netlify.app" target="_blank">
        <div>
          <Image src={p3} alt="project-3" className="rounded-lg h-full w-full" />
        </div>
      </a>
      <div className="w-full xl:w-1/2 flex flex-col lg:justify-between items-center xl:items-end text-right xl:-ml-16 gap-5 z-10">
        <p className="text-greentext text-sm tracking-widest">Featured Project</p>
        <h3 className="text-2xl font-bold">CryptoHub</h3>
        <p className="bg-container text-sm md:text-base p-2 md:p-6 rounded-md text-center">
          CryptoHub is a cryptocurrency multi-app with price tracker, decentralized exchange and more features to be added in the future. The tracker is using data from Binance API. It is still under development 
        </p>
        <ul className="flex text-xs md:text-sm tracking-widest gap-5 text-gray-500">
          <li>Next.js</li>
          <li>TailwindCSS</li>
          <li>Vercel</li>
        </ul>
        <div className="flex gap-5">
          <a href="https://github.com/r-antoni/CryptoHub" target="_blank">
            <span className="flex justify-center items-center hover:text-greentext transition-all duration-300">
              <SlSocialGithub size={20} />
            </span>
          </a>
          <a href="https://cryptohub123.netlify.app">
            <span className="flex justify-center items-center hover:text-greentext transition-all duration-300">
              <IoShareSocialOutline size={20} />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project3;
