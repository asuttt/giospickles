import { aboutPage } from "./documents/aboutPage";
import { contactPage } from "./documents/contactPage";
import { homePage } from "./documents/homePage";
import { servicesPage } from "./documents/servicesPage";
import { siteSettings } from "./documents/siteSettings";
import { sharedObjects } from "./objects/sharedObjects";

export const schemaTypes = [
  siteSettings,
  homePage,
  aboutPage,
  servicesPage,
  contactPage,
  ...sharedObjects,
];
