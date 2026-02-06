"use client"
import Mermaid from "@/components/helpers/mermaid";

export default function Diagram(
  props: React.ComponentProps<typeof Mermaid>,
) { 
  return <Mermaid {...props} />;
}
