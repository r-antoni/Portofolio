import {FaRegFolder} from "react-icons/fa6";
import {RxOpenInNewWindow} from "react-icons/rx";

type Props = {
  projectTitle: string;
  desc: string;
  link: string;
  listItem: string[];
};

const ArchiveCard = ({projectTitle, desc, link, listItem}: Props) => {
  const styles = {
    card : "w-full h-80 rounded-lg bg-container flex flex-col justify-center p-5 gap-5 hover:-translate-y-2 transition-transform duration-300 group",
    iconWrapper: "flex justify-between items-center",
    icon: "text-xl hover:text-greentext",
    detailWrapper: "flex flex-col justify-between gap-5",
    title: "flex justify-center text-xl font-semibold tracking-wide group-hover:text-greentext",
    desc: "text-sm mt-3",
    items: "flex items-center justify-center text-xs gap-5 py-5 text-body"
  }

  return (
    <a href={link} target="_blank">
      <div className={styles.card}>
        <div className={styles.iconWrapper}>
          <FaRegFolder className={styles.icon} />
          <RxOpenInNewWindow className={styles.icon}/>
        </div>
        <div className={styles.detailWrapper}>
          <h2 className={styles.title}>
            {projectTitle}
          </h2>
          <p className={styles.desc}>{desc}</p>
          <ul className={styles.items}>
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