import { FaArrowRightLong } from "react-icons/fa6";
import textImageOne from "../../../assets/images/hiking-slider-text-1.png";
import textImageTwo from "../../../assets/images/hiking-slider-text-2-1.png";
import clibingBg from "../../../assets/icons/clibing.png";
import knifeBg from "../../../assets/icons/knife.png";
import map from "../../../assets/icons/map.png";
import backpack from "../../../assets/icons/backpack.png";
import binocular from "../../../assets/icons/binoculars.png";
import backpacktwo from "../../../assets/icons/backpacktwo.png";
import mountainBg from "../../../assets/images/mountain-bg-2-2.jpg";
import mountain from "../../../assets/images/mountian-.jpg";
import sliderItemOne from "../../../assets/images/aaron-benson-200753-unsplash-400x285.jpg";
import customer from "../../../assets/images/psinfinite2-768x597-150x150.jpg"
import { AnimatePresence, motion, useInView } from "framer-motion";
import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination } from "swiper/modules";
import { PiClockCountdown } from "react-icons/pi";
import { FaStar } from "react-icons/fa";
import CountUp from "react-countup";
import { RiDoubleQuotesL } from "react-icons/ri";
import ToursCard from "../../../components/ToursCard";

const Home = ({ text = "Orkhan Travel" }: { text: string }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <section className="hiking-slider w-full lg:h-screen h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="flex items-center justify-center flex-col mt-15">
          <div className="flex items-start justify-center gap-10 mb-2 lg:mb-10">
            <img
              src={textImageOne}
              alt="Text Image 1"
              className="w-35 lg:w-64"
              data-aos="fade-up"
            />
            <img
              src={textImageTwo}
              alt="Text Image 2"
              className="w-40 lg:w-72"
              data-aos="fade-down"
            />
          </div>
          <div className="flex flex-wrap justify-center" ref={ref}>
            <AnimatePresence>
              {text.split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, x: -18 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-xl text-center sm:text-4xl font-bold tracking-tighter md:text-6xl md:leading-[4rem] text-white"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </AnimatePresence>
          </div>
          <div className="mt-10" data-aos="flip-left">
            <a
              href="#"
              className="uppercase hover:bg-blue-800 hover:text-white bg-white text-blue-950 transition duration-500 px-6 py-5 rounded-4xl font-semibold"
            >
              view all tours
            </a>
          </div>
        </div>
      </section>
      <section
        className="tour-search-container mt-16 lg:mt-28 lg:w-[86%] w-[90%] m-auto"
        data-aos="fade-down"
      >
        <h3
          data-aos="fade-right"
          className="title text-center text-3xl uppercase font-semibold tracking-[1px] text-[#193555]"
        >
          search for tour
        </h3>
        <div className="flex items-center flex-col md:flex-row md:items-end justify-between gap-6 w-full py-6 my-5 overflow-hidden">
          <div className="flex flex-col md:w-1/5 w-5/5">
            <select className="bg-transparent capitalize text-gray-600 border-b-2 border-blue-900 focus:outline-none py-5">
              <option selected>activity</option>
              <option>hiking</option>
              <option>camping</option>
              <option>skiing</option>
            </select>
          </div>

          <div className="flex flex-col md:w-1/5 w-5/5">
            <select className="bg-transparent capitalize text-gray-600 border-b-2 border-blue-900 focus:outline-none py-5">
              <option selected>Destination</option>
              <option>Italy</option>
              <option>Switzerland</option>
              <option>Norway</option>
            </select>
          </div>

          <div className="flex flex-col md:w-1/5 w-5/5">
            <select className="bg-transparent capitalize text-gray-600 border-b-2 border-blue-900 focus:outline-none py-5">
              <option selected>Duration</option>
              <option>1 Week</option>
              <option>2 Weeks</option>
              <option>1 Month</option>
            </select>
          </div>

          <div className="flex flex-col md:w-1/5 w-5/5">
            <input
              type="date"
              className="bg-transparent capitalize text-gray-600 border-b-2 border-blue-900 focus:outline-none py-5"
            />
          </div>

          <button className="bg-[#1e3a8a] text-white font-bold px-6 py-4 uppercase text-sm md:w-1/5 w-5/5 cursor-pointer">
            Search
          </button>
        </div>
      </section>
      <section className="w-full grid lg:grid-cols-2 grid-row-2 gap-4 lg:mt-20 mt:16 overflow-hidden">
        <div className="left-about-content flex flex-col items-start justify-start gap-2 lg:px-24 px-6 py-6">
          <img data-aos="fade-right" src={binocular} alt="" />
          <h3
            data-aos="fade-right"
            className="text-4xl uppercase mt-3 text-[#193555] font-bold relative py-6"
          >
            Why choose us?
          </h3>
          <span data-aos="fade-right" className="text-[#687D8E] text-lg mt-4">
            It’s our passion and our expertise, and has been for over two
            decades. We know the trails and the towns inside and out. We know
            the hoteliers and their rooms, and restauranteurs and their menus.
            We don’t guide on any route we haven’t done many times before. Our
            expertise gives you a richer, more enjoyable experience, and we will
            makes better use of your time.
          </span>
          <span data-aos="fade-right" className="text-[#687D8E] text-lg mt-4">
            We provide a thorough and complete orientation, so you are fully
            prepared to make the most of your Swiss vacation or Alps hiking
            adventure. Your expert trip leader is with you for the entire trip.
          </span>
          <button
            data-aos="fade-right"
            className="flex items-center justify-center gap-3 mt-4"
          >
            <span className="capitalize text-xl font-semibold">learn more</span>
            <FaArrowRightLong className="mt-1" />
          </button>
        </div>
        <div>
          <img
            src={mountainBg}
            alt=""
            className="w-full h-full object-cover"
            data-aos="fade-left"
          />
        </div>
      </section>
      <section className="features-section py-12 my-6 w-full">
        <div className="lg:w-[86%] w-[90%] m-auto flex items-center flex-col md:flex-row md:items-end justify-between lg:gap-6 gap-14 overflow-hidden">
          <div
            className="flex flex-col items-center gap-4 md:w-1/5 w-5/5"
            data-aos="fade-down"
          >
            <img src={clibingBg} alt="Experience Icon" className="h-15 w-15" />
            <h3 className="text-lg font-bold tracking-widest text-gray-900">
              20 YEARS EXPERIENCES
            </h3>
            <p className="text-gray-500 text-center">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated.
            </p>
          </div>
          <div
            className="flex flex-col items-center gap-4 md:w-1/5 w-5/5"
            data-aos="fade-down"
          >
            <img src={knifeBg} alt="Gears Icon" className="h-15 w-15" />
            <h3 className="text-lg font-bold tracking-widest text-gray-900">
              LOTS OF GEARS
            </h3>
            <p className="text-gray-500 text-center">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated.
            </p>
          </div>
          <div
            className="flex flex-col items-center gap-4 md:w-1/5 w-5/5"
            data-aos="fade-down"
          >
            <img src={map} alt="Map Icon" className="h-15 w-15" />
            <h3 className="text-lg font-bold tracking-widest text-gray-900">
              MOST COMPLETED MAP
            </h3>
            <p className="text-gray-500 text-center">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated.
            </p>
          </div>
          <div
            className="flex flex-col items-center gap-4 md:w-1/5 w-5/5"
            data-aos="fade-down"
          >
            <img src={backpack} alt="Packing Icon" className="h-15 w-15" />
            <h3 className="text-lg font-bold tracking-widest text-gray-900">
              PACKING ADVISE
            </h3>
            <p className="text-gray-500 text-center">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full grid lg:grid-cols-2 grid-row-2 gap-4 lg:mt-20 my-24">
        <div className="lg:flex hidden overflow-hidden">
          <img
            src={mountain}
            alt=""
            className="w-full h-full object-cover lg:object-contain"
            data-aos="fade-right"
          />
        </div>
        <div className="left-about-content flex flex-col items-start justify-start gap-2 lg:px-24 px-6 py-6 overflow-hidden">
          <img src={backpacktwo} alt="" data-aos="fade-left" />
          <h3
            data-aos="fade-left"
            className="text-4xl uppercase mt-3 text-[#193555] font-bold relative py-6"
          >
            ABout Alps
          </h3>
          <span data-aos="fade-left" className="text-[#687D8E] text-lg mt-4">
            The Alps are the highest and most extensive mountain range system
            that lies entirely in Europe, separating Southern from Central and
            Western Europe and stretching approximately 1,200 kilometres across
            eight Alpine countries: France, Switzerland, Italy, Monaco,
            Liechtenstein, Austria, Germany, and Slovenia.
          </span>
          <span data-aos="fade-left" className="text-[#687D8E] text-lg mt-4">
            To make the most of your vacation experience, you’ll want to plan
            your itinerary and activities to take advantage of the best weather
            and optimal conditions. Remember, the Alps is located at a latitude
            between 46° and 47° north
          </span>
        </div>
      </section>
      <section className="tour-carousel py-32">
        <div className="lg:w-[86%] w-[90%] m-auto">
          <div>
            <h3 className="text-start text-3xl uppercase font-bold tracking-[1px] text-[#193555]">
              Find our popular tours
            </h3>
          </div>
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
            spaceBetween={40}
            className="mySwiper mt-16 lg:mt-20"
            breakpoints={{
              690: {
                slidesPerView: 2,
              },
              991: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide className="overflow-hidden">
              <ToursCard
                tourImage={sliderItemOne}
                title="Switzerland Hiking The Matterhorn"
                date="9 Days / 8 Nights"
                comment="(1 Review)"
                salePrice="2,000"
                costPrice="1600"
              />
            </SwiperSlide>
            <SwiperSlide className="overflow-hidden">
              <ToursCard
                tourImage={sliderItemOne}
                title="Switzerland Hiking The Matterhorn"
                date="5 Days / 4 Nights"
                comment="(1 Review)"
                salePrice="2,000"
                costPrice="1600"
              />
            </SwiperSlide>
            <SwiperSlide className="overflow-hidden">
              <ToursCard
                tourImage={sliderItemOne}
                title="Switzerland Hiking The Matterhorn"
                date="7 Days / 6 Nights"
                comment="(1 Review)"
                salePrice="2,000"
                costPrice="1600"
              />
            </SwiperSlide>
            <SwiperSlide className="overflow-hidden">
              <ToursCard
                tourImage={sliderItemOne}
                title="Switzerland Hiking The Matterhorn"
                date="10 Days / 9 Nights"
                comment="(1 Review)"
                salePrice="2,000"
                costPrice="1600"
              />
            </SwiperSlide>
          </Swiper>
          <div
            data-aos="flip-left"
            className="flex items-center justify-center mt-10"
          >
            <a
              href=""
              className="flex items-center justify-center bg-[#193555] py-5 px-6 rounded-full"
            >
              <span className="text-white text-xl font-bold">
                View All Tours
              </span>
            </a>
          </div>
        </div>
      </section>
      <section className="counter flex flex-col items-center justify-center gap-2 overflow-hidden">
        <div className="flex flex-col lg:flex-row justify-between w-[90%] lg:w-[86%] m-auto my-24 gap-14 lg:gap-5 overflow-hidden">
          <div
            className="count-item flex flex-col items-center justify-center gap-6 py-6 px-5"
            data-aos="fade-down"
          >
            <CountUp
              end={2000}
              duration={4}
              suffix="+"
              separator=""
              className="text-5xl font-extrabold text-[#193555]"
            />
            <span className="text-2xl font-semibold text-[#96A2B0]">
              Awesome hikers
            </span>
          </div>
          <div
            className="count-item flex flex-col items-center justify-center gap-6 py-6 px-5"
            data-aos="fade-down"
          >
            <CountUp
              end={30}
              duration={4}
              suffix="+"
              separator=""
              className="text-5xl font-extrabold text-[#193555]"
            />
            <span className="text-2xl font-semibold text-[#96A2B0]">
              Awesome hikers
            </span>
          </div>
          <div
            className="count-item flex flex-col items-center justify-center gap-6 py-6 px-5"
            data-aos="fade-down"
          >
            <CountUp
              end={1000}
              duration={4}
              suffix="+"
              separator=""
              className="text-5xl font-extrabold text-[#193555]"
            />
            <span className="text-2xl font-semibold text-[#96A2B0]">
              Awesome hikers
            </span>
          </div>
          <div
            className="count-item flex flex-col items-center justify-center gap-6 py-6 px-5"
            data-aos="fade-down"
          >
            <CountUp
              end={2500}
              duration={4}
              suffix="+"
              separator=""
              className="text-5xl font-extrabold text-[#193555]"
            />
            <span className="text-2xl font-semibold text-[#96A2B0]">
              Awesome hikers
            </span>
          </div>
        </div>
        <span className="text-center text-xl font-semibold text-[#96A2B0]">
          Donec ullamcorper nulla non metus auctor fringilla. Sed posuere
          consectetur est at lobortis.
        </span>
      </section>
      <section className="customer-slider my-28 py-15">
        <div className="lg:w-[86%] w-[90%] m-auto">
          <h3 className="title text-center lg:text-3xl text-2xl font-bold text-[#193555] uppercase tracking-widest">
            Customer Review
          </h3>
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
            spaceBetween={40}
            className="mySwiper mt-16 lg:mt-20"
            breakpoints={{
              690: {
                slidesPerView: 2,
              },
              991: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide className="rounded-lg overflow-hidden">
              <div className="flex flex-col items-start justify-between gap-5 bg-white py-14 px-8">
                <RiDoubleQuotesL className="text-[#193555] text-4xl" />
                <p className="text-start">
                  Donec ullamcorper nulla non metus auctor fringilla. Sed
                  posuere consectetur est at lobortis. Nullam id dolor id nibh
                  ultricies vehicula ut id elit. Praesent commodo cursus magna,
                  vel scelerisq.
                </p>
                <div className="flex items-center gap-7">
                  <div className="w-16 h-16 overflow-hidden rounded-full cursor-pointer  border-amber-600 border-[3px] ">
                    <img src={customer} alt="" className="w-full h-full" />
                  </div>
                  <div className="flex flex-col items-start gap-1">
                    <h6>John Smith</h6>
                    <div className="flex items-center">
                      <FaStar className="text-sm text-amber-600" />
                      <FaStar className="text-sm text-amber-600" />
                      <FaStar className="text-sm text-amber-600" />
                      <FaStar className="text-sm text-amber-600" />
                      <FaStar className="text-sm text-amber-600" />
                    </div>
                    <span>Blogger</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="rounded-lg overflow-hidden">
              <div className="flex flex-col items-start justify-between gap-5 bg-white py-14 px-8">
                <RiDoubleQuotesL className="text-[#193555] text-4xl" />
                <p className="text-start">
                  Donec ullamcorper nulla non metus auctor fringilla. Sed
                  posuere consectetur est at lobortis. Nullam id dolor id nibh
                  ultricies vehicula ut id elit. Praesent commodo cursus magna,
                  vel scelerisq.
                </p>
                <div className="flex items-center gap-7">
                  <div className="w-16 h-16 overflow-hidden rounded-full cursor-pointer  border-amber-600 border-[3px] ">
                    <img src={customer} alt="" className="w-full h-full" />
                  </div>
                  <div className="flex flex-col items-start gap-1">
                    <h6>John Smith</h6>
                    <div className="flex items-center">
                      <FaStar className="text-sm text-amber-600" />
                      <FaStar className="text-sm text-amber-600" />
                      <FaStar className="text-sm text-amber-600" />
                      <FaStar className="text-sm text-amber-600" />
                      <FaStar className="text-sm text-amber-600" />
                    </div>
                    <span>Blogger</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="rounded-lg overflow-hidden">
              <div className="flex flex-col items-start justify-between gap-5 bg-white py-14 px-8">
                <RiDoubleQuotesL className="text-[#193555] text-4xl" />
                <p className="text-start">
                  Donec ullamcorper nulla non metus auctor fringilla. Sed
                  posuere consectetur est at lobortis. Nullam id dolor id nibh
                  ultricies vehicula ut id elit. Praesent commodo cursus magna,
                  vel scelerisq.
                </p>
                <div className="flex items-center gap-7">
                  <div className="w-16 h-16 overflow-hidden rounded-full cursor-pointer  border-amber-600 border-[3px] ">
                    <img src={customer} alt="" className="w-full h-full" />
                  </div>
                  <div className="flex flex-col items-start gap-1">
                    <h6>John Smith</h6>
                    <div className="flex items-center">
                      <FaStar className="text-sm text-amber-600" />
                      <FaStar className="text-sm text-amber-600" />
                      <FaStar className="text-sm text-amber-600" />
                      <FaStar className="text-sm text-amber-600" />
                      <FaStar className="text-sm text-amber-600" />
                    </div>
                    <span>Blogger</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="rounded-lg overflow-hidden">
              <div className="flex flex-col items-start justify-between gap-5 bg-white py-14 px-8">
                <RiDoubleQuotesL className="text-[#193555] text-4xl" />
                <p className="text-start">
                  Donec ullamcorper nulla non metus auctor fringilla. Sed
                  posuere consectetur est at lobortis. Nullam id dolor id nibh
                  ultricies vehicula ut id elit. Praesent commodo cursus magna,
                  vel scelerisq.
                </p>
                <div className="flex items-center gap-7">
                  <div className="w-16 h-16 overflow-hidden rounded-full cursor-pointer  border-amber-600 border-[3px] ">
                    <img src={customer} alt="" className="w-full h-full" />
                  </div>
                  <div className="flex flex-col items-start gap-1">
                    <h6>John Smith</h6>
                    <div className="flex items-center">
                      <FaStar className="text-sm text-amber-600" />
                      <FaStar className="text-sm text-amber-600" />
                      <FaStar className="text-sm text-amber-600" />
                      <FaStar className="text-sm text-amber-600" />
                      <FaStar className="text-sm text-amber-600" />
                    </div>
                    <span>Blogger</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      {/*    <section className="contact-form">
        <div></div>
        <div></div>
      </section>
      
     
      <section></section> */}
    </>
  );
};

export default Home;
