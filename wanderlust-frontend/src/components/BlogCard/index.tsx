import React from "react";
import blogCardImage from "../../../src/assets/images/shutterstock_151616084-600x800.jpg";
import { FaRegClock } from "react-icons/fa";
const BlogCard = () => {
  return (
    <>
      <div className="blog-card relative w-full h-100 group overflow-hidden">
        <img
          src={blogCardImage}
          className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-300"
          alt=""
        />
        <div className="absolute top-0 left-0 w-full h-full z-10">
          <div className="blog-card-content opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
            <div className="card-content flex flex-col items-center justify-center gap-3 w-56">
              <span className="text-white font-bold text-xl text-center">
                How to travel with paper map
              </span>
              <div className="flex items-center justify-start gap-2 text-center">
                <FaRegClock className="text-white" />
                <a href="#" className="text-white">
                  June 6, 2016
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
