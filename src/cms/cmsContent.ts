import { richTextListItem, toPortableText as rt } from "./richText";

export const cmsContent = {
  siteSettings: {
    _id: "siteSettings",
    _type: "siteSettings",
    name: "Tri-State Bookkeeping",
    description: "Bookkeeping, reporting, and advisory support for growing businesses across the Tri-State region",
    phone: "(215) 603-8375",
    email: "nick@tristatebooks.com",
    location: "Bucks County, Philadelphia, NJ, & DE",
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
      copyrightName: "Tri-State Bookkeeping LLC",
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
      eyebrow: "Serving Bucks County, Philadelphia, NJ, & DE",
      heading: "Less time in the books, more confidence in the numbers",
      description: rt(
        "Accurate bookkeeping, timely reporting, and responsive communication for owners who want results without adding more administrative weight",
      ),
      primaryCta: { label: "Start a Conversation", href: "/contact" },
      secondaryCta: { label: "Our Services", href: "/services" },
    },
    heroLedger: [
      { label: "Bank feeds", detail: "Reconciled", value: "84%", width: 84 },
      { label: "Expenses", detail: "Categorized", value: "$8,240", width: 68 },
      { label: "Payroll", detail: "Posted", value: "$4,965", width: 76 },
      { label: "Reports", detail: "Draft ready", value: "May", width: 58 },
    ],
    problems: {
      eyebrow: "Problems We Solve",
      heading: "Bring clarity to the bookkeeping and reconciliation work that slows owners down",
      items: [
        "Books that are behind or difficult to maintain",
        "Reports that arrive too late to impact decisions",
        "Excessive time spent on admin work",
        "Disconnected payroll, software, or reporting workflows",
      ],
    },
    testimonials: {
      eyebrow: "Testimonials",
      heading: "Trusted by clients across industry, size, and complexity",
      items: [
        {
          quote: rt("[Placeholder testimonial focused on responsiveness, clarity, and dependable monthly reporting]"),
          name: "[Client Name]",
          role: "[Local business owner]",
        },
        {
          quote: rt("[Nick is somebody who always picks up the phone and keeps me out of trouble]"),
          name: "[Client Name]",
          role: "[Service business owner]",
        },
        {
          quote: rt("[Placeholder testimonial focused on practical bookkeeping support for a growing company]"),
          name: "[Client Name]",
          role: "[Growing business operator]",
        },
      ],
    },
    servicePreview: {
      eyebrow: "Services",
      heading: "Support levels built around how your business operates",
      comparisonLabel: "Compare services",
      comparisonHref: "/services",
      tiers: [
        {
          name: "Essential",
          summary: rt("Accurate monthly books, reconciled accounts, and dependable month-end routines"),
        },
        {
          name: "Growth",
          summary: rt("Catch-up bookkeeping, streamlined reporting, and ongoing support as operations become more complex"),
        },
        {
          name: "Strategic",
          summary: rt("Higher-level oversight, robust cash flow planning, and stronger operational guidance"),
        },
      ],
    },
    credentials: {
      eyebrow: "Certifications & Software",
      heading: "Fluent in the platforms you already use",
      highlights: [
        { title: "Bookkeeping", tools: "QuickBooks, Xero, FreshBooks, Sage" },
        { title: "Payroll", tools: "Gusto, ADP, Paychex" },
        { title: "Reporting", tools: "Excel & month-end report workflows" },
      ],
    },
    cta: {
      eyebrow: "Ready When You Are",
      heading: "Get clear on what your books need",
      buttonLabel: "Start a Conversation",
      buttonHref: "/contact",
    },
  },
  aboutPage: {
    _id: "aboutPage",
    _type: "aboutPage",
    title: "About",
    hero: {
      eyebrow: "About",
      heading: "A partner who understands your business",
      description: rt("Tri-State helps owners stay organized, informed, and focused on growth"),
    },
    owner: {
      image: {},
      facts: [
        { value: "7+ Years", label: "Bookkeeping experience" },
        { value: "BBA in Accounting", label: "Temple University" },
      ],
    },
    meetNick: {
      eyebrow: "Meet Nick",
      heading: "Steady support for the numbers behind your operations",
      description: rt(
        "Mr. Adams founded Tri-State Bookkeeping to provide the kind of responsive, dependable support that many growing businesses struggle to find from larger firms",
      ),
      cards: [
        {
          icon: "building",
          title: "Business-focused support",
          description: rt(
            "Practical bookkeeping for owners who need clean records, timely reporting, and fewer surprises at the end of the month",
          ),
        },
        {
          icon: "mapPin",
          title: "Local, responsive service",
          description: rt(
            "Serving clients across Bucks County, Philadelphia, New Jersey, and Delaware, with communication that stays personal and accessible",
          ),
        },
        {
          icon: "badgeCheck",
          title: "Certified software expertise",
          description: rt("Experience across the most widely used industry platforms"),
        },
      ],
    },
    certifications: {
      eyebrow: "Certifications & Software",
      heading: "Platform certifications and software expertise to handle your workflows",
      rows: [
        {
          label: "Accounting Software",
          type: "accounting",
          items: [
            { name: "FreshBooks" },
            { name: "Microsoft Excel" },
            { name: "QuickBooks" },
            { name: "Sage" },
            { name: "Xero" },
          ],
        },
        {
          label: "Payroll Software",
          type: "payroll",
          items: [
            { name: "ADP" },
            { name: "Gusto" },
            { name: "Paychex" },
          ],
        },
      ],
    },
    cta: {
      eyebrow: "Let's Talk",
      heading: "Find out whether Tri-State is the right fit",
      buttonLabel: "Start a Conversation",
      buttonHref: "/contact",
    },
  },
  servicesPage: {
    _id: "servicesPage",
    _type: "servicesPage",
    title: "Services",
    hero: {
      eyebrow: "Services",
      heading: "Reliable financial support for growing businesses",
      description: rt("Services designed to meet your current needs and scale up as they evolve"),
    },
    supportSection: {
      eyebrow: "How We Help",
      heading: "Support that grows alongside your business",
      description: rt(
        "Some businesses need accurate monthly bookkeeping. Others need cleanup work, deeper reporting, or higher-level financial guidance. We offer flexible levels of support so you can get exactly what you need—without paying for what you don't",
      ),
    },
    serviceTiers: [
      {
        name: "Essential",
        bestFor: rt("Organized books and dependable monthly support"),
        includes: [
          richTextListItem("Accurate monthly books"),
          richTextListItem("Reconciled bank/credit accounts"),
          richTextListItem("Clean transaction records"),
          richTextListItem("Payroll support"),
          richTextListItem("Consistent month-end process"),
          richTextListItem("Organized financial records"),
        ],
        startingAt: "$250/mo",
      },
      {
        name: "Growth",
        bestFor: rt("Deeper reporting insight and greater visibility"),
        badge: "Most Popular",
        includes: [
          richTextListItem("Everything in Essential"),
          richTextListItem("Cleaner books if records are behind"),
          richTextListItem("Clearer financial reports"),
          richTextListItem("Improved bookkeeping workflows"),
          richTextListItem("Coordination with tax professionals"),
          richTextListItem("More consistent reporting support"),
        ],
        startingAt: "$1,000-$2,500/mo",
      },
      {
        name: "Strategic",
        bestFor: rt("Higher-level financial oversight and planning"),
        includes: [
          richTextListItem("Controller-level support"),
          richTextListItem("Cash flow visibility"),
          richTextListItem("Budget tracking"),
          richTextListItem("Financial analysis"),
          richTextListItem("Business performance insights"),
          richTextListItem("Fractional CFO guidance"),
        ],
        startingAt: "Custom pricing",
      },
    ],
    faqSection: {
      eyebrow: "FAQ",
      heading: "What to know before getting started",
      items: [
        {
          question: "What types of businesses do you work with?",
          answer: rt(
            "Tri-State works with small and growing businesses, including local service companies, contractors, trades businesses, professional service firms, and owner-led teams",
          ),
        },
        {
          question: "Can you help if my books are behind?",
          answer: rt(
            "Yes. Catch-up and cleanup work can help bring older records current, organize missing details, and create a more dependable process going forward",
          ),
        },
        {
          question: "Do you work with QuickBooks?",
          answer: rt(
            "Yes. Tri-State supports QuickBooks and other common bookkeeping, payroll, and reporting tools—including Xero, FreshBooks, Sage, Gusto, ADP, Paychex, and Excel",
          ),
        },
        {
          question: "How does pricing work?",
          answer: rt(
            "Pricing depends on the level of support, transaction volume, cleanup needs, reporting requirements, and coordination involved. The first step is a consultation so the scope can be matched to your business",
          ),
        },
        {
          question: "How does a consultation work?",
          answer: rt(
            "A consultation is a practical conversation about your current bookkeeping process, identifying what feels unclear or time-consuming, and discussing what level of support would make the most sense",
          ),
        },
        {
          question: "Do you provide tax preparation services?",
          answer: rt(
            "Yes. Tri-State can support tax preparation needs alongside bookkeeping, reporting, payroll coordination, software support, and advisory services",
          ),
        },
      ],
    },
    cta: {
      eyebrow: "Next Step",
      heading: "Let's get your books working for you",
      buttonLabel: "Start a Conversation",
      buttonHref: "/contact",
    },
  },
  contactPage: {
    _id: "contactPage",
    _type: "contactPage",
    title: "Contact",
    hero: {
      eyebrow: "Contact",
      heading: "Request a bookkeeping consultation",
      description: rt("Tell us what you need help with, and we'll follow up with recommended next steps"),
    },
    form: {
      supportLabel: "What do you need help with?",
      supportOptions: [
        "Monthly bookkeeping",
        "Cleanup / catch-up",
        "Reporting",
        "Payroll coordination",
        "Advisory support",
        "Not sure yet",
      ],
      messagePlaceholders: [
        "We're behind on our books and need help catching up",
        "We need monthly bookkeeping and reporting support",
        "We use QuickBooks and want help cleaning up our records",
        "We're growing and need better visibility into our numbers",
        "We need help reconciling accounts and organizing month-end reports",
        "We want to streamline payroll coordination and bookkeeping workflows",
      ],
      submitLabel: "Send Inquiry",
      reassurance: "No obligation—just a quick conversation about what you need and where we can help",
    },
    formDelivery: {
      subject: "Tri-State: New Website Inquiry",
      formspreeEndpoint: "",
    },
    contactPanel: {
      methods: [
        { icon: "phone", label: "Phone", value: "(215) 603-8375", hrefType: "tel" },
        { icon: "mail", label: "Email", value: "nick@tristatebooks.com", hrefType: "mailto" },
        { icon: "mapPin", label: "Location", value: "Bucks County, Philadelphia, NJ, & DE" },
        {
          icon: "calendar",
          label: "Consultations",
          value: "Focused on understanding your current books, workflow, and support needs",
        },
      ],
    },
  },
} as const;

export type CmsContent = typeof cmsContent;
