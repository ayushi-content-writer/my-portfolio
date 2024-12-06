import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      css: {
        additionalData: `@import "/node_modules/@fortawesome/fontawesome-free/css/all.min.css";`,
      },
    },
  },
});
