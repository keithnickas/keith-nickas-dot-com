export interface Project {
    title: string;
    company: string;
    description: string;
    challenge: string;
    solution: string;
    impact: string;
    tech: string[];
    color: string;
    href: string;
  }

export type ProjectsData = Project[] | never[] | undefined;

export const projects: ProjectsData = [
    {
      title: "Gap / BR Platform",
      company: "Gap, Inc.",
      description: "Multi-brand design system",
      challenge: "Fragmented UI across brands causing inconsistent experiences",
      solution:
        "Built unified design system serving Gap and Banana Republic teams",
      impact:
        "Millions of users, improved consistency, faster feature delivery",
      tech: ["React", "Next.js", "Design System", "TypeScript", "Performance"],
      color: "from-blue-500 to-cyan-500",
      href: "/case-study/gap",
    },
    {
      title: "Auth UX That Just Works",
      company: "Wristband",
      description: "Authentication UX",
      challenge: "Complex authentication flows causing UX friction",
      solution:
        "Redesigned onboarding and auth dashboards with testable patterns",
      impact: "Enhanced UX, improved reliability, reduced support tickets",
      tech: ["React", "Next.js", "Auth", "Testing", "UX Design"],
      color: "from-purple-500 to-pink-500",
      href: "/case-study/wristband",
    },
    {
      title: "Monolith to Modern SPA",
      company: "Deem, Inc.",
      description: "Travel booking platform",
      challenge: "Legacy travel booking system limiting innovation",
      solution:
        "Architected first React SPA for flight search and booking workflows",
      impact: "Reduced costs, improved performance, mentored global teams",
      tech: ["React", "SPA", "TDD", "Accessibility", "Mentorship"],
      color: "from-orange-500 to-red-500",
      href: "/case-study/deem",
    },
  ];
