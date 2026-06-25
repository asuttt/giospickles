import type { CmsContent } from "@/cms/cmsContent";
import { sanityClient } from "@/cms/sanityClient";

const singletonQuery = `{
  "siteSettings": *[_id == "siteSettings"][0]{
    ...,
    branding{
      primaryLogo{..., "imageUrl": image.asset->url},
      secondaryLogo{..., "imageUrl": image.asset->url},
      favicon{..., "imageUrl": image.asset->url},
      ogPreview{..., "imageUrl": image.asset->url}
    }
  },
  "homePage": *[_id == "homePage"][0],
  "aboutPage": *[_id == "aboutPage"][0]{
    ...,
    owner{
      ...,
      image{..., "imageUrl": image.asset->url}
    },
    certifications{
      ...,
      rows[]{
        ...,
        items[]{..., "logoUrl": logo.asset->url}
      }
    }
  },
  "servicesPage": *[_id == "servicesPage"][0],
  "contactPage": *[_id == "contactPage"][0]
}`;

const requiredDocuments = ["siteSettings", "homePage", "aboutPage", "servicesPage", "contactPage"] as const;

function assertCompleteContent(content: Partial<CmsContent>): asserts content is CmsContent {
  const missingDocuments = requiredDocuments.filter((documentName) => !content[documentName]);

  if (missingDocuments.length > 0) {
    throw new Error(`Missing Sanity singleton document(s): ${missingDocuments.join(", ")}`);
  }
}

export async function loadSanityContent() {
  const content = await sanityClient.fetch<Partial<CmsContent>>(singletonQuery);

  assertCompleteContent(content);

  return content;
}
