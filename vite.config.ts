import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sitemap from "vite-plugin-sitemap";
import viteCompression from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: "https://portfoliyo.com", // Replace with real URL later
      dynamicRoutes: [
        "/",
        "/about",
        "/projects",
        "/ai-projects",
        "/machine-learning-projects",
        "/blog",
        "/contact",
      ],
    }),
    viteCompression({
      algorithm: "gzip",
      ext: ".gz",
    }),
    viteCompression({
      algorithm: "brotliCompress",
      ext: ".br",
    }),
  ],
});
