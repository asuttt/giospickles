import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./studio/schemaTypes";
import { structure } from "./studio/structure";

export default defineConfig({
  name: "tri-state-bookkeeping",
  title: "Tri-State Books",
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || "34ie0b8l",
  dataset: process.env.SANITY_STUDIO_DATASET || "production",
  plugins: [structureTool({ structure })],
  schema: {
    types: schemaTypes,
  },
});
