type Props = {
    title: string
    textSize: string
}

const Button = ({title, textSize}: Props) => {
  return (
    <button className={`bg-transparent border border-greentext hover:bg-greentext/30 px-5 ${textSize} py-2 font-semibold rounded hover:bg-greentext text-greentext hover:text-white`}>
        {title}
    </button>
  )
}

export default Button