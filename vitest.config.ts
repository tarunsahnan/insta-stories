import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

console.log("path.resolve(__dirname,", path.resolve(__dirname, "./"));
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
    },
  },
});
