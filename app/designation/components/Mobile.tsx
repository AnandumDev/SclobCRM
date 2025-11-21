"use client";

import React, { useState } from "react";
import { FaEdit, FaTrash, FaChevronDown } from "react-icons/fa";

interface EmployeeCardProps {
  name: string;
  role: string;
  description: string;
  status: string;
  reporting: string;
}

function EmployeeCard({ name, role, description, status, reporting }: EmployeeCardProps) {
  const [currentStatus, setCurrentStatus] = useState(status);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isActive = currentStatus?.toLowerCase() === "active";

  return (
    <div
      className={`rounded-xl p-4 border shadow-sm w-full 
      ${isActive ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"}`}
    >
      {/* Top Row */}
      <div className="flex justify-between items-start">
        <div>
          <p className="font-semibold text-gray-900 text-sm">{name}</p>
          <p className="text-xs text-gray-600">{role}</p>
        </div>

        <div className="flex gap-3">
          <button className="text-blue-600">
            <FaEdit size={14} />
          </button>
          <button className="text-red-600">
            <FaTrash size={14} />
          </button>
        </div>
      </div>

      {/* Description */}
      <p className="mt-1 text-xs text-gray-700">
        <span className="font-medium">Descriptions</span>: {description}
      </p>

      {/* Status + Reporting */}
      <div className="flex items-center justify-between mt-3">
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className={`px-3 py-1 text-xs font-semibold rounded-md flex items-center gap-1
            ${isActive ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}
          >
            {currentStatus}
            <FaChevronDown className="text-xs" />
          </button>
          
          {isDropdownOpen && (
            <div className="absolute top-full left-0 mt-1 bg-white border rounded-md shadow-lg z-10 min-w-full">
              <button
                onClick={() => {
                  setCurrentStatus("Active");
                  setIsDropdownOpen(false);
                }}
                className="w-full px-3 py-1 text-xs font-semibold text-left hover:bg-gray-100 bg-green-500 text-white rounded-t-md"
              >
                Active
              </button>
              <button
                onClick={() => {
                  setCurrentStatus("Deactive");
                  setIsDropdownOpen(false);
                }}
                className="w-full px-3 py-1 text-xs font-semibold text-left hover:bg-gray-100 bg-red-500 text-white rounded-b-md"
              >
                Deactive
              </button>
            </div>
          )}
        </div>

        <div className="text-right">
          <p className="text-xs font-medium text-gray-800 leading-tight">Reporting</p>
          <p className="text-xs text-gray-600 leading-tight">{reporting}</p>
        </div>
      </div>
    </div>
  );
}

export default function Mobile() {
  return (
    <div className="p-4 pb-24 max-w-md mx-auto space-y-4">

      {/* Search Row */}
      <div className="flex items-center gap-1">
        <input
          type="text"
          placeholder="Search"
          className="flex-1 px-3 py-2 border rounded-md text-sm min-w-0"
        />

        <button className="bg-green-500 text-white px-2 py-2 rounded-md text-xs whitespace-nowrap w-16">
          Search
        </button>

        <button className="text-white px-2 py-2 rounded-md text-xs whitespace-nowrap w-16" style={{ backgroundColor: '#3D155F' }}>
          Filter
        </button>
      </div>

      {/* Add New Button */}
      <button className="w-full text-white text-sm py-2 rounded-md flex items-center justify-center gap-2" style={{ backgroundColor: '#3D155F' }}>
        <span>+</span>
        Add New
      </button>

      {/* ONE Employee Card */}
      <EmployeeCard
        name="Amal"
        role="Manager"
        description="gghjnn"
        status="Active"
        reporting="GM"
      />

      {/* Pagination */}
      <div className="flex justify-center gap-2 pt-4">
        <span className="px-3 py-1 bg-green-500 text-white text-xs rounded-md">1</span>
        <span className="px-3 py-1 bg-gray-200 text-xs rounded-md">2</span>
        <span className="px-3 py-1 bg-gray-200 text-xs rounded-md">3</span>
        <span className="px-3 py-1 bg-gray-200 text-xs rounded-md">4</span>
      </div>
    </div>
  );
}
