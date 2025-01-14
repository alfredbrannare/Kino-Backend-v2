import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
  base: '/kino-bio-projekt/', // Replace 'my-vite-app' with your repository name
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        aboutUs: './about-us.html',
        movies: './movies.html',
      },
    },
  },
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, '/templates'),
      context: {
        siteTitle: 'Kino Bio Projekt',
        footerText: '© 2025 Kino Bio',
      }
    })
  ],
});
