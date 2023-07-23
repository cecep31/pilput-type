import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": {
      API_URL: "https://v2.pilput.dev",
      WS_URL: "wss://v2.pilput.dev",
      STORAGE_URL: "https://d42zd71vraxqs.cloudfront.net/",
      DOMAIN: "pilput.test",
      MAIN_URL: "http://pilput.test",
      DASH_URL: "http://dash.pilput.test",
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
