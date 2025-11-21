"use client";

import React from "react";
import Image from "next/image";

import frame1 from "@/public/assets/images/Frame1.png";
import frame2 from "@/public/assets/images/Frame2.png";
import frame3 from "@/public/assets/images/Frame3.png";
import frame4 from "@/public/assets/images/Frame4.png";
import userIcon from "@/public/assets/icons/usericon.png";

import ApexChart from "../desktop/TeamPerformance";
import TargetChart from "../desktop/TargetPerformance";
import Toppers from "../desktop/Toppers";

const UserIcon = () => (
  <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center shadow relative overflow-hidden">
    <Image
      src={userIcon}
      alt="User Icon"
      width={37}
      height={37}
      className="object-contain scale-110"
    />
  </div>
);

const cards = [
  { img: frame1, count: "1,200", label: "Total Staff" },
  { img: frame2, count: "1,200", label: "Active Staff" },
  { img: frame3, count: "1,200", label: "Inactive Staff" },
  { img: frame4, count: "1,200", label: "Total Organization" },
];

export default function DesktopLanding() {
  return (
    <div className="bg-[#F4F6FA] min-h-screen pb-20">

      {/* ===== ROW 1 — TOP CARDS ===== */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pt-10 px-6">
        {cards.map((card, i) => (
          <div key={i} className="relative w-[260px] h-[150px]">
            <Image src={card.img} alt={card.label} fill className="object-cover rounded-2xl" />

            <div className="absolute inset-0 flex flex-col justify-center px-6 gap-2 z-10">
              <UserIcon />
              <p className="text-xl font-bold mt-1">{card.count}</p>
              <p className="text-sm opacity-80">{card.label}</p>
            </div>
          </div>
        ))}
      </div>

     {/* ===== ROW 2 — CHARTS SECTION ===== */}
<div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_540px] gap-10 mt-10 px-6">

  {/* LEFT CHART — FIXED WIDTH & RESPONSIVE */}
  <div className="w-full flex justify-center lg:justify-start">
    <div className="w-full max-w-[625px]">
      <ApexChart />
    </div>
  </div>

  {/* RIGHT CHART — EXACT SIZE 534×328 */}
  <div className="flex justify-center lg:justify-end">
    <div className="w-[534px] h-[328px]">
      <TargetChart />
    </div>
  </div>

</div>


      {/* ===== ROW 3 — TOPPERS SECTION ===== */}
      <div className="max-w-[1300px] mx-auto mt-12 px-6">
        <Toppers />
      </div>

    </div>
  );
}
