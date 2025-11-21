"use client";

import React, { useState } from "react";
import secIcon from "@/public/assets/images/logo.png"; 
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
    <nav className="w-full bg-[#2b0b4d] text-white px-6 py-3 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        <div className="flex items-center space-x-2">
          <Image
            src={secIcon}
            alt="Seclob Logo"
            width={32}
            height={32}
          />
          <span className="text-xl font-semibold">Seclob</span>
        </div>

        <button
          className="md:hidden block"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <XMarkIcon className="w-7 h-7" />
          ) : (
            <Bars3Icon className="w-7 h-7" />
          )}
        </button>

        <ul className="hidden md:flex items-center space-x-8 text-sm">
          <li className="hover:text-gray-300 cursor-pointer">Dashboard</li>

          <li
            className="relative flex items-center space-x-1 hover:text-gray-300 cursor-pointer"
            onClick={() => setOrgOpen(!orgOpen)}
          >
            <span>Organization</span>
            <ChevronDownIcon className="w-4 h-4" />

            {orgOpen && (
              <div className="absolute top-7 left-0 bg-white text-black rounded shadow-lg py-2 w-40">
                <p className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Branch</p>
                <p className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Department</p>
              </div>
            )}
          </li>

          <li className="hover:text-gray-300 cursor-pointer">Designation</li>
          <li className="hover:text-gray-300 cursor-pointer">Employee</li>
          <li className="hover:text-gray-300 cursor-pointer">Product</li>
        </ul>

        <div className="hidden md:flex items-center space-x-6">
          <span className="font-medium">Welcome Admin !</span>

          <div className="relative cursor-pointer">
            <BellIcon className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 bg-green-400 text-black text-xs w-4 h-4 flex items-center justify-center rounded-full">
              0
            </span>
          </div>

          <UserIcon className="w-7 h-7 cursor-pointer" />
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <p className="hover:text-gray-300 cursor-pointer">Dashboard</p>

          <div>
            <div
              className="flex items-center space-x-1 hover:text-gray-300 cursor-pointer"
              onClick={() => setOrgOpen(!orgOpen)}
            >
              <span>Organization</span>
              <ChevronDownIcon className="w-4 h-4" />
            </div>

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

          <div className="pt-4 border-t border-gray-600 flex items-center justify-between">
            <span>Welcome Admin !</span>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <BellIcon className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 bg-green-400 text-black text-xs w-4 h-4 flex items-center justify-center rounded-full">
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