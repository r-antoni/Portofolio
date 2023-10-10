import Archive from "@/components/homepage/archive";
import AttendifyPreview from "@/components/homepage/attendify-preview";
import GlobetixPreview from "@/components/homepage/globetix-preview";
import PurrfectPreview from "@/components/homepage/purrfect-preview";
import Title from "@/components/shared/title";


const Projects = () => {
  const styles = {
    projects: "max-w-6xl mx-auto px-5 py-32",
    featured: "flex flex-col justify-center items-center w-full gap-20 mt-10"
  }

  return (
    <section id="projects" className={styles.projects}>
      <Title title="Things that I have Built" titleNumber="02." />
      <div className={styles.featured}>
        <AttendifyPreview />
        <GlobetixPreview />
        <PurrfectPreview />
      </div>
      <Archive />
    </section>
  );
};

export default Projects;