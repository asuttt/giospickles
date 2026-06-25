import { defineField, defineType } from "sanity";
import { cmsContent } from "../../../src/cms/cmsContent";
import { documentInitialValue } from "../utils/initialValue";

export const aboutPage = defineType({
  name: "aboutPage",
  title: "About",
  type: "document",
  initialValue: documentInitialValue(cmsContent.aboutPage),
  fields: [
    defineField({ name: "hero", title: "Hero", type: "heroSection" }),
    defineField({ name: "owner", title: "Left Column: Owner Photo & Creds", type: "ownerProfile" }),
    defineField({ name: "meetNick", title: "Right Column: Meet the Owner", type: "meetNickSection" }),
    defineField({ name: "certifications", title: "Certification Logos", type: "certificationsSection" }),
    defineField({ name: "cta", title: "Footer CTA", type: "ctaSection" }),
  ],
  preview: {
    select: {
      title: "hero.eyebrow",
    },
    prepare: ({ title }) => ({ title: title || "About" }),
  },
});
