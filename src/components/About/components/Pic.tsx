import Image from "next/image";
import React from "react";
import {profile} from "../../../../public/assets";

type Props = {};

const Pic = (props: Props) => {
  return (
    <div className="relative w-full lg:w-1/3 h-80 group">
      <div className="absolute w-full h-80 -top-6 rounded-lg">
        <div className="relative flex justify-center lg:justify-start w-full h-full z-20">
          <Image src={profile} width={300} height={300} alt="profile" className="rounded-lg" />
          <div className="hidden absolute z-50 lg:inline-block w-[300px] h-80 bg-greentext/30 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
          <div className="hidden absolute top-6 left-6 -z-10 lg:inline-flex w-[300px] h-80 border-2 border-greentext rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
        </div>
      </div>
    </div>
  );
};

export default Pic;
