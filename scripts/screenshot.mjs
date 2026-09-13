import { execFileSync } from 'node:child_process'
import { mkdirSync, rmSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const url = process.argv[2]
if (!url) throw new Error('Usage: npm run screenshot -- <verified-live-url>')

const projectRoot = fileURLToPath(new URL('../', import.meta.url))
const outputDir = join(projectRoot, 'outreach', 'screenshots')
const pngPath = join(outputDir, 'landing.png')
const jpgPath = join(outputDir, 'landing.jpg')
mkdirSync(outputDir, { recursive: true })
rmSync(pngPath, { force: true })
rmSync(jpgPath, { force: true })

execFileSync('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', [
  '--headless', '--disable-gpu', '--hide-scrollbars', '--run-all-compositor-stages-before-draw', '--virtual-time-budget=5000',
  `--screenshot=${pngPath}`, '--window-size=1440,1000', url,
], { stdio: 'inherit' })
execFileSync('/usr/bin/sips', ['-s', 'format', 'jpeg', '-s', 'formatOptions', '85', pngPath, '--out', jpgPath], { stdio: 'inherit' })
rmSync(pngPath, { force: true })
console.log(`Screenshot saved to ${jpgPath}`)
