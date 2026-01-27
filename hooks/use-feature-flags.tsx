"use client"
import { useContext } from "react"
import { FeatureFlagsContext } from "../context/feature-flags"

export function useFeatureFlags() {
  return useContext(FeatureFlagsContext)
}
