import React from "react";
import Title from "../Shared/Title";
import Image from "next/image";
import {s1, s2} from "../../../public/assets";

type Props = {};

const Experience = (props: Props) => {
  return (
    <section id="experience" className="max-w-6xl py-20 xl:py-40 flex flex-col gap-5 tracking-wide px-5">
      <Title title="Experience" titleNumber="03." />
      <div className="flex flex-col justify-center gap-10">
        <p>
          Unfortunately I don't have any experience as of now. But here are some certifications that I currently have :
        </p>
        <div className="flex flex-col xl:flex-row justify-between items-center gap-10">
          <div className="flex flex-col gap-5">
            <p className="flex justify-center">Fullstack Developer Bootcamp</p>
            <Image className="w-full h-80" src={s1} alt="" />
          </div>
          <div className="flex flex-col gap-5">
            <p className="flex justify-center">Google IT Support Professional Certificate</p>
            <Image className="w-full h-80" src={s2} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
