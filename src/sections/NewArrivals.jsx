import { products } from '../permanent'
import ArrivalsCard from '../components/ArrivalsCard'


const NewArrivals = () => {
  return (
    <section className="max-container flex flex-col ">
      <div className='flex justify-center flex-col items-center'>
        <h3 className='text-4xl font-palanquin font-bold'><span className='text-Hunter-green'>New</span>Arrivals</h3>
        <p className='font-montserrat text-gray-600'>Connect with entreprenuers from your university</p>
      </div>
      <div className= "grid lg:flex md:grid-cols-3 max-sm:grid-cols-2 grid-cols-1 sm:gap-4 lg:gap-10 lg:flex-wrap mt-7 cursor-pointer">
        {products.map ((pro) => (
          <ArrivalsCard key = {pro.profile} {...pro}/>
        ))}
      </div>
    </section>
  )
}

export default NewArrivals
