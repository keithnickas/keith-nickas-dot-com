"use client"
import { emLeadershipHighlights } from "@/data/em-portfolio"
import { useState } from "react"

export function LeadershipTimeline() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null)

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Leadership History</h2>
        <p className="text-center mb-16 dark:text-slate-400 text-gray-600">
          Where I've led, mentored, and shipped
        </p>
        <div className="space-y-6">
          {emLeadershipHighlights.map((company, idx) => (
            <div
              key={company.company}
              className={`rounded-2xl overflow-hidden border transition-all duration-300 dark:border-slate-700 border-gray-200 dark:bg-slate-800/50 bg-white ${activeIdx === idx ? "shadow-xl" : ""}`}
            >
              <div className={`h-1.5 bg-gradient-to-r ${company.color}`} />
              <button
                className="w-full text-left p-6 flex items-center justify-between gap-4"
                onClick={() => setActiveIdx(activeIdx === idx ? null : idx)}
              >
                <div>
                  <div className="text-xl font-bold">{company.company}</div>
                  <div className="text-sm dark:text-slate-400 text-gray-500 mt-0.5">
                    {company.role} · {company.duration}
                  </div>
                </div>
                <span
                  className={`text-2xl transition-transform duration-300 ${activeIdx === idx ? "rotate-45" : ""}`}
                >
                  +
                </span>
              </button>
              {activeIdx === idx && (
                <div className="px-6 pb-6 space-y-2 border-t dark:border-slate-700 border-gray-100 pt-4">
                  {company.highlights.map((h) => (
                    <div key={h} className="flex items-start gap-3 text-sm dark:text-slate-300 text-gray-700">
                      <span className="text-cyan-400 mt-0.5">→</span>
                      {h}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}