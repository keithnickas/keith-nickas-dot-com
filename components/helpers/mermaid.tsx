"use client"
import React, { useEffect, useRef, useState } from "react"

export interface MermaidProps {
  chart: string
  className?: string
  config?: any
  id?: string
}

const Mermaid: React.FC<MermaidProps> = ({
  chart,
  className = "",
  config = {},
}) => {
  const mermaidRef = useRef<HTMLDivElement>(null)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const renderDiagram = async () => {
      try {
        setIsLoading(true)
        setError(null)

        const defaultConfig = {
          startOnLoad: false,
          theme: 'default',
          securityLevel: 'loose',
          layoutEngine: 'elk',
          flowchart: {
            useMaxWidth: false,
            htmlLabels: true,
            defaultRenderer: 'flowchart-v2',
          },
          elk: {
            mergeEdges: true,
          },
        } as const;

        // Dynamically import mermaid (client-side only)
        const mermaidModule = await import('mermaid');
        const mermaid = mermaidModule.default || mermaidModule;

        // Load ELK and register it for mermaid (use bundled build)
        try {
          const elkModule = await import('elkjs/lib/elk.bundled.js');
          const ElkCtor = (elkModule as any)?.default ?? elkModule;
          // Register the constructor (mermaid expects the constructor/export, not an instance)
          ;(window as any).elk = ElkCtor;
        } catch (e) {
          console.warn('Failed to load elkjs (ELK layout engine):', e);
        }

        // Deep merge helper to preserve nested elk/flowchart keys (and keys using dot notation)
        const isObject = (v: any) => v && typeof v === 'object' && !Array.isArray(v);
        const deepMerge = (target: any, source: any) => {
          if (!isObject(source)) return target;
          Object.keys(source).forEach((key) => {
            const srcVal = source[key];
            const tgtVal = target[key];
            if (isObject(srcVal) && isObject(tgtVal)) {
              target[key] = deepMerge({ ...tgtVal }, srcVal);
            } else {
              target[key] = srcVal;
            }
          });
          return target;
        };

        // Merge user config into a cloned defaultConfig to avoid mutating the constant
        const mergedConfig = deepMerge(JSON.parse(JSON.stringify(defaultConfig)), config || {});

        // If chart contains an %%{init: ...}%% block, parse and merge it too (trusted source)
        const initMatch = chart.match(/%%\{init:\s*([\s\S]*?)\}%%/);
        if (initMatch) {
          try {
            // eslint-disable-next-line no-new-func
            const parsedInit = new Function(`return (${initMatch[1]})`)();
            deepMerge(mergedConfig, parsedInit);
          } catch (e) {
            console.warn('Failed to parse mermaid init block:', e);
          }
        }

        // Initialize mermaid with ELK requested
        mermaid.initialize(mergedConfig);

        if (mermaidRef.current) {
          // Clear previous content
          mermaidRef.current.innerHTML = ""

          // Generate unique ID for this diagram
          const id = `mermaid-${Math.random().toString(36).substring(2, 9)}`

          // Render the diagram
          const { svg } = await mermaid.render(id, chart)

          // Insert SVG into DOM
          mermaidRef.current.innerHTML = svg
        }

        setIsLoading(false)
      } catch (err) {
        console.error("Mermaid rendering error:", err)
        setError(
          err instanceof Error ? err.message : "Failed to render diagram"
        )
        setIsLoading(false)
      }
    }

    renderDiagram()
  }, [chart, config])

  if (error) {
    return (
      <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
        <p className="text-red-600 dark:text-red-400 text-sm">
          Failed to render diagram: {error}
        </p>
      </div>
    )
  }

  return (
    <div className={`mermaid-container ${className}`}>
      {isLoading && (
        <div className="flex items-center justify-center p-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500" />
        </div>
      )}
      <div
        ref={mermaidRef}
        className={`mermaid-diagram ${isLoading ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
      />
    </div>
  )
}

export default Mermaid
