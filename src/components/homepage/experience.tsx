"use client"

import { motion } from "framer-motion";

import Certification from "@/components/homepage/certification";
import {s1, s2} from "../../../public/assets/index";
import Title from "@/components/shared/title";

const Experience = () => {
  return (
    <section id="experience" className="max-w-6xl py-32 flex flex-col gap-5 tracking-wide px-5">
      <Title title="Experience" titleNumber="03." />
      <div className="flex flex-col justify-center gap-10">
        <p className="text-body">
          Unfortunately I don&apos;t have any relevant experience as of now. But here are some certifications that I
          currently have :
        </p>
        <motion.div 
         initial={{
          scale: 0.75,
          opacity: 0.5
        }}
        transition={{duration: 1.25}}
        whileInView={{
          scale: 1,
          opacity:1
        }}
        viewport={{once: true}}
        className="flex flex-col xl:flex-row justify-between items-center gap-6">
          <Certification
            title="Fullstack Developer Bootcamp Certificate"
            src={s1}
            alt="Fullstack Developer Bootcamp Certificate Image"
            link="https://drive.google.com/file/d/1u3e_iPX1QO7vaWK7ebmRwfCMDQ8-9V8T/view?usp=sharing"
          />
          <Certification
            title="Google IT Support Professional Certificate"
            src={s2}
            alt="Google IT Support Professional Certificate Image"
            link="https://www.coursera.org/verify/professional-cert/7HTXKK8KUESA"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
