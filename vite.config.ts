import { reactRouter } from '@react-router/dev/vite';
import tailwindcss from '@tailwindcss/vite';
// import react from '@vitejs/plugin-react';
import path from 'path';
import { reactRouterDevTools } from 'react-router-devtools';
import { defineConfig } from 'vite';
import { chunkSplitPlugin } from 'vite-plugin-chunk-split';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { VitePWA } from 'vite-plugin-pwa';
import tsconfigPaths from 'vite-tsconfig-paths';

import { visualizer } from 'rollup-plugin-visualizer';
import viteCompression from 'vite-plugin-compression';
import devtoolsJson from 'vite-plugin-devtools-json';
import Inspect from 'vite-plugin-inspect';

const isDev = process.env.NODE_ENV === 'development';

// https://vite.dev/config/
export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1600,
    outDir: 'build',
    minify: 'terser',
    manifest: true,
    sourcemap: false,
    reportCompressedSize: true,
    rollupOptions: {
      output: {
        entryFileNames: 'js/[name].js',
        chunkFileNames: 'js/[name].js',
        assetFileNames: 'assets/[name].[ext]',
        manualChunks(id) {
          // if (id.includes('src/constants/') || id.includes('src/utils/')) {
          //   return 'shared';
          // }
          if (id.includes('node_modules')) {
            const modulePath = id.split('node_modules/')[1];
            const topLevelFolder = modulePath.split('/')[0];
            if (topLevelFolder !== '.pnpm') {
              return topLevelFolder;
            }
            const scopedPackageName = modulePath.split('/')[1];
            const chunkName =
              scopedPackageName.split('@')[
                scopedPackageName.startsWith('@') ? 1 : 0
              ];
            return chunkName;
          }
        },
      },
    },
  },
  optimizeDeps: {
    force: true,
    // esbuildOptions: {
    //   loader: {
    //     '.ts': 'tsx',
    //   },
    // },
    rolldownOptions: {
      optimization: {},
      treeshake: true,
      moduleTypes: { ts: 'ts', tsx: 'tsx' },
    },
    exclude: [''],
  },
  plugins: [
    // react({
    //   babel: {
    //     plugins: [['babel-plugin-react-compiler']],
    //   },
    //   reactRefreshHost: 'http://localhost:5173',
    //   jsxRuntime: 'automatic',
    //   // jsxImportSource: "react",
    // }),
    chunkSplitPlugin({
      strategy: 'single-vendor',
      customChunk: (args) => {
        let { file } = args;
        if (file.startsWith('app/')) {
          file = file.substring(4);
          file = file.replace(/\.[^.$]+$/, '');
          return file;
        }
        return null;
      },
    }),
    Inspect({
      dev: isDev,
      // build: true,
      // outputDir: '.vite-inspect',
      // open: true,
    }),
    reactRouterDevTools({
      includeInProd: {
        devTools: false,
        server: true,
      },
    }),
    tailwindcss(),
    reactRouter(),
    tsconfigPaths(),
    VitePWA({
      registerType: 'autoUpdate',
      /* other options */
      /* enable sw on development */
      devOptions: {
        enabled: true,
        /* other options */
      },
    }),
    devtoolsJson({ uuid: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b' }),
    ViteImageOptimizer(),
    visualizer({
      open: true,
      filename: 'stats.html',
      template: 'network',
    }), // Generates a visual report
    viteCompression({ deleteOriginFile: false }), // Compresses the build files
  ],
  // ssr: {
  //   noExternal: [/odometer/],
  // },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './app'),
    },
  },
});
