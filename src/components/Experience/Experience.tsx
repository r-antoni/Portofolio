import React from "react";
import Title from "../Shared/Title";
import {s1, s2} from "../../../public/assets";
import Certification from "./components/Certification";

type Props = {};

const Experience = (props: Props) => {
  return (
    <section id="experience" className="max-w-5xl py-20 xl:py-32 flex flex-col gap-5 tracking-wide px-5">
      <Title title="Experience" titleNumber="03." />
      <div className="flex flex-col justify-center gap-10">
        <p className="text-body">
          Unfortunately I don&apos;t have any experience as of now. But here are some certifications that I currently have :
        </p>
        <div className="flex flex-col xl:flex-row justify-between items-center gap-10">
          <Certification title="Fullstack Developer Bootcamp Certificate" src={s2} alt="Fullstack Developer Bootcamp Certificate Image"/>
          <Certification title="Google IT Support Professional Certificate" src={s1} alt="Google IT Support Professional Certificate Image"/>
        </div>
      </div>
    </section>
  );
};

export default Experience;
