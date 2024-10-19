import { BiPhoneCall } from "react-icons/bi"
import { FaClock } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6"
import Button from "../components/Button"
import { contactmsg } from "../permanent"
import { Footer } from "../sections"


const Contact = () => {
  return (
    <main> 
      <section className="w-full  h-[230px] flex items-center justify-center flex-col bg-gradient-to-tl from-green-400 to-green-100">
        <h4 className="text-4xl text-Hunter-green font-palanquin font-bold pb-2">
          #ContactUs
        </h4>
        <p className="text-xl text-Hunter-green font-montserrat">
          {" "}
          Leave us a message. We'd love to here from you{" "}
        </p>
      </section>

      <section className= "max-container padding-x py-6">
        <h2 className="text-xl text-gray-500 text-center">Get In Touch</h2>
        <h6 className="text-Night text-4xl font-semibold font-palanquin text-center">Visit one of our agengy locations</h6>
        <div className=" flex justify-between py-10">
          <div className="flex flex-col justify-center font-montserrat leading-10"> 
            <h2 className="font-bold">Head Office </h2>
            <p className="leading-normal"><span className="text-mint-300" ><FaLocationDot/></span>Bingham University New Karu XM4H+6H7, Abuja - Keffi Expy, Abuja 961105, Nasarawa</p>
            <p><span className="text-mint-300"><BiPhoneCall/></span>(+234)8104884845</p>
            <p><span className="text-mint-300">< FaClock/> </span>8:00am - 6:00pm</p>
          </div>
          
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.1803106305983!2d7.676343074344936!3d8.955526991102905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e1da525722f71%3A0xd49d8c0be39ea8a!2sBingham%20University%20New%20Karu!5e0!3m2!1sen!2sng!4v1716817997762!5m2!1sen!2sng" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          
        
        </div>
      </section>
      
      <form action=""  className= "max-container padding-x py-10 border border-mint-600 mx-8">
        <div className="flex flex-start flex-col ">
          <span className="pb-3">LEAVE A MESSAGE</span>
          <h2 className="text-2xl font-semibold font-spartan pb-3">We'd love to hear from you</h2>
          <div>
            {contactmsg.map ((item) => (
              <input type={item.type} placeholder={item.placeholder} className="flex flex-col py-2 border border-black px-3 mb-2 w-4/6 rounded-md outline-none"/>
            ))}
          </div>
          <textarea name="" id="" cols="30" rows="10" placeholder="Your Message" className="py-2 border border-black px-3 mb-2 rounded-md w-4/6 outline-mint">
          </textarea>
          <Button
          label="Submit" />
        </div>
      </form>

      <footer className="mt-10">
        <Footer/>
      </footer>
    </main>
  )
}

export default Contact
