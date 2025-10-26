import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "/my-portfolio-2025/", // 👈 REQUIRED for GitHub Pages
  server: {
    host: true,        // allows access via local IP
    port: 5174,        // optional: set port manually
  },
});
