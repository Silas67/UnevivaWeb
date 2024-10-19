import Unevivalogo from "../assets/images/Unevivalogo.png";
import { footerLinks, socialMedia } from "../permanent";
import { copyrightSign } from "../assets/icons";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='max-container bg-green-300 text-black pt-14 pb-5 px-10'>
      <div className="flex justify-between items-start gap-20 max-lg:flex-col flex-wrap">
        <div className="flex flex-col items-start">
          <a href="#">
            <img src={Unevivalogo} alt="Logo" width={140} height={46} />
          </a>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map ((section) => (
            <div key={section}>
              <h4 className="text-2xl font-palanquin font-bold leading-normal" >
                {section.title}
              </h4>

              <ul>
                {section.links.map ((link) => (
                  <li key={link.name} className="text-base leading-normal hover:text-rose_quartz-600 cursor-pointer font-montserrat">
                    {link.name} 
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h4>Follow Us</h4>
            <div  className="flex flex-row gap-3 text-Night">
                <h4><FaInstagram /></h4>
                <h4><FaTwitter /></h4>
                <h4><FaFacebook /></h4>

            </div>
          </div>
        </div>
        
      </div>

      <div className="flex justify-between text-Night max-sm:flex-col mt-24 max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 first-line:font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="copy right sign"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>CopyRight. All rights reserved</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  )
}

export default Footer
