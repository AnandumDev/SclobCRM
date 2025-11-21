"use client";
import { FaThLarge, FaBuilding, FaUserAlt, FaCog } from "react-icons/fa";

export default function MobileFooter() {
  return (
    <div className="w-full fixed bottom-0 left-0 py-3 shadow-lg z-50" style={{ backgroundColor: '#3D155F' }}>
      <div className="flex justify-around items-center text-white text-xs">

        {/* Dashboard */}
        <div className="flex flex-col items-center gap-1">
          <FaThLarge className="text-lg" />
          <span>Dashboard</span>
        </div>

        {/* Designation */}
        <div className="flex flex-col items-center gap-1">
          <FaBuilding className="text-lg" />
          <span>Designation</span>
        </div>

        {/* Employee */}
        <div className="flex flex-col items-center gap-1">
          <FaUserAlt className="text-lg" />
          <span>Employee</span>
        </div>

        {/* Settings */}
        <div className="flex flex-col items-center gap-1">
          <FaCog className="text-lg" />
          <span>Settings</span>
        </div>
      </div>
    </div>
  );
}
