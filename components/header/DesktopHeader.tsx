"use client";

import React, { useState } from "react";
import logo from "@/public/assets/images/logo.png";
import {
  BellIcon,
  UserIcon,
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

export default function DesktopHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [orgOpen, setOrgOpen] = useState(false);

  return (
    <nav className="w-full bg-[#2b0b4d] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        
        {/* LEFT — LOGO */}
        <div className="flex items-center space-x-3">
          <Image src={logo} alt="Seclob Logo" width={38} height={38} />
          <span className="text-2xl font-semibold tracking-wide">Seclob</span>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden block"
          onClick={() => {
            setMobileOpen(!mobileOpen);
            if (mobileOpen) setOrgOpen(false); // close dropdown on close
          }}
        >
          {mobileOpen ? (
            <XMarkIcon className="w-7 h-7" />
          ) : (
            <Bars3Icon className="w-7 h-7" />
          )}
        </button>

        {/* CENTER NAVIGATION — DESKTOP */}
        <ul className="hidden md:flex items-center space-x-10 text-[15px] font-medium">

          <li className="cursor-pointer hover:text-gray-300">Dashboard</li>

          {/* Organization Dropdown */}
          <li className="relative">
            <button
              className="flex items-center gap-1 hover:text-gray-300"
              onClick={() => setOrgOpen(!orgOpen)}
            >
              Organization
              <ChevronDownIcon className="w-4 h-4" />
            </button>

            {orgOpen && (
              <div className="absolute mt-2 bg-white text-black rounded-md shadow-lg w-44 py-2 z-20">
                <p className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Branch</p>
                <p className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Department</p>
              </div>
            )}
          </li>

          <li className="cursor-pointer hover:text-gray-300">Designation</li>
          <li className="cursor-pointer hover:text-gray-300">Employee</li>
          <li className="cursor-pointer hover:text-gray-300">Product</li>
        </ul>

        {/* RIGHT SIDE — DESKTOP */}
        <div className="hidden md:flex items-center space-x-7">
          <span className="font-medium text-[15px]">Welcome Admin !</span>

          <div className="relative cursor-pointer">
            <BellIcon className="w-6 h-6" />
            <span className="absolute -top-1 -right-2 bg-[#DBFCE7] text-black text-xs w-4 h-4 flex items-center justify-center rounded-full">
              0
            </span>
          </div>

          <UserIcon className="w-7 h-7 cursor-pointer" />
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-[#2b0b4d] px-6 pb-6 space-y-4">

          <p className="hover:text-gray-300 cursor-pointer">Dashboard</p>

          {/* Mobile Dropdown */}
          <div>
            <button
              className="flex items-center gap-1 hover:text-gray-300"
              onClick={() => setOrgOpen(!orgOpen)}
            >
              Organization
              <ChevronDownIcon className="w-4 h-4" />
            </button>

            {orgOpen && (
              <div className="ml-4 mt-2 space-y-2">
                <p className="hover:text-gray-300 cursor-pointer">Branch</p>
                <p className="hover:text-gray-300 cursor-pointer">Department</p>
              </div>
            )}
          </div>

          <p className="hover:text-gray-300 cursor-pointer">Designation</p>
          <p className="hover:text-gray-300 cursor-pointer">Employee</p>
          <p className="hover:text-gray-300 cursor-pointer">Product</p>

          {/* MOBILE FOOTER */}
          <div className="pt-4 border-t border-gray-600 flex items-center justify-between">
            <span>Welcome Admin !</span>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <BellIcon className="w-6 h-6" />
                <span className="absolute -top-1 -right-2 bg-[#DBFCE7] text-black text-xs w-4 h-4 flex items-center justify-center rounded-full">
                  0
                </span>
              </div>
              <UserIcon className="w-7 h-7" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
