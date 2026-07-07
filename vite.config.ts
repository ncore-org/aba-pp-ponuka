import { defineConfig } from "@tanstack/react-start/config";
import tsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  server: {
    entry: "server",
    preset: "cloudflare",
  },
  vite: {
    plugins: [
      tailwindcss(),
      tsConfigPaths(),
    ],
  },
});
