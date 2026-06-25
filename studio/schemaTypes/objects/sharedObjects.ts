import { defineArrayMember, defineField, defineType } from "sanity";
import { richTextField } from "../utils/richTextField";

export const sharedObjects = [
  defineType({
    name: "buttonLink",
    title: "Button Link",
    type: "object",
    fields: [
      defineField({ name: "label", title: "Label", type: "string", validation: (Rule) => Rule.required() }),
      defineField({ name: "href", title: "Link", type: "string", hidden: true }),
    ],
  }),
  defineType({
    name: "navItem",
    title: "Navigation Item",
    type: "object",
    fields: [
      defineField({ name: "label", title: "Label", type: "string", validation: (Rule) => Rule.required() }),
      defineField({ name: "href", title: "Link", type: "string", validation: (Rule) => Rule.required() }),
      defineField({ name: "isVisible", title: "Visible", type: "boolean", initialValue: true }),
    ],
  }),
  defineType({
    name: "brandImage",
    title: "Brand Image",
    type: "object",
    fields: [
      defineField({ name: "image", title: " ", type: "image", options: { hotspot: true } }),
    ],
  }),
  defineType({
    name: "heroSection",
    title: "Hero Section",
    type: "object",
    fields: [
      defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
      defineField({ name: "heading", title: "Heading", type: "string", validation: (Rule) => Rule.required() }),
      richTextField("description", "Description"),
      defineField({
        name: "primaryCta",
        title: "Primary CTA",
        type: "buttonLink",
        hidden: ({ document }) => document?._type !== "homePage",
      }),
      defineField({
        name: "secondaryCta",
        title: "Secondary CTA",
        type: "buttonLink",
        hidden: ({ document }) => document?._type !== "homePage",
      }),
    ],
  }),
  defineType({
    name: "sectionHeading",
    title: "Section Heading",
    type: "object",
    fields: [
      defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
      defineField({ name: "heading", title: "Heading", type: "string", validation: (Rule) => Rule.required() }),
      richTextField("description", "Description"),
    ],
  }),
  defineType({
    name: "ctaSection",
    title: "CTA Section",
    type: "object",
    fields: [
      defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
      defineField({ name: "heading", title: "Heading", type: "string", validation: (Rule) => Rule.required() }),
      richTextField("description", "Description", { hidden: true }),
      defineField({ name: "buttonLabel", title: "Button Label", type: "string" }),
      defineField({ name: "buttonHref", title: "Button Link", type: "string", hidden: true }),
    ],
  }),
  defineType({
    name: "ledgerItem",
    title: "Hero Ledger Item",
    type: "object",
    fields: [
      defineField({ name: "label", title: "Label", type: "string", validation: (Rule) => Rule.required() }),
      defineField({ name: "detail", title: "Detail", type: "string" }),
      defineField({ name: "value", title: "Value", type: "string" }),
      defineField({ name: "width", title: "Bar Width", type: "number", validation: (Rule) => Rule.min(0).max(100) }),
    ],
  }),
  defineType({
    name: "problemSection",
    title: "Problems Section",
    type: "object",
    fields: [
      defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
      defineField({ name: "heading", title: "Heading", type: "string", validation: (Rule) => Rule.required() }),
      defineField({
        name: "items",
        title: "Problems",
        type: "array",
        of: [defineArrayMember({ type: "string" })],
      }),
    ],
  }),
  defineType({
    name: "testimonialItem",
    title: "Testimonial",
    type: "object",
    fields: [
      richTextField("quote", "Quote"),
      defineField({ name: "name", title: "Client Name", type: "string" }),
      defineField({ name: "role", title: "Client Role", type: "string" }),
    ],
  }),
  defineType({
    name: "testimonialSection",
    title: "Testimonials Section",
    type: "object",
    fields: [
      defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
      defineField({ name: "heading", title: "Heading", type: "string" }),
      defineField({
        name: "items",
        title: "Testimonials",
        type: "array",
        of: [defineArrayMember({ type: "testimonialItem" })],
      }),
    ],
  }),
  defineType({
    name: "servicePreviewTier",
    title: "Service Preview Tier",
    type: "object",
    fields: [
      defineField({ name: "name", title: "Name", type: "string", validation: (Rule) => Rule.required() }),
      richTextField("summary", "Summary"),
    ],
  }),
  defineType({
    name: "servicePreviewSection",
    title: "Services Preview",
    type: "object",
    fields: [
      defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
      defineField({ name: "heading", title: "Heading", type: "string" }),
      defineField({ name: "comparisonLabel", title: "Comparison Link Label", type: "string" }),
      defineField({ name: "comparisonHref", title: "Comparison Link", type: "string", hidden: true }),
      defineField({
        name: "tiers",
        title: "Preview Tiers",
        type: "array",
        of: [defineArrayMember({ type: "servicePreviewTier" })],
      }),
    ],
  }),
  defineType({
    name: "credentialHighlight",
    title: "Credential Highlight",
    type: "object",
    fields: [
      defineField({ name: "title", title: "Title", type: "string" }),
      defineField({ name: "tools", title: "Tools", type: "string" }),
    ],
  }),
  defineType({
    name: "credentialHighlightsSection",
    title: "Credential Highlights",
    type: "object",
    fields: [
      defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
      defineField({ name: "heading", title: "Heading", type: "string" }),
      defineField({
        name: "highlights",
        title: "Highlights",
        type: "array",
        of: [defineArrayMember({ type: "credentialHighlight" })],
      }),
    ],
  }),
  defineType({
    name: "statItem",
    title: "Stat",
    type: "object",
    fields: [
      defineField({ name: "value", title: "Value", type: "string" }),
      defineField({ name: "label", title: "Label", type: "string" }),
    ],
  }),
  defineType({
    name: "ownerProfile",
    title: "Owner Profile",
    type: "object",
    fields: [
      defineField({ name: "image", title: "Owner Photo", type: "brandImage" }),
      defineField({
        name: "facts",
        title: "Facts",
        type: "array",
        of: [defineArrayMember({ type: "statItem" })],
      }),
    ],
  }),
  defineType({
    name: "valueCard",
    title: "Value Card",
    type: "object",
    fields: [
      defineField({
        name: "icon",
        title: "Icon",
        type: "string",
        options: {
          list: [
            { title: "Badge Check", value: "badgeCheck" },
            { title: "Building", value: "building" },
            { title: "Map Pin", value: "mapPin" },
          ],
        },
      }),
      defineField({ name: "title", title: "Title", type: "string" }),
      richTextField("description", "Description"),
    ],
  }),
  defineType({
    name: "meetNickSection",
    title: "Meet Nick Section",
    type: "object",
    fields: [
      defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
      defineField({ name: "heading", title: "Heading", type: "string" }),
      richTextField("description", "Description"),
      defineField({
        name: "cards",
        title: "Cards",
        type: "array",
        of: [defineArrayMember({ type: "valueCard" })],
      }),
    ],
  }),
  defineType({
    name: "certificationLogoItem",
    title: "Certification Logo",
    type: "object",
    fields: [
      defineField({ name: "name", title: "Name", type: "string" }),
      defineField({ name: "logo", title: " ", type: "image" }),
    ],
  }),
  defineType({
    name: "certificationLogoRow",
    title: "Certification Logo Row",
    type: "object",
    fields: [
      defineField({ name: "label", title: "Label", type: "string" }),
      defineField({
        name: "type",
        title: "Type",
        type: "string",
        options: {
          list: [
            { title: "Accounting", value: "accounting" },
            { title: "Payroll", value: "payroll" },
          ],
        },
      }),
      defineField({
        name: "items",
        title: "Logos",
        type: "array",
        of: [defineArrayMember({ type: "certificationLogoItem" })],
      }),
    ],
  }),
  defineType({
    name: "certificationsSection",
    title: "Certifications Section",
    type: "object",
    fields: [
      defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
      defineField({ name: "heading", title: "Heading", type: "string" }),
      defineField({
        name: "rows",
        title: "Logo Rows",
        type: "array",
        of: [defineArrayMember({ type: "certificationLogoRow" })],
      }),
    ],
  }),
  defineType({
    name: "richTextListItem",
    title: "Rich Text List Item",
    type: "object",
    fields: [richTextField("text", "Text")],
  }),
  defineType({
    name: "serviceTier",
    title: "Service Tier",
    type: "object",
    fields: [
      defineField({ name: "name", title: "Name", type: "string", validation: (Rule) => Rule.required() }),
      richTextField("bestFor", "Best For"),
      defineField({ name: "badge", title: "Badge", type: "string" }),
      defineField({
        name: "includes",
        title: "Includes",
        type: "array",
        of: [defineArrayMember({ type: "richTextListItem" })],
      }),
      defineField({ name: "startingAt", title: "Starting At", type: "string" }),
    ],
  }),
  defineType({
    name: "faqItem",
    title: "FAQ Item",
    type: "object",
    fields: [
      defineField({ name: "question", title: "Question", type: "string" }),
      richTextField("answer", "Answer"),
    ],
  }),
  defineType({
    name: "faqSection",
    title: "FAQ Section",
    type: "object",
    fields: [
      defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
      defineField({ name: "heading", title: "Heading", type: "string" }),
      defineField({
        name: "items",
        title: "Questions",
        type: "array",
        of: [defineArrayMember({ type: "faqItem" })],
      }),
    ],
  }),
  defineType({
    name: "contactFormSettings",
    title: "Contact Form Content",
    type: "object",
    fields: [
      defineField({ name: "supportLabel", title: "Support Dropdown Label", type: "string" }),
      defineField({
        name: "supportOptions",
        title: "Support Options",
        type: "array",
        of: [defineArrayMember({ type: "string" })],
      }),
      defineField({
        name: "messagePlaceholders",
        title: "Message Placeholder Examples",
        type: "array",
        of: [defineArrayMember({ type: "string" })],
      }),
      defineField({ name: "submitLabel", title: "Submit Button Label", type: "string" }),
      defineField({ name: "reassurance", title: "Reassurance Line", type: "text", rows: 2 }),
    ],
  }),
  defineType({
    name: "contactFormDelivery",
    title: "Form Delivery",
    type: "object",
    fields: [
      defineField({ name: "subject", title: "Email Subject", type: "string" }),
      defineField({ name: "formspreeEndpoint", title: "Formspree Endpoint", type: "url" }),
    ],
  }),
  defineType({
    name: "contactMethod",
    title: "Contact Method",
    type: "object",
    fields: [
      defineField({
        name: "icon",
        title: "Icon",
        type: "string",
        options: {
          list: [
            { title: "Calendar", value: "calendar" },
            { title: "Mail", value: "mail" },
            { title: "Map Pin", value: "mapPin" },
            { title: "Phone", value: "phone" },
          ],
        },
      }),
      defineField({ name: "label", title: "Label", type: "string" }),
      defineField({ name: "value", title: "Value", type: "string" }),
      defineField({
        name: "hrefType",
        title: "Link Type",
        type: "string",
        options: {
          list: [
            { title: "Phone", value: "tel" },
            { title: "Email", value: "mailto" },
          ],
        },
      }),
    ],
  }),
  defineType({
    name: "contactPanel",
    title: "Contact Panel",
    type: "object",
    fields: [
      defineField({
        name: "methods",
        title: "Methods",
        type: "array",
        of: [defineArrayMember({ type: "contactMethod" })],
      }),
    ],
  }),
];
