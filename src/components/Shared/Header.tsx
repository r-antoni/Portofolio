"use client";
import Image from "next/image";
import React from "react";
import {logo} from "../../../public/assets";
import {motion} from "framer-motion";
import Link from "next/link";
import {FaBarsStaggered} from "react-icons/fa6";

const Header = () => {
  return (
    <div className="w-full h-20 sticky top-0 xl:top-5 z-[60] bg-background shadow-2xl xl:shadow-none xl:bg-transparent mb-10">
      <div className="flex justify-between items-center mx-auto md:max-w-[96%] h-full">
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
          className="w-40"
        >
          <Link href="#home">
            <Image src={logo} alt="logo" />
          </Link>
        </motion.div>
        <div className="md:hidden w-14">
          <button>
            <FaBarsStaggered size={28} />
          </button>
        </div>
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
          className="hidden md:flex items-center"
        >
          <button className="border border-greentext px-7 py-2 font-semibold rounded hover:bg-greentext hover:text-background">
            Resume
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
