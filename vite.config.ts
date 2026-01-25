import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
// import { TanStackRouterVite } from '@tanstack/router-src-plugin'

// biome-ignore lint/style/noDefaultExport: Vite requires default export
export default defineConfig({
  plugins: [
    react(),
    // TanStackRouterVite(), // Removing because the package is not in dependencies, only @tanstack/react-router is.
    // Wait, user listed "@tanstack/react-router" in dependencies.
    // Usually one needs the vite plugin for auto-route generation if that's the goal,
    // but the minimal strict setup might just usage manual routes or the generator.
    // The user snippet for package.json dependencies only listed "@tanstack/react-router".
    // I will stick to minimal.
  ],
});
