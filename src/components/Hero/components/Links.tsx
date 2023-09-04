import Link from "next/link";
import React from "react";

type Props = {
  section: string;
  text: string;
};

const Links = ({section, text}: Props) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const el = document.getElementById(targetId);
    el?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <Link
      className="text-body py-2 hover:border-b border-white hover:text-white uppercase tracking-widest transition-all lg:w-24 duration-300"
      href={section}
      onClick={handleScroll}
    >
      {text}
    </Link>
  );
};

export default Links;
