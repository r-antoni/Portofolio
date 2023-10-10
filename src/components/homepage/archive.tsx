import Button from "../shared/button";
import ArchiveCard from "./archive-card";

const Archive = () => {
  const styles = {
    archiveWrapper: "max-w-7xl mx-auto mt-20",
    title: "flex justify-center w-full items-center text-2xl font-semibold",
    grid: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-10 px-5 lg:px-10",
    button: "flex justify-center items-center py-10"
  }

  return (
    <div className={styles.archiveWrapper}>
      <h2 className={styles.title}>Other Noteworthy Projects</h2>
      <div className={styles.grid}>
        <ArchiveCard
          projectTitle="Small Project 1"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius molestiae cum fugiat, sunt illum repellat magni! Cumque quod aliquam quam expedita odio ipsum et sint alias sunt, repellendus tenetur beatae?"
          link="https://www.google.com"
          listItem={["React", "Tailwind", "Netlify"]}
        />
        <ArchiveCard
          projectTitle="Small Project 2"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius molestiae cum fugiat, sunt illum repellat magni! Cumque quod aliquam quam expedita odio ipsum et sint alias sunt, repellendus tenetur beatae?"
          link="https://www.google.com"
          listItem={["React", "Tailwind", "Netlify"]}
        />
        <ArchiveCard
          projectTitle="Small Project 3"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius molestiae cum fugiat, sunt illum repellat magni! Cumque quod aliquam quam expedita odio ipsum et sint alias sunt, repellendus tenetur beatae?"
          link="https://www.google.com"
          listItem={["React", "Tailwind", "Netlify"]}
        />
        <ArchiveCard
          projectTitle="Small Project 4"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius molestiae cum fugiat, sunt illum repellat magni! Cumque quod aliquam quam expedita odio ipsum et sint alias sunt, repellendus tenetur beatae?"
          link="https://www.google.com"
          listItem={["React", "Tailwind", "Netlify"]}
        />
        <ArchiveCard
          projectTitle="Small Project 4"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius molestiae cum fugiat, sunt illum repellat magni! Cumque quod aliquam quam expedita odio ipsum et sint alias sunt, repellendus tenetur beatae?"
          link="https://www.google.com"
          listItem={["React", "Tailwind", "Netlify"]}
        />
      </div>
      <div className={styles.button}>
        <a href="https://github.com/R-Antoni" target="_blank">
          <Button title="More on Github" textSize="text-xs"/>
        </a>
      </div>
    </div>
  );
};

export default Archive;