import React from "react";
import {MdWhatsapp} from "react-icons/md";
import {SlSocialGithub, SlSocialLinkedin, SlSocialTwitter} from "react-icons/sl";

type Props = {};

const MobileSocial = (props: Props) => {
  return (
    <div className="flex justify-center items-center gap-5 text-white pt-5">
      <a href="https://www.linkedin.com/in/reindra-bachtiar-antoni/" target="_blank">
        <span className="flex justify-center bg-body rounded-full w-10 h-10 items-center hover:bg-greentext transition-all duration-300">
          <SlSocialLinkedin size={20} />
        </span>
      </a>
      <a href="https://github.com/R-Antoni" target="_blank">
        <span className="flex justify-center bg-body rounded-full w-10 h-10 items-center hover:bg-greentext transition-all duration-300">
          <SlSocialGithub size={20} />
        </span>
      </a>
      <a href="https://twitter.com/0xSky513" target="_blank">
        <span className="flex justify-center bg-body rounded-full w-10 h-10 items-center hover:bg-greentext transition-all duration-300">
          <SlSocialTwitter size={20} />
        </span>
      </a>
      <a href="https://api.whatsapp.com/send/?phone=6287834056763" target="_blank">
        <span className="flex justify-center bg-body rounded-full w-10 h-10 items-center hover:bg-greentext transition-all duration-300">
          <MdWhatsapp size={20} />
        </span>
      </a>
    </div>
  );
};

export default MobileSocial;
