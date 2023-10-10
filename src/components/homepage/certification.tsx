import Image, {StaticImageData} from "next/image";
import React from "react";
import Button from "../shared/button";

type Props = {
  title: string;
  src: StaticImageData;
  alt: string;
  link: string;
};

const Certification = ({title, src, alt, link}: Props) => {
  return (
    <div>
      <p className="flex justify-center pb-5">{title}</p>
      <div className="flex flex-col px-5 py-5 gap-3 bg-container rounded-lg">
        <a href={link} target="_blank">
          <Image className="w-[600px] h-80 rounded-lg" src={src} alt={alt} />
        </a>
      </div>
      <a href={link} target="_blank" className="flex justify-center items-center py-5">
        <Button title="Check" textSize="text-xs" />
      </a>
    </div>
  );
};

export default Certification;
