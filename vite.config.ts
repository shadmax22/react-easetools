import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: {
        index: "src/index.ts",
      },
      name: "react-easetools", // Replace with your library name
    },
    rollupOptions: {
      // Make sure to externalize React and ReactDOM
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        format: "umd", // Universal Module Definition (UMD)
      },
    },
    sourcemap: true,
  },
  plugins: [
    libInjectCss(),
    react(),
    dts({
      // plugin options
      include: ["src/**/*.ts", "src/**/*.tsx"], // Include both .ts and .tsx files
      exclude: ["**/*.spec.ts"], // Paths to exclude
      outDir: "dist", // Output directory for declaration files
    }),
  ],
});
