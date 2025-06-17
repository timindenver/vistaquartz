import { useEffect, useRef } from 'react'

import gsap from 'gsap'

export function useButtonAnimation() {
  const buttonRef = useRef(null)

  useEffect(() => {
    if (!buttonRef.current) return

    const animation = gsap.fromTo(
      buttonRef.current,
      { rotationX: 40, transformOrigin: '0% 10%' },
      {
        rotationX: 0,
        transformOrigin: '0% 10%',
        duration: 0.6,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      }
    )

    return () => {
      animation.kill()
    }
  }, [])

  return buttonRef
}
