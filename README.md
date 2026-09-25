# Nyasha Hama — Portfolio

Personal portfolio for Nyasha Hama, a software engineer building operational products and reliable backend systems across React, Next.js, TypeScript, Go, PostgreSQL, and Rust.

The site is intentionally evidence-led. Its cinematic introduction leads into these public proofs:

1. ClinicPulse and StrataHQ as self-directed product flagships
2. TxProof as a bounded systems and failure-testing project
3. Maintainer-merged Turso and CrossHair contributions
4. Java backend work, independent engineering history, toolkit, and education

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
- Canonical CV source: the adjacent RenderCV project, `rendercv_output/nyasha_hama_cv.yaml`
- Systems/backend CV variant: `rendercv_output/nyasha_hama_cv_systems.yaml` and its separately rendered PDF
- Downloadable CV: `public/nyasha_hama_cv.pdf`

The public CV must stay synchronized with the finalized RenderCV artifact before release.
Configure `OWNER_EMAIL` for the intended receiving mailbox in each deployed environment when updating the public contact address; a displayed email change alone does not change delivery.

The 3D scene is loaded after the semantic page and uses code-authored geometry. The page presents a static poster when WebGL is unavailable or reduced motion is requested. Project case studies retain ordinary URLs and accessible content outside the canvas.
