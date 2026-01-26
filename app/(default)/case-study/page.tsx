import FeaturedProjects from "@/components/featured-projects";
import { projects } from "@/data/projects";

export default function CaseStudies() {

  return (
    <>
      <FeaturedProjects projects={projects} />
    </>
  )
}