"use client";

import dynamic from "next/dynamic";
import React from "react";
import { FiCalendar } from "react-icons/fi";
import { HiDownload } from "react-icons/hi";
import { ApexOptions } from "apexcharts";

// LOAD APEXCHART ONLY ON CLIENT
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
  loading: () => (
    <div className="h-[300px] flex items-center justify-center">
      Loading chart...
    </div>
  ),
});

const TeamPerformance = () => {
  const series = [
    {
      name: "Performance",
      data: [20, 25, 18, 15, 12, 22, 28, 40, 33, 45, 38, 30],
    },
    {
      name: "Baseline",
      data: [18, 20, 22, 18, 25, 28, 24, 30, 34, 36, 32, 28],
    },
  ];

  const options: ApexOptions = {
    chart: {
      type: "line",
      height: 350,
      toolbar: { show: false },
      zoom: { enabled: false },
      dropShadow: {
        enabled: true,
        top: 10,
        left: 4,
        blur: 6,
        opacity: 0.3,
        color: "#645CFF",
      },
    },
    colors: ["#645CFF", "#63D7C4"],
    stroke: {
      curve: "smooth",
      width: [4, 3],
      dashArray: [0, 6],
    },
    grid: {
      borderColor: "#E5E7EB",
      strokeDashArray: 3,
    },
    dataLabels: { enabled: false },
    xaxis: {
      categories: [
        "1","2","3","4","5","6","7","8","9","10","11","12"
      ],
      labels: {
        style: { colors: "#6B7280", fontSize: "13px" },
      },
    },
    yaxis: {
      labels: {
        formatter: (value: number) => `${value}k`,
        style: { colors: "#6B7280", fontSize: "13px" },
      },
    },
    legend: { show: false },
  };

  return (
    <div className="mx-4 mt-4 rounded-2xl bg-white p-4 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-semibold text-gray-800 flex-shrink-0">
          Team Performance
        </h2>

        <div className="flex items-center gap-2 flex-shrink-0">
          <div className="flex items-center gap-1 border border-gray-300 px-2 py-1.5 rounded-lg">
            <FiCalendar className="text-gray-600 text-sm" />
            <select className="bg-transparent outline-none text-gray-700 text-xs w-12">
              <option>2024</option>
              <option>2023</option>
              <option>2022</option>
            </select>
          </div>

          <button className="flex items-center bg-yellow-400 hover:bg-yellow-500 text-gray-800 px-2 py-1.5 rounded-lg">
            <HiDownload className="text-sm" />
          </button>
        </div>
      </div>

      <ReactApexChart options={options} series={series} type="line" height={300} />
    </div>
  );
};

export default TeamPerformance;
