import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from 'vite-plugin-svgr';
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@app": path.resolve(__dirname, "./src/app"),
      "@shared": path.resolve(__dirname, "./src/shared"),
      "@utils": path.resolve(__dirname, "./src/shared/utils"),
      "@assets": path.resolve(__dirname, "./src/app/assets"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@widgets": path.resolve(__dirname, "./src/widgets"),
      "@feature": path.resolve(__dirname, "./src/feature"),
      "@entities": path.resolve(__dirname, "./src/entities"),
      "@shadcn": path.resolve(__dirname, "./src/shared/shadcn"),
    },
  },
});
