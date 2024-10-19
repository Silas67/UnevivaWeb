import { MdOutlineShoppingCart } from "react-icons/md"

const CartButton = () => {
  return (
    <div>
      <a href="/" className="absolute bottom-3 right-5 flex justify-end"><i className="w-9 h-9 rounded-full hover:bg-mint-500 hover:text-white hover:border-mint-200 bg-mint-900 text-bittersweet border border-bittersweet items-center justify-center first:flex"><MdOutlineShoppingCart/></i></a>
    </div>
  )
}

export default CartButton
