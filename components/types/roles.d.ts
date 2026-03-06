export type Role = "frontend" | "platform" | "em" | "sa"

export interface RoleConfig {
  id: Role
  label: string
  shortLabel: string
  description: string
  icon: string
  accentFrom: string
  accentTo: string
  accentMid?: string
  badgeText: string
  badgeDark: string
  badgeLight: string
  borderDark: string
  borderLight: string
  glowColor: string
  heroGradient: string
  heroGradient2: string
  textColor?: string
  darkTextColor?: string
}

export interface RoleContextValue {
  role: Role
  roleConfig: RoleConfig
  setRole: (role: Role) => void
  isHydrated: boolean
}
