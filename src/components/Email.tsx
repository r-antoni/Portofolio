"use client";
import React from "react";
import {motion} from "framer-motion";

type Props = {};

const Email = (props: Props) => {
  return (
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
      className="flex flex-col justify-end gap-10 items-center w-full h-full"
    >
      <a href="mailto:reindraantoni@gmail.com">
        <p className="text-sm rotate-90 w-96 tracking-[2.5px] text-greentext hover:-translate-y-2 hover:text-white transition-all duration-300">
          reindraantoni@gmail.com
        </p>
      </a>
      <div className="w-[2px] h-60 bg-greentext"></div>
    </motion.div>
  );
};

export default Email;
