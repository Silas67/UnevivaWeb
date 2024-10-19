
const Hero = () => {
  return (
    <section
    id="home"
      className="relative flex flex-1 flex-col flex-wrap justify-center min-h-screen  max-container bg-hero xl:bg-contain xl:max-w-screen-xl bg-cover max-lg:bg-center max-sm:min-h-[500px] max-sm:max-w-screen-sm">
      <div className="absolute flex flex-col justify-center items-start w-full max-xl:padding-x z-20 px-[80px]">
        <p className="font-palanquin text-2xl max-sm:text-lg mb-6 ml-7 max-sm:mb-4">Trade-In-Offer</p>
        <p className="max-sm:leading-normal leading-snug font-spartan text-4xl max-sm:text-3xl">Super Value Deals <br/> 
        <span className="text-mint-300"> On All Products </span>
        </p>
        <span className="text-rose_quartz-400 pb-3 text-sm max-sm:text-xs">Save more with coupons and 70% off!</span>
        <a href="/"><button className="bg-button bg-no-repeat bg-contain bg-center border-0 bg-transparent py-[10px] px-[65px] sm:px-[80px] font-semibold text-Hunter-green">Shop Now</button></a>
      </div>
      
    </section>
  )
}

export default Hero
