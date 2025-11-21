import React from 'react'
import MobileStatsCards from '../../mobile/MobileLandingCompontes/MobileStatsCards'
import TeamPerformance from '@/mobile/MobileLandingCompontes/TeamPerformance'
import TargetPerformanceChart from '@/mobile/MobileLandingCompontes/TargetPerformanceChart'
import ToppersCard from '@/mobile/MobileLandingCompontes/ToppersCard'

function MobileLanding() {
  return (
    <div className="pb-20 ">
    <MobileStatsCards />
    <TeamPerformance />
    <TargetPerformanceChart />
    <ToppersCard />
    </div>
  )
}

export default MobileLanding
