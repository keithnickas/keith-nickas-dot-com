"use client";
import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement | null>(null);
  // requestAnimationFrame ID for throttling scroll updates
  const rafRef = useRef<number | null>(null);
  const latestScrollY = useRef(0);

  useEffect(() => {
    const update = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalScroll > 0 ? latestScrollY.current / totalScroll : 0;
      const clamped = Math.max(0, Math.min(1, progress));
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${clamped})`;
      }
      rafRef.current = null;
    };

    const onScroll = () => {
      latestScrollY.current = window.scrollY || window.pageYOffset;
      if (rafRef.current == null) rafRef.current = requestAnimationFrame(update);
    };

    // set initial position
    latestScrollY.current = window.scrollY || window.pageYOffset;
    update();
    // Listen to scroll and resize events to update progress, using passive listeners for better performance
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50 pointer-events-none">
      <div
        ref={barRef}
        className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 will-change-transform"
        style={{ transformOrigin: "left", transform: "scaleX(0)", transition: "transform 0.1s linear" }}
      />
    </div>
  );
}