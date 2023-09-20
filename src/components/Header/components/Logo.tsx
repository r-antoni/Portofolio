import React from "react";
import {motion} from "framer-motion";
import {logo} from "../../../../public/assets";
import Link from "next/link";
import Image from "next/image";

type Props = {};

const Logo = (props: Props) => {
  return (
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
      className="flex items-center py-2 px-12 w-32 lg:w-36 h-full"
    >
      <Link href="#home">
        <Image src={logo} alt="logo"/>
      </Link>
    </motion.div>
  );
};

export default Logo;
