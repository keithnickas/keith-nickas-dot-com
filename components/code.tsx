"use client";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import json from "highlight.js/lib/languages/json";
import html from "highlight.js/lib/languages/xml";
import typescript from "highlight.js/lib/languages/typescript";
import xml from "highlight.js/lib/languages/xml";
import plaintext from "highlight.js/lib/languages/plaintext";
import nodeRepl from "highlight.js/lib/languages/node-repl";
import markdown from "highlight.js/lib/languages/markdown";
import "highlight.js/styles/tomorrow-night-bright.min.css";

type CodeProps = {
  snippet: string;
  title?: string;
  useInline?: boolean;
  type?: "json" | "javascript" | "html" | "typescript" | "xml" | "plaintext" | "node-repl" | "markdown";
};

export default function Code({ snippet, title, type = "javascript", useInline }: CodeProps) {
  const lang = { javascript, json, html, typescript, xml, plaintext, "node-repl": nodeRepl, markdown };

  hljs.registerLanguage(type, lang[type]);
  const highlightedCode = hljs.highlight(snippet, { language: type }).value;

  return useInline ? (
    <code className={`language-${type} wrap whitespace-pre-wrap font-mono text-sm`}>
      <span dangerouslySetInnerHTML={{ __html: highlightedCode }} />
    </code>
  ) : (
    <div className="relative bg-gray-900 max-w-4xl p-4 rounded-md border border-gray-700 mb-8">
      <div className="static text-white">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-400">{title || "Code:"}</span>
        </div>
      </div>
      <div className="relative overflow-x-auto bg-black border border-gray-700 h-96">
        <div className="flex justify-between items-center">
          <pre id="code">
            <code className={`language-${type}`}>
              <div dangerouslySetInnerHTML={{ __html: highlightedCode }} />
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}
