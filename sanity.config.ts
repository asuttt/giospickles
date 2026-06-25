import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./studio/schemaTypes";
import { structure } from "./studio/structure";

export default defineConfig({
  name: "gios-pickles",
  title: "Gio's Pickles",
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || "demo",
  dataset: process.env.SANITY_STUDIO_DATASET || "production",
  plugins: [structureTool({ structure })],
  schema: {
    types: schemaTypes,
  },
});
