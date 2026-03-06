import { RecruiterCaseStudy } from "@/components/types/talent-craft-case-study-types"
import { Badge } from "@/components/badge"
import { CheckCircle2 } from "lucide-react"

interface RecruiterCaseStudyPageProps {
  data: RecruiterCaseStudy
  accentColor?: string
}

export default function RecruiterCaseStudyPage({
  data,
  accentColor = "cyan",
}: RecruiterCaseStudyPageProps) {
  const {
    title,
    company,
    role,
    timeline,
    tags,
    executiveSummary,
    businessContext,
    roleResponsibilities,
    capabilities,
    leadership,
    impact,
    skillsHighlight,
  } = data

  return (
    <main className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="px-6 mb-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <span
              className={`px-4 py-2 rounded-full text-sm font-medium bg-${accentColor}-100 dark:bg-${accentColor}-500/10 text-${accentColor}-700 dark:text-${accentColor}-400 border border-${accentColor}-200 dark:border-${accentColor}-500/20`}
            >
              {role}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>

          <div className="flex flex-wrap gap-4 mb-8 text-lg text-gray-600 dark:text-gray-400">
            <span className="font-semibold">{company}</span>
            <span>•</span>
            <span>{timeline}</span>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {tags.map((tag) => (
              <Badge
                key={tag}
                title={tag}
                variant="outline"
                badgeClassName={`bg-${accentColor}-100 dark:bg-${accentColor}-500/10 text-${accentColor}-700 dark:text-${accentColor}-400 border border-${accentColor}-200 dark:border-${accentColor}-500/20`}
              />
            ))}
          </div>

          <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300">
            {executiveSummary}
          </p>
        </div>
      </section>

      {/* Business Context */}
      <section className="px-6 mb-20 bg-gray-50 dark:bg-gray-900/50 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Business Context</h2>
          <p className="text-lg mb-8 leading-relaxed">
            {businessContext.situation}
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Key Stakeholders</h3>
              <ul className="space-y-2">
                {businessContext.stakeholders.map((stakeholder, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 mt-1 text-green-500 flex-shrink-0" />
                    <span>{stakeholder}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Key Constraints</h3>
              <ul className="space-y-2">
                {businessContext.constraints.map((constraint, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 mt-1 text-blue-500 flex-shrink-0" />
                    <span>{constraint}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Role & Responsibilities */}
      <section className="px-6 mb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            My Role & Responsibilities
          </h2>
          <p className="text-lg mb-4 leading-relaxed">
            {roleResponsibilities.scope}
          </p>
          {roleResponsibilities.teamSize && (
            <p className="text-lg mb-8 font-semibold text-blue-600 dark:text-blue-400">
              {roleResponsibilities.teamSize}
            </p>
          )}

          <ul className="space-y-3">
            {roleResponsibilities.keyResponsibilities.map(
              (responsibility, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 mt-1 text-green-500 flex-shrink-0" />
                  <span className="text-lg">{responsibility}</span>
                </li>
              )
            )}
          </ul>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="px-6 mb-20 bg-gray-50 dark:bg-gray-900/50 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">
            Key Capabilities Demonstrated
          </h2>

          <div className="space-y-12">
            {capabilities.map((capability, idx) => (
              <div key={idx}>
                <h3 className="text-2xl font-bold mb-3">{capability.title}</h3>
                <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
                  {capability.description}
                </p>
                <ul className="space-y-2">
                  {capability.examples.map((example, exIdx) => (
                    <li key={exIdx} className="flex items-start gap-2 ml-4">
                      <span className="text-blue-500 font-bold">→</span>
                      <span>{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Collaboration */}
      <section className="px-6 mb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            Leadership & Collaboration
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {leadership.map((item, idx) => (
              <div
                key={idx}
                className="border border-gray-200 dark:border-gray-800 rounded-lg p-6"
              >
                <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Measurable Impact */}
      <section className="px-6 mb-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            {impact.title}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {impact.metrics.map((metric, idx) => {
              const Icon = metric.icon
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-800"
                >
                  {Icon && (
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                  )}
                  <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">
                    {metric.label}
                  </div>
                  <div className="text-2xl font-bold mb-2">{metric.value}</div>
                  <div className="text-gray-700 dark:text-gray-300">
                    {metric.description}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Skills Highlight */}
      <section className="px-6 mb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Skills & Technologies</h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg mb-4">Core Competencies</h3>
              <div className="flex flex-wrap gap-2">
                {skillsHighlight.primary.map((skill, idx) => (
                  <Badge
                    key={`${skill}-${idx}`}
                    title={skill}
                    badgeClassName="px-4 py-2 text-base"
                  />
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skillsHighlight.secondary.map((skill, idx) => (
                  <Badge
                    key={`${skill}-${idx}`}
                    title={skill}
                    variant="outline"
                    badgeClassName="px-3 py-1"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">
            Interested in working together?
          </h2>
          <p className="text-xl mb-8 text-gray-700 dark:text-gray-300">
            Let's discuss how my experience can contribute to your team's
            success.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:iam@keithnickas.com"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-bold text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all hover:scale-105"
            >
              Get in Touch
            </a>
            <a
              href="/#work"
              className="px-8 py-4 rounded-full font-bold border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
            >
              View More Projects
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
