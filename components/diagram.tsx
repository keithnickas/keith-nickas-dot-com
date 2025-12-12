"use client"
import { MermaidDiagram } from "@lightenna/react-mermaid-diagram";

export default function Diagram(
  props: React.ComponentProps<typeof MermaidDiagram>
) {
  const { children, ...restProps } = props;
  return (
    <MermaidDiagram {...restProps}>{children}</MermaidDiagram>
  );
}
