import { CaseStudy } from "./types/case-study-types"

export function Badge({
  title,
  variant = "outline",
  badgeClassName,
}: CaseStudy & { variant?: "outline" | "solid"; badgeClassName?: string }) {
  return (
    <div
      className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-6 ${badgeClassName ? badgeClassName : "dark:bg-cyan-500/10 dark:text-cyan-400 dark:border-cyan-500/20 bg-cyan-100 text-cyan-700 border border-cyan-200"}`}
    >
      {title}
    </div>
  )
}
