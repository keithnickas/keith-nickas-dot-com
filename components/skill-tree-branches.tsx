"use client"

import { skillTree } from "@/data/portfolio"
import { useMemo } from "react"

export default function SkillTreeBranches() {
  const skillTreeBranches = useMemo(
    () =>
      skillTree.branches.map((branch, idx) => (
        <div
          key={idx}
          className="relative p-6 rounded-xl bg-white border border-gray-200 hover:border-cyan-300 transition-all duration-300 hover:scale-105 dark:bg-slate-800/50 dark:border-slate-700 hover:dark:border-cyan-500/50"
        >
          <h3 className="font-bold text-lg mb-4 text-cyan-400">
            {branch.name}
          </h3>
          <div className="space-y-2">
            {branch.tools.map((tool, _) => (
              <div
                key={tool}
                className="text-sm dark:text-slate-200 text-gray-600"
              >
                • {tool}
              </div>
            ))}
          </div>
        </div>
      )),
    [skillTree.branches]
  )
  return skillTreeBranches
}
