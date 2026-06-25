# Tri-State Bookkeeping

Responsive marketing website and Sanity CMS dashboard for Tri-State Bookkeeping

## Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- Sanity Studio

## Pages

- Home
- About
- Services
- Contact

## CMS Structure

Sanity Studio is organized as singleton documents:

- Site Settings
- Home
- About
- Services
- Contact

Studio starter content lives in:

```sh
src/cms/cmsContent.ts
```

The Studio schemas live in `studio/schemaTypes`, and each singleton document is prefilled from the CMS content source on first creation

## Environment

Sanity is configured for project `34ie0b8l` and defaults to the `production` dataset

Optional overrides:

```sh
SANITY_STUDIO_PROJECT_ID=34ie0b8l
SANITY_STUDIO_DATASET=production
VITE_SANITY_PROJECT_ID=34ie0b8l
VITE_SANITY_DATASET=production
VITE_SANITY_API_VERSION=2026-02-23
VITE_FORMSPREE_FORM_ID=your-form-id
```

The public site pulls from Sanity. Missing singleton documents are treated as errors so CMS wiring issues are visible during development

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
