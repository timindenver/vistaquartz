import { useEffect, useRef, useState } from 'react'

import gsap from 'gsap'

export function useStickyNavbarAnimation() {
  const [isSticky, setIsSticky] = useState(false)
  const [hidden, setHidden] = useState(false)
  const lastScrollY = useRef(0)
  const navRef = useRef(null)

  useEffect(() => {
    const navbar = navRef.current

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const scrollingDown = currentScrollY > lastScrollY.current
      const scrollingUp = currentScrollY < lastScrollY.current

      if (currentScrollY === 0) {
        setIsSticky(false)
        setHidden(false)
        gsap.to(navbar, { y: 0, duration: 0.3, ease: 'power1.out' })
      } else if (currentScrollY <= 400) {
        setIsSticky(true)
        setHidden(false)
        gsap.to(navbar, { y: 0, duration: 0.3, ease: 'power1.out' })
      } else if (currentScrollY > 400 && scrollingDown) {
        if (!hidden) {
          setHidden(true)
          gsap.to(navbar, { y: '-100%', duration: 0.5, ease: 'power1.out' })
          setIsSticky(true)
        }
      } else if (currentScrollY > 400 && scrollingUp) {
        if (hidden) {
          setHidden(false)
          gsap.to(navbar, { y: 0, duration: 0.5, ease: 'power1.out' })
          setIsSticky(true)
        }
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll)

    lastScrollY.current = window.scrollY
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [hidden])

  return { navRef, isSticky }
}
