"use client";
import React, {useState} from "react";
import {motion} from "framer-motion";
import {FaBarsStaggered} from "react-icons/fa6";
import {MdOutlineClose} from "react-icons/md";
import MobileLinks from "./components/MobileLinks";
import MobileSocial from "./components/MobileSocial";
import MobileEmail from "./components/MobileEmail";

type Props = {};

const MobileNav = (props: Props) => {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <motion.div
        initial={{
          x: 500,
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
        className="flex items-center w-14 h-full text-greentext hover:text-white transition-all duration-300"
        onClick={() => setShowNav(true)}
      >
        <button>
          <FaBarsStaggered size={28} />
        </button>
      </motion.div>
      {showNav && (
        <div className="absolute flex flex-col items-end top-0 right-0 w-full h-screen bg-container bg-opacity-50">
          <motion.div
            initial={{
              x: 20,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.1,
            }}
            className="relative flex flex-col items-center w-[75%] h-full overflow-y-hidden scrollbarHide bg-container px-5 py-10"
          >
            <MdOutlineClose
              className="absolute text-2xl text-greentext hover:text-red-400 cursor-pointer top-5 right-5"
              onClick={() => setShowNav(false)}
            />
            <div className="flex flex-col items-center gap-8 mt-10">
              <MobileLinks title="Home" section="#home" number={0.1} />
              <MobileLinks title="About" section="#about" number={0.2} />
              <MobileLinks title="Projects" section="#projects" number={0.3} />
              <MobileLinks title="Experience" section="#experience" number={0.4} />
              <MobileLinks title="Contact" section="#contact" number={0.5} />
              <button className="border border-greentext bg-greentext px-5 md:text-sm lg:px-7 py-2 font-semibold rounded hover:bg-greentext hover:text-background">
                Resume
              </button>
              <MobileSocial />
              <MobileEmail />
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};
export default MobileNav;
