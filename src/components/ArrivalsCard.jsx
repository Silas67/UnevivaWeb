import CartButton from "./CartButton"

const ArrivalsCard = ({imgURL, profile, description}) => {
  return (
    
    <div className="flex flex-wrap relative w-[230px] px-[14px] py-[12px] border border-gray-400 rounded-lg cursor-pointer shadow-lg max-sm:mb-5
    max-sm:w-[170px]">
        <img src={imgURL} alt="product" className="border rounded-xl"/>
        <div className="text-start p-[10px] justify-between flex flex-col">
            <p className="text-xs text-gray-500 font-montserrat font-">{profile}</p>
            <h4 className="text-rose_quartz-100">{description}</h4>
            <CartButton/>
        </div>
    </div>
  )
}

export default ArrivalsCard
