import Profile from "@/components/homepage/profile";
import Title from "@/components/shared/title";
import Skills from "@/components/homepage/skills";

const About = () => {
  return (
    <section id="about" className="flex flex-col mx-auto py-32 px-10 gap-10 max-w-6xl">
      <Title titleNumber="01." title="About Me" />
      <Profile />
      <Skills />
    </section>
  );
};

export default About;
