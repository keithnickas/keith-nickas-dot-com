"use client"

import { pillars } from "@/data/portfolio"
import { useMemo, useState } from "react"

export default function Pillars() {
  const [activeSkill, setActiveSkill] = useState<number | null>(null)
  const pillarsElements = useMemo(
    () =>
      pillars.map((pillar, idx) => (
        <div
          key={pillar.title}
          onMouseEnter={() => setActiveSkill(idx)}
          onMouseLeave={() => setActiveSkill(null)}
          className={`group relative p-8 rounded-2xl transition-all duration-300 cursor-pointer dark:bg-slate-800/50 dark:hover:bg-slate-800 bg-white hover:bg-gray-50 backdrop-blur-sm border dark:border-slate-700 dark:hover:border-cyan-500/50 border-gray-200 hover:border-cyan-300`}
          style={{
            transform:
              activeSkill === idx ? "translateY(-8px)" : "translateY(0)",
            boxShadow:
              activeSkill === idx
                ? "0 20px 60px rgba(6, 182, 212, 0.3)"
                : "none",
            minHeight: "280px",
          }}
        >
          <h3 className="text-xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">
            {pillar.title}
          </h3>
          <div
            className={`space-y-2 transition-all duration-300 opacity-100 ${activeSkill === idx ? "md:absolute md:relative" : ""}`}
          >
            {pillar.skills.map((skill, _) => (
              <div
                key={skill}
                className="text-sm dark:text-slate-200 text-gray-600"
              >
                • {skill}
              </div>
            ))}
          </div>
        </div>
      )),
    [activeSkill, pillars]
  )
  return pillarsElements
}
