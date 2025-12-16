import { BundledLanguage, BundledTheme } from "shiki"
import { transformToHighlight, transformToInlineHighlight } from "./helpers/highlight-code-to-html"

type CodeProps = {
  cssOverrides?: string
  snippet: string
  title?: string
  theme?: BundledTheme
  useInline?: boolean
  type?: BundledLanguage
}

export async function Code({
  cssOverrides,
  snippet,
  title,
  type = "javascript",
  theme = "github-dark-default",
  useInline,
}: CodeProps) {
  const transformToInlineCode = await transformToInlineHighlight(snippet, type, theme)
  const transformToHighlightedCode = await transformToHighlight(snippet, type, theme) 
  
  const inlineCode = <span dangerouslySetInnerHTML={{ __html: transformToInlineCode }} />;
  const highlightedCode = <div dangerouslySetInnerHTML={{ __html: transformToHighlightedCode }} />;

  return useInline ? (
    inlineCode
  ) : (
    <div className={`relative bg-black w-full md:max-w-4xl p-4 rounded-md border border-gray-700 mb-8 ${cssOverrides ?? ''}`}>
      <div className="static text-white">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-400">{title || "Code:"}</span>
        </div>
      </div>
      <div className="relative overflow-x-auto bg-[#0d1117] border border-gray-700 h-96">
        <div className="flex justify-between items-center">
          <pre id="code">
            <code className={`language-${type}`}>
              {highlightedCode}
            </code>
          </pre>
        </div>
      </div>
    </div>
  )
}

export default Code
