#!/usr/bin/env node
import fs from 'fs/promises'
import { fileURLToPath } from 'url'
import path from 'path'

const cfgPath = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'next.config.js')

try {
  const text = await fs.readFile(cfgPath, 'utf8')
  const sourceRegex = /source:\s*['"]([^'"]+)['"]/g
  const paramRegex = /:\w+\(([^)]+)\)/g
  const errors = []
  let m
  while ((m = sourceRegex.exec(text)) !== null) {
    const src = m[1]
    let p
    while ((p = paramRegex.exec(src)) !== null) {
      const inner = p[1]
      if (inner.includes('\\')) {
        errors.push(`Found backslashes in pattern '${inner}' in source '${src}'`)
        continue
      }
      try {
        new RegExp(`^(${inner})$`)
      } catch (e) {
        errors.push(`Invalid regex '${inner}' in source '${src}': ${e.message}`)
      }
    }
  }

  if (errors.length) {
    console.error('Redirect validation failed:')
    for (const e of errors) console.error(' -', e)
    process.exit(1)
  }

  console.log('Redirect validation passed')
} catch (err) {
  console.error('Failed to read next.config.js:', err.message)
  process.exit(2)
}
