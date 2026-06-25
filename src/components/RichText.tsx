import type { ReactNode } from "react";
import type { RichTextBlock, RichTextValue } from "@/cms/richText";

type RichTextProps = {
  className?: string;
  inline?: boolean;
  value?: RichTextValue | null;
};

function isRichTextBlockArray(value: unknown): value is RichTextBlock[] {
  return Array.isArray(value) && value.every((block) => block && typeof block === "object" && "_type" in block);
}

function renderMarkedText(block: RichTextBlock) {
  return block.children.map((child) => {
    const markDefs = block.markDefs || [];

    return child.marks.reduce<ReactNode>((node, mark) => {
      const link = markDefs.find((definition) => definition._key === mark && definition._type === "link");

      if (mark === "strong") {
        return <strong key={`${child._key}-${mark}`}>{node}</strong>;
      }

      if (mark === "em") {
        return <em key={`${child._key}-${mark}`}>{node}</em>;
      }

      if (mark === "underline") {
        return <u key={`${child._key}-${mark}`}>{node}</u>;
      }

      if (mark === "strike-through") {
        return <s key={`${child._key}-${mark}`}>{node}</s>;
      }

      if (link?.href) {
        return (
          <a href={link.href} key={`${child._key}-${mark}`}>
            {node}
          </a>
        );
      }

      return node;
    }, child.text);
  });
}

export default function RichText({ className, inline = false, value }: RichTextProps) {
  const rootClassName = ["rich-text", className].filter(Boolean).join(" ");

  if (!value) {
    return null;
  }

  if (typeof value === "string") {
    return inline ? <>{value}</> : <p className={rootClassName}>{value}</p>;
  }

  if (!isRichTextBlockArray(value)) {
    return null;
  }

  if (inline) {
    return (
      <>
        {value.map((block, index) => (
          <span key={block._key}>
            {index > 0 ? <br /> : null}
            {renderMarkedText(block)}
          </span>
        ))}
      </>
    );
  }

  const nodes: ReactNode[] = [];
  let listBlocks: RichTextBlock[] = [];
  let listType: "bullet" | "number" | undefined;

  const flushList = () => {
    if (!listType || listBlocks.length === 0) {
      return;
    }

    const ListTag = listType === "number" ? "ol" : "ul";

    nodes.push(
      <ListTag key={`list-${listBlocks[0]._key}`}>
        {listBlocks.map((block) => (
          <li key={block._key}>{renderMarkedText(block)}</li>
        ))}
      </ListTag>,
    );
    listBlocks = [];
    listType = undefined;
  };

  value.forEach((block) => {
    if (block.listItem) {
      if (listType && listType !== block.listItem) {
        flushList();
      }

      listType = block.listItem;
      listBlocks.push(block);
      return;
    }

    flushList();
    nodes.push(<p key={block._key}>{renderMarkedText(block)}</p>);
  });

  flushList();

  return (
    <div className={rootClassName}>
      {nodes}
    </div>
  );
}
