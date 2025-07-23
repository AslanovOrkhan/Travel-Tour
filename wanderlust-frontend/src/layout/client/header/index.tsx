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
      <ul data-aos="fade-down" className="hidden items-end gap-10 lg:flex">
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
          <img src={logoImage} alt="Logo" className="mx-5 mb-2 w-43" />
        </li>
        <li>
          <a
            href="#"
            className="text-gray-500 font-bold text-sm uppercase tracking-widest"
          >
            destinations
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-gray-500 font-bold text-sm uppercase tracking-widest"
          >
            pages
          </a>
        </li>
        <li>
          <Link
            to="contact"
            className="text-gray-500 font-bold text-sm uppercase tracking-widest"
          >
            contact
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
