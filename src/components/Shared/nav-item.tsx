import Link from "next/link";

type Props = {
  section: string;
  name: string;
};

const NavItem = ({section, name}: Props) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const el = document.getElementById(targetId);
    el?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const styles = {
    item: "text-body text-sm  py-2 hover:border-b border-white hover:text-white uppercase tracking-widest transition-all lg:w-28 duration-300"
  }
  return (
    <Link
      className={styles.item}
      href={section}
      onClick={handleScroll}
    >
      {name}
    </Link>
  );
};

export default NavItem;
