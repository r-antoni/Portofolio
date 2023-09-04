import React from "react";

type Props = {};

const MobileEmail = (props: Props) => {
  return (
    <a href="mailto:reindraantoni@gmail.com">
      <p className="flex justify-center items-center text-sm w-96 tracking-[2.5px] text-white hover:text-greentext transition-all duration-300">
        reindraantoni@gmail.com
      </p>
    </a>
  );
};

export default MobileEmail;
