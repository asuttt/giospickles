import type { ReactNode } from "react";
import type { RichTextValue } from "@/cms/richText";
import RichText from "@/components/RichText";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: RichTextValue;
}

export default function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {description ? <RichText className="section-description" value={description} /> : null}
    </div>
  );
}
