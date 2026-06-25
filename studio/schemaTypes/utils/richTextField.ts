import { defineArrayMember, defineField } from "sanity";

type RichTextFieldOptions = {
  hidden?: boolean;
};

export function richTextField(name = "body", title = "Body", options: RichTextFieldOptions = {}) {
  return defineField({
    name,
    title,
    type: "array",
    of: [
      defineArrayMember({
        type: "block",
        styles: [{ title: "Normal", value: "normal" }],
        lists: [
          { title: "Bullet", value: "bullet" },
          { title: "Number", value: "number" },
        ],
        marks: {
          decorators: [
            { title: "Bold", value: "strong" },
            { title: "Italic", value: "em" },
            { title: "Underline", value: "underline" },
            { title: "Strike", value: "strike-through" },
          ],
          annotations: [
            defineArrayMember({
              name: "link",
              title: "Link",
              type: "object",
              fields: [
                defineField({
                  name: "href",
                  title: "URL",
                  type: "url",
                  validation: (Rule) => Rule.required(),
                }),
              ],
            }),
          ],
        },
      }),
    ],
    ...options,
  });
}
