import { LinkedIn } from "@/components/icons"
import { useRole } from "@/context/role-context"
import { ctaByRole } from "@/data/role-content"
import { Mail } from "lucide-react"

export function ContactCTA() {
  const { role } = useRole()
  const cta = ctaByRole[role]

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">{cta.heading}</h2>
        <p className="text-xl mb-12 dark:text-slate-300 text-gray-600 leading-normal">
          {cta.subtext}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:iam@keithnickas.com"
            className={`group flex items-center gap-2 px-8 py-4 bg-gradient-to-r ${cta.gradientFrom} ${cta.gradientTo} rounded-full font-bold text-white hover:shadow-lg ${cta.shadow} transition-all hover:scale-105`}
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
  )
}
