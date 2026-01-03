import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    {
      enforce: "pre",
      ...mdx({
        providerImportSource: "@mdx-js/react",
        remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      }),
    },
    react({ include: /\.(jsx|js|mdx|md|tsx|ts)$/ }),
    visualizer({
      filename: "dist/stats.html",
      open: false,
      gzipSize: true,
    }),
  ],
  server: {
    proxy: {
      "/api": "http://localhost:4000",
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // React core
          if (id.includes('node_modules/react-dom') || id.includes('node_modules/react/')) {
            return 'react-vendor';
          }
          // Router
          if (id.includes('node_modules/react-router')) {
            return 'router';
          }
          // Animation library
          if (id.includes('node_modules/framer-motion')) {
            return 'framer';
          }
          // MDX and markdown
          if (id.includes('node_modules/@mdx-js')) {
            return 'mdx';
          }
          // Blog articles - split by language
          if (id.includes('/content/blog/pl/')) {
            return 'blog-pl';
          }
          if (id.includes('/content/blog/en/')) {
            return 'blog-en';
          }
          if (id.includes('/content/blog/nl/')) {
            return 'blog-nl';
          }
        },
      },
    },
  },
});
