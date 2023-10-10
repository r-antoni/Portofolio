"use client";

import {motion} from "framer-motion";

import SocialItem from "@/components/shared/social-item";

const Social = () => {
  const styles = {
    social: "flex flex-col justify-end gap-5 items-center w-full h-full text-greentext",
    iconsWrapper: "flex flex-col gap-3",
    line: "w-[2px] h-60 bg-greentext",
  };

  return (
    <motion.div
      initial={{
        x: -500,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className={styles.social}
    >
      <div className={styles.iconsWrapper}>
        <SocialItem />
      </div>
      <div className={styles.line}></div>
    </motion.div>
  );
};

export default Social;
