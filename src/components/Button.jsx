const Button = ({label, bgcolor, white, rounded}) => {
  return (
    <div className="">
        <button className={`w-[120px] px-2 py-2 mt-3 hover:text-white-smoke border transition-colors ${bgcolor ? "hover:bg-bittersweet" : "bg-mint-500"} ${white ? "text-white-400 hover:text-Night" : ""} ${rounded ? "rounded-full" : "rounded-md"}`}>
            {label}
        </button>
    </div>
  )
}

export default Button
