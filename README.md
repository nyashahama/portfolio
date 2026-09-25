# Nyasha Hama — Portfolio

Personal portfolio for Nyasha Hama, a Full-Stack Software Engineer working across React, Next.js, TypeScript, Go, PostgreSQL, and product/platform engineering.

The site is intentionally evidence-led. Its cinematic introduction leads into these public proofs:

1. Three selected, evidence-backed projects and their case studies
2. Independent full-stack experience across ClinicPulse and StrataHQ
3. Merged upstream contributions to Turso and CrossHair
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
- Scroll-driven scene: `components/immersive/PortfolioScene.tsx` and `lib/scene-timeline.mjs`
- Case studies: `app/work/[slug]/page.tsx`
- Project media and provenance: `public/projects/ASSETS.md`
- Downloadable CV: `public/nyasha_hama_cv.pdf`

The public CV must stay synchronized with the finalized RenderCV artifact before release.

The 3D scene is loaded after the semantic page and uses code-authored geometry. The page presents a static poster when WebGL is unavailable or reduced motion is requested. Project case studies retain ordinary URLs and accessible content outside the canvas.
