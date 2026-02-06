import { BundledLanguage, BundledTheme } from "shiki"
import { transformToHighlight, transformToInlineHighlight } from "./helpers/highlight-code-to-html"
import { CopyButton } from "@/hooks/use-clipboard"

type CodeProps = {
  colorReplacements?: Record<string, Record<string, string>>
  cssOverrides?: string
  snippet: string
  title?: string
  theme?: BundledTheme
  useInline?: boolean
  type?: BundledLanguage
}

export async function Code({
  colorReplacements = { "github-dark-default": {"#0d1117": "rgba(15, 23, 42, var(--tw-bg-opacity, 1))"} },
  cssOverrides,
  snippet,
  title,
  type = "javascript",
  theme = "github-dark-default",
  useInline,
}: CodeProps) {
  const transformToInlineCode = await transformToInlineHighlight({snippet, type, theme})
  const transformToHighlightedCode = await transformToHighlight({snippet, type, theme, colorReplacements})
  
  const inlineCode = <span dangerouslySetInnerHTML={{ __html: transformToInlineCode }} />;
  const highlightedCode = <div dangerouslySetInnerHTML={{ __html: transformToHighlightedCode }} />;

  return useInline ? (
    inlineCode
  ) : (
    <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-slate-700">
            <div className="bg-slate-800 px-6 py-3 flex items-center justify-between">
              <span className="text-sm font-mono text-slate-300">{title || ""}</span>
              <CopyButton snippet={snippet} />
            </div>
            <pre className="bg-slate-900 p-6 overflow-x-auto max-h-[400px]">
              <code className="text-sm font-mono">{highlightedCode}</code>
            </pre>
          </div>
  )
}

export default Code
