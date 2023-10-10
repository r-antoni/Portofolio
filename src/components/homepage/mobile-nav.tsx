"use client";
import {useState} from "react";

import {motion} from "framer-motion";
import {FaBarsStaggered} from "react-icons/fa6";
import {MdOutlineClose} from "react-icons/md";

import NavItem from "../shared/nav-item";
import SocialItem from "../shared/social-item";
import Button from "../shared/button";

const MobileNav = () => {
  const [showNav, setShowNav] = useState(false);

  const styles = {
    mobileNavWrapper: "flex items-center md:hidden w-14 h-full text-greentext hover:text-white transition-all duration-300 md:hidden",
    mobileNav: "absolute flex flex-col items-end top-0 right-0 w-full h-screen bg-container bg-opacity-50",
    navMenu : "relative flex flex-col items-center w-[75%] h-full overflow-hidden scrollbarHide bg-gray-700 px-5 py-10",
    close: "absolute text-2xl text-greentext hover:text-red-400 cursor-pointer top-5 right-5",
    navItemWrapper: "flex flex-col items-center gap-8 mt-10",
    social: "flex justify-center items-center gap-5 text-white pt-5",
    email: "flex justify-center items-center text-sm w-96 tracking-[2.5px] text-white hover:text-greentext transition-all duration-300"
  };

  return (
    <>
    {/* Nav Button */}
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
        className={styles.mobileNavWrapper}
        onClick={() => setShowNav(true)}
      >
        <button>
          <FaBarsStaggered size={20} />
        </button>
      </motion.div>
      {/* Mobile Nav */}
      {showNav && (
        <div className={styles.mobileNav}>
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
            className={styles.navMenu}
          >
            {/* Close Button */}
            <MdOutlineClose
              className={styles.close}
              onClick={() => setShowNav(false)}
            />
            {/* Nav Menu */}
            <div className={styles.navItemWrapper}>
              <NavItem name="Home" section="#home" />
              <NavItem name="About" section="#about" />
              <NavItem name="Projects" section="#projects" />
              <NavItem name="Experience" section="#experience" />
              <NavItem name="Contact" section="#contact" />
              {/* Resume */}
              <a href="https://drive.google.com/file/d/17kAgFdCBvDCZXHWmfXzQf6p-jWKKRmLw/view?usp=sharing" target="_blank">
                <Button title="Resume" textSize="text-xs"/>
              </a>
              {/* Social */}
              <div className={styles.social}>
                <SocialItem />
              </div>
              {/* Email */}
              <a href="mailto:reindraantoni@gmail.com">
                <p className={styles.email}>
                  reindraantoni@gmail.com
                </p>
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};
export default MobileNav;
