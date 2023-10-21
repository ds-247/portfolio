import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// import virtual from "@rollup/plugin-virtual";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // virtual({
    //   "**/*.glb": "", // Handle GLB files as virtual modules
    // }),
  ],
  base: "/portfolio/",

  build: {
    // ... other build options ...

    rollupOptions: {
      // ... other Rollup options ...

      output: {
        assetsInclude: ["**/*.glb"],
      },
    },
  },
});
