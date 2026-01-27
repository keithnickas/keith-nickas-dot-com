const CaseStudyCTA = ({
  className,
  title,
  description,
  cta1,
  cta2,
}: {
  className?: string
  title: string
  description: string
  cta1?: { title: string; href: string; className?: string }
  cta2?: { title: string; href: string; className?: string }
}) => (
  <section className="px-6 py-12">
    <div className="max-w-4xl mx-auto text-center">
      <div
        className={`p-12 rounded-2xl bg-gradient-to-r border ${className ? className : "dark:bg-gradient-to-r dark:from-cyan-500/10 dark:to-blue-500/10 dark:border dark:border-cyan-500/20 from-cyan-50 to-blue-50 border-cyan-200"}`}
      >
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="mb-6 dark:text-slate-400 text-gray-600">{description}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={cta1?.href ?? "/contact"}
            className={`px-8 py-4 rounded-full font-bold hover:shadow-lg bg-gradient-to-r transition-all hover:scale-105 text-white dark:text-black ${cta1?.className ? cta1.className : "from-cyan-500 to-blue-500 hover:shadow-cyan-500/50"}`}
          >
            {cta1?.title}
          </a>
          <a
            href={cta2?.href ?? "/"}
            className={`px-8 py-4 rounded-full font-bold transition-all border ${cta2?.className ? cta2.className : "hover:scale-105 dark:bg-slate-800 dark:hover:bg-slate-700 bg-white hover:bg-gray-50 border-gray-200"}`}
          >
            {cta2?.title}
          </a>
        </div>
      </div>
    </div>
  </section>
)

export default CaseStudyCTA
