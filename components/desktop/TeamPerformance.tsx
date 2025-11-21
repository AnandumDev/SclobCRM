"use client";

import dynamic from "next/dynamic";
import React from "react";
import { FiCalendar } from "react-icons/fi";
import { HiDownload } from "react-icons/hi";

// LOAD APEXCHART ONLY ON CLIENT
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
  loading: () => <div className="h-[300px] flex items-center justify-center">Loading chart...</div>
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

  const options = {
    chart: {
      type: "line" as const,
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
      curve: "smooth" as const,
      width: [4, 3],
      dashArray: [0, 6],
    },
    grid: {
      borderColor: "#E5E7EB",
      strokeDashArray: 3,
    },
    dataLabels: { enabled: false },
    xaxis: {
      categories: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
      labels: {
        style: { colors: "#6B7280", fontSize: "13px" },
      },
    },
    yaxis: {
      labels: {
        formatter: (value: number) => `$${value}k`,
        style: { colors: "#6B7280", fontSize: "13px" },
      },
    },
    legend: { show: false },
  };

  return (
  <div
    className="rounded-2xl bg-white p-6 shadow-lg "
    style={{ width: "600px", height: "328px" }}
  >
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-xl font-semibold text-gray-800">Team Performance</h2>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 border border-gray-300 px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-50">
          <FiCalendar className="text-gray-600 text-[18px]" />
          <select className="bg-transparent outline-none cursor-pointer text-gray-700">
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
          </select>
        </div>

        <button className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-800 px-4 py-2 rounded-lg font-medium shadow">
          <HiDownload className="text-[20px]" />
          Download
        </button>
      </div>
    </div>

    <ReactApexChart
      options={options}
      series={series}
      type="line"
      height={230} /* adjusted so total card height = 328px */
    />
  </div>
);

};

export default TeamPerformance;
