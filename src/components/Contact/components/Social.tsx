import React from "react";
import {MdWhatsapp} from "react-icons/md";
import {SlSocialGithub, SlSocialLinkedin, SlSocialTwitter} from "react-icons/sl";

type Props = {};

const Social = (props: Props) => {
  return (
    <div className="flex justify-center items-center gap-10 xl:hidden">
      <a href="https://www.linkedin.com/in/reindra-bachtiar-antoni/" target="_blank">
        <span className="flex justify-center bg-container rounded-full w-16 h-16 items-center hover:text-white hover:-translate-y-2 transition-all duration-300">
          <SlSocialLinkedin size={28} />
        </span>
      </a>
      <a href="https://github.com/R-Antoni" target="_blank">
        <span className="flex justify-center bg-container rounded-full w-16 h-16 items-center hover:text-white hover:-translate-y-2 transition-all duration-300">
          <SlSocialGithub size={32} />
        </span>
      </a>
      <a href="https://twitter.com/0xSky513" target="_blank">
        <span className="flex justify-center bg-container rounded-full w-16 h-16 items-center hover:text-white hover:-translate-y-2 transition-all duration-300">
          <SlSocialTwitter size={28} />
        </span>
      </a>
      <a href="https://api.whatsapp.com/send/?phone=6287834056763" target="_blank">
        <span className="flex justify-center bg-container rounded-full w-16 h-16 items-center hover:text-white hover:-translate-y-2 transition-all duration-300">
          <MdWhatsapp size={32} />
        </span>
      </a>
    </div>
  );
};

export default Social;
