import { describe, expect, it } from "vitest";
import { navigationItems, pageContent, services } from "@/content/siteContent";

describe("site content scaffold", () => {
  it("keeps the requested public navigation order", () => {
    expect(navigationItems.map((item) => item.label)).toEqual(["Home", "About", "Services", "Contact"]);
  });

  it("keeps the service tiers aligned with the CMS content", () => {
    expect(services.map((service) => service.title)).toEqual([
      "Essential",
      "Growth",
      "Strategic",
    ]);
  });

  it("keeps the singleton page documents populated", () => {
    expect(pageContent.homePage.hero.heading).toBeTruthy();
    expect(pageContent.aboutPage.storySection.cards).toHaveLength(3);
    expect(pageContent.servicesPage.faqSection.items).toHaveLength(6);
    expect(pageContent.contactPage.form.messagePlaceholders.length).toBeGreaterThan(1);
  });
});
