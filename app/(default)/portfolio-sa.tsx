"use client"

import { Mail, ChevronRight } from "lucide-react"
import { LinkedIn } from "@/components/icons"
import { RandomColorBlobs } from "@/utils/color-blobs"
import { saPillars, saSystems, saCapabilities, saTechStack } from "@/data/sa-portfolio"
import { useState } from "react"

function TechStack() {
  return (
    <section className="py-20 px-6 dark:bg-slate-900/50 bg-gray-100/80">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Technology Stack</h2>
        <p className="text-center mb-16 dark:text-slate-400 text-gray-600">
          Full-stack fluency across the entire solution lifecycle
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {Object.entries({
            Frontend: saTechStack.frontend,
            Backend: saTechStack.backend,
            Data: saTechStack.data,
            Platform: saTechStack.platform,
            Practices: saTechStack.practices,
          }).map(([category, items]) => (
            <div
              key={category}
              className="p-6 rounded-2xl dark:bg-slate-800/60 bg-white border dark:border-slate-700 border-gray-200"
            >
              <h3 className="text-xs font-bold uppercase tracking-widest dark:text-slate-400 text-gray-500 mb-4">
                {category}
              </h3>
              <div className="space-y-2">
                {items.map((item) => (
                  <div
                    key={item}
                    className="text-sm dark:text-slate-300 text-gray-700 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SystemCards() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Systems I've Architected</h2>
        <p className="text-center mb-16 dark:text-slate-400 text-gray-600">
          End-to-end architectural ownership from schema to UI
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {saSystems.map((system) => (
            <div
              key={system.title}
              className="group rounded-2xl overflow-hidden border dark:border-slate-700 border-gray-200 dark:bg-slate-800/50 bg-white hover:scale-105 transition-all duration-300"
            >
              <div className={`h-2 bg-gradient-to-r ${system.color}`} />
              <div className="p-6">
                <div className="text-sm font-semibold dark:text-indigo-400 text-indigo-600 mb-2">
                  {system.company}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-indigo-400 transition-colors">
                  {system.title}
                </h3>
                <p className="text-sm dark:text-slate-300 text-gray-600 mb-5 leading-relaxed">
                  {system.description}
                </p>

                <div className="mb-4">
                  <div className="text-xs font-bold uppercase tracking-widest dark:text-slate-400 text-gray-500 mb-2">
                    Architecture
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {system.architecture.map((item) => (
                      <span
                        key={item}
                        className="px-2 py-1 rounded-full text-xs dark:bg-slate-700 dark:text-slate-300 bg-gray-100 text-gray-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-5">
                  <div className="text-xs font-bold uppercase tracking-widest dark:text-slate-400 text-gray-500 mb-2">
                    Outcomes
                  </div>
                  {system.outcomes.map((o) => (
                    <div key={o} className="text-sm dark:text-indigo-300 text-indigo-600 font-medium flex items-start gap-1.5">
                      <span>✓</span> {o}
                    </div>
                  ))}
                </div>

                <a
                  className="flex items-center gap-2 dark:text-indigo-400 text-indigo-600 hover:gap-3 transition-all font-medium text-sm"
                  href={system.href}
                >
                  View Case Study <ChevronRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Capabilities() {
  return (
    <section className="py-20 px-6 dark:bg-slate-900/50 bg-gray-100/80">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Core Capabilities</h2>
        <p className="text-center mb-16 dark:text-slate-400 text-gray-600">
          Where I add the most architectural value
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {saCapabilities.map((cap) => (
            <div
              key={cap.area}
              className="p-8 rounded-2xl dark:bg-slate-800/60 bg-white border dark:border-slate-700 border-gray-200 group hover:border-indigo-400/50 transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-400 transition-colors">
                {cap.area}
              </h3>
              <p className="dark:text-slate-300 text-gray-600 leading-relaxed">{cap.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function SolutionsArchitectPortfolio() {
  const [activePillar, setActivePillar] = useState<number | null>(null)

  return (
    <main className="min-h-screen transition-colors duration-500 dark:bg-slate-950 dark:text-white bg-gray-50 text-gray-900 overflow-hidden">
      {/* Hero */}
      <section id="hero" className="pt-32 pb-20 px-6 relative" style={{ contain: "layout paint" }}>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="max-w-5xl md:h-[696px] md:w-full mx-auto text-center absolute">
            <RandomColorBlobs />
          </div>

          <div className="inline-block mb-6">
            <span className="px-4 py-2 rounded-full text-sm font-medium dark:bg-indigo-500/10 dark:text-indigo-400 dark:border-indigo-500/20 border bg-indigo-100 text-indigo-700 border-indigo-200">
              Solutions Architect · Platform Engineer
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Full-stack architect who{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-violet-400 bg-clip-text text-transparent">
              designs systems
            </span>
            <br />
            that endure and{" "}
            <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
              scale
            </span>
          </h1>

          <p className="text-xl mb-12 max-w-3xl mx-auto dark:text-slate-300 text-gray-600">
            10+ years designing modular backend services, shared UI platforms, API contracts, and
            reusable abstractions — from database schema to React component, across Gap, Wristband, and Deem.
          </p>

          {/* Pillars */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {saPillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                onMouseEnter={() => setActivePillar(idx)}
                onMouseLeave={() => setActivePillar(null)}
                className="group relative p-8 rounded-2xl transition-all duration-300 cursor-pointer dark:bg-slate-800/50 dark:hover:bg-slate-800 bg-white hover:bg-gray-50 backdrop-blur-sm border dark:border-slate-700 dark:hover:border-indigo-500/50 border-gray-200 hover:border-indigo-300"
                style={{
                  transform: activePillar === idx ? "translateY(-8px)" : "translateY(0)",
                  boxShadow: activePillar === idx ? "0 20px 60px rgba(99, 102, 241, 0.2)" : "none",
                  minHeight: "280px",
                }}
              >
                <div className="text-3xl mb-3">{pillar.icon}</div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-indigo-400 transition-colors">
                  {pillar.title}
                </h3>
                <div className="space-y-2">
                  {pillar.skills.map((skill) => (
                    <div key={skill} className="text-sm dark:text-slate-300 text-gray-600">
                      • {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SystemCards />
      <TechStack />
      <Capabilities />

      {/* Testimonials pull-quote */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <blockquote className="text-center">
            <p className="text-2xl md:text-3xl font-medium italic dark:text-slate-200 text-gray-700 leading-relaxed mb-8">
              "I've worked with Keith the past three years. He is an excellent front-end programmer. He led
              the team in the transition to React. Whenever there's a React or JavaScript issue, he is the
              first person I go to to help resolve the issue."
            </p>
            <footer className="dark:text-slate-400 text-gray-500">
              <span className="font-semibold dark:text-slate-200 text-gray-700">James Park</span>
              {" "}— Deem Colleague
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-20 px-6 dark:bg-slate-900/50 bg-gray-100/80">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Design Something Durable</h2>
          <p className="text-xl mb-12 dark:text-slate-300 text-gray-600">
            Open to Solutions Architect, Principal Engineer, and Platform Engineering roles
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:iam@keithnickas.com"
              className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full font-bold text-white hover:shadow-lg hover:shadow-indigo-500/50 transition-all hover:scale-105"
            >
              <Mail size={20} />
              Get in Touch
            </a>
            <a
              href="https://linkedin.com/in/keith-nickas"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 rounded-full font-bold transition-all hover:scale-105 dark:bg-slate-800 hover:dark:bg-slate-700 bg-white hover:bg-gray-50 border border-gray-200"
            >
              <LinkedIn size={1} />
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
