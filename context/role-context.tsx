"use client"

import { Role } from "@/components/types/roles"
import React, { useContext, useState, useEffect, useCallback, ReactNode } from "react"
import { ROLE_MAP, ROLE_STORAGE_KEY, RoleContext, ROLES } from "./role-context-config"

export function RoleProvider({ children }: { children: ReactNode }) {
  const [role, setRoleState] = useState<Role>("frontend")
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    // 1. Check URL param first (highest priority)
    const params = new URLSearchParams(window.location.search)
    const urlRole = params.get("role") || params.get("v")
    const mappedUrlRole = urlRole ? ROLE_MAP[urlRole.toLowerCase()] : null

    // 2. Fall back to localStorage
    const stored = localStorage.getItem(ROLE_STORAGE_KEY) as Role | null
    const validStored = stored && ROLES.find(r => r.id === stored) ? stored : null

    const resolved = mappedUrlRole || validStored || "frontend"
    setRoleState(resolved)

    // Persist to localStorage (URL param also updates the stored preference)
    if (resolved) {
      localStorage.setItem(ROLE_STORAGE_KEY, resolved)
    }

    setIsHydrated(true)
  }, [])

  const setRole = useCallback((newRole: Role) => {
    setRoleState(newRole)
    localStorage.setItem(ROLE_STORAGE_KEY, newRole)

    // Update URL param without navigation
    const url = new URL(window.location.href)
    url.searchParams.set("role", newRole)
    window.history.replaceState({}, "", url.toString())
  }, [])

  const roleConfig = ROLES.find(r => r.id === role) ?? ROLES[0]

  return (
    <RoleContext.Provider value={{ role, roleConfig, setRole, isHydrated }}>
      {children}
    </RoleContext.Provider>
  )
}

export function useRole() {
  return useContext(RoleContext)
}
