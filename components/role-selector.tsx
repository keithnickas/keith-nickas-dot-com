"use client"

import { useRole } from "@/context/role-context"
import { ROLES as ROLES_DATA } from "@/context/role-context-config"
import { useEffect, useMemo, useState } from "react"
import { Role } from "@/components/types/roles"

export default function RoleSelector() {
  const { role: roleType, setRole, isHydrated } = useRole()
  const [mounted, setMounted] = useState(false)
  const ROLES = useMemo(() => ROLES_DATA, [])

  const roleButtons = ROLES.map((role) => {
    const isActive = roleType === role.id
    return (
      <button
        key={role.id}
        onClick={() => setRole(role.id as Role)}
        className={`
                group relative flex items-center gap-2.5 px-5 py-3 rounded-full font-semibold text-sm
                transition-all duration-300 border
                ${
                  isActive
                    ? `bg-gradient-to-r ${role.accentFrom} ${role.accentMid ? role.accentMid : ""} ${role.accentTo} text-black border-transparent shadow-lg scale-105`
                    : `dark:bg-slate-800/60 bg-white dark:border-slate-600 border-gray-200 dark:text-slate-300 text-gray-600
                     hover:scale-105 hover:border-slate-400 dark:hover:border-slate-400`
                }
              `}
        style={
          isActive ? { boxShadow: `0 8px 30px ${role.glowColor}` } : undefined
        }
        aria-pressed={isActive}
      >
        <span className="text-base leading-none">{role.icon}</span>
        <span>{role.shortLabel}</span>
        {isActive && (
          <span className="w-1.5 h-1.5 rounded-full bg-black/30 ml-0.5" />
        )}
      </button>
    )
  })
  const roleDescription = ROLES.map((role) => (
    <p
      key={role.id}
      className={`text-xs dark:text-slate-400 text-gray-500 transition-all duration-300 absolute ${
        roleType === role.id ? "opacity-100" : "opacity-0"
      }`}
    >
      {role.description}
    </p>
  ))

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || !isHydrated) {
    return (
      <div className="flex flex-wrap justify-center gap-3 mb-10 animate-pulse">
        {ROLES.map((r) => (
          <div
            key={r.id}
            className="h-12 w-36 rounded-full dark:bg-slate-800 bg-gray-200"
          />
        ))}
      </div>
    )
  }

  return (
    <div className="mb-10">
      <p className="text-sm font-medium dark:text-slate-400 text-gray-500 mb-4 tracking-wider uppercase">
        I'm hiring a&hellip;
      </p>
      <div className="flex flex-wrap justify-center gap-3">{roleButtons}</div>

      {/* Active role description */}
      <div className="mt-4 h-5 flex flex-column justify-center">{roleDescription}</div>
    </div>
  )
}
