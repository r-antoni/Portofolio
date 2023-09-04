import React from "react";
import {MdWhatsapp} from "react-icons/md";
import {SlSocialGithub, SlSocialLinkedin, SlSocialTwitter} from "react-icons/sl";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="hidden md:inline-flex xl:hidden justify-center items-center w-full py-12 gap-5 text-greentext">
      <a href="https://www.linkedin.com/in/reindra-bachtiar-antoni/" target="_blank">
        <span className="flex justify-center bg-container rounded-full w-12 h-12 items-center hover:text-white hover:-translate-y-2 transition-all duration-300">
          <SlSocialLinkedin size={20} />
        </span>
      </a>
      <a href="https://github.com/R-Antoni" target="_blank">
        <span className="flex justify-center bg-container rounded-full w-12 h-12 items-center hover:text-white hover:-translate-y-2 transition-all duration-300">
          <SlSocialGithub size={24} />
        </span>
      </a>
      <a href="https://twitter.com/0xSky513" target="_blank">
        <span className="flex justify-center bg-container rounded-full w-12 h-12 items-center hover:text-white hover:-translate-y-2 transition-all duration-300">
          <SlSocialTwitter size={20} />
        </span>
      </a>
      <a href="https://api.whatsapp.com/send/?phone=6287834056763" target="_blank">
        <span className="flex justify-center bg-container rounded-full w-12 h-12 items-center hover:text-white hover:-translate-y-2 transition-all duration-300">
          <MdWhatsapp size={24} />
        </span>
      </a>
    </div>
  );
};

export default Footer;
