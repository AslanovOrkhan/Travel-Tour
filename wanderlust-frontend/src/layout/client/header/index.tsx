import { SlBasket } from "react-icons/sl";
import logoImage from "../../../assets/images/logo-hiking-1.png";
import logoMobile from "../../../assets/images/logo-hiking-mobile-1.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { useEffect, useState } from "react";
import AOS from "aos";
import { Link } from "react-router";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);
  return (
    <div
      className={`overflow:hidden lg:mt-10 mt-3 p-4 flex sticky top-0 right-0 w-full items-end lg:justify-center justify-between z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <ul data-aos="fade-down" className="items-end gap-10 hidden lg:flex">
        <li>
          <Link
            to="/"
            className="text-gray-500 font-bold text-sm uppercase tracking-widest"
          >
            home
          </Link>
        </li>
        <li>
          <Link
            to="tourlist"
            className="text-gray-500 font-bold text-sm uppercase tracking-widest"
          >
            tour list
          </Link>
        </li>
        <li>
          <Link
            to="toursearch"
            className="text-gray-500 font-bold text-sm uppercase tracking-widest"
          >
            tour search
          </Link>
        </li>
        <li>
          <img src={logoImage} alt="Logo" className="lg:d-flex hidden mx-5 mb-2 w-43" />
        </li>
        <li>
          <Link
            to="destinations"
            className="text-gray-500 font-bold text-sm uppercase tracking-widest"
          >
            destinations
          </Link>
        </li>
        <li className="relative group">
          <a
            href="#"
            className="text-gray-500 font-bold text-sm uppercase tracking-widest"
          >
            pages
          </a>
          <ul
            className="absolute bg-black py-3 px-4 w-[10rem] opacity-0 translate-y-2 invisible 
               group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible 
               transition-all duration-300 ease-in-out flex flex-col z-50"
          >
            <li>
              <Link to="contact" className="text-white capitalize block w-full">
                contact
              </Link>
            </li>
            <li>
              <Link to="portfolio" className="text-white capitalize block w-full">
                portfolio
              </Link>
            </li>
            <li>
              <Link to="gallery" className="text-white capitalize block w-full">
                gallery
              </Link>
            </li>
            <li>
              <Link to="services" className="text-white capitalize block w-full">
                services
              </Link>
            </li>
            <li>
              <a href="#" className="text-white capitalize block w-full">
                item5
              </a>
            </li>
            <li>
              <a href="#" className="text-white capitalize block w-full">
                item6
              </a>
            </li>
            <li>
              <a href="#" className="text-white capitalize block w-full">
                item7
              </a>
            </li>
          </ul>
        </li>
        <li>
          <Link
            to="blog"
            className="text-gray-500 font-bold text-sm uppercase tracking-widest"
          >
            blog
          </Link>
        </li>
      </ul>
      <div data-aos="fade-down" className="lg:hidden">
        <img src={logoMobile} alt="" className="w-45" />
      </div>
      <div data-aos="fade-down" className="flex items-end gap-5">
        <SlBasket className="text-2xl text-amber-400 font-black text-center lg:hidden" />
        <RxHamburgerMenu className="text-2xl text-amber-400 flex font-black lg:hidden" />
      </div>
    </div>
  );
};

export default Header;
