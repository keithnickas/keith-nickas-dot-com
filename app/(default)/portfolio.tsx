"use client"
import "../css/root.css"
import React, { useState, useEffect } from "react"
import { Mail, ChevronRight } from "lucide-react"
import { LinkedIn } from "@/components/icons"
import { projects } from "@/data/projects"
import { RandomColorBlobs } from "@/utils/color-blobs"


function Portfolio() {
  const [activeSkill, setActiveSkill] = useState<number | null>(null)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const pillars = [
    {
      title: "Frontend Architecture",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Component Design",
        "Performance",
      ],
    },
    {
      title: "Design Systems",
      skills: [
        "Component Libraries",
        "Design Tokens",
        "Accessibility",
        "Documentation",
        "Style Guides",
      ],
    },
    {
      title: "Growth & UX",
      skills: [
        "A/B Testing",
        "Analytics",
        "Conversion Optimization",
        "User Flows",
        "Experimentation",
      ],
    },
  ]

  const testimonials = [
    {
      quote:
        "Keith has saved the day for our team more times than I can remember. He has a deep understanding of many of the technologies we use day to day, but more importantly, he has intimate knowledge on how those things are configured and used for our project.",
      author: "Lisa L.",
      role: "Gap Colleague",
      theme: "Problem Solver",
    },
    {
      quote:
        "Keith worked on our team for several years at Deem and I found him to be a steady and consistent contributor and really positive team player. I could count on him to stay the course during thick and thin!",
      author: "John F. Rizzo",
      role: "Deem Leadership",
      theme: "Team Player",
      linkedin: "https://www.linkedin.com/in/jfrizzo",
    },
    {
      quote:
        "I've worked with Keith the past three years. He is an excellent front-end programmer. He led the team in the transition to react. Whenever there's a react or javascript issue, he is the first person I go to to help resolve the issue.",
      author: "James Park",
      role: "Deem Colleague",
      theme: "Technical Excellence",
      linkedin: "https://www.linkedin.com/in/jamespark",
    },
  ]

  const skillTree = {
    core: "React • Vue • Next.js • TypeScript • NestJS",
    branches: [
      {
        name: "Design Systems",
        tools: ["Component Libraries", "Storybook", "Tailwind"],
      },
      {
        name: "Performance",
        tools: ["Lighthouse", "Webpack", "Code Splitting", "Vite"],
      },
      { name: "A/B Testing", tools: ["Analytics", "GTM", "Experimentation"] },
      { name: "Accessibility", tools: ["WCAG", "a11y", "Section 508"] },
    ],
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-500 dark:bg-slate-950 dark:text-white bg-gray-50 text-gray-900 overflow-hidden`}
    >
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Animated gradient mesh background */}
          <div className="max-w-5xl md:h-[696px] md:w-[1024px] mx-auto text-center absolute">
            <RandomColorBlobs />
          </div>
          <div className="inline-block mb-6">
            <span
              className={`px-4 py-2 rounded-full text-sm font-medium dark:bg-cyan-500/10 dark:text-cyan-400 dark:border-cyan-500/20 bg-cyan-100 text-cyan-700 border border-cyan-200`}
            >
              Senior Frontend Engineer & Technical Lead
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Building systems that{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              scale
            </span>
            ,<br />
            teams that{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              ship
            </span>
            ,<br />
            experiences that{" "}
            <span className="bg-gradient-to-r from-pink-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              convert
            </span>
          </h1>

          <p
            className={`text-xl mb-12 max-w-3xl mx-auto dark:text-slate-300 text-gray-600`}
          >
            10+ years architecting scalable React & Next.js applications with a
            focus on design systems, accessibility, and performance
            optimization.
          </p>

          {/* Three Pillars */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {pillars.map((pillar, idx) => (
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
                  className={`space-y-2 transition-all duration-300 ${
                    activeSkill === idx ? "opacity-100" : "opacity-0"
                  } ${activeSkill === idx ? "md:absolute md:relative" : ""}`}
                >
                  {pillar.skills.map((skill, i) => (
                    <div
                      key={i}
                      className="text-sm dark:text-slate-200 text-gray-600"
                    >
                      • {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="work" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Signature Projects
          </h2>
          <p className="text-center mb-16 dark:text-slate-400 text-gray-600">
            Case studies showcasing real-world impact
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {projects?.map((project, _) => (
              <div
                key={project.company}
                className={`group relative rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 dark:bg-slate-800/50 bg-white backdrop-blur-sm border dark:border-slate-700 border-gray-200`}
              >
                {/* Gradient header */}
                <div className={`h-2 bg-gradient-to-r ${project.color}`} />

                <div className="p-6">
                  <div
                    className={`text-sm font-medium mb-2 dark:text-cyan-400 text-cyan-600`}
                  >
                    {project.company}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  <div className="space-y-4 mb-6">
                    <div>
                      <div
                        className={`text-xs font-semibold mb-1 dark:text-slate-100 text-gray-500`}
                      >
                        CHALLENGE
                      </div>
                      <div
                        className={`text-sm dark:text-slate-300 text-gray-700`}
                      >
                        {project.challenge}
                      </div>
                    </div>
                    <div>
                      <div
                        className={`text-xs font-semibold mb-1 dark:text-slate-100 text-gray-500`}
                      >
                        SOLUTION
                      </div>
                      <div
                        className={`text-sm dark:text-slate-300 text-gray-700`}
                      >
                        {project.solution}
                      </div>
                    </div>
                    <div>
                      <div
                        className={`text-xs font-semibold mb-1 dark:text-slate-100 text-gray-500`}
                      >
                        IMPACT
                      </div>
                      <div
                        className={`text-sm font-medium dark:text-cyan-400 text-cyan-600`}
                      >
                        {project.impact}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-xs font-medium dark:bg-slate-700 dark:text-slate-300 bg-gray-100 text-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    className="flex button items-center gap-2 text-cyan-400 hover:gap-3 transition-all font-medium"
                    href={project.href}
                  >
                    View Deep Dive <ChevronRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Architecture */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Skills Architecture
          </h2>
          <p className="text-center mb-16 dark:text-slate-200 text-gray-600">
            How my competencies interconnect
          </p>

          <div className="relative">
            {/* Core trunk */}
            <div className="text-center mb-12">
              <div className="inline-block px-8 py-4 rounded-2xl text-2xl font-bold dark:bg-gradient-to-r dark:from-cyan-500/20 dark:to-purple-500/20 dark:border dark:border-cyan-500/30 bg-gradient-to-r from-cyan-100 to-purple-100 border border-cyan-300">
                {skillTree.core}
              </div>
            </div>

            {/* Branches */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skillTree.branches.map((branch, idx) => (
                <div
                  key={idx}
                  className="relative p-6 rounded-xl bg-white border border-gray-200 hover:border-cyan-300 transition-all duration-300 hover:scale-105 dark:bg-slate-800/50 dark:border-slate-700 hover:dark:border-cyan-500/50"
                >
                  <h3 className="font-bold text-lg mb-4 text-cyan-400">
                    {branch.name}
                  </h3>
                  <div className="space-y-2">
                    {branch.tools.map((tool, i) => (
                      <div
                        key={i}
                        className="text-sm dark:text-slate-200 text-gray-600"
                      >
                        • {tool}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            What Colleagues Say
          </h2>

          <div className="relative">
            <div className="md:min-h-[386px] rounded-2xl p-8 md:p-12 dark:bg-slate-800/50 bg-white backdrop-blur-sm border dark:border-slate-700 border-gray-200">
              <div className="inline-block px-4 py-1 rounded-full text-xs font-medium mb-6 dark:bg-cyan-500/10 dark:text-cyan-400 dark:border-cyan-500/20 bg-cyan-100 text-cyan-700 border border-cyan-200">
                {testimonials[currentTestimonial].theme}
              </div>

              <blockquote className="text-xl md:text-2xl mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-lg">
                    {testimonials[currentTestimonial].author}
                  </div>
                  <div className="text-sm dark:text-slate-400 text-gray-600">
                    {testimonials[currentTestimonial].role}
                  </div>
                </div>
                {testimonials[currentTestimonial].linkedin && (
                  <a
                    href={testimonials[currentTestimonial].linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <LinkedIn />
                  </a>
                )}
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTestimonial(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentTestimonial
                      ? "w-8 bg-cyan-400"
                      : "bg-slate-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Build Something Great
          </h2>
          <p className="text-xl mb-12 dark:text-slate-300 text-gray-600">
            Open to senior frontend roles, technical leadership, and consulting
            opportunities
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:iam@keithnickas.com"
              className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-bold text-black hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-105"
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
    </div>
  )
}

export default Portfolio
