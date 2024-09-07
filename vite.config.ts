import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths'; // Import the plugin

export default defineConfig({
    plugins: [
      react(),
      svgr(),
      tsconfigPaths() // Added here
    ],
    base: '/IT-Bookstore/',
    resolve: {
      alias: {
        app: '/src/app',
        entities: '/src/entities',
        features: '/src/features',
        pages: '/src/pages',
        shared: '/src/shared',
        widgets: '/src/widgets',
      },
    },
    server: {
      port: 3000,
    },
  });
  