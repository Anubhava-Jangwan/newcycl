import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),
      "next/head": path.resolve(__dirname, "src/next/Head.jsx"),
      "next/image": path.resolve(__dirname, "src/next/Image.jsx"),
      "next/link": path.resolve(__dirname, "src/next/Link.jsx"),
      "next/router": path.resolve(__dirname, "src/next/router.js"),
      "next/error": path.resolve(__dirname, "src/next/ErrorPage.jsx"),
      "next/dynamic": path.resolve(__dirname, "src/next/dynamic.jsx"),
      "next/script": path.resolve(__dirname, "src/next/Script.jsx"),
      "next/font/google": path.resolve(__dirname, "src/next/fontGoogle.js"),
    },
  },
});
