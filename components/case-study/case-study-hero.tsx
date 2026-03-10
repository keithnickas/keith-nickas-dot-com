import { Calendar, Github, Tag } from "lucide-react"
import { CaseStudy, CaseStudyData } from "../types/case-study-types"

const Hero = ({
  data,
  badgeClassName,
  iconClassName,
}: {
  data: CaseStudyData
  badgeClassName?: string
  iconClassName?: string
}) => {
  return (
    <section className={`px-6 pb-12`}>
      <div className="max-w-4xl mx-auto">
        <div
          className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-6 ${badgeClassName ? badgeClassName : "dark:bg-cyan-500/10 dark:text-cyan-400 dark:border-cyan-500/20 bg-cyan-100 text-cyan-700 border border-cyan-200"}`}
        >
          {data?.company || data?.documentType}
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          {data.title}
        </h1>

        {data?.mainImage ? (
          <div className="mb-8 flex justify-center">
            {typeof data.mainImage === "string" ? (
              <img
                src={data?.mainImage}
                alt={data.title}
                className="max-w-xl h-auto rounded-lg"
              />
            ) : (
              data.mainImage
            )}
          </div>
        ) : null}

        {data.overview ? (
          <p className={`text-xl mb-8 dark:text-slate-300 text-gray-600`}>
            {data.overview}
          </p>
        ) : null}

        {data?.documentMetaData ? (
          <div className="flex flex-wrap gap-4 mb-8 text-sm text-gray-600 dark:text-slate-400">
            <div>
              <span className="font-semibold">Version:</span>{" "}
              {data.documentMetaData.version}
            </div>
            <div>
              <span className="font-semibold">Date:</span>{" "}
              {data.documentMetaData.date}
            </div>
            <div>
              <span className="font-semibold">Author:</span>{" "}
              {data.documentMetaData.author}
            </div>
          </div>
        ) : null}

        {data.timeline && data.role ? (
          <div className="flex flex-wrap gap-6 mb-8">
            <div className="flex items-center gap-2">
              <Calendar
                size={18}
                className={iconClassName ? iconClassName : "text-cyan-400"}
              />
              <span className="dark:text-slate-400 text-gray-600">
                {data.timeline}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Tag
                size={18}
                className={iconClassName ? iconClassName : "text-cyan-400"}
              />
              <span className="dark:text-slate-400 text-gray-600">
                {data.role}
              </span>
            </div>
          </div>
        ) : null}

        {data?.tags ? (
          <div className="flex flex-wrap gap-2">
            {data?.tags.map((tag, _) => (
              <span
                key={tag}
                className={`px-3 py-1 rounded-full text-sm font-medium dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700 bg-white text-gray-700 border border-gray-200`}
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}

        {data?.projectLinks ? (
          <div className="flex flex-wrap gap-4 mt-8">
            {data.projectLinks.map((link, _) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${link?.className ? link.className : "from-blue-500 to-cyan-500"} rounded-lg font-bold hover:shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105`}
              >
                {link?.icon ? (
                  <link.icon
                    size={20}
                    className={
                      link?.iconClassName ? link.iconClassName : "text-cyan-400"
                    }
                  />
                ) : null}
                {link.title}
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  )
}

export default Hero
