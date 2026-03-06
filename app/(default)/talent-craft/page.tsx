"use client"
import React from "react"
import { Mail } from "lucide-react"
import { LinkedIn } from "@/components/icons"
import { RandomColorBlobs } from "@/utils/color-blobs"
import KpiChip from "@/components/talent-craft/KpiChip"
import ImpactDonut from "@/components/talent-craft/ImpactDonut"
import Timeline from "@/components/talent-craft/Timeline"
import Sparkline from "@/components/talent-craft/Sparkline"
import deemCase from "@/data/talent-craft/deem-recruiter-case-study"
import gapCase from "@/data/talent-craft/gap-recruiter-case-study"
import pingletCase from "@/data/talent-craft/pinglet-recruiter-case-study"
import wristbandCase from "@/data/talent-craft/wristband-recruiter-case-study"
import FeaturedProjects from "@/components/featured-projects";
import { recruitmentProjects as projects } from "@/data/projects";

const recruiterCases = [deemCase, gapCase, pingletCase, wristbandCase]

export default function TalentCraftLanding() {
  return (
    <main
      className={`min-h-screen transition-colors duration-500 dark:bg-slate-950 dark:text-white bg-gray-50 text-gray-900 overflow-hidden`}
    >
      <section className="pt-28 pb-12 px-6 relative">
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="max-w-5xl md:h-[480px] md:w-[800px] mx-auto text-center absolute">
            <RandomColorBlobs  />
          </div>
          </div>
          <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 rounded-full text-sm font-medium dark:bg-cyan-500/10 dark:text-cyan-400 dark:border-cyan-500/20 bg-cyan-100 text-cyan-700 border border-cyan-200">
              Talent Craft — For Recruiters & Hiring Managers
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight wrap">
            Proven frontend <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-transparent bg-clip-text">leadership</span> & <br /> <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">platform modernization</span>
            {" "} for teams that need impact — <span className="bg-gradient-to-r from-pink-400 via-orange-400 to-red-400 bg-clip-text text-transparent">fast</span>
          </h1>

          <p className="text-lg mb-8 dark:text-slate-300 text-gray-600">
            Senior frontend engineering leadership with a track record of
            mentoring distributed teams, shipping shared component systems, and
            driving measurable business outcomes.
          </p>

          <div className="flex justify-center gap-4">
            <a
              href="mailto:iam@keithnickas.com"
              className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-bold text-black hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-105"
            >
              <Mail size={18} />
              Contact Keith
            </a>
            <a
              href="https://linkedin.com/in/keith-nickas"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all hover:scale-105 dark:bg-slate-800 bg-white border border-gray-200"
            >
              <LinkedIn />
              View LinkedIn
            </a>
          </div>
        </div>
      </section>
      <FeaturedProjects projects={projects} />
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Selected Recruiter Case Studies
          </h2>
          <p className="text-center mb-8 text-gray-600 dark:text-slate-300">
            Summaries tailored for hiring teams — people, outcomes, and
            measurable impact.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {recruiterCases.map((c) => (
              <article
                key={c.company}
                className="relative rounded-2xl p-6 bg-white border border-gray-200 dark:bg-slate-800/50 dark:border-slate-700"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-sm text-cyan-400 font-bold">
                      {c.company}
                    </div>
                    <h3 className="text-xl font-bold mt-1">{c.title}</h3>
                    <div className="text-sm text-gray-600 dark:text-slate-300">
                      {c.role} · {c.timeline}
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-gray-700 dark:text-slate-200">
                  {c.executiveSummary}
                </p>

                <div>
                  <div className="text-sm font-semibold mb-2">
                    Impact Highlights
                  </div>
                  <div className="flex flex-wrap gap-3 items-center">
                    {c.impact?.metrics?.map((m: any) => {
                      const isPercent =
                        (typeof m.value === "string" &&
                          m.value.includes("%")) ||
                        typeof m.value === "number"
                      if (isPercent) {
                        const parsed =
                          typeof m.value === "number"
                            ? m.value
                            : parseFloat(
                                (m.value as string).replace("%", "")
                              ) || 0
                        const trend = [
                          parsed * 0.6,
                          parsed * 0.75,
                          parsed * 0.85,
                          parsed,
                        ]

                        return (
                          <div
                            key={m.label}
                            className="flex items-center gap-3"
                          >
                            <ImpactDonut label={m.label} value={m.value} />
                            <div className="opacity-80">
                              <Sparkline
                                values={trend.map((n) =>
                                  Math.max(0, Math.min(100, n))
                                )}
                              />
                            </div>
                          </div>
                        )
                      }
                      return (
                        <KpiChip
                          key={m.label}
                          label={m.label}
                          value={m.value}
                          description={m.description}
                          Icon={m.icon}
                        />
                      )
                    })}
                  </div>
                </div>
                <div className="mt-4">
                  <div className="text-sm font-semibold mb-2">
                    Key Responsibilities
                  </div>
                  <ul className="text-sm text-gray-600 dark:text-slate-300 list-disc list-inside">
                    {c.roleResponsibilities?.keyResponsibilities
                      ?.slice(0, 5)
                      .map((k: string) => (
                        <li key={k}>{k}</li>
                      ))}
                  </ul>

                  <Timeline timeline={c.timeline} />
                </div>

                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm font-semibold mb-2">
                      Capabilities
                    </div>
                    <ul className="text-sm text-gray-600 dark:text-slate-300 list-disc list-inside">
                      {c.capabilities?.slice(0, 3).map((cap: any) => (
                        <li key={cap.title}>{cap.title}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 flex justify-end">
                  <a
                    href="mailto:iam@keithnickas.com?subject=Hiring%20Inquiry"
                    className="px-4 py-2 rounded-full bg-cyan-500 text-white font-semibold"
                  >
                    Discuss Role
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-3">Ready to talk?</h3>
          <p className="text-gray-600 dark:text-slate-300 mb-6">
            If you'd like a one-page summary, tailored interview plan, or to
            schedule a conversation, reach out and I’ll follow up within one
            business day.
          </p>
          <a
            href="mailto:iam@keithnickas.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-bold text-black"
          >
            Contact Keith
          </a>
        </div>
      </section>
    </main>
  )
}
