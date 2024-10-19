import { products } from '../permanent'
import ProductCard from '../components/ProductCard'

const CampusConnect = () => {
  return (
    <section className="max-container flex flex-col ">
      <div className='flex justify-center flex-col items-center'>
        <h3 className='text-4xl font-palanquin font-bold '>Campus<span className='text-bittersweet'>Connect</span></h3>
        <p className='font-montserrat text-gray-600'>Connect with entreprenuers from your university</p>
      </div>
      <div className= "grid lg:flex md:grid-cols-3 max-sm:grid-cols-2 grid-cols-1 sm:gap-4 lg:gap-10 lg:flex-wrap mt-7 cursor-pointer">
        {products.map ((product) => (
          <ProductCard key = {product.profile} {...product}/>
        ))}
      </div>
    </section>
  )
}

export default CampusConnect
