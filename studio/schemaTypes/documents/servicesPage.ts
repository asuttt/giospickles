import { defineArrayMember, defineField, defineType } from "sanity";
import { cmsContent } from "../../../src/cms/cmsContent";
import { documentInitialValue } from "../utils/initialValue";

export const servicesPage = defineType({
  name: "servicesPage",
  title: "Services",
  type: "document",
  initialValue: documentInitialValue(cmsContent.servicesPage),
  fields: [
    defineField({ name: "hero", title: "Hero", type: "heroSection" }),
    defineField({ name: "supportSection", title: "Service Tier Intro", type: "sectionHeading" }),
    defineField({
      name: "serviceTiers",
      title: "Service Tiers",
      type: "array",
      of: [defineArrayMember({ type: "serviceTier" })],
    }),
    defineField({ name: "faqSection", title: "FAQ", type: "faqSection" }),
    defineField({ name: "cta", title: "Footer CTA", type: "ctaSection" }),
  ],
  preview: {
    select: {
      title: "hero.eyebrow",
    },
    prepare: ({ title }) => ({ title: title || "Services" }),
  },
});
