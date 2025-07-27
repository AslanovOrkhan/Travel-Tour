import React from "react";
import destinationsCard from "../../../src/assets/images/joshua-earle-234740-unsplash-800x960.jpg";
const Destinationscard = () => {
  return (
    <>
      <div className="destinations-card relative group overflow-hidden">
        <img
          src={destinationsCard}
          alt=""
          className="w-full h-full object-cover"
        />
        <span className="absolute top-[3%] right-[3%] transform -translate-x-[3%] -translate-y-[3%] text-white py-2 px-2 bg-[#234076] rounded-sm font-bold">
          1 hours
        </span>

        <div className="absolute bottom-[3%] left-1/2 transform -translate-x-1/2 transition-all duration-500 ease-in-out group-hover:top-1/2 group-hover:bottom-auto group-hover:-translate-y-1/2">
          <div className="px-4 py-2 flex flex-col items-center justify-center gap-5">
            <h3 className="text-white font-bold capitalize text-2xl">
              Switzerland
            </h3>
            <a
              href="#"
              className="text-amber-300 uppercase font-bold opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500"
            >
              View all tours
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Destinationscard;
