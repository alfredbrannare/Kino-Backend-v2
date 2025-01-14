import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';
import path, { dirname } from 'path';

export default defineConfig({
  base: '/kino-bio-projekt/', // Replace 'my-vite-app' with your repository name
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/main.js'),
      },
    },
  },
  plugins: [
    handlebars({
      partialDirectory: path.resolve(__dirname, 'templates'),
      context: {
        siteTitle: 'Kino Bio Projekt',
        footerText: '© 2025 Kino Bio',
      },
    })
  ],
});
