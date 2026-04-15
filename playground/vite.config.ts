import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    alias: {
      '@andresclua/sliderkit': resolve(__dirname, '../packages/core/src/index.ts'),
      '@andresclua/sliderkit-plugins': resolve(__dirname, '../packages/plugins/src/index.ts'),
      '@andresclua/sliderkit-effects': resolve(__dirname, '../packages/effects/src/index.ts'),
      '@andresclua/sliderkit-webgl': resolve(__dirname, '../packages/webgl/src/index.ts'),
    },
  },
})
