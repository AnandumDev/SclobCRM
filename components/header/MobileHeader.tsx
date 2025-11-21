import React from 'react'
import Image from "next/image";
import { BellIcon, UserIcon } from '@heroicons/react/24/outline';
function MobileHeader() {
  return (
    <div>
        <header className="w-full px-6 py-5 flex items-center justify-between" style={{ backgroundColor: '#3D155F' }}>
      {/* Left: Logo + Text */}
      <div className="flex items-center gap-2">
          <Image
            src="/assets/images/logo.png"
            alt="Seclob Logo"
            width={32}
            height={32}
          />
        <span className="text-white font-semibold text-base">Seclob</span>
      </div>

      {/* Right: Icons */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <BellIcon className="w-6 h-6 text-white" />
          <span className="absolute -top-1 -right-1 bg-[#DBFCE7] text-black text-xs w-4 h-4 flex items-center justify-center rounded-full">
            0
          </span>
        </div>
        <UserIcon className="w-7 h-7 text-white" />
      </div>
    </header>
    </div>
  )
}

export default MobileHeader
