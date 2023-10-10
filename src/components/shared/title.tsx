type Props = {
  title: string;
  titleNumber: string;
};

const Title = ({title, titleNumber}: Props) => {
  const styles = {
    title: "flex items-center text-2xl font-semibold py-10",
    titleNumber: "text-greentext mr-2",
    line: "hidden md:inline-flex md:w-60 xl:w-80 h-[.5px] bg-gray-500 ml-6",
  };

  return (
    <h2 className={styles.title}>
      <span className={styles.titleNumber}>{titleNumber}</span>
      {title}
      <span className={styles.line}></span>
    </h2>
  );
};

export default Title;
