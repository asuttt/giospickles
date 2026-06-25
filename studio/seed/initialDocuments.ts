import { cmsContent } from "../../src/cms/cmsContent";
import { documentInitialValue } from "../schemaTypes/utils/initialValue";

export const initialDocuments = [
  cmsContent.siteSettings,
  cmsContent.homePage,
  cmsContent.aboutPage,
  cmsContent.servicesPage,
  cmsContent.contactPage,
].map((document) => ({
  _id: document._id,
  _type: document._type,
  ...documentInitialValue(document),
}));
