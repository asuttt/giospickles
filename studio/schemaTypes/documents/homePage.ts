import { defineArrayMember, defineField, defineType } from "sanity";
import { cmsContent } from "../../../src/cms/cmsContent";
import { documentInitialValue } from "../utils/initialValue";

export const homePage = defineType({
  name: "homePage",
  title: "Home",
  type: "document",
  initialValue: documentInitialValue(cmsContent.homePage),
  fields: [
    defineField({ name: "hero", title: "Hero", type: "heroSection" }),
    defineField({
      name: "heroLedger",
      title: "Hero Ledger Graphic",
      type: "array",
      of: [defineArrayMember({ type: "ledgerItem" })],
    }),
    defineField({ name: "problems", title: "Subsection 1", type: "problemSection" }),
    defineField({ name: "testimonials", title: "Subsection 2", type: "testimonialSection" }),
    defineField({ name: "servicePreview", title: "Subsection 3", type: "servicePreviewSection" }),
    defineField({ name: "credentials", title: "Subsection 4", type: "credentialHighlightsSection" }),
    defineField({ name: "cta", title: "Footer CTA", type: "ctaSection" }),
  ],
  preview: {
    prepare: () => ({ title: "Home" }),
  },
});
