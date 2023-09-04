"use client";
import React from "react";
import {Cursor, useTypewriter} from "react-simple-typewriter";
import BackgroundCircles from "../Shared/BackgroundCircles";
import Image from "next/image";
import {profile} from "../../../public/assets/index";
import {motion} from "framer-motion";
import Links from "./components/Links";

export default function Hero() {
  const [text] = useTypewriter({
    words: ["Hi, I'm Reindra Antoni", "< Fullstack Dev />", "< Web3 Enthusiast />"],
    loop: true,
    delaySpeed: 3000,
  });
  return (
    <section
      id="home"
      className="flex flex-col justify-center items-center max-w-7xl mx-auto h-[85%] lg:h-screen text-center text-white snap-center"
    >
      <BackgroundCircles />
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-col justify-center items-center gap-5"
      >
        <Image src={profile} alt="profile" width={200} height={200} />
        <div className="flex flex-col gap-10">
          <h2 className="text-sm text-gray-400 uppercase tracking-[10px]">Software Engineer</h2>
          <h1 className="text-2xl lg:text-4xl font-semibold px-10">
            <span>{text}</span>
            <Cursor cursorColor="green" />
          </h1>
        </div>
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className=" hidden md:flex items-center z-50 pt-14 gap-5 text-xs lg:text-sm"
      >
        <Links section="#about" text="about" />
        <Links section="#projects" text="projects" />
        <Links section="#experience" text="experience" />
        <Links section="#contact" text="contact" />
      </motion.div>
    </section>
  );
}
