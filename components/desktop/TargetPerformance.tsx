"use client";

import dynamic from "next/dynamic";
import React from "react";

// Must disable SSR for ApexCharts
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const TargetChart = () => {
  const [state, setState] = React.useState({
    series: [
      {
        name: "Performance",
        data: [70, 55, 60, 80, 95, 40], // your values
      },
    ],

    options: {
      chart: {
        type: "bar",
        height: 380,
        toolbar: { show: false },
      },

      plotOptions: {
        bar: {
          borderRadius: 30,     // round top
          columnWidth: "40%",   // slim bars
          borderRadiusApplication: "around",
          borderRadiusWhenStacked: "last",
        },
      },

      colors: [
        function ({ dataPointIndex }) {
          const gradients = [
            "#FFA726", // Mon
            "#F06292", // Tue
            "#FFEE58", // Wed
            "#81C784", // Thu
            "#FF7043", // Fri
            "#BDBDBD", // Sat
          ];
          return gradients[dataPointIndex];
        },
      ],

      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "vertical",
          gradientToColors: ["#fff"],
          stops: [0, 100],
        },
      },

      xaxis: {
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        labels: {
          style: {
            fontSize: "16px",
            fontWeight: 500,
          },
        },
      },

      yaxis: {
        show: false,
      },

      grid: {
        show: false,
      },

      tooltip: {
        enabled: false,
      }
    },
  });

  return (
    <div className="bg-[#FFEAEA] p-6 rounded-3xl shadow-md">
      <h2 className="text-lg font-bold mb-4 text-[#7A1F1F]">Target Performance</h2>

      <ReactApexChart
        options={state.options}
        series={state.series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default TargetChart;
