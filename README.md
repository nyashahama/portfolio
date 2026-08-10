# Nyasha Hama — Portfolio

Personal portfolio for Nyasha Hama, a Full-Stack Software Engineer working across React, Next.js, TypeScript, Go, PostgreSQL, and product/platform engineering.

The site is intentionally evidence-led. Its public narrative follows the same hierarchy as the CV:

1. Independent full-stack experience across ClinicPulse and StrataHQ
2. Merged upstream contributions to Turso and CrossHair
3. Three selected, evidence-backed projects
4. Engineering toolkit and education

## Local development

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

The contact endpoint uses the following local environment variables:

```text
RESEND_API_KEY
EMAIL_FROM
OWNER_EMAIL
```

## Quality gates

```bash
npm test
npm run lint
npm run build
```

## Content source

- Portfolio copy and links: `lib/data.ts`
- Section composition: `app/page.tsx`
- Downloadable CV: `public/nyasha_hama_cv.pdf`

The public CV must stay synchronized with the finalized RenderCV artifact before release.
