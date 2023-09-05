import Header from "@/components/Header/Header";
import Social from "@/components/Shared/Social";
import Email from "@/components/Shared/Email";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Projects from "@/components/Projects/Projects";
import Experience from "@/components/Experience/Experience";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <div className="z-0 bg-background w-full h-screen text-white overflow-x-hidden overflow-y-scroll scrollbar-thin scrollbar-track-container scrollbar-thumb-greentext">
      <Header />
      <div className="xl:flex justify-between items-center gap-20 w-full h-[88vh]">
        <div className="hidden xxl:inline-flex w-40 h-full fixed left-5 bottom-0">
          <Social />
        </div>
        <div className="mx-auto h-screen">
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Contact />
        </div>
        <div className="hidden xxl:inline-flex w-40 h-full fixed right-5 bottom-0">
          <Email />
        </div>
      </div>
    </div>
  );
}
