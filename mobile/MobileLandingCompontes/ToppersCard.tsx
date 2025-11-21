"use client";
import Image from "next/image";
import { FaCrown } from "react-icons/fa";

export default function ToppersCard() {
  const list = [
    {
      name: "Sreelakshmi",
      points: 50,
      img: "/assets/images/Mask group.png",
    },
    {
      name: "Sreelakshmi",
      points: 50,
      img: "/assets/images/Mask group.png",
    },
  ];

  // Section component
  const Section = ({ title }: { title: string }) => {
    const getHeaderColor = () => {
      return "bg-[#d4e6ed]";
    };
    
    return (
    <div className="bg-white rounded-xl border border-[#d3f2e7] mb-4 shadow-sm overflow-hidden ">

      {/* Header */}
      <div className={`${getHeaderColor()} flex items-center justify-between p-4`}>
        <span className="text-sm font-semibold text-gray-700">{title}</span>
        <span className="text-xs text-[#ff6b6b] font-medium cursor-pointer">
          View all
        </span>
      </div>

      {/* List */}
      <div className="p-4 space-y-3">
        {list.map((user, i) => (
          <div key={i} className="flex items-center justify-between">

            {/* Left block: crown + img + name */}
            <div className="flex items-center gap-3">
              <div className="relative">
                {/* Crown */}
                <Image
                  src="/assets/images/Vector.png"
                  width={16}
                  height={16}
                  alt="crown"
                  className="absolute -top-3 left-1/2 -translate-x-1/2"
                />

                {/* Profile image */}
                <div className="w-10 h-10 rounded-full border border-white shadow overflow-hidden bg-white">
                  <Image
                    src={user.img}
                    width={40}
                    height={40}
                    alt="user"
                    className="object-cover"
                  />
                </div>
              </div>

              <span className="text-sm font-medium text-gray-800">
                {user.name}
              </span>
            </div>

            {/* Points */}
            <span className="text-xs text-gray-700">{user.points} Points</span>
          </div>
        ))}
      </div>
    </div>
    );
  };

  return (
    <div className="p-4 w-full max-w-sm mx-auto">
      <Section title="Manager Toppers" />
      <Section title="Team Lead Toppers" />
      <Section title="BDM Toppers" />
    </div>
  );
}
