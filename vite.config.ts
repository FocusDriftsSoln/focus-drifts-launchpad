import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// Plain static Vite + React SPA. Builds to ./dist with an index.html,
// suitable for static hosting such as GitHub Pages.
export default defineConfig({
  // Relative base so the built assets resolve on GitHub Pages,
  // whether served from a custom domain or a /repo/ subpath.
  base: "./",
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  server: {
    host: "::",
    port: 8080,
    strictPort: true,
  },
  build: {
    outDir: "dist",
  },
});
