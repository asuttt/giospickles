import { useEffect } from "react";
const baseDescription = "Pickle sandwiches, 50+ flavors, and local flavor in New Hope, Pennsylvania";

export function usePageMeta(_href: string | undefined, fallbackTitle: string, description = baseDescription) {
  useEffect(() => {
    document.title = `Gio's Pickles | ${fallbackTitle}`;

    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) {
      descriptionTag.setAttribute("content", description);
    }
  }, [description, fallbackTitle]);
}
