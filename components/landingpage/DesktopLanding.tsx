import React from 'react'
import Image from 'next/image'
import frame1 from '@/public/assets/images/Frame1.png'
import frame2 from '@/public/assets/images/Frame2.png'
import frame3 from '@/public/assets/images/Frame3.png'
import frame4 from '@/public/assets/images/Frame4.png'

function DesktopLanding() {
  return (
    <div>
      <Image 
        src={frame1} 
        alt="Landing Frame"
        width={frame1.width}
        height={frame1.height}
        priority
      />
       <Image 
        src={frame1} 
        alt="Landing Frame"
        width={frame1.width}
        height={frame1.height}
        priority
      />
       <Image 
        src={frame1} 
        alt="Landing Frame"
        width={frame1.width}
        height={frame1.height}
        priority
      />
       <Image 
        src={frame1} 
        alt="Landing Frame"
        width={frame1.width}
        height={frame1.height}
        priority
      />
       <Image 
        src={frame1} 
        alt="Landing Frame"
        width={frame1.width}
        height={frame1.height}
        priority
      />

    </div>
  )
}

export default DesktopLanding
