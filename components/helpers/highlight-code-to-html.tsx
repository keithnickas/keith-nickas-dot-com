import { transformerNotationHighlight } from "@shikijs/transformers"
import { codeToHtml, BundledLanguage, BundledTheme } from "shiki"

export const transformToHighlight = async ({
  snippet,
  type,
  theme,
  colorReplacements,
}: {
  snippet: string
  type: BundledLanguage
  theme: BundledTheme
  colorReplacements?: Record<string, Record<string, string>>
}) =>
  await codeToHtml(snippet, {
    lang: type,
    theme,
    colorReplacements,
  }).then((res) => res)

export const transformToInlineHighlight = async ({
  snippet,
  type,
  theme,
}: {
  snippet: string
  type: BundledLanguage
  theme: BundledTheme
}) =>
  await codeToHtml(`${snippet}// [!code highlight]`, {
    lang: type,
    theme,
    transformers: [transformerNotationHighlight({ classActivePre: "inline" })],
  }).then((res) => res)
