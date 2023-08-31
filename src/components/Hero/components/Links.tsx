import Link from "next/link";
import React from "react";

type Props = {
  section: string;
  text: string;
};

const Links = ({section, text}: Props) => {
  return (
    <Link href={section}>
      <button className="text-body py-2 hover:border-b border-white hover:text-white uppercase tracking-widest transition-all lg:w-24 xl:w-32 duration-300">
        {text}
      </button>
    </Link>
  );
};

export default Links;
