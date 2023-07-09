import { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
export default function useResponsive1000() {
  const [size1000, setSize1000] = useState<boolean>(false)
  const is1000 = useMediaQuery({ minWidth: 1000, maxWidth: 1299 })
  const checkResize = () => {
    if (is1000) {
      setSize1000(true)
    } else {
      setSize1000(false)
    }
  }

  useEffect(() => {
    checkResize()
  }, [is1000])
  return is1000
}
