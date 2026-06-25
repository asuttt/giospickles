export type RichTextSpan = {
  _key: string;
  _type: "span";
  marks: string[];
  text: string;
};

export type RichTextBlock = {
  _key: string;
  _type: "block";
  children: RichTextSpan[];
  markDefs: Array<{
    _key: string;
    _type: string;
    href?: string;
  }>;
  level?: number;
  listItem?: "bullet" | "number";
  style: "normal";
};

export type RichTextValue = string | RichTextBlock[];

export type RichTextListItem = {
  text: RichTextValue;
};

function keyFromText(prefix: string, text: string) {
  let hash = 0;

  for (let index = 0; index < text.length; index += 1) {
    hash = (hash * 31 + text.charCodeAt(index)) >>> 0;
  }

  return `${prefix}-${hash.toString(36)}`;
}

export function toPortableText(text: string): RichTextBlock[] {
  return [
    {
      _key: keyFromText("block", text),
      _type: "block",
      children: [
        {
          _key: keyFromText("span", text),
          _type: "span",
          marks: [],
          text,
        },
      ],
      markDefs: [],
      style: "normal",
    },
  ];
}

export function richTextListItem(text: string): RichTextListItem {
  return { text: toPortableText(text) };
}

export function richTextToPlainText(value: RichTextValue) {
  if (typeof value === "string") {
    return value;
  }

  return value
    .map((block) => block.children.map((child) => child.text).join(""))
    .join(" ")
    .trim();
}
