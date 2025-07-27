import TitleBanner from "../../../components/TitleBanner";
import {
  FaListUl,
  FaMinus,
  FaPlus,
  FaRegStar,
  FaSearch,
  FaSlidersH,
} from "react-icons/fa";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose, IoSearch } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";
import ToursCard from "../../../components/ToursCard";
import TopBar from "../../../layout/client/topBar";
import sliderItemOne from "../../../assets/images/aaron-benson-200753-unsplash-400x285.jpg";

const TourSearch = () => {
  const [showFilters, setShowFilters] = useState(true);
  const [isGridView, setIsGridView] = useState(true);
  return (
    <>
      <TitleBanner title="Tour Search" />
      <section className="lg:w-[86%] w-[90%] py-16 m-auto grid lg:grid-cols-[25%_75%] gap-5 grid-cols-1">
        <div className="tour-search-left border border-[#e5e5e5] rounded-sm">
          <div className="p-5">
            <div className="flex items-center justify-start gap-3">
              <FaSearch />
              <span className="text-[#133A67] font-bold text-lg capitalize">
                Tour Search
              </span>
            </div>
            <form className="mt-7 flex flex-col items-start justify-start gap-3">
              <span className="capitalize font-bold font-lg">keywords</span>
              <div className="flex items-center justify-between gap-2 border border-[#e5e5e5] p-3 rounded-sm w-full">
                <input
                  type="text"
                  placeholder="search"
                  className="capitalize border-0 outline-0 w-full"
                />
                <IoSearch className="text-gray-400 text-2xl" />
              </div>
            </form>
            <div className="mt-6 flex flex-col items-start justify-start gap-3">
              <h3 className="text-lg font-bold">Category</h3>
              <div className="flex flex-col items-start justify-start gap-3 mt-2">
                <div className="flex items-center gap-2">
                  <input
                    id="basecamp"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:transparent"
                  />
                  <label htmlFor="basecamp" className="text-gray-700">
                    Basecamp Hiking
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    id="basecamp"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:transparent"
                  />
                  <label htmlFor="basecamp" className="text-gray-700">
                    Basecamp Hiking
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    id="basecamp"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:transparent"
                  />
                  <label htmlFor="basecamp" className="text-gray-700">
                    Basecamp Hiking
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    id="basecamp"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:transparent"
                  />
                  <label htmlFor="basecamp" className="text-gray-700">
                    Basecamp Hiking
                  </label>
                </div>
              </div>
            </div>
            <div className="mt-6 flex flex-col items-start justify-start gap-4">
              <h3 className="text-lg font-bold capitalize">duration</h3>
              <select
                className="w-full border border-[#e5e5e5] rounded-sm p-3 text-gray-700 bg-white shadow-sm focus:outline-none"
                defaultValue=""
              >
                <option value="" disabled hidden>
                  Any
                </option>
                <option value="any">Any</option>
                <option value="1">1 Day Tour</option>
                <option value="2-4">2–4 Days Tour</option>
                <option value="5-7">5–7 Days Tour</option>
                <option value="7+">7+ Days Tour</option>
              </select>
            </div>
            <div className="mt-6 flex flex-col items-start justify-start gap-4">
              <h3 className="text-lg font-bold capitalize">date</h3>
              <input
                type="date"
                className="border w-full p-3 outline-0 border-[#e5e5e5] rounded-sm"
              />
            </div>
            <div className="mt-6 flex flex-col items-start justify-start gap-4">
              <h3 className="text-lg font-bold capitalize">month</h3>
              <select
                className="w-full border border-[#e5e5e5] rounded-sm p-3 text-gray-700 bg-white shadow-sm focus:outline-none"
                defaultValue=""
              >
                <option value="" disabled hidden>
                  Any
                </option>
                <option value="any">Any</option>
                <option value="january">January</option>
                <option value="february">February</option>
                <option value="march">March</option>
                <option value="april">April</option>
                <option value="may">May</option>
                <option value="june">June</option>
                <option value="july">July</option>
                <option value="august">August</option>
                <option value="september">September</option>
                <option value="october">October</option>
                <option value="november">November</option>
                <option value="december">December</option>
              </select>
            </div>
            <div className="mt-6 flex lg:flex-row flex-col items-center justify-between lg:gap-3 gap-6">
              <div className="flex flex-col items-start justify-start gap-2 w-full">
                <h3 className="text-lg font-bold capitalize">Min price</h3>
                <input
                  type="number"
                  className="border w-full p-3 outline-0 border-[#e5e5e5] rounded-sm"
                />
              </div>
              <div className="flex flex-col items-start justify-start gap-2 w-full">
                <h3 className="text-lg font-bold capitalize">Max price</h3>
                <input
                  type="number"
                  className="border w-full p-3 outline-0 border-[#e5e5e5] rounded-sm"
                />
              </div>
            </div>
            <div className="mt-6 flex-col items-center justify-start gap-4">
              <h3 className="text-lg font-bold capitalize">Rating</h3>
              <div className="flex items-center justify-start gap-3 mt-4">
                <div className="flex items-center gap-2">
                  <FaRegStar className="text-amber-300 text-lg" />
                  <FaRegStar className="text-amber-300 text-lg" />
                  <FaRegStar className="text-amber-300 text-lg" />
                  <FaRegStar className="text-amber-300 text-lg" />
                  <FaRegStar className="text-amber-300 text-lg" />
                </div>
                <span className="text-gray-500">or more...</span>
              </div>
            </div>
            <span className="flex items-center justify-start gap-2 mt-6 text-blue-600">
              <IoClose /> Clear Filter
            </span>
          </div>
          <div className="p-5 border-t-2 border-t-[#e5e5e5]">
            <div
              className="flex items-center justify-between mt-6 cursor-pointer"
              onClick={() => setShowFilters(!showFilters)}
            >
              <div className="flex items-center gap-3">
                <FaSlidersH className="font-semibold" />
                <span className="text-[#133A67] font-bold text-lg capitalize">
                  Type Filter
                </span>
              </div>
              {showFilters ? (
                <FaMinus className="text-[#133A67]" />
              ) : (
                <FaPlus className="text-[#133A67]" />
              )}
            </div>
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="flex items-start flex-col justify-start gap-10 mt-5">
                    {/* Tour Age */}
                    <div className="mt-3 flex flex-col items-start justify-start gap-3">
                      <h3 className="text-lg font-bold">Tour Age</h3>
                      <div className="flex flex-col items-start justify-start gap-3 mt-2">
                        <div className="flex items-center gap-2">
                          <input
                            id="age12"
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:transparent"
                          />
                          <label htmlFor="age12" className="text-gray-700">
                            12+
                          </label>
                        </div>
                        <div className="flex items-center gap-2">
                          <input
                            id="age15"
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:transparent"
                          />
                          <label htmlFor="age15" className="text-gray-700">
                            15+
                          </label>
                        </div>
                        <div className="flex items-center gap-2">
                          <input
                            id="age18"
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:transparent"
                          />
                          <label htmlFor="age18" className="text-gray-700">
                            18+
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* Activity */}
                    <div className="mt-3 flex flex-col items-start justify-start gap-3">
                      <h3 className="text-lg font-bold">Activity</h3>
                      <div className="flex flex-col items-start justify-start gap-3 mt-2">
                        <div className="flex items-center gap-2">
                          <input
                            id="climbing"
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:transparent"
                          />
                          <label htmlFor="climbing" className="text-gray-700">
                            Climbing
                          </label>
                        </div>
                        <div className="flex items-center gap-2">
                          <input
                            id="hiking"
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:transparent"
                          />
                          <label htmlFor="hiking" className="text-gray-700">
                            Hiking
                          </label>
                        </div>
                        <div className="flex items-center gap-2">
                          <input
                            id="ski"
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:transparent"
                          />
                          <label htmlFor="ski" className="text-gray-700">
                            Ski
                          </label>
                        </div>
                        <div className="flex items-center gap-2">
                          <input
                            id="walking"
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:transparent"
                          />
                          <label htmlFor="walking" className="text-gray-700">
                            Walking
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* Destination */}
                    <div className="mt-3 flex flex-col items-start justify-start gap-3">
                      <h3 className="text-lg font-bold">Destination</h3>
                      <div className="flex flex-col items-start justify-start gap-3 mt-2">
                        <div className="flex items-center gap-2">
                          <input
                            id="amalfi"
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:transparent"
                          />
                          <label htmlFor="amalfi" className="text-gray-700">
                            Amalfi
                          </label>
                        </div>
                        <div className="flex items-center gap-2">
                          <input
                            id="grandcanyon"
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:transparent"
                          />
                          <label
                            htmlFor="grandcanyon"
                            className="text-gray-700"
                          >
                            Grand Canyon
                          </label>
                        </div>
                        <div className="flex items-center gap-2">
                          <input
                            id="ireland"
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:transparent"
                          />
                          <label htmlFor="ireland" className="text-gray-700">
                            Ireland
                          </label>
                        </div>
                        <div className="flex items-center gap-2">
                          <input
                            id="montenegro"
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:transparent"
                          />
                          <label htmlFor="montenegro" className="text-gray-700">
                            Montenegro
                          </label>
                        </div>
                        <div className="flex items-center gap-2">
                          <input
                            id="slovenia"
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:transparent"
                          />
                          <label htmlFor="slovenia" className="text-gray-700">
                            Slovenia
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <button className="border p-4 bg-[#133A67] font-extrabold text-white w-full uppercase my-6 tracking-widest">
              search
            </button>
          </div>
        </div>
        <div className="tour-search-right lg:pl-6 pl-0">
          <span className="capitalize font-extrabold text-2xl">
            9 Results Found
          </span>
          <div className="border border-[#e5e5e5]  my-5 flex lg:flex-row flex-col items-center justify-between lg:gap-0 gap-4 p-4 rounded-sm">
            <div className="flex items-center justify-start lg:flex-row flex-col gap-4 w-full">
              <span className="font-bold text-lg">Sort by</span>
              <select
                className="lg:px-4 px-0 py-2 text-gray-700 border-0 outline-0 w-full lg:w-auto"
                defaultValue="release"
              >
                <option value="release">Release Date</option>
                <option value="tour">Tour Date</option>
                <option value="title">Title</option>
                <option value="price">Price</option>
                <option value="popularity">Popularity</option>
                <option value="rating">Rating</option>
                <option value="duration">Duration</option>
              </select>
              <select
                className="lg:px-4 px-0 py-2 text-gray-700 border-0 outline-0 w-full lg:w-auto"
                defaultValue="desc"
              >
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
              </select>
            </div>
            <div className="flex items-center justify-end gap-4">
              <FaListUl
                onClick={() => setIsGridView(false)}
                className={`text-xl cursor-pointer transition-colors duration-200 ${
                  !isGridView
                    ? "text-[#133A67] font-bold"
                    : "text-gray-400 hover:text-[#133A67]"
                }`}
              />
              <TbGridDots
                onClick={() => setIsGridView(true)}
                className={`text-2xl cursor-pointer transition-colors duration-200 ${
                  isGridView
                    ? "text-[#133A67] font-bold"
                    : "text-gray-400 hover:text-[#133A67]"
                }`}
              />
            </div>
          </div>
          <div  className={`grid gap-4 ${isGridView ? "grid-cols-2" : "grid-cols-1"}`}>
            <ToursCard
              tourImage={sliderItemOne}
              title="salam Orxan necesen"
              data="9 days / 8 nights"
              comment="(1preview)"
              salePrice="2000"
              costPrice="1500"
            />
            <ToursCard
              tourImage={sliderItemOne}
              title="salam Orxan necesen"
              data="9 days / 8 nights"
              comment="(1preview)"
              salePrice="2000"
              costPrice="1500"
            />
            <ToursCard
              tourImage={sliderItemOne}
              title="salam Orxan necesen"
              data="9 days / 8 nights"
              comment="(1preview)"
              salePrice="2000"
              costPrice="1500"
            />
            <ToursCard
              tourImage={sliderItemOne}
              title="salam Orxan necesen"
              data="9 days / 8 nights"
              comment="(1preview)"
              salePrice="2000"
              costPrice="1500"
            />
            <ToursCard
              tourImage={sliderItemOne}
              title="salam Orxan necesen"
              data="9 days / 8 nights"
              comment="(1preview)"
              salePrice="2000"
              costPrice="1500"
            />
            <ToursCard
              tourImage={sliderItemOne}
              title="salam Orxan necesen"
              data="9 days / 8 nights"
              comment="(1preview)"
              salePrice="2000"
              costPrice="1500"
            />
            <ToursCard
              tourImage={sliderItemOne}
              title="salam Orxan necesen"
              data="9 days / 8 nights"
              comment="(1preview)"
              salePrice="2000"
              costPrice="1500"
            />
            <ToursCard
              tourImage={sliderItemOne}
              title="salam Orxan necesen"
              data="9 days / 8 nights"
              comment="(1preview)"
              salePrice="2000"
              costPrice="1500"
            />
            <ToursCard
              tourImage={sliderItemOne}
              title="salam Orxan necesen"
              data="9 days / 8 nights"
              comment="(1preview)"
              salePrice="2000"
              costPrice="1500"
            />
            <ToursCard
              tourImage={sliderItemOne}
              title="salam Orxan necesen"
              data="9 days / 8 nights"
              comment="(1preview)"
              salePrice="2000"
              costPrice="1500"
            />
            <ToursCard
              tourImage={sliderItemOne}
              title="salam Orxan necesen"
              data="9 days / 8 nights"
              comment="(1preview)"
              salePrice="2000"
              costPrice="1500"
            />
            <ToursCard
              tourImage={sliderItemOne}
              title="salam Orxan necesen"
              data="9 days / 8 nights"
              comment="(1preview)"
              salePrice="2000"
              costPrice="1500"
            />
            <ToursCard
              tourImage={sliderItemOne}
              title="salam Orxan necesen"
              data="9 days / 8 nights"
              comment="(1preview)"
              salePrice="2000"
              costPrice="1500"
            />
            <ToursCard
              tourImage={sliderItemOne}
              title="salam Orxan necesen"
              data="9 days / 8 nights"
              comment="(1preview)"
              salePrice="2000"
              costPrice="1500"
            />
            <ToursCard
              tourImage={sliderItemOne}
              title="salam Orxan necesen"
              data="9 days / 8 nights"
              comment="(1preview)"
              salePrice="2000"
              costPrice="1500"
            />
            <ToursCard
              tourImage={sliderItemOne}
              title="salam Orxan necesen"
              data="9 days / 8 nights"
              comment="(1preview)"
              salePrice="2000"
              costPrice="1500"
            />
            <ToursCard
              tourImage={sliderItemOne}
              title="salam Orxan necesen"
              data="9 days / 8 nights"
              comment="(1preview)"
              salePrice="2000"
              costPrice="1500"
            />
            <ToursCard
              tourImage={sliderItemOne}
              title="salam Orxan necesen"
              data="9 days / 8 nights"
              comment="(1preview)"
              salePrice="2000"
              costPrice="1500"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default TourSearch;
