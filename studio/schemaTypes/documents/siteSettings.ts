import { defineArrayMember, defineField, defineType } from "sanity";
import { cmsContent } from "../../../src/cms/cmsContent";
import { documentInitialValue } from "../utils/initialValue";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  initialValue: documentInitialValue(cmsContent.siteSettings),
  fields: [
    defineField({ name: "name", title: "Site Name", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "description", title: "Site Description", type: "text", rows: 3 }),
    defineField({ name: "phone", title: "Phone", type: "string" }),
    defineField({ name: "email", title: "Email", type: "email" }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({
      name: "navigation",
      title: "Navigation",
      type: "array",
      of: [defineArrayMember({ type: "navItem" })],
    }),
    defineField({
      name: "branding",
      title: "Branding",
      type: "object",
      fields: [
        defineField({ name: "primaryLogo", title: "Primary Logo", type: "brandImage" }),
        defineField({ name: "secondaryLogo", title: "Secondary Logo", type: "brandImage" }),
        defineField({ name: "favicon", title: "Favicon", type: "brandImage" }),
        defineField({ name: "ogPreview", title: "Social Preview Image", type: "brandImage" }),
      ],
    }),
    defineField({
      name: "footer",
      title: "Footer",
      type: "object",
      fields: [
        defineField({ name: "creditUrl", title: "Developer Link URL", type: "url" }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Site Settings" }),
  },
});
