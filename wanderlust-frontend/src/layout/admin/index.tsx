import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router";

  
const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div
      className={`w-full h-screen overflow-hidden grid transition-all duration-300 ${
        isSidebarOpen ? "grid-cols-[250px_1fr]" : "grid-cols-[0px_1fr]"
      }`}
    >
      <Sidebar isOpen={isSidebarOpen} />
      <div className="bg-white flex flex-col items-start justify-start w-full">
        <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <div className="admin-content w-full h-screen p-6 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
