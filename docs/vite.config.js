import { defineConfig } from 'vite'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
import unocss from 'unocss/vite'
import { presetUno, presetAttributify } from 'unocss'
import unocssConfig from './unocss.config';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
  },
  plugins: [
    unocss({
      presets: [
        presetUno(),
        presetAttributify()
      ],
      ...unocssConfig
    })
  ]
})
