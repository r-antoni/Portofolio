"use client";
import Link from "next/link";
import React from "react";
import {MdWhatsapp} from "react-icons/md";
import {SlSocialGithub, SlSocialLinkedin, SlSocialTwitter} from "react-icons/sl";
import {motion} from "framer-motion";

type Props = {};

const Social = (props: Props) => {
  return (
    <motion.div
      initial={{
        x: -500,
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="flex flex-col justify-end gap-5 items-center w-full h-full text-greentext"
    >
      <div className="flex flex-col gap-3">
        <a href="https://www.linkedin.com/in/reindra-bachtiar-antoni/" target="_blank">
          <span className="flex justify-center bg-container rounded-full w-12 h-12 items-center hover:text-white hover:-translate-y-2 transition-all duration-300">
            <SlSocialLinkedin size={20} />
          </span>
        </a>
        <a href="https://github.com/R-Antoni" target="_blank">
          <span className="flex justify-center bg-container rounded-full w-12 h-12 items-center hover:text-white hover:-translate-y-2 transition-all duration-300">
            <SlSocialGithub size={24} />
          </span>
        </a>
        <a href="https://twitter.com/0xSky513" target="_blank">
          <span className="flex justify-center bg-container rounded-full w-12 h-12 items-center hover:text-white hover:-translate-y-2 transition-all duration-300">
            <SlSocialTwitter size={20} />
          </span>
        </a>
        <a href="https://api.whatsapp.com/send/?phone=6287834056763" target="_blank">
          <span className="flex justify-center bg-container rounded-full w-12 h-12 items-center hover:text-white hover:-translate-y-2 transition-all duration-300">
            <MdWhatsapp size={24} />
          </span>
        </a>
      </div>
      <div className="w-[2px] h-60 bg-greentext"></div>
    </motion.div>
  );
};

export default Social;
