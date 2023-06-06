import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // optimizeDeps: {
  //   include: ["jquery", "popper.js"],
  // },
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
  },
  // esbuild: {
  //   jsxInject: `import React from 'react'`,
  // },
});
