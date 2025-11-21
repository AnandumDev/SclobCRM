import React from 'react'
import MobileStatsCards from '../../mobile/MobileLandingCompontes/MobileStatsCards'
import TeamPerformance from '@/mobile/MobileLandingCompontes/TeamPerformance'
import TargetPerformanceChart from '@/mobile/MobileLandingCompontes/TargetPerformanceChart'

function MobileLanding() {
  return (
    <div>
    <MobileStatsCards />
    <TeamPerformance />
    <TargetPerformanceChart />
    </div>
  )
}

export default MobileLanding
