import React from "react";
import TitleBanner from "../../../components/TitleBanner";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

import PortfolioCard from "../../../components/PortfolioCard";

const Gallery = () => {
  return (
    <div>
      <TitleBanner title="gallery" />
      <section className="lg:w-[85%] w-[95%] mx-auto my-16">
        <div className="title flex items-center flex-col justify-center gap-3 mb-8">
          <h1 className="text-black font-bold text-3xl text-center">
            Moments Through the Lens
          </h1>
          <span className="text-gray-500 text-center">
            Hover With Center Caption
          </span>
        </div>

        <Swiper
          modules={[Scrollbar]}
          scrollbar={{ hide: false }}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1.5,
            },
            768: {
              slidesPerView: 2.2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <PortfolioCard />
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioCard />
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioCard />
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioCard />
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioCard />
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioCard />
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioCard />
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioCard />
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioCard />
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioCard />
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioCard />
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioCard />
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioCard />
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioCard />
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioCard />
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioCard />
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
};

export default Gallery;
