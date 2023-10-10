import {motion} from "framer-motion";
import Button from "../shared/button";

const Resume = () => {
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
      <a href="https://drive.google.com/file/d/17kAgFdCBvDCZXHWmfXzQf6p-jWKKRmLw/view?usp=sharing" target="_blank">
        <Button title="Resume" textSize="text-sm"/>
      </a>
    </motion.div>
  );
};

export default Resume;
