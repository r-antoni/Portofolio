import React from "react";

type Props = {
  title: string;
  titleNumber: string;
};

const Title = ({title, titleNumber}: Props) => {
  return (
    <h2 className="flex items-center text-2xl font-semibold py-10">
      <span className="text-greentext mr-2">{titleNumber}</span>
      {title}
      <span className="hidden md:inline-flex md:w-60 xl:w-80 h-[.5px] bg-gray-500 ml-6"></span>
    </h2>
  );
};

export default Title;
