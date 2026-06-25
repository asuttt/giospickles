import { defineField, defineType } from "sanity";
import { cmsContent } from "../../../src/cms/cmsContent";
import { documentInitialValue } from "../utils/initialValue";

export const contactPage = defineType({
  name: "contactPage",
  title: "Contact",
  type: "document",
  initialValue: documentInitialValue(cmsContent.contactPage),
  fields: [
    defineField({ name: "hero", title: "Hero", type: "heroSection" }),
    defineField({ name: "form", title: "Form Content", type: "contactFormSettings" }),
    defineField({ name: "formDelivery", title: "Form Delivery", type: "contactFormDelivery" }),
    defineField({ name: "contactPanel", title: "Contact Panel", type: "contactPanel" }),
  ],
  preview: {
    select: {
      title: "hero.eyebrow",
    },
    prepare: ({ title }) => ({ title: title || "Contact" }),
  },
});
