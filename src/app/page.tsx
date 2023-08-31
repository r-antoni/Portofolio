import Header from "@/components/Header";
import Social from "@/components/Social";
import Email from "@/components/Email";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Projects from "@/components/Projects/Projects";
import Experience from "@/components/Experience/Experience";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <div className="bg-background w-full h-screen text-white overflow-x-hidden overflow-y-scroll z-0">
      <Header />
      <div className="xl:flex justify-between items-center gap-20 w-full h-[88vh]">
        <div className="hidden xl:inline-flex w-32 h-full fixed left-10 bottom-0">
          <Social />
        </div>
        <div className="mx-auto h-screen">
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Contact />
        </div>
        <div className="hidden xl:inline-flex w-32 h-full fixed right-10 bottom-0">
          <Email />
        </div>
      </div>
    </div>
  );
}
