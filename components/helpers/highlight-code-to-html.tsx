import { transformerNotationHighlight } from "@shikijs/transformers"
import { codeToHtml, BundledLanguage, BundledTheme } from "shiki"

export const transformToHighlight = async (
  snippet: string,
  type: BundledLanguage,
  theme: BundledTheme
) =>
  await codeToHtml(snippet, {
    lang: type,
    theme,
  }).then((res) => res)

export const transformToInlineHighlight = async (
  snippet: string,
  type: BundledLanguage,
  theme: BundledTheme
) =>
  await codeToHtml(`${snippet}// [!code highlight]`, {
    lang: type,
    theme,
    transformers: [transformerNotationHighlight({ classActivePre: "inline" })],
  }).then((res) => res)
