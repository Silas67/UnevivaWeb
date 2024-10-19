import app from '../assets/videos/app.mp4'
import Unevivalogo from "../assets/images/Unevivalogo.png";
import ab2 from '../assets/images/ab-2.jpg'
import { Footer } from '../sections';
const About = () => {
  return (
    <main>
      <section className="w-full  h-[230px] flex items-center justify-center flex-col bg-ab-1 bg-cover bg-center">
        <h4 className="text-4xl text-white font-palanquin font-bold pb-2">
          #KnowUs
        </h4>
        <p className="text-xl text-white-400 font-montserrat">
          {" "}
          Get to Know More About Uneviva{" "}
        </p>
      </section>

      <section className="px-8 py-6">
        <div>
          <h4 className="text-4xl max-sm:text-3xl max-sm:font-bold max-sm:text-wrap font-semibold font-palanquin text-center mb-10">
            Welcome To
            <span className="bg-gradient-to-r from-mint-300 to-white bg-clip-text text-transparent">
              {" "}
              Uneviva..viva..viva..viva..a{" "}
            </span>
          </h4>
        </div>

        <div className="flex justify-between gap-7">
          <div>
            <img src={Unevivalogo} alt="image" width={3200} height={100} />
          </div>
          <p className=" font-montserrat text-gray-700 ">
            Here at Uneviva, we're on a mission to change revolutionize how university
            communities connect, shop, and support each other. Picture this:
            your campus isn't just a place for lectures, labs, and last-minute
            study sessions (though, we’ve all been there), it's also a vibrant
            marketplace full of hidden gems just waiting to be discovered. From
            students with entrepreneurial side hustles to faculty members
            selling quirky crafts, Uneviva makes it easier than ever for you to
            find what you need—and maybe even things you didn’t know you needed!
            Whether you’re a student, faculty member, or proud alum, we’ve
            designed this platform to enhance your shopping experience while
            also supporting the talented local sellers within your university.
            It's like the flea market you didn’t know your campus had, but with
            way fewer questionable antiques and way more relevant stuff. Need a
            handmade hoodie with your school’s logo? A poster for your dorm
            room? Or maybe you just want to browse and see what cool things your
            peers are up to. Whatever it is, Uneviva is here to help you shop
            smart, support local, and maybe even score some brag-worthy finds.
            So go ahead, explore Uneviva, your very own university marketplace,
            where the hustle meets home turf, and every purchase feels like a
            win for the community!
          </p>
        </div>
      </section>

      <section className='padding-x py-6 flex justify-between gap-8 items-center'>
        <div>
          <h4 className='text-3xl font-palanquin font-semibold'><span className='text-mint-300'>Empowering</span> Entreprenuers</h4>
          <p className='pt-2 font-montserrat text-gray-800'>We’re all about supporting local businesses and campus entrepreneurs. That’s why Uneviva exists—to help sellers on university campuses connect with buyers who want unique, handcrafted items, essential supplies, and more. Our platform has something for everyone, with products tailored to the needs of students, faculty, and alumni. At Uneviva, it's all about building connections within the university community. Whether you're after dorm essentials, academic gear, or a special gift, you can shop local and support your peers while finding exactly what you need.</p>
        </div>
        <div>
          <img src={ab2} alt="#image" width={3200} className='rounded-md'/>
        </div>
        
      </section>

      <section className="padding-x flex justify-center flex-col items-center">
        <h4 className="text-3xl font-palanquin font-semibold">Our Vision & <span className="text-mint-300">Goals</span></h4>
        <p className="font-montserrat">We started with a simple idea: give everyone in university communities a fair shot at entrepreneurship. We believe anyone, no matter their background or resources, should be able to turn their ideas into something real. Uneviva is here to break down barriers, spark passion, and unleash the entrepreneurial energy on campuses. Our goal is to build a supportive space where talents grow, collaborations happen, and big ideas come to life. Whether it’s through resources, mentorship, or networking, we’re here to help university entrepreneurs thrive.</p>
        <h4 className="text-3xl font-palanquin font-semibold">Join the <span className="text-mint-300">Uneviva</span> Community</h4>
        <p className="font-montserrat"> Whether you’re looking to find unique products or show off what you’re selling, Uneviva is your place. Dive into our platform, connect with local sellers, and discover the vibrant marketplace right in your university community. One purchase at a time, we’re building a stronger, more connected campus. Ready to shop local and experience the best of university life? Sign up to get exclusive recommendations, special offers, and more. Let’s support local sellers and celebrate all the creativity around us!</p>
      </section>

      <section className="padding-x py-6 flex flex-col items-center justify-center">
        <h4 className='text-4xl max-sm:text-2xl py-2 '>Download Our <span className='underline text-mint-300'>App </span></h4>
        <video src={app} autoPlay muted loop className='w-[60%] h-[100%] mx-[30px] rounded-3xl' >
        </video>
      </section>
      <footer>
        <Footer/>
      </footer>
    </main>
  );
};

export default About;
