"use client";
import React, { useEffect , useState } from 'react'
import Mobile from './components/Mobile'
import Desktop from './components/Desktop'

function page() {
 const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window?.innerWidth < 768)
    }
    
    checkMobile()
    window?.addEventListener('resize', checkMobile)
    
    return () => window?.removeEventListener('resize', checkMobile)
  }, [])
  
  if (isMobile === undefined) {
    return <div style={{ minHeight: '100vh' }} />
  }
  
  return(
    <>
      <div>
      {isMobile ? <Mobile/> : <Desktop />}
    </div>
    </>
  )
}

export default page
