"use client"
import { useEffect, useState } from "react"
import { LinkedIn } from "@/components/icons"
import { testimonials } from "@/data/portfolio"

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 15000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="testimonials"
      className="py-20 px-6"
      role="slider"
      aria-valuenow={currentTestimonial + 1}
      aria-valuemin={1}
      aria-valuemax={testimonials.length}
      aria-label="Testimonials"
    >
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
          <div className="flex justify-center gap-2 mt-8" role="tablist">
            {testimonials.map((_, idx) => (
              <button
                key={testimonials[idx].author}
                role="tab"
                aria-label={`View testimonial from ${testimonials[idx].author}`}
                onClick={() => setCurrentTestimonial(idx)}
                className={`w-4 h-4 rounded-full transition-all ${
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
  )
}
