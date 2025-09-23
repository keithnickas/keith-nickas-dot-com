import { ResumeWorkExperience } from "@/components/types/resume-types";

export const resumeData: ResumeWorkExperience = {
  workExperience: [
    {
      position: {
        title: "Senior Software Engineer – Full Stack & Brand Technical Lead",
        company: "Motion Recruitment Partners at Gap, Inc.",
        location: "San Francisco, CA",
        startDate: "March 2021",
        endDate: "August 2025",
        logo: "gap",
        logoWidth: 416,
        logoHeight: 118,
      },
      skills: [
        "Frameworks & Utils: React.js, Next.JS, TypeScript, Node.js, CSS-in-JS, Tailwind and PostCSS",
        "Backend & Architecture: API Design, Microservices, TDD",
        "Cloud: Docker, Azure, Secret Management (AKS, Vault)",
        "CI/CD: GitHub/Actions, Jenkins",
        "Leadership: Team Management, Mentorship, Best Practices, Design Systems",
        "PM: Sprint Planning/Reviews, Epic/Story Development, Budget Planning, Resource Allocation",
        "Collaboration: Stakeholder Communication, Code Reviews, Code Pairing, POCs",
        "Compliance: W3C/a11y Accessibility Standards",
      ],
      summary: [
        "My journey is built on efficiency, innovation, and collaboration. Over time, I've delivered a 19.375% improvement across multiple areas of development. By leading sprint planning sessions, I reduced project turnaround time by 20%. Translating business requirements into clear, actionable tasks helped lower development costs by 15%. A focus on code quality drove a 30% drop in post-deployment issues.",
        "I worked closely with brand leaders to help increase satisfaction scores by utilizing planning, creating predictability, and improve accuracy with an overall experience improvement of 16.6667%, making delivery smoother and more predictable. Acting as a bridge between teams, I strengthened collaboration by 15% and helped raise developer proficiency by 20%.",
        "I also took time to mentor developers by refining processes and exploring new technologies that delivered measurable results. Using this approach led to a 20% increase in brand technology adoption and helped position the teams to be both more effective and more adaptable.",
      ],
      keyAchievements: [
        "Leading sprint planning sessions, facilitating discussions to prioritize tasks and allocate resources effectively, resulting in a 20% reduction in project turnaround time.",
        "Spearheading story writing efforts, translating business requirements into actionable development tasks, leading to a 15% reduction in development costs.",
        "Conducting technical reviews to ensure adherence to best practices, maintain code quality, and mitigate risks, resulting in a 30% reduction in post-deployment issues.",
        "Collaborating closely with brand leaders to understand their vision and translate it into technical solutions, resulting in a 25% increase in brand satisfaction scores.",
        "Playing a pivotal role in project planning, defining project scopes, timelines, and deliverables, leading to a 10% improvement in project delivery accuracy.",
        "Implementing process planning strategies to streamline workflows and optimize development processes, resulting in a 20% increase in team productivity.",
        "Acting as a key liaison between the development team and brand stakeholders, fostering clear communication and alignment of objectives, resulting in a 15% increase in cross-functional collaboration effectiveness.",
        "Leveraging expertise in Full Stack development to provide hands-on technical leadership and mentorship to junior developers, contributing to a 20% increase in developer proficiency.",
        "Continuously evaluating emerging technologies and trends to drive innovation and enhance brand experiences, resulting in a 20% improvement in brand technology adoption rate",
      ],
    },
  ],
  highlights: [
    {
      position: {
        title: "Senior Software Engineer",
        company: "Deem, Inc.",
        location: "Oakland, CA",
        startDate: "July 2014",
        endDate: "May 2020",
        logo: "deem",
      },
      summary: [""],
      keyAchievements: [
        "Led cross-functional teams to analyze requirements and implement solutions",
        "Developed flight seatmap using React and Redux",
        "Trained and mentored junior developers",
        "Diagnosed and resolved system performance issues",
      ],
      skills: [],
      iconPosition: "left",
      imageContent: {
        alt: "Deem website screenshot. Caption: Finally, it's easier to travel anywhere.",
        width: 384,
        height: 330,
        position: "right",
      },
    },
    {
      position: {
        title: "Software Engineer",
        company: "Digistrive, Inc.",
        location: "Atlanta, GA",
        startDate: "June 2013",
        endDate: "July 2014",
        logo: "digistrive",
      },
      summary: [""],
      keyAchievements: [
        "Led transfer of Digistrive business logic and data processes when acquired by Deem, Inc.",
        "Restructured JavaScript modules, saving time on bug resolution",
        "Reduced data bandwidth consumption and response time",
        "Improved user behavior research and content visibility",
      ],
      skills: [],
      iconPosition: "left",
      imageContent: {
        alt: "Digistrive logo.",
        width: 384,
        height: 330,
        position: "left",
      },
    }
  ]
};