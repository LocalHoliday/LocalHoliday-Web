import { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
export default function useResponsive1300() {
  const [size1300, setSize1300] = useState<boolean>(false)
  const is1300 = useMediaQuery({ minWidth: 1300 })
  const checkResize = () => {
    if (is1300) {
      setSize1300(true)
    } else {
      setSize1300(false)
    }
  }

  useEffect(() => {
    checkResize()
  }, [is1300])
  return is1300
}
