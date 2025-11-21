"use client";

import Image from "next/image";
import React from "react";

import crown from "@/public/assets/icons/winner.png";
import user from "@/public/assets/icons/toppericon.png";

const toppers = {
  bdm: [
    { name: "Sreelakshmi", points: 50 },
    { name: "Sreelakshmi", points: 50 },
    { name: "Sreelakshmi", points: 50 },
  ],
  teamlead: [
    { name: "Sreelakshmi", points: 50 },
    { name: "Sreelakshmi", points: 50 },
    { name: "Sreelakshmi", points: 50 },
  ],
  bde: [
    { name: "Sreelakshmi", points: 50 },
    { name: "Sreelakshmi", points: 50 },
    { name: "Sreelakshmi", points: 50 },
  ],
};

export default function Toppers() {
  return (
    <div className="bg-[#F4F6FA] p-3 flex justify-center">
      <div className="bg-white rounded-2xl shadow-md overflow-hidden w-full max-w-6xl">

        {/* Header */}
        <div className="grid grid-cols-3 text-center bg-[#E3F2FB] py-3 text-lg font-semibold text-gray-800 border-b border-[#d7e7ef]">
          <p>BDM Toppers</p>
          <p>Team Lead Toppers</p>
          <p>BDE Toppers</p>
        </div>

        {/* Body */}
        <div className="grid grid-cols-3 bg-[#DBFCE78C]">
          {Object.values(toppers).map((column, colIndex) => (
            <div key={colIndex} className="px-8 py-4 space-y-4 relative">
              {column.map((item, i) => (
                <div key={i} className="flex items-center justify-between border-b border-[#d2f5df] pb-2">

                  <div className="flex items-center gap-3 relative">
                    <Image
                      src={crown}
                      alt="crown"
                      width={24}
                      height={24}
                      className="absolute -top-4 left-2 z-10"
                    />

                    <div className="w-10 h-10 rounded-full shadow-md overflow-hidden bg-white flex items-center justify-center">
                      <Image
                        src={user}
                        alt="user"
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>

                    <span className="font-medium text-gray-900 text-[15px]">
                      {item.name}
                    </span>
                  </div>

                  <span className="text-gray-600 font-medium text-[14px]">
                    {item.points} Points
                  </span>
                </div>
              ))}

              {colIndex !== 2 && (
                <div className="absolute top-4 right-0 w-[1px] bg-[#cbd5d1] h-[85%]"></div>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
