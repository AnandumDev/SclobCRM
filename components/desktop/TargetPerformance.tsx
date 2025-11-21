"use client";

import React from "react";

export default function TargetPerformanceChart() {
  const data = [
    { day: "Mon", completed: 85, darkColor: "#ea580c", lightColor: "#fb923c" },
    { day: "Tue", completed: 45, darkColor: "#ec4899", lightColor: "#f9a8d4" },
    { day: "Wed", completed: 70, darkColor: "#eab308", lightColor: "#fde047" },
    { day: "Thu", completed: 55, darkColor: "#22c55e", lightColor: "#86efac" },
    { day: "Fri", completed: 90, darkColor: "#ef4444", lightColor: "#fca5a5" },
    { day: "Sat", completed: 30, darkColor: "#9ca3af", lightColor: "#d1d5db" },
  ];

  return (
  <div
    className="rounded-3xl bg-[#FFEDED] shadow-md p-6 flex flex-col  mr-44"
    style={{ width: "450px", height: "328px" }}
  >
    {/* Heading */}
    <h2 className="text-lg font-semibold text-gray-800 mb-6">
      Target Performance
    </h2>

    {/* Bars wrapper */}
    <div
      className="
        flex justify-between items-end
        gap-4
        w-full
        h-[230px]     /* Fits inside total 328px height */
        overflow-x-auto lg:overflow-visible
        scrollbar-hide
      "
    >
      {data.map((item, index) => (
        <div key={index} className="flex flex-col items-center flex-shrink-0">

          {/* Bar container */}
          <div
            className="w-10 h-48 relative"
            style={{ perspective: "200px" }}
          >
            {/* Background cylinder */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "linear-gradient(to right, #6b7280, #9ca3af 30%, #d1d5db 50%, #9ca3af 70%, #6b7280)",
                boxShadow:
                  "inset -3px 0 6px rgba(0,0,0,0.3), inset 3px 0 6px rgba(255,255,255,0.4), 0 2px 4px rgba(0,0,0,0.1)",
              }}
            ></div>

            {/* Filled bar */}
            <div
              className="absolute bottom-0 left-0 right-0 rounded-full transition-all duration-500"
              style={{
                height: `${item.completed}%`,
                background: `linear-gradient(to right, ${item.darkColor}, ${item.lightColor} 30%, ${item.lightColor} 55%, ${item.lightColor} 70%, ${item.darkColor})`,
                boxShadow:
                  "inset -3px 0 6px rgba(0,0,0,0.35), inset 3px 0 8px rgba(255,255,255,0.5), 0 2px 6px rgba(0,0,0,0.15)",
              }}
            >
              {/* Gloss highlight */}
              <div
                className="absolute top-0 left-1/4 w-1.5 h-full rounded-full"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(255,255,255,0.5), rgba(255,255,255,0.2) 50%, transparent)",
                  filter: "blur(1px)",
                }}
              ></div>
            </div>
          </div>

          {/* Day label */}
          <span className="text-sm font-medium text-gray-700 mt-3">
            {item.day}
          </span>
        </div>
      ))}
    </div>
  </div>
);

}
