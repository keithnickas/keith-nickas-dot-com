"use client"
import { useEffect, useRef } from "react"

export function RandomColorBlobs() {
  const blob1Ref = useRef<HTMLDivElement>(null)
  const blob2Ref = useRef<HTMLDivElement>(null)
  const blob3Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const animateBlob = () => {
      if (blob1Ref.current) {
        blob1Ref.current.style.left = `${Math.random() * 80 + 10}%`
        blob1Ref.current.style.top = `${Math.random() * 80 + 10}%`
        blob1Ref.current.style.width = `${Math.random() * 192 + 288}px`
        blob1Ref.current.style.height = `${Math.random() * 192 + 288}px`
        blob1Ref.current.style.transition = `all ${
          Math.random() * 3 + 4
        }s ease-in-out`
      }
      if (blob2Ref.current) {
        blob2Ref.current.style.left = `${Math.random() * 80 + 10}%`
        blob2Ref.current.style.top = `${Math.random() * 80 + 10}%`
        blob2Ref.current.style.width = `${Math.random() * 192 + 288}px`
        blob2Ref.current.style.height = `${Math.random() * 192 + 288}px`
        blob2Ref.current.style.transition = `all ${
          Math.random() * 3 + 4
        }s ease-in-out`
      }
      if (blob3Ref.current) {
        blob3Ref.current.style.left = `${Math.random() * 80 + 10}%`
        blob3Ref.current.style.top = `${Math.random() * 80 + 10}%`
        blob3Ref.current.style.width = `${Math.random() * 192 + 288}px`
        blob3Ref.current.style.height = `${Math.random() * 192 + 288}px`
        blob3Ref.current.style.transition = `all ${
          Math.random() * 3 + 4
        }s ease-in-out`
      }
    }
    animateBlob()
    const interval = setInterval(animateBlob, 8000)
    return () => clearInterval(interval)
  }, [])
  return (
    <div className="absolute inset-0 opacity-20">
      <div
        ref={blob1Ref}
        className="absolute bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl"
        style={{
          transition: "all 4s ease-in-out",
          animation: "pulse 4s ease-in-out infinite",
        }}
      ></div>
      <div
        ref={blob2Ref}
        className="absolute bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"
        style={{
          transition: "all 5s ease-in-out",
          animation: "pulse 5s ease-in-out infinite",
        }}
      ></div>
      <div
        ref={blob3Ref}
        className="absolute bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl"
        style={{
          transition: "all 6s ease-in-out",
          animation: "pulse 6s ease-in-out infinite",
        }}
      ></div>
    </div>
  )
}
