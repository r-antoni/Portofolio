import Image, {StaticImageData} from "next/image";
import React from "react";

type Props = {
  title: string;
  src: string | StaticImageData;
  alt: string;
  link: string;
};

const Certification = ({title, src, alt, link}: Props) => {
  return (
    <div className="flex flex-col gap-5">
      <a href={link} target="_blank">
      <p className="flex justify-center py-5">{title}</p>
      <Image className="w-full h-80" src={src} alt={alt} />
      </a>
    </div>
  );
};

export default Certification;
