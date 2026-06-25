import { richTextListItem, toPortableText as rt } from "./richText";

export const cmsContent = {
  siteSettings: {
    _id: "siteSettings",
    _type: "siteSettings",
    name: "Giovanni's DILLicious Pickles",
    description: "Pickle sandwiches, flavor-packed snacks, catering, and local crunch in New Hope",
    phone: "(215) 478-8115",
    email: "giospickles@gmail.com",
    location: "1270 S Main St, New Hope, PA 18938",
    navigation: [
      { label: "Home", href: "/", isVisible: true },
      { label: "About", href: "/about", isVisible: true },
      { label: "Services", href: "/services", isVisible: true },
      { label: "Contact", href: "/contact", isVisible: true },
    ],
    branding: {
      primaryLogo: {},
      secondaryLogo: {},
      favicon: {},
      ogPreview: {},
    },
    footer: {
      copyrightName: "Giovanni's DILLicious Pickles, Inc.",
      creditPrefix: "Designed and deployed by",
      creditName: "Arseni Sutton",
      creditUrl: "https://tryshipyard.vercel.app",
    },
  },
  homePage: {
    _id: "homePage",
    _type: "homePage",
    title: "Home",
    hero: {
      eyebrow: "New Hope's pickle spot",
      heading: "Pickle sandwiches, 50+ flavors, and a whole lot of crunch",
      description: rt("A playful fast-casual shop built around big pickle energy, local character, and food people want to talk about"),
      primaryCta: { label: "Our Menu", href: "/services" },
      secondaryCta: { label: "Catering", href: "/contact" },
    },
    heroLedger: [
      { label: "Flavors", detail: "Rotating", value: "50+", width: 84 },
      { label: "Sandwiches", detail: "Pickle-first", value: "Fresh", width: 68 },
      { label: "Catering", detail: "Events", value: "Ready", width: 76 },
      { label: "Location", detail: "New Hope", value: "Open", width: 58 },
    ],
    problems: {
      eyebrow: "What We Serve",
      heading: "Not your average pickle counter",
      items: [
        "Pickle sandwiches stacked with meats, cheeses, and crunch",
        "Pickle boats, spears, and snackable bites",
        "Rotating flavor jars and limited editions",
        "Party trays, catering, and event-ready pickle spreads",
      ],
    },
    testimonials: {
      eyebrow: "Fan Notes",
      heading: "Built for regulars, road-trippers, and pickle people",
      items: [
        { quote: rt("[Fan quote about the pickle sandwiches goes here]"), name: "[Guest Name]", role: "[Local fan]" },
        { quote: rt("[Fan quote about the flavor wall goes here]"), name: "[Guest Name]", role: "[Pickle person]" },
        { quote: rt("[Fan quote about the shop energy goes here]"), name: "[Guest Name]", role: "[New Hope visitor]" },
      ],
    },
    servicePreview: {
      eyebrow: "Menu",
      heading: "Sandwiches, boats, bites, and rotating flavors",
      comparisonLabel: "Explore the menu",
      comparisonHref: "/services",
      tiers: [
        { name: "Pickle Sandwiches", summary: rt("Hearty handhelds with pickle halves doing the bread's job") },
        { name: "Pickle Boats", summary: rt("Loaded pickle creations with savory toppings and big flavor") },
        { name: "Small Bites", summary: rt("Snackable sides, dips, and pickle-powered extras") },
      ],
    },
    credentials: {
      eyebrow: "Flavor Wall",
      heading: "A rotating lineup for every pickle mood",
      highlights: [
        { title: "Dill", tools: "Classic, garlic, half sour" },
        { title: "Spicy", tools: "Hot, tangy, and limited-run flavors" },
        { title: "Sweet", tools: "Bread-and-butter style favorites" },
      ],
    },
    cta: {
      eyebrow: "Visit Gio's",
      heading: "Stop by the new New Hope location",
      buttonLabel: "Hours & Directions",
      buttonHref: "/contact",
    },
  },
  aboutPage: {
    _id: "aboutPage",
    _type: "aboutPage",
    title: "About",
    hero: {
      eyebrow: "Our Story",
      heading: "A local pickle shop with plenty of personality",
      description: rt("Giovanni's DILLicious Pickles is built around bold flavors, candid small-business energy, and a community that shows up"),
    },
    owner: {
      image: {},
      facts: [
        { value: "50+", label: "Rotating pickle flavors" },
        { value: "New Hope", label: "Home base" },
      ],
    },
    storySection: {
      eyebrow: "Meet Gio's",
      heading: "Crunch, character, and a shop people remember",
      description: rt("From pickle sandwiches to jars and trays, Gio's brings a playful food experience to South Main Street"),
      cards: [
        { icon: "building", title: "Fast-casual and fun", description: rt("A quick-stop menu with plenty of personality") },
        { icon: "mapPin", title: "Rooted in New Hope", description: rt("A local storefront made for neighbors, visitors, and pickle fans") },
        { icon: "badgeCheck", title: "Flavor-first", description: rt("Rotating jars, sandwiches, and snackable specials") },
      ],
    },
    certifications: {
      eyebrow: "Offerings",
      heading: "Menu pillars for the full site experience",
      rows: [
        { label: "Food", type: "accounting", items: [{ name: "Sandwiches" }, { name: "Boats" }, { name: "Small Bites" }] },
        { label: "Shop", type: "payroll", items: [{ name: "Jars" }, { name: "Merch" }, { name: "Catering" }] },
      ],
    },
    cta: {
      eyebrow: "Let's Talk Pickles",
      heading: "Planning a party, tray, or flavor run?",
      buttonLabel: "Contact Gio's",
      buttonHref: "/contact",
    },
  },
  servicesPage: {
    _id: "servicesPage",
    _type: "servicesPage",
    title: "Services",
    hero: {
      eyebrow: "Menu",
      heading: "Pickle sandwiches, boats, bites, and sweets",
      description: rt("A compact preview of the menu while the full flavor wall is being finalized"),
    },
    supportSection: {
      eyebrow: "Flavor Wall",
      heading: "A full pickle flavor guide belongs here",
      description: rt("The public build can support a browsable flavor wall with categories, filters, availability notes, and seasonal favorites"),
    },
    serviceTiers: [
      {
        name: "Essential",
        bestFor: rt("Core menu items and everyday favorites"),
        includes: [
          richTextListItem("Pickle sandwiches"),
          richTextListItem("Pickle boats"),
          richTextListItem("Small bites"),
          richTextListItem("Pizza and sweets"),
          richTextListItem("Flavor wall preview"),
          richTextListItem("Catering inquiry CTA"),
        ],
        startingAt: "Demo",
      },
      {
        name: "Growth",
        bestFor: rt("Shop items and packaged pickle expansion"),
        badge: "Coming Later",
        includes: [
          richTextListItem("Packaged jars"),
          richTextListItem("Flavor packs"),
          richTextListItem("Merch"),
          richTextListItem("Gift cards"),
          richTextListItem("Shopify-ready structure"),
          richTextListItem("Vendor checkout links"),
        ],
        startingAt: "Future phase",
      },
      {
        name: "Strategic",
        bestFor: rt("Events, trays, and local partnerships"),
        includes: [
          richTextListItem("Party trays"),
          richTextListItem("Wholesale inquiries"),
          richTextListItem("Pop-up events"),
          richTextListItem("Local collaborations"),
          richTextListItem("Catering form"),
          richTextListItem("Seasonal campaigns"),
        ],
        startingAt: "Custom",
      },
    ],
    faqSection: {
      eyebrow: "FAQ",
      heading: "What to know before visiting",
      items: [
        { question: "Where is Gio's located?", answer: rt("1270 S Main St, New Hope, PA 18938") },
        { question: "Do you have pickle sandwiches?", answer: rt("Yes. Pickle sandwiches are one of the signature menu ideas highlighted in this demo") },
        { question: "How many flavors are available?", answer: rt("The full rotating flavor list can be added once the latest menu is confirmed") },
        { question: "Can I order online?", answer: rt("Online ordering is planned for a later phase through a reliable checkout or ordering partner") },
        { question: "Do you cater?", answer: rt("The site is set up to route catering, party tray, and event inquiries to Gio's") },
        { question: "Will there be merch or jars online?", answer: rt("A future shop page can support packaged pickles, swag, gift cards, and bundles") },
      ],
    },
    cta: {
      eyebrow: "Next Step",
      heading: "Ready to talk trays, catering, or a big pickle order?",
      buttonLabel: "Contact Gio's",
      buttonHref: "/contact",
    },
  },
  contactPage: {
    _id: "contactPage",
    _type: "contactPage",
    title: "Contact",
    hero: {
      eyebrow: "Visit Us",
      heading: "Find Gio's in New Hope",
      description: rt("Stop in for pickle sandwiches, flavor jars, snacks, and catering conversations"),
    },
    form: {
      supportLabel: "What can we help with?",
      supportOptions: ["Catering", "Wholesale", "Menu question", "Event", "Online order", "Not sure yet"],
      messagePlaceholders: [
        "I have a catering question for an upcoming event",
        "I'd like to ask about pickle flavors or availability",
        "I'm interested in party trays or a larger order",
      ],
      submitLabel: "Send Inquiry",
      reassurance: "We'll follow up as soon as we can",
    },
    formDelivery: {
      subject: "Gio's Pickles: New Website Inquiry",
      formspreeEndpoint: "",
    },
    contactPanel: {
      methods: [
        { icon: "phone", label: "Phone", value: "(215) 478-8115", hrefType: "tel" },
        { icon: "mail", label: "Email", value: "giospickles@gmail.com", hrefType: "mailto" },
        { icon: "mapPin", label: "Location", value: "1270 S Main St, New Hope, PA 18938" },
        { icon: "calendar", label: "Hours", value: "Tuesday-Saturday 11:00 am – 8:00 pm; Sunday 11:00 am – 3:00 pm" },
      ],
    },
  },
} as const;

export type CmsContent = typeof cmsContent;
