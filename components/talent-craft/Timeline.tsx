import React from "react"

type TimelineProps = {
  timeline: string
}

export default function Timeline({ timeline }: TimelineProps) {
  // timeline example: "July 2014 - October 2016 & July 2017 - May 2020"
  const ranges = timeline.split("&").map((s) => s.trim())

  return (
    <div className="mt-3">
      <div className="flex items-center justify-center gap-3 flex-wrap">
        {ranges.map((r, idx) => {
          const years = r
            .split("-")
            .map((p) => p.trim())
            .map((p) => {
              const m = p.match(/(\d{4})$/)
              return m ? m[1] : p
            })

          return (
            <div key={idx} className="inline-flex items-center gap-3">
              <div className="px-3 py-1 rounded-full bg-gray-100 dark:bg-slate-700 text-sm font-medium">{years.join(' — ')}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
