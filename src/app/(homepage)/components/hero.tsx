"use client";
import Image from "next/image";

import {Cursor, useTypewriter} from "react-simple-typewriter";
import {motion} from "framer-motion";

import {casual} from "../../../../public/assets";
import BackgroundCircles from "@/components/shared/circle";
import NavItem from "@/components/shared/nav-item";

export default function Hero() {
  const [text] = useTypewriter({
    words: ["Hi, I'm Reindra Antoni", "< Fullstack Dev />", "< Web3 Enthusiast />"],
    loop: true,
    delaySpeed: 3000,
  });

  const styles = {
    hero: "flex flex-col justify-center items-center max-w-7xl mx-auto h-[80%] lg:h-[90%] xxl:h-screen text-center text-white snap-start",
    contentWrapper: "flex flex-col justify-center items-center gap-5",
    image: "rounded-full w-40 h-40 lg:w-56 lg:h-56 mb-8",
    content: "flex flex-col gap-5",
    title: "text-sm text-gray-400 uppercase tracking-[10px]",
    typewriter: "text-3xl lg:text-4xl font-semibold px-10",
    nav: "hidden md:flex items-center z-50 pt-8 xl:pt-14 gap-5 text-xs lg:text-sm",
  };

  return (
    <section id="home" className={styles.hero}>
      {/* Circle */}
      <BackgroundCircles />
      {/* Hero */}
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
        className={styles.contentWrapper}
      >
        <Image src={casual} alt="casual-picture" loading="eager" className={styles.image} />
        <div className={styles.content}>
          <h2 className={styles.title}>Software Engineer</h2>
          <h1 className={styles.typewriter}>
            <span>{text}</span>
            <Cursor cursorColor="green" />
          </h1>
        </div>
      </motion.div>
      {/* Nav */}
      <motion.nav
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
        className={styles.nav}
      >
        <NavItem section="#about" name="about" />
        <NavItem section="#projects" name="projects" />
        <NavItem section="#experience" name="experience" />
        <NavItem section="#contact" name="contact" />
      </motion.nav>
    </section>
  );
}
