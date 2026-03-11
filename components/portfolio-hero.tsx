"use client"
import { FadeSwap } from "@/components/fade-swap"
import RoleSelector from "@/components/role-selector"
import { useRole } from "@/context/role-context"
import { heroContent, pillarsByRole } from "@/data/role-content"
import { RandomColorBlobs } from "@/utils/color-blobs"
import { useState } from "react"

export function PortfolioHero() {
  const { role, roleConfig } = useRole()
  const hero = heroContent[role]
  const pillars = pillarsByRole[role]
  const [activePillar, setActivePillar] = useState<number | null>(null)

  return (
    <section id="hero" className="pt-28 pb-20 px-6 relative" style={{ contain: "layout paint" }}>
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="max-w-5xl md:h-[696px] md:w-full mx-auto text-center absolute pointer-events-none">
          <RandomColorBlobs />
        </div>

        {/* Role badge */}
        <div className="inline-block mb-5">
          <span className={`px-4 py-2 leading-normal rounded-full text-sm font-medium border ${roleConfig.badgeDark} ${roleConfig.badgeLight}`}>
            {roleConfig.badgeText}
          </span>
        </div>

        {/* Role Selector — first-class hero element */}
        <RoleSelector />

        {/* Headline */}
        <FadeSwap id={`headline-${role}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {hero.headline1}{" "}
            <span className={`bg-gradient-to-r ${hero.gradient1} bg-clip-text text-transparent`}>
              {hero.headline2}
            </span>
            {hero.headline3 && (
              <>
                ,<br />
                <span className={`bg-gradient-to-r ${hero.gradient3} bg-clip-text text-transparent`}>
                  {hero.headline3}
                </span>
              </>
            )}
          </h1>
        </FadeSwap>

        {/* Subtext */}
        <FadeSwap id={`sub-${role}`}>
          <p className="text-xl mb-12 max-w-3xl mx-auto dark:text-slate-300 text-gray-600">
            {hero.subtext}
          </p>
        </FadeSwap>

        {/* Pillars */}
        <FadeSwap id={`pillars-${role}`}>
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {pillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                onMouseEnter={() => setActivePillar(idx)}
                onMouseLeave={() => setActivePillar(null)}
                className={`group relative p-8 rounded-2xl transition-all duration-300 cursor-default
                  dark:bg-slate-800/50 dark:hover:bg-slate-800 bg-white hover:bg-gray-50
                  backdrop-blur-sm border dark:border-slate-700 ${roleConfig.borderDark}
                  border-gray-200 ${roleConfig.borderLight}`}
                style={{
                  transform: activePillar === idx ? "translateY(-8px)" : "translateY(0)",
                  boxShadow: activePillar === idx ? `0 20px 60px ${roleConfig.glowColor}` : "none",
                  minHeight: "260px",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
                }}
              >
                {pillar.icon && <div className="text-3xl mb-3">{pillar.icon}</div>}
                <h2 className={`text-xl font-bold mb-4 transition-colors group-hover:text-${roleConfig.textColor} dark:group-hover:text-${roleConfig.darkTextColor} group-hover:text-cyan-400`}>
                  {pillar.title}
                </h2>
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
        </FadeSwap>
      </div>
    </section>
  )
}