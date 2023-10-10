import Image from "next/image";

import {git, js, netlify, next, nodejs, react, tailwind, ts, vite} from "../../../public/assets";

const Skills = () => {
    const styles = {
        skillsWrapper: "flex flex-col items-center gap-10 pt-10 max-w-7xl mx-auto",
        text: "flex items-center justify-center text-lg",
        skillList: "grid grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-x-40 mt-5 text-sm px-5 text-body",
        listItem: "flex items-center gap-3",
        logo: "w-6 lg:w-8 rounded-lg"
    }

  return (
    <div className={styles.skillsWrapper}>
      <p className={styles.text}>
        These are the the technologies that I have been working with recently:
      </p>
      <ul className={styles.skillList}>
        <li className={styles.listItem}>
          <Image src={js} alt="Javascript Logo" className={styles.logo} />
          Javascript (ES6+)
        </li>
        <li className={styles.listItem}>
          <Image src={react} alt="React JS Logo" className={styles.logo} />
          React JS
        </li>
        <li className={styles.listItem}>
          <Image src={next} alt="Next JS Logo" className={styles.logo} />
          Next JS
        </li>
        <li className={styles.listItem}>
          <Image src={tailwind} alt="TailwindCSS Logo" className={styles.logo} />
          TailwindCSS
        </li>
        <li className={styles.listItem}>
          <Image src={ts} alt="Typescript Logo" className={styles.logo} />
          Typescript
        </li>
        <li className={styles.listItem}>
          <Image src={nodejs} alt="Node JS Logo" className={styles.logo} />
          Node JS
        </li>
        <li className={styles.listItem}>
          <Image src={git} alt="Github Logo" className={styles.logo} />
          Github
        </li>
      </ul>
    </div>
  );
};

export default Skills;
