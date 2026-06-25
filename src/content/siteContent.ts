import { cmsContent, type CmsContent } from "@/cms/cmsContent";
import { loadSanityContent } from "@/cms/loadSanityContent";
import { richTextToPlainText } from "@/cms/richText";

type CmsImage = {
  imageUrl?: string;
  logoUrl?: string;
};

export function resolveImageSource(image?: CmsImage) {
  return image?.imageUrl || image?.logoUrl || "";
}

function buildCertificationRows(content: CmsContent) {
  return content.aboutPage.certifications.rows.map((row) => ({
    label: row.label,
    type: row.type,
    items: row.items.map((item) => ({
      name: item.name,
      logo: resolveImageSource(item),
    })),
  }));
}

function buildServices(content: CmsContent) {
  return content.servicesPage.serviceTiers.map((tier) => ({
    title: tier.name,
    summary: richTextToPlainText(tier.bestFor),
  }));
}

function buildBrandAssets(content: CmsContent) {
  return {
    primaryLogo: resolveImageSource(content.siteSettings.branding.primaryLogo),
    secondaryLogo: resolveImageSource(content.siteSettings.branding.secondaryLogo),
    favicon: resolveImageSource(content.siteSettings.branding.favicon),
    ogPreview: resolveImageSource(content.siteSettings.branding.ogPreview),
  };
}

function buildSiteMeta(content: CmsContent) {
  return {
    name: content.siteSettings.name,
    description: content.siteSettings.description,
    phone: content.siteSettings.phone,
    email: content.siteSettings.email,
    location: content.siteSettings.location,
  };
}

function buildNavigationItems(content: CmsContent) {
  return content.siteSettings.navigation
    .filter((item) => item.isVisible)
    .map(({ href, label }) => ({ href, label }));
}

function withCodeOwnedRoutes(content: CmsContent): CmsContent {
  return {
    ...content,
    homePage: {
      ...content.homePage,
      hero: {
        ...content.homePage.hero,
        primaryCta: {
          ...content.homePage.hero.primaryCta,
          href: cmsContent.homePage.hero.primaryCta.href,
        },
        secondaryCta: {
          ...content.homePage.hero.secondaryCta,
          href: cmsContent.homePage.hero.secondaryCta.href,
        },
      },
      servicePreview: {
        ...content.homePage.servicePreview,
        comparisonHref: cmsContent.homePage.servicePreview.comparisonHref,
      },
      cta: {
        ...content.homePage.cta,
        buttonHref: cmsContent.homePage.cta.buttonHref,
      },
    },
    aboutPage: {
      ...content.aboutPage,
      cta: {
        ...content.aboutPage.cta,
        buttonHref: cmsContent.aboutPage.cta.buttonHref,
      },
    },
    servicesPage: {
      ...content.servicesPage,
      cta: {
        ...content.servicesPage.cta,
        buttonHref: cmsContent.servicesPage.cta.buttonHref,
      },
    },
  };
}

function setActiveContent(content: CmsContent) {
  const activeContent = withCodeOwnedRoutes(content);

  pageContent = activeContent;
  siteMeta = buildSiteMeta(activeContent);
  siteFooter = {
    ...cmsContent.siteSettings.footer,
    ...activeContent.siteSettings.footer,
  };
  navigationItems = buildNavigationItems(activeContent);
  brandAssets = buildBrandAssets(activeContent);
  certificationRows = buildCertificationRows(activeContent);
  businessProblems = activeContent.homePage.problems.items;
  testimonials = activeContent.homePage.testimonials.items;
  faqs = activeContent.servicesPage.faqSection.items;
  services = buildServices(activeContent);
}

export let pageContent = cmsContent;

export let siteMeta = buildSiteMeta(cmsContent);

export let siteFooter = cmsContent.siteSettings.footer;

export let navigationItems = buildNavigationItems(cmsContent);

export let brandAssets = buildBrandAssets(cmsContent);

export let certificationRows = buildCertificationRows(cmsContent);

export let businessProblems = cmsContent.homePage.problems.items;
export let testimonials = cmsContent.homePage.testimonials.items;
export let faqs = cmsContent.servicesPage.faqSection.items;
export let services = buildServices(cmsContent);

export async function initializeSiteContent() {
  setActiveContent(await loadSanityContent());
}
