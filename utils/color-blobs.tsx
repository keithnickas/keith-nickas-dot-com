"use client"
import { useEffect, useRef } from "react"
import { createBlobAnimator, scrollPauseAnimation, prefersReducedMotion } from "./color-blobs-helpers"

export function RandomColorBlobs() {
  const blob1Ref = useRef<HTMLDivElement>(null)
  const blob2Ref = useRef<HTMLDivElement>(null)
  const blob3Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (prefersReducedMotion()) return

    const animator1 = createBlobAnimator(blob1Ref.current)
    const animator2 = createBlobAnimator(blob2Ref.current)
    const animator3 = createBlobAnimator(blob3Ref.current)

    animator1.start()
    animator2.start()
    animator3.start()

    const removeScroll = scrollPauseAnimation([animator1, animator2, animator3])

    return () => {
      removeScroll()
      animator1.cancel()
      animator2.cancel()
      animator3.cancel()
    }
  }, [])

    return (
    <div className="absolute inset-0 opacity-20 pointer-events-none">
      <div
        ref={blob1Ref}
        className="absolute blob-container"
      >
        <div className="blob-shape blob-cyan mix-blend-multiply" />
      </div>

      <div
        ref={blob2Ref}
        className="absolute blob-container"
      >
        <div className="blob-shape blob-purple " />
      </div>

      <div
        ref={blob3Ref}
        className="absolute blob-container"
      >
        <div className="blob-shape blob-pink" />
      </div>
    </div>
  )
}
