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
  const styles = {
    title: "flex justify-center pb-5",
    imageWrapper: "flex flex-col px-5 py-5 gap-3 bg-container rounded-lg",
    image: "w-[450px] h-[250px]  rounded-lg",
    link: "flex justify-center items-center py-5"
  }
  return (
    <div>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.imageWrapper}>
          <Image className={styles.image} src={src} alt={alt} />
      </div>
      <a href={link} target="_blank" className={styles.link}>
        <Button title="View" textSize="text-xs" />
      </a>
    </div>
  );
};

export default Certification;
