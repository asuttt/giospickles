import type { StructureResolver } from "sanity/structure";

const singletonItems = [
  { id: "siteSettings", title: "Site Settings", schemaType: "siteSettings" },
  { href: "/", id: "homePage", title: "Home", schemaType: "homePage" },
  { href: "/about", id: "aboutPage", title: "About", schemaType: "aboutPage" },
  { href: "/services", id: "servicesPage", title: "Menu", schemaType: "servicesPage" },
  { href: "/contact", id: "contactPage", title: "Contact", schemaType: "contactPage" },
];

type NavigationLabel = {
  href?: string;
  label?: string;
};

async function loadNavigationLabels(context: Parameters<StructureResolver>[1]) {
  try {
    const navigation = await context
      .getClient({ apiVersion: "2026-02-23" })
      .fetch<NavigationLabel[]>(
        `coalesce(*[_id == "drafts.siteSettings"][0].navigation, *[_id == "siteSettings"][0].navigation)[]{href, label}`,
      );

    return new Map((navigation || []).map((item) => [item.href, item.label]));
  } catch {
    return new Map<string | undefined, string | undefined>();
  }
}

export const structure: StructureResolver = async (S, context) => {
  const navigationLabels = await loadNavigationLabels(context);

  return S.list()
    .title("Gio's Pickles Content")
    .items(
      singletonItems.map((item) => {
        const title = ("href" in item && navigationLabels.get(item.href)) || item.title;

        return S.listItem()
          .id(item.id)
          .title(title)
          .child(S.document().title(title).schemaType(item.schemaType).documentId(item.id));
      }),
    );
};
