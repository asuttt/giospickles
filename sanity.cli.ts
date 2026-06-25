import { defineCliConfig } from "sanity/cli";
import path from "path";

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID || "demo",
    dataset: process.env.SANITY_STUDIO_DATASET || "production",
  },
  vite: {
    resolve: {
      alias: {
        "@": path.resolve(process.cwd(), "src"),
      },
    },
  },
});
