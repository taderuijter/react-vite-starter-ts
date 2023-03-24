import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import istanbul from "vite-plugin-istanbul";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    istanbul({
      cypress: true,
      requireEnv: false,
    }),
    tsconfigPaths(),
  ],
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
