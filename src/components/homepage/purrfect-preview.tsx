import Image from "next/image";
import Link from "next/link";

import {p3} from "../../../public/assets";
import Button from "../shared/button";

const PurrfectPreview = () => {
  const styles = {
    previewWrapper: "flex flex-col xl:flex-row gap-5 pb-10",
    imageWrapper: "w-full xl:w-1/2 h-auto relative group",
    image: "rounded-lg",
    detailWrapper:
      "w-full xl:w-1/2 flex flex-col lg:justify-between items-center xl:items-end text-right xl:-ml-16 gap-5 z-10",
    category: "text-greentext text-sm tracking-widest",
    title: "text-2xl font-bold",
    detail: "bg-container text-sm md:text-base p-2 md:p-6 rounded-md text-center",
    detailButton: "flex gap-5 mx-auto",
  };

  return (
    <div className={styles.previewWrapper}>
      <Link href="/purrfect" className={styles.imageWrapper}>
        <Image src={p3} alt="purrfect-store" className={styles.image} />
      </Link>
      <div className={styles.detailWrapper}>
        <p className={styles.category}>Featured Project</p>
        <h3 className={styles.title}>Purrfect Store</h3>
        <p className={styles.detail}>
          Attendify is an attendance management app with role based authorization. At its core Attendify is a simple
          CRUD app with a main purpose of being an activity management and monitoring tool.
        </p>
        <div className={styles.detailButton}>
          <Link href="/purrfect">
            <Button title="See Details" textSize="text-xs" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PurrfectPreview;
