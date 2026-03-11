import {
  saSystems,
  saCapabilities
} from "@/data/role-content"
import { ChevronRight } from "lucide-react"

export function SASections() {

  return (
    <>
      <section id="work" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Systems I've Architected</h2>
          <p className="text-center mb-16 dark:text-slate-400 text-gray-600">End-to-end architectural ownership from schema to UI</p>
          <div className="grid md:grid-cols-3 gap-8">
            {saSystems.map((system) => (
              <div key={system.title} className="group rounded-2xl overflow-hidden border dark:border-slate-700 border-gray-200 dark:bg-slate-800/50 bg-white hover:scale-105 transition-all duration-300">
                <div className={`h-2 bg-gradient-to-r ${system.color}`} />
                <div className="p-6">
                  <div className="text-sm font-semibold dark:text-indigo-400 text-indigo-600 mb-2">{system.company}</div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-indigo-400 transition-colors">{system.title}</h3>
                  <p className="text-sm dark:text-slate-300 text-gray-600 mb-5 leading-relaxed">{system.description}</p>
                  <div className="mb-4">
                    <div className="text-xs font-bold uppercase tracking-widest dark:text-slate-400 text-gray-500 mb-2">Architecture</div>
                    <div className="flex flex-wrap gap-2">
                      {system.architecture.map((item) => (
                        <span key={item} className="px-2 py-1 rounded-full text-xs dark:bg-slate-700 dark:text-slate-300 bg-gray-100 text-gray-700">{item}</span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-5">
                    <div className="text-xs font-bold uppercase tracking-widest dark:text-slate-400 text-gray-500 mb-2">Outcomes</div>
                    {system.outcomes.map((o) => (
                      <div key={o} className="text-sm dark:text-indigo-300 text-indigo-600 font-medium flex items-start gap-1.5">
                        <span>✓</span>{o}
                      </div>
                    ))}
                  </div>
                  <a className="flex items-center gap-2 dark:text-indigo-400 text-indigo-600 hover:gap-3 transition-all font-medium text-sm" href={system.href}>
                    View Case Study <ChevronRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 dark:bg-slate-900/50 bg-gray-100/80">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Core Capabilities</h2>
          <p className="text-center mb-16 dark:text-slate-400 text-gray-600">Where I add the most architectural value</p>
          <div className="grid md:grid-cols-2 gap-6">
            {saCapabilities.map((cap) => (
              <div key={cap.area} className="p-8 rounded-2xl dark:bg-slate-800/60 bg-white border dark:border-slate-700 border-gray-200 group hover:border-indigo-400/50 transition-all duration-300">
                <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-400 transition-colors">{cap.area}</h3>
                <p className="dark:text-slate-300 text-gray-600 leading-relaxed">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}