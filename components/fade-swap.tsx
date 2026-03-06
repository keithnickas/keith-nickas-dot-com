"use client"
import { useEffect, useRef, useState } from "react";

export function FadeSwap({ id, children }: { id: string; children: React.ReactNode }) {
  const [visible, setVisible] = useState(true)
  const [content, setContent] = useState(children)
  const prevId = useRef(id)

  useEffect(() => {
    if (prevId.current === id) {
      setContent(children)
      return
    }
    setVisible(false)
    const t = setTimeout(() => {
      setContent(children)
      prevId.current = id
      setVisible(true)
    }, 220)
    return () => clearTimeout(t)
  }, [id])

  return (
    <div
      style={{
        transition: "opacity 0.22s ease, transform 0.22s ease",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(10px)",
      }}
    >
      {content}
    </div>
  )
}
