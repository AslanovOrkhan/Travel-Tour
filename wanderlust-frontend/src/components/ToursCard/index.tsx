import React from "react";
import { FaStar } from "react-icons/fa";
import { PiClockCountdown } from "react-icons/pi";

const ToursCard = (props) => {
  return (
    <div>
      <div className="slider-item rounded-lg overflow-hidden" data-aos="fade-down">
        <img src={props.tourImage} alt="" />
        <div className="px-5 py-11 bg-white flex items-start flex-col gap-5">
          <span className="text-neutral-950 font-bold text-start text-2xl">
            {props.title}
          </span>
          <div className="flex items-end justify-between w-full">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-start gap-2">
                <PiClockCountdown className="text-blue-700 text-2xl" />
                <span className="text-black text-sm mb-1">
                    {props.date}
                </span>
              </div>
              <div className="flex items-center justify-start gap-2">
                <div className="flex gap-1">
                  <FaStar className="text-amber-300 text-sm" />
                  <FaStar className="text-amber-300 text-sm" />
                  <FaStar className="text-amber-300 text-sm" />
                  <FaStar className="text-amber-300 text-sm" />
                  <FaStar className="text-amber-300 text-sm" />
                </div>
                <span className="text-sm text-neutral-700">{props.comment}</span>
              </div>
            </div>
            <div className="flex flex-col items-end gap-2">
              <span className="line-through text-base text-neutral-500">
                ${props.salePrice}
              </span>
              <span className="text-[#193555] font-extrabold text-2xl">
                ${props.costPrice}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToursCard;
