import {motion} from "framer-motion";
import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  section: string;
  number: number;
};

const MobileLinks = ({title, section, number}: Props) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const el = document.getElementById(targetId);
    el?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <motion.div
      initial={{
        x: 50,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.2,
        delay: number,
        ease: "easeIn",
      }}
    >
      <Link
        href={section}
        className="flex justify-center items-start text-white hover:text-greentext font-medium cursor-pointer duration-300"
        onClick={handleScroll}
      >
        {title}
      </Link>
    </motion.div>
  );
};

export default MobileLinks;
