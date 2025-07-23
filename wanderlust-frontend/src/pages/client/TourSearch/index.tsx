import TitleBanner from "../../../components/TitleBanner";
import { FaRegStar, FaSearch } from "react-icons/fa";
import { IoClose, IoSearch } from "react-icons/io5";
const TourSearch = () => {
  return (
    <>
      <TitleBanner title="Tour Search" />
      <section className="lg:w-[86%] w-[90%] py-16 m-auto grid lg:grid-cols-[25%_75%] grid-cols-1">
        <div className="tour-search-left border border-[#e5e5e5] rounded-sm p-5">
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
                <FaRegStar className="text-amber-300 text-lg"/>
                <FaRegStar className="text-amber-300 text-lg"/>
                <FaRegStar className="text-amber-300 text-lg"/>
                <FaRegStar className="text-amber-300 text-lg"/>
                <FaRegStar className="text-amber-300 text-lg"/>
              </div>
              <span className="text-gray-500">or more...</span>
            </div>
          </div>
          <span className="flex items-center justify-start gap-2 mt-6 text-blue-600"><IoClose /> Clear Filter</span>
        </div>
        <div className="tour-search-right"></div>
      </section>
    </>
  );
};

export default TourSearch;
