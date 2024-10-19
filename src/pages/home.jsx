import {
    CampusConnect, Hero, Benefits, Footer, NewArrivals, NewsBanner1, NewsBanner2, Subscribe
  } from '../sections';
  
  const Home = () => {
    return (
        
      <main className="relative">
          <section className="">
            <Hero />
          </section>
          <section className="padding">
            <Benefits />
          </section>
          <section className="padding">
            <CampusConnect />
          </section>
          <section>
            <NewsBanner1 />
          </section>
          <section className="padding">
            <NewArrivals />
          </section>
          <section className='px-10 py-20'>
            <NewsBanner2 />
          </section>
          <section>
            <Subscribe />
          </section>
          <section className="padding-x pb-6 bg-green-300 text-black"> 
            <Footer />
          </section>
      </main>
    )
  };
  
  export default Home
  