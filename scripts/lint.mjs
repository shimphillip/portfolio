import { LegacyESLint } from 'eslint/use-at-your-own-risk'

const eslint = new LegacyESLint({
  cwd: process.cwd(),
  extensions: ['.js', '.jsx', '.ts', '.tsx'],
  useEslintrc: false,
  overrideConfig: {
    extends: ['next/core-web-vitals'],
  },
})

const results = await eslint.lintFiles([
  'src/**/*.ts',
  'src/**/*.tsx',
  'mdx-components.tsx',
  'next.config.ts',
])
const formatter = await eslint.loadFormatter('stylish')
const output = formatter.format(results)

if (output) {
  process.stdout.write(output)
}

const errorCount = results.reduce((sum, result) => sum + result.errorCount, 0)
const warningCount = results.reduce(
  (sum, result) => sum + result.warningCount,
  0
)

if (errorCount > 0) {
  process.exitCode = 1
} else if (warningCount > 0) {
  process.exitCode = 0
}
