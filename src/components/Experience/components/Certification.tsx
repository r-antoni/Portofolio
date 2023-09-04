import Image, {StaticImageData} from "next/image";
import React from "react";

type Props = {
  title: string;
  src: string | StaticImageData;
  alt: string;
};

const Certification = ({title, src, alt}: Props) => {
  return (
    <div className="flex flex-col gap-5">
      <p className="flex justify-center">{title}</p>
      <Image className="w-full h-80" src={src} alt={alt} />
    </div>
  );
};

export default Certification;
