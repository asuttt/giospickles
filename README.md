# Giovanni's DILLicious Pickles

Responsive marketing website and dormant Sanity CMS scaffold for Giovanni's DILLicious Pickles in New Hope, PA

## Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- Sanity Studio

## Pages

- Home
- About
- Menu
- Contact

## CMS Structure

Sanity Studio is organized as singleton documents:

- Site Settings
- Home
- About
- Menu
- Contact

Studio starter content lives in:

```sh
src/cms/cmsContent.ts
```

The Studio schemas live in `studio/schemaTypes`, and each singleton document is prefilled from the CMS content source on first creation

## Environment

Sanity is dormant for this demo. Add project settings only when CMS wiring is ready.

Optional overrides:

```sh
SANITY_STUDIO_PROJECT_ID=your-sanity-project-id
SANITY_STUDIO_DATASET=production
VITE_SANITY_PROJECT_ID=your-sanity-project-id
VITE_SANITY_DATASET=production
VITE_SANITY_API_VERSION=2026-02-23
VITE_FORMSPREE_FORM_ID=your-form-id
```

The public site currently uses the code-owned demo content. The CMS scaffold is retained for future wiring

Formspree delivery can be configured in Studio. Without a Formspree endpoint or form ID, submissions fall back to a mailto link

## Local Development

```sh
npm install
npm run dev
```

Run the CMS dashboard:

```sh
npm run studio
```

Useful commands:

```sh
npm run build
npm run studio:build
npm run test
npm run lint
```
