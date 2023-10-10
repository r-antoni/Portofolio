import About from "./components/about";
import Contact from "./components/contact";
import Email from "./components/email";
import Experience from "./components/experience";
import Header from "./components/header";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Social from "./components/social";


export default function Home() {
  const styles = {
    home: "z-0 bg-background w-full h-screen text-white overflow-x-hidden overflow-y-scroll scrollbar-thin scrollbar-track-container scrollbar-thumb-greentext",
    leftside: "hidden xxl:inline-flex w-40 h-full fixed left-5 bottom-0",
    rightside: "hidden xxl:inline-flex w-40 h-full fixed right-5 bottom-0",
    contentWrapper: "xl:flex justify-between items-center gap-20 w-full h-[88vh]",
    content: "mx-auto h-screen",
  };

  return (
    <div className={styles.home}>
      <Header />
      <div className={styles.contentWrapper}>
        <div className={styles.leftside}>
          <Social />
        </div>
        <div className={styles.content}>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Contact />
        </div>
        <div className={styles.rightside}>
          <Email />
        </div>
      </div>
    </div>
  );
}
