import Image from 'next/image'

import { profile } from '../../../public/assets'

const Profile = () => {
  const styles = {
    profileWrapper: "flex flex-col lg:flex-row gap-20",
    detail: "flex flex-col text-body w-full lg:w-2/3 font-medium gap-10 text-base",
    importantDetail: "text-greentext",
    imageWrapper: "relative w-full lg:w-1/3 h-80 group",
    imageFrameWrapper: "absolute w-full h-80 -top-6 rounded-lg",
    imageFrame: "relative flex justify-center lg:justify-start w-full h-full z-20",
    imageShade: "hidden absolute z-50 lg:inline-block w-[300px] h-80 bg-greentext/30 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300",
    imageUnderline: "hidden absolute top-6 left-6 -z-10 lg:inline-flex w-[300px] h-80 border-2 border-greentext rounded-lg group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"
  }

  return (
    <div className="flex flex-col lg:flex-row gap-20">
        <div className="flex flex-col text-body w-full lg:w-2/3 font-medium gap-10 text-base">
            <p>
                <span className={styles.importantDetail}>I`&apos;`m a Software Engineer, specializing in fullstack web development technologies.</span> I`&apos;`m based in Bandung, Indonesia and have a strong interest in exploring latest fullstack <span>Tech Stack</span> like React JS, Next JS, Node JS and MySQL. I often dedicate hours each day into learning more about the latest technologies that i could work with, and deepens my skill on the one that I already used.
            </p>
            <p>
                You can check out some of <span className={styles.importantDetail}>My Work</span> below. I`&apos;`m passionate about research, analysis and ensuring code quality. I take immense pride in my work and have a deep love for the code I create. I always prioritizing readability of my code until performance became a problem.
            </p>
            <p>
            If you have any questions, please feel free to reach out to me on <span className={styles.importantDetail}><a href="">LinkedIn</a></span>. I`&apos;`d be happy to answer them.
            </p>
        </div>
        <div className={styles.imageWrapper}>
            <div className={styles.imageFrameWrapper}>
                <div className={styles.imageFrame}>
                <Image src={profile} width={300} height={300} alt="profile" className="rounded-lg" />
                <div className={styles.imageShade}></div>
                <div className={styles.imageUnderline}></div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Profile