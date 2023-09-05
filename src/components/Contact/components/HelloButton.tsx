import React from "react";

type Props = {};

const HelloButton = (props: Props) => {
  return (
    <a href="mailto:reindraantoni@gmail.com">
      <button className="w-40 h-16 z-50 font-semibold mt-10 tracking-widest rounded-md text-white bg-container hover:bg-greentext hover:text-background duration-300">
        Say Hello
      </button>
    </a>
  );
};

export default HelloButton;
