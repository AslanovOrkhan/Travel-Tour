import React from "react";
import TitleBanner from "../../../components/TitleBanner";
import TeamCard from "../../../components/TeamCard";
 // Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
const TeamPage = () => {
  return (
    <>
      <TitleBanner title="team / plain" />
      <section className=" lg:w-[86%] w-[95%] m-auto my-16">
        <h1 className="text-start text-black font-bold text-5xl">Personnel</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 my-10">
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        </div>

      </section>
      <section className="personal-slider-corusel my-16 py-10 border border-amber-700">
      <div className="lg:w-[86%] w-[95%] m-auto">
       <div className="title flex flex-col items-start gap-3 ">
        <h1 className="text-white text-3xl font-bold capitalize">team leads</h1>
        <span className="text-white">Divider, Excerpt, Social icon can be disabled</span>
       </div>
             <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
         className="mySwiper"
      >
        <SwiperSlide><TeamCard/></SwiperSlide>
       <SwiperSlide><TeamCard/></SwiperSlide>
        <SwiperSlide><TeamCard/></SwiperSlide>
        <SwiperSlide><TeamCard/></SwiperSlide>
        <SwiperSlide><TeamCard/></SwiperSlide>
        <SwiperSlide><TeamCard/></SwiperSlide>
        <SwiperSlide><TeamCard/></SwiperSlide>
        <SwiperSlide><TeamCard/></SwiperSlide>
        <SwiperSlide><TeamCard/></SwiperSlide>
        <SwiperSlide><TeamCard/></SwiperSlide>

      
      </Swiper>
      </div>
      </section>
    </>
  );
};

export default TeamPage;
