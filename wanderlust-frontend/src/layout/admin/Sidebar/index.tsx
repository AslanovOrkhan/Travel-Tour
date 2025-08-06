import dashboardLogo from "../../../assets/icons/dashboardlogo-white.svg";

interface SidebarProps {
  isOpen: boolean;
}
const Sidebar = ({ isOpen }: SidebarProps) => {
  return (
    <>
      <div
        className={`bg-[#1C232F] flex flex-col items-start justify-start transition-all duration-300
        ${isOpen ? "w-[250px] px-5 py-6" : "w-0 px-0 py-0"}
      `}
      >
        {isOpen && (
          <div className="overflow-hidden">
            <img src={dashboardLogo} alt="Dashboard Logo" />
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
