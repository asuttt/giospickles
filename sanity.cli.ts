import { defineCliConfig } from "sanity/cli";
import path from "path";

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID || "34ie0b8l",
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
