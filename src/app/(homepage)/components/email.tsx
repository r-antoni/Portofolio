"use client";

import {motion} from "framer-motion";

const Email = () => {
  const styles = {
    emailWrapper: "flex flex-col justify-end gap-10 items-center w-full h-full",
    email:
      "text-sm rotate-90 w-96 tracking-[2.5px] text-greentext hover:-translate-y-2 hover:text-white transition-all duration-300",
    line: "w-[2px] h-60 bg-greentext",
  };

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
      className={styles.emailWrapper}
    >
      <a href="mailto:reindraantoni@gmail.com">
        <p className={styles.email}>reindraantoni@gmail.com</p>
      </a>
      <div className={styles.line}></div>
    </motion.div>
  );
};

export default Email;
