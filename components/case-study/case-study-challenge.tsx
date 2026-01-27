const CaseStudyChallenge = ({ project, titleClassName }: { project: any, titleClassName?: string }) => {
  return (
    <section className="px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <div
          className={`p-8 md:p-12 rounded-2xl dark:bg-slate-800/50 dark:border-slate-700 bg-white border border-gray-200`}
        >
          <h2 className={`text-3xl font-bold mb-4 ${titleClassName ? titleClassName : "text-cyan-400"}`}>
            {project.challenge.title}
          </h2>
          <p
            className={`text-lg leading-relaxed dark:text-slate-300 text-gray-700`}
          >
            {project.challenge.content}
          </p>
        </div>
      </div>
    </section>
  )
}

export default CaseStudyChallenge;
