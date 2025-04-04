import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import { VitePWA } from "vite-plugin-pwa";

const PWAConfig = {
  includeAssets: ["favicon.ico", "robots.txt"],
  manifest: {
    short_name: "Veronika Kolesnikova | Portfolio",
    name: "Veronika Kolesnikova | Portfolio",
    description: `Welcome to the portfolio website of Veronika Kolesnikova, a dedicated software engineer passionate about programming. 
      I am excited to share my journey with you!`,
    icons: [
      {
        src: "favicon.ico",
        sizes: "64x64 32x32 24x24 16x16",
        type: "image/x-icon",
      },
      {
        src: "logo192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    start_url: ".",
    theme_color: "#000000",
    background_color: "#ffffff",
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes("node_modules")) {
            if (id.includes("three")) return "three";
            if (id.includes("react")) return "react";
            return "vendor";
          }
        },
      },
    },
  },
  plugins: [react(), VitePWA(PWAConfig), visualizer()],
  server: {
    port: 3000,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./tests/setup.ts",
  },
});
