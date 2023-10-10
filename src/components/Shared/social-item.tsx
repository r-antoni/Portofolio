import {FaLinkedinIn, FaTwitter} from "react-icons/fa6";
import {VscGithub} from "react-icons/vsc";
import {IoLogoWhatsapp} from "react-icons/io";


const SocialItem = () => {
    const styles = {
        icons:
      "flex items-center justify-center bg-container rounded-full w-12 h-12 text-greentext hover:text-white hover:-translate-y-2 transition-all duration-300"
    }

  return (
    <>
      <a href="https://www.linkedin.com/in/reindra-bachtiar-antoni/" target="_blank">
          <span className={styles.icons}>
            <FaLinkedinIn size={20} />
          </span>
        </a>
        <a href="https://github.com/R-Antoni" target="_blank">
          <span className={styles.icons}>
            <VscGithub size={24} />
          </span>
        </a>
        <a href="https://twitter.com/0xSky513" target="_blank">
          <span className={styles.icons}>
            <FaTwitter size={20} />
          </span>
        </a>
        <a href="https://api.whatsapp.com/send/?phone=6287834056763" target="_blank">
          <span className={styles.icons}>
            <IoLogoWhatsapp size={20} />
          </span>
        </a>
    </>
  )
}

export default SocialItem