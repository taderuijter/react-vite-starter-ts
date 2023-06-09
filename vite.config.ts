import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: "jsdom",
  },
  server: {
    host: true,
    port: 3000,
  },
  define: {
    "process.env": {
      // Define your environment variables here
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    },
  },
});
