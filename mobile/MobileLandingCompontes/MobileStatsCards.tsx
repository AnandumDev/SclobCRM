import Image from "next/image";
import Frame1 from "../../public/assets/images/Frame1.png";
import usericon from "@/public/assets/icons/usericon.png";
import Frame2 from "../../public/assets/images/Frame2.png";

export default function MobileStatsCards() {
  return (
    <div className="w-full overflow-x-auto py-3 scrollbar-hide">
      <div className="flex gap-4 px-4 min-w-max snap-x snap-mandatory scroll-smooth">

        {/* Card 1 */}
        <div className="w-48 h-32 bg-[#1EEACC] rounded-xl p-4 text-black relative overflow-hidden snap-start flex-shrink-0">
          {/* Background pattern placeholder */}
          <div className="absolute inset-0 ">
            <Image
              src={Frame1} 
              alt="pattern"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="relative">
            <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center">
              <Image
                src={usericon}
                alt="Users"
                width={22}
                height={22}
              />
            </div>

            <h2 className="text-lg font-bold mt-3">1,200</h2>
            <p className="text-sm font-medium">Total Staff</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-48 h-32 bg-[#FADB5F] rounded-xl p-4 text-black relative overflow-hidden snap-start flex-shrink-0">
          <div className="absolute inset-0 ">
            <Image
              src={Frame2}
              alt="pattern"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative">
            <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center">
              <Image
                src={usericon}
                alt="Users"
                width={22}
                height={22}
              />
            </div>

            <h2 className="text-lg font-bold mt-3">1,200</h2>
            <p className="text-sm font-medium">Active Staff</p>
          </div>
        </div>

        {/* Repeat for more cards */}
      </div>
    </div>
  );
}
