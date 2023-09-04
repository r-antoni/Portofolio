import React from "react";
import {motion} from "framer-motion";

type Props = {};

const Resume = (props: Props) => {
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
        duration: 1,
      }}
      className="hidden md:flex items-end"
    >
      <button className="border border-greentext md:px-5 md:text-sm lg:px-7 py-2 lg:py-3 font-semibold rounded hover:bg-greentext hover:text-background">
        Resume
      </button>
    </motion.div>
  );
};

export default Resume;
