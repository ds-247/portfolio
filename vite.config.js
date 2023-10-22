import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [
    react(),
    // virtual({
    //   "**/*.glb": "", // Handle GLB files as virtual modules
    // }),
  ],
  base: "/portfolio/",

  build: {
    rollupOptions: {
      output: {
        assetsInclude: ["**/*.glb"],
      },
    },
  },
});
