import { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
export default function useResponsive800() {
  const [size800, setSize800] = useState<boolean>(false)
  const is800 = useMediaQuery({ minWidth: 800, maxWidth: 999 })
  const checkResize = () => {
    if (is800) {
      setSize800(true)
    } else {
      setSize800(false)
    }
  }

  useEffect(() => {
    checkResize()
  }, [is800])
  return is800
}
