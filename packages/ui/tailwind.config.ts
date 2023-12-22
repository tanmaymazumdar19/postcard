import type { Config } from 'tailwindcss'
import sharedConfig from '@postcard/tailwind-config'

const config: Pick<Config, 'prefix' | 'presets' | 'content' | 'theme'> = {
  ...sharedConfig,
  content: ['./src/**/*.tsx', './app/**/*.tsx', ...sharedConfig.content],
  theme: {
    ...sharedConfig.theme,
  },
}

export default config
