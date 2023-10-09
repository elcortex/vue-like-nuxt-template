import vue from '@vitejs/plugin-vue'
import TsConfigPaths from 'vite-tsconfig-paths'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig, splitVendorChunkPlugin } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            imports: [
                'vue',
                {
                    from: 'pinia',
                    imports: ['defineStore']
                }
            ],
            dirs: [
                './src/composables',
                './src/store'
            ],
            dts: true
        }),
        Components({
            dirs: ['./src/components'],
            dts: true
        }),
        TsConfigPaths(),
        splitVendorChunkPlugin()
    ],
    build: {
        outDir: "dist"
    }
})
