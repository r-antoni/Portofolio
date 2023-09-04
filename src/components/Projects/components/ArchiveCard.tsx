import React from "react";
import {FaRegFolder} from "react-icons/fa6";
import {RxOpenInNewWindow} from "react-icons/rx";

type Props = {
  projectTitle: string;
  desc: string;
  link: string;
  listItem: string[];
};

const ArchiveCard = ({projectTitle, desc, link, listItem}: Props) => {
  return (
    <a href={link} target="_blank">
      <div className="w-full h-80 rounded-lg bg-container flex flex-col justify-center p-5 gap-5 hover:-translate-y-2 transition-transform duration-300 group">
        <div className="flex justify-between items-center">
          <FaRegFolder className="text-xl hover:text-greentext" />
          <RxOpenInNewWindow className="text-xl hover:text-greentext" />
        </div>
        <div className="flex flex-col justify-between gap-5">
          <h2 className="flex justify-center text-xl font-semibold tracking-wide group-hover:text-greentext">
            {projectTitle}
          </h2>
          <p className="text-sm mt-3">{desc}</p>
          <ul className="flex items-center justify-center text-xs gap-5 py-5 text-body">
            {listItem.map((item, id) => (
              <li key={id}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </a>
  );
};

export default ArchiveCard;
