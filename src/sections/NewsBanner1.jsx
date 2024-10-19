import React from 'react'

const NewsBanner1 = () => {
  return (
    <section className='flex justify-center items-center flex-col bg-banner1 bg-cover bg-center max-container py-10'>
      <h1 className='text-sm text-dark_moss_green-500 font-semibold
       mb-10 '>Repair Services</h1>
      <h4 className='text-xl font-palanquin font-bold px-3 text-center lg:text-3xl text-dark_moss_green-400'>UP to <span className='text-bittersweet'>70%</span> offer for most T-shirts and Accessories</h4> 
      <a href="/"><button className='w-30 bg-mint-300 border rounded-lg px-3 py-3 mt-3 hover:text-white-smoke hover:bg-mint-200 transition-colors'>Explore More</button></a>
    </section>
  )
}

export default NewsBanner1
