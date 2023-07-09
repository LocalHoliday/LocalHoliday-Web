import { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
export default function useResponsiveMobile() {
  const [mobile, setMobile] = useState<boolean>(false)
  const isMobile = useMediaQuery({ maxWidth: 700 })
  const checkResize = () => {
    if (isMobile) {
      setMobile(true)
    } else {
      setMobile(false)
    }
  }

  useEffect(() => {
    checkResize()
  }, [isMobile])
  return isMobile
}
