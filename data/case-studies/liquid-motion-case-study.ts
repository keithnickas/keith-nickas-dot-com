import { Activity, Cpu, Gauge, Zap } from "lucide-react"

const caseStudy = {
  title: "Performance Engineering",
  company: "Internal",
  role: "Frontend Engineer",
  timeline: "Iterative optimizations (multiple phases)",
  tags: [
    "Performance",
    "Web Animation",
    "GPU Optimization",
    "Browser Rendering",
    "CSS/JS",
  ],
  overview:
    "Large blurred, animated visuals caused heavy main-thread work, stuttering frame rates, and high CPU usage. A series of targeted optimizations reduced traced running time from 217ms to 4.3ms and restored stable 60fps.",
  challenge: {
    title: "Main-thread calculations and expensive rasterization",
    content:
      "Animations were doing synchronous layout queries (getComputedStyle) in the frame loop, competing CSS/JS for the transform property, and forcing heavy rasterization for large blurs. This produced layout thrashing, frequent style recalculation, and high CPU costs.",
  },
  approach: {
    title: "Optimization Phases",
    steps: [
      {
        title: "Phase A: Eliminating Main-Thread Calculations",
        description:
          "Removed getComputedStyle from the animation loop, tracked state in JS variables, used element.style.translate for positions, and avoided synchronous reflows. Result: traced time reduced to ~195ms (DisplayList building still high).",
      },
      {
        title: "Phase B: Layer Separation & GPU Offloading",
        description:
          "Separated movement from pulse animations so movement could use composited transforms while pulse used CSS @keyframes/scale. Cached blurred blob as a static texture so the browser could move a cached texture rather than redrawing expensive blurs.",
      },
      {
        title: "Phase C: Style Scoping & Selector Efficiency",
        description:
          "Replaced expensive selectors (e.g. :has) with high-specificity ID selectors, applied contain: layout paint where appropriate, and scoped animation-related changes deeply in the DOM. Result: traced time dropped to ~74ms.",
      },
      {
        title: "Final Optimization: Independent Transform Properties",
        description:
          "Switched to independent transform properties (translate and scale) and used anim.commitStyles() for clean handoff. Eliminated animation jumps and memory leaks. Final traced time: 4.3ms (~98% improvement).",
      },
    ],
  },
  results: {
    title: "Measured Results",
    metrics: [
      {
        before: "217ms",
        after: "4.3ms",
        improvement: "98.0%",
        icon: Activity,
        label: "Traced Running Time",
      },
      {
        icon: Cpu,
        label: "Main Thread Impact",
        before: "Heavy",
        after: "Negligible",
        improvement: "—",
      },
      {
        icon: Gauge,
        label: "Frame Rate",
        before: "Stuttering (<30fps)",
        after: "Stable 60fps",
        improvement: "—",
      },
      {
        icon: Zap,
        label: "CPU Usage",
        before: "High (Battery drain)",
        after: "Low",
        improvement: "—",
      },
    ],
  },
  technicalHighlights: {
    title: "Engineering Takeaways",
    highlights: [
      "Isolate expensive pixels: Put blurs/gradients on child elements and move the parent so the GPU can treat heavy parts as static textures.",
      "Use independent properties: Prefer translate: x y / separate scale properties to avoid collisions between CSS and JS.",
      "Avoid global toggles: Scoping toggles deep in the DOM prevents full-page CSS re-matches during scroll.",
      "Hardware hints: Use will-change only for the specific properties being animated to help the compositor pre-allocate resources.",
    ],
  },
  learnings: [
    "Minimize synchronous layout queries in animation loops.",
    "Leverage GPU compositing by separating static-heavy visuals from moving containers.",
    "Prefer selector and style scoping to avoid expensive global style recalculation.",
    "Use modern independent transform properties and animation handoff APIs to avoid visual jumps and leaks.",
  ],
  impact: {
    title: "Impact Areas",
    areas: [
      {
        icon: Activity,
        title: "Runtime",
        description:
          "Traced running time decreased dramatically, enabling smoother animations.",
      },
      {
        icon: Cpu,
        title: "Main Thread",
        description:
          "Main-thread work moved off critical paths, reducing jank.",
      },
      {
        icon: Gauge,
        title: "Frame Rate",
        description:
          "Stuttering resolved; animations run consistently at 60fps.",
      },
      {
        icon: Zap,
        title: "Battery / CPU",
        description:
          "Lower CPU usage reduces power draw and improves device responsiveness.",
      },
    ],
  },
  bottlenecks: [
    {
      title: "Layout Thrashing",
      description:
        "getComputedStyle() inside animation loop forced synchronous reflows to calculate next position",
      severity: "Critical",
    },
    {
      title: "Property Conflict",
      description:
        "CSS and JavaScript both animating transform property simultaneously, forcing style cascade recalculation every frame",
      severity: "High",
    },
    {
      title: "Heavy Rasterization",
      description:
        "Large blurs (>50px) and mix-blend-mode forcing CPU redraw instead of GPU acceleration",
      severity: "High",
    },
  ],
  documentMetaData: {
    version: "1.0.0",
    date: new Date("2026-02-07").toISOString().slice(0, 10),
    author: "Keith Nickas",
  },
}

export default caseStudy
