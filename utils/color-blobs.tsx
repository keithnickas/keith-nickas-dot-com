"use client"
import { useEffect, useRef } from "react"

export function RandomColorBlobs() {
  const blob1Ref = useRef<HTMLDivElement>(null)
  const blob2Ref = useRef<HTMLDivElement>(null)
  const blob3Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false

    if (prefersReducedMotion) return // do not animate

    let isMounted = true

    const randomBetween = (min: number, max: number) => Math.random() * (max - min) + min

    const scheduleBlobAnimation = (element: HTMLDivElement | null) => {
      if (!isMounted || !element) return
      if (document.hidden) return

      // Position in percent (so layout isn't triggered by left/top changes)
      const translateXPercent = `${randomBetween(10, 90)}%`
      const translateYPercent = `${randomBetween(10, 90)}%`
      // scale (relative to base size)
      const scaleFactor = (randomBetween(288, 480) / 360).toString()
      // duration (s)
      const animationDuration = `${randomBetween(4, 7).toFixed(2)}s`

      // set CSS variables (single DOM write per property)
      element.style.setProperty("--blob-tx", translateXPercent)
      element.style.setProperty("--blob-ty", translateYPercent)
      element.style.setProperty("--blob-scale", scaleFactor)
      element.style.setProperty("--blob-duration", animationDuration)
      element.style.setProperty("--blob-pulse-duration", animationDuration)
    }

    // initial animate
    scheduleBlobAnimation(blob1Ref.current)
    scheduleBlobAnimation(blob2Ref.current)
    scheduleBlobAnimation(blob3Ref.current)

    const cycleInterval = setInterval(() => {
      scheduleBlobAnimation(blob1Ref.current)
      scheduleBlobAnimation(blob2Ref.current)
      scheduleBlobAnimation(blob3Ref.current)
    }, 8000)

    return () => {
      isMounted = false
      clearInterval(cycleInterval)
    }
  }, [])

    return (
    <div className="absolute inset-0 opacity-20 pointer-events-none">
      <div
        ref={blob1Ref}
        className="absolute"
        style={{
          width: "360px",
          height: "360px",
          transform: "translate(var(--blob-tx, 50%), var(--blob-ty, 50%)) scale(var(--blob-scale, 1))",
          transition: "transform var(--blob-duration, 4s) ease-in-out",
          willChange: "transform",
        } as React.CSSProperties}
      >
        <div className="blob-shape bg-cyan-500 mix-blend-multiply filter blur-3xl" />
      </div>

      <div
        ref={blob2Ref}
        className="absolute"
        style={{
          width: "360px",
          height: "360px",
          transform: "translate(var(--blob-tx, 50%), var(--blob-ty, 50%)) scale(var(--blob-scale, 1))",
          transition: "transform var(--blob-duration, 5s) ease-in-out",
          willChange: "transform",
        } as React.CSSProperties}
      >
        <div className="blob-shape bg-purple-500 mix-blend-multiply filter blur-3xl" />
      </div>

      <div
        ref={blob3Ref}
        className="absolute"
        style={{
          width: "360px",
          height: "360px",
          transform: "translate(var(--blob-tx, 50%), var(--blob-ty, 50%)) scale(var(--blob-scale, 1))",
          transition: "transform var(--blob-duration, 6s) ease-in-out",
          willChange: "transform",
        } as React.CSSProperties}
      >
        <div className="blob-shape bg-pink-500 mix-blend-multiply filter blur-3xl" />
      </div>
    </div>
  )
}
