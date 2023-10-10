import Certification from "@/components/homepage/certification";
import { s1, s2 } from "../../../../public/assets";
import Title from "@/components/shared/title";

const Experience = () => {
  return (
    <section id="experience" className="max-w-6xl py-32 flex flex-col gap-5 tracking-wide px-5">
      <Title title="Experience" titleNumber="03." />
      <div className="flex flex-col justify-center gap-10">
        <p className="text-body">
          Unfortunately I don&apos;t have any relevant experience as of now. But here are some certifications that I currently
          have :
        </p>
        <div className="flex flex-col xl:flex-row justify-between items-center gap-6">
          <Certification
            title="Fullstack Developer Bootcamp Certificate"
            src={s1}
            alt="Fullstack Developer Bootcamp Certificate Image"
            link="harisenin.com"
          />
          <Certification
            title="Google IT Support Professional Certificate"
            src={s2}
            alt="Google IT Support Professional Certificate Image"
            link="https://www.coursera.org/verify/professional-cert/7HTXKK8KUESA"
          />
        </div>
      </div>
    </section>
  );
};

export default Experience;
