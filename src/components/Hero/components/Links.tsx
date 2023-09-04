import Link from "next/link";
import React from "react";

type Props = {
  section: string;
  text: string;
};

const Links = ({section, text}: Props) => {
  return (
    <Link className="text-body py-2 hover:border-b border-white hover:text-white uppercase tracking-widest transition-all lg:w-24 duration-300" href={section}>
        {text}
    </Link>
  );
};

export default Links;
