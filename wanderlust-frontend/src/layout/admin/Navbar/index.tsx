import { RxHamburgerMenu } from "react-icons/rx";
import { FaSearch } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import avatarimage from "../../../assets/images/avatar-2.jpg";

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar = ({ toggleSidebar }: NavbarProps) => {
  return (
    <>
      <nav className="border-b border-b-[#eaecef] w-full py-2 px-3 flex justify-between items-center">
        <button
          onClick={toggleSidebar}
          className="hover:bg-gray-400 duration-150 ease-in-out p-2 rounded-lg"
        >
          <RxHamburgerMenu className="text-black text-2xl font-bold cursor-pointer" />
        </button>
        <div className="flex items-center gap-5 justify-end">
          <button>
            <FaSearch className="text-lg" />
          </button>
          <div>
            <FiSun className="text-xl" />
          </div>
          <div className="flex items-center gap-3">
            <img
              src={avatarimage}
              alt="User Avatar"
              className="w-11 object-center rounded-full"
            />
            <div>
              <span className="capitalize font-bold text-sm">
                orkhan aslanov
              </span>
              <p className="text-xs">administrator</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
