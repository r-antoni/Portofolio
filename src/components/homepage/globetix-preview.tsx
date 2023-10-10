import Image from "next/image";
import Link from "next/link";

import {p2} from "../../../public/assets";
import Button from "../shared/button";

const GlobetixPreview = () => {
  const styles = {
    previewWrapper: "flex flex-col xl:flex-row gap-5 pb-10",
    imageWrapper: "w-full xl:w-1/2 h-auto relative group",
    image: "rounded-lg",
    detailWrapper: "w-full xl:w-1/2 flex flex-col lg:justify-between items-center xl:items-start text-right xl:-mr-16 gap-5 z-10",
    category: "text-greentext text-sm tracking-widest",
    title: "text-2xl font-bold",
    detail: "bg-container text-sm md:text-base p-2 md:p-6 rounded-md text-center",
    detailButton: "flex gap-5 mx-auto"
  }

  return (
    <div className="flex flex-col xl:flex-row-reverse gap-5 pb-10">
      <Link href="/globetix" className={styles.imageWrapper}>
        <Image src={p2} alt="globetix" className={styles.image} />
      </Link>
      <div className={styles.detailWrapper}>
        <p className={styles.category}>Featured Project</p>
        <h3 className={styles.title}>GlobeTix</h3>
        <p className={styles.detail}>
          GlobeTix is a fullstack travel booking website, with several destination to choose in Indonesia. It is created using Next.js 13 with Next.js app router and TailwindCSS, it is also using Stripe for payment checkout.
        </p>
        <div className={styles.detailButton}>
          <Link href="/globetix">
            <Button title="See Details" textSize="text-xs" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GlobetixPreview;
