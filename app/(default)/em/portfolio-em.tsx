import { emImpactStats, emWorkingStyle } from "@/data/em-portfolio"

export function ImpactStats() {
  return (
    <section className="py-20 px-6 dark:bg-slate-900/50 bg-gray-100/80">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Measurable Impact</h2>
        <p className="text-center mb-16 dark:text-slate-400 text-gray-600">
          Leadership outcomes backed by real results
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {emImpactStats.map((stat) => (
            <div
              key={stat.label}
              className="relative p-8 rounded-2xl dark:bg-slate-800/60 bg-white border dark:border-slate-700 border-gray-200 text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="text-5xl font-black mb-3 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm font-semibold dark:text-slate-200 text-gray-800 mb-1">{stat.label}</div>
              <div className="text-xs dark:text-slate-400 text-gray-500 italic">{stat.context}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}



export function WorkingStyle() {
  return (
    <section className="py-20 px-6 dark:bg-slate-900/50 bg-gray-100/80">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">How I Lead</h2>
        <p className="text-center mb-16 dark:text-slate-400 text-gray-600">
          The principles I actually operate by
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {emWorkingStyle.map((item) => (
            <div
              key={item.title}
              className="p-8 rounded-2xl dark:bg-slate-800/60 bg-white border dark:border-slate-700 border-gray-200 group hover:border-cyan-400/50 transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                {item.title}
              </h3>
              <p className="dark:text-slate-300 text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// function EngineeringManagerPortfolio() {

//   return (
//     <main className="min-h-screen transition-colors duration-500 dark:bg-slate-950 dark:text-white bg-gray-50 text-gray-900 overflow-hidden">
//       {/* Hero */}
//       <section id="hero" className="pt-32 pb-20 px-6 relative" style={{ contain: "layout paint" }}>
//         <div className="max-w-5xl mx-auto text-center relative z-10">
//           <div className="max-w-5xl md:h-[696px] md:w-full mx-auto text-center absolute">
//             <RandomColorBlobs />
//           </div>

//           <div className="inline-block mb-6">
//             <span className="px-4 py-2 rounded-full text-sm font-medium dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20 border bg-emerald-100 text-emerald-700 border-emerald-200">
//               Engineering Manager · Technical Lead
//             </span>
//           </div>

//           <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
//             Senior engineer who{" "}
//             <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
//               leads teams
//             </span>
//             ,<br />
//             ships product, and{" "}
//             <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
//               grows people
//             </span>
//           </h1>

//           <p className="text-xl mb-12 max-w-3xl mx-auto dark:text-slate-300 text-gray-600">
//             10+ years building frontend platforms — and the teams behind them. I've led engineers, managed
//             delivery, driven architectural decisions, and mentored across seniority levels at Gap, Wristband, and Deem.
//           </p>

//           {/* Pillars */}
//           <div className="grid md:grid-cols-3 gap-6 mt-16">
//             {emPillars.map((pillar, idx) => (
//               <div
//                 key={pillar.title}
//                 className="group relative p-8 rounded-2xl transition-all duration-300 cursor-pointer dark:bg-slate-800/50 dark:hover:bg-slate-800 bg-white hover:bg-gray-50 backdrop-blur-sm border dark:border-slate-700 dark:hover:border-emerald-500/50 border-gray-200 hover:border-emerald-300"
//                 style={{
//                   transform: "translateY(0)",
//                   minHeight: "280px",
//                 }}
//               >
//                 <div className="text-3xl mb-3">{pillar.icon}</div>
//                 <h3 className="text-xl font-bold mb-4 group-hover:text-emerald-400 transition-colors">
//                   {pillar.title}
//                 </h3>
//                 <div className="space-y-2">
//                   {pillar.skills.map((skill) => (
//                     <div key={skill} className="text-sm dark:text-slate-300 text-gray-600">
//                       • {skill}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <ImpactStats />
//       <LeadershipTimeline />
//       <WorkingStyle />

//       {/* Testimonials pull-quote */}
//       <section className="py-20 px-6">
//         <div className="max-w-4xl mx-auto">
//           <blockquote className="text-center">
//             <p className="text-2xl md:text-3xl font-medium italic dark:text-slate-200 text-gray-700 leading-relaxed mb-8">
//               "Keith has saved the day for our team more times than I can remember. He has a deep
//               understanding of many of the technologies we use day to day, but more importantly, he has
//               intimate knowledge on how those things are configured and used for our project."
//             </p>
//             <footer className="dark:text-slate-400 text-gray-500">
//               <span className="font-semibold dark:text-slate-200 text-gray-700">Lisa L.</span>
//               {" "}— Gap Colleague
//             </footer>
//           </blockquote>
//         </div>
//       </section>

//       {/* Contact CTA */}
//       <section id="contact" className="py-20 px-6 dark:bg-slate-900/50 bg-gray-100/80">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Talk Leadership</h2>
//           <p className="text-xl mb-12 dark:text-slate-300 text-gray-600">
//             Open to Engineering Manager, Staff Engineer, and Technical Lead roles
//           </p>
//           <div className="flex flex-wrap justify-center gap-4">
//             <a
//               href="mailto:iam@keithnickas.com"
//               className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full font-bold text-black hover:shadow-lg hover:shadow-emerald-500/50 transition-all hover:scale-105"
//             >
//               <Mail size={20} />
//               Get in Touch
//             </a>
//             <a
//               href="https://linkedin.com/in/keith-nickas"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-2 px-8 py-4 rounded-full font-bold transition-all hover:scale-105 dark:bg-slate-800 hover:dark:bg-slate-700 bg-white hover:bg-gray-50 border border-gray-200"
//             >
//               <LinkedIn size={1} />
//               LinkedIn
//             </a>
//           </div>
//         </div>
//       </section>
//     </main>
//   )
// }
