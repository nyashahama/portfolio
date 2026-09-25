# Immersive portfolio implementation plan

Prepared 25 September 2026. Status: the first complete immersive redesign is implemented on `feat/immersive-portfolio`. This document remains the design brief and acceptance guide. The implementation uses code-authored geometry for the NH sculpture and project exhibits; real-device GPU measurements and additional art direction remain open validation work before public release.

**Objective**

Create an original cinematic portfolio around a suspended NH sculpture in a dark architectural environment. Scrolling opens the sculpture and moves through exhibits of Nyasha's work. The visual benchmark is Igloo's atmosphere, material detail, composition, and controlled movement. The proposed setting continues the dark NH direction discussed with Nyasha.

The first deliverable that establishes visual quality is a finished browser scene and one transition into a real project exhibit, with desktop and mobile compositions. A technical prototype alone does not satisfy this milestone.

**Verified starting point**

- Next.js 16.1.6, React 19.2.3, TypeScript, Tailwind CSS 4, and Resend. There is no existing 3D engine dependency.
- `app/page.tsx` composes the page from individual section components. `lib/data.ts` owns the public copy and project links.
- `HeroSection.tsx` already owns a small particle canvas and animation lifecycle. The new scene replaces that canvas.
- Existing project records are ClinicPulse, StrataHQ, and E-Commerce Search Backend. The last project has no live demo. Preserve the supplied alpha/beta labels and the evidence behind career claims.
- The navigation, downloadable CV, and contact form are implemented through DOM components. `app/api/contact/route.ts` uses the Resend SDK; delivery was not exercised during planning.
- `tests/portfolio-content.test.mjs` protects public positioning, three projects, CV hash, visibility before hydration, mobile menu focus, and the current section order. Changing the narrative order requires a corresponding intentional update to the order test and README.
- `app/layout.tsx` currently uses a Vercel URL for `metadataBase`. The redesign should publish canonical and share metadata for `https://www.nyashahama.xyz`.
- No custom sculpture, environment, project screenshot, or motion assets are present in the current public asset inventory.
- Baseline: `npm test` passed all 11 tests on 25 September 2026. The working tree was clean on `main` before this document was added. Build, lint, GPU performance, and contact delivery were not tested during planning.

**Experience and art direction**

Use graphite architecture, brushed metal, selective translucent surfaces, pale typography, and controlled cyan emission. A mountain-like horizon can give the environment a connection to Cape Town without dominating the work. Lighting should establish a readable silhouette and depth; reflections and haze should support the composition.

Use one display family and one compact utility face, with verified font licenses. Compose the name and role around the sculpture. Keep navigation readable above every scene: Work, About, Contact, and CV. Preserve meaningful existing hash destinations when reorganizing sections.

| Chapter | Visual sequence | Content and action |
| --- | --- | --- |
| Arrival | Suspended NH sculpture, architectural horizon, restrained light passing through the seams | Name, full-stack role, concise positioning, Work and CV links |
| Beneath the interface | Sculpture separates into authored layers; the camera moves through an opening | Short explanation of interface, services, data, and delivery responsibilities |
| ClinicPulse | The opening leads into a framed exhibit with a real product capture | Offline reporting story, role, verified evidence, case study, demo, source |
| StrataHQ | Camera moves across the same space into a distinct exhibit composition | Reconciliation or maintenance story, role, evidence, case study, demo, source |
| Engineering evidence | A quieter composition accommodates the third project and upstream contributions | Search backend, Turso and CrossHair links, concise technical descriptions |
| About and contact | Camera settles into a composed closing view; the room becomes a quiet background | Experience, toolkit, education, contact form, email, CV |

Each chapter must work when reached directly from navigation or a shared URL. The introductory movement is brief and interruptible. Visitors can scroll immediately. Sound is a final optional enhancement, muted by default and enabled only through an explicit control.

**Rendering and application architecture**

Retain Next.js, React, Tailwind, the public data source, and the existing contact endpoint. Add `three` for rendering and `@react-three/fiber` v9 for its React integration. Fiber's documentation pairs v9 with React 19; choose and pin compatible exact versions during implementation. [Official installation guidance](https://r3f.docs.pmnd.rs/getting-started/installation).

Use one persistent canvas mounted by a client component. Server-render the headings, text, links, forms, and initial poster. Dynamically load the 3D subtree through the client boundary; keep any `ssr: false` declaration in that client component. Canvas or asset failure must leave a complete page visible. Text and essential controls stay in HTML, including project detail pages. [Next.js lazy-loading guidance](https://nextjs.org/docs/app/guides/lazy-loading).

Use native page scrolling. A single controller reads section positions, clamps chapter progress, and passes mutable values to the camera rig. Camera movement follows authored position/target keyframes; it does not update React component state every frame. Navigation and the camera use the same section map. Refresh measurements after font loading, layout changes, resize, and device rotation. On direct links and history restoration, initialise the camera at the destination.

The canvas sits behind the DOM and does not capture scrolling or block links. Any scene interaction must have an equivalent visible button or link. Pointer parallax can run as a bounded decorative effect on fine pointers. Scrolling, keyboard input, and touch never require discovering a 3D hotspot.

Initial dependencies are limited to the renderer and its React binding. Start with Three.js loaders and authored camera data. Add a helper such as Drei or a timeline library only when the first scene exposes a concrete need and the implementation demonstrates a benefit. A browser test runner is justified separately by the new browser/GPU failure modes.

| Path | Planned responsibility |
| --- | --- |
| `app/page.tsx` | Narrative composition and one scene mount |
| `app/globals.css` | New visual tokens, typography, chapter layout, fallback and responsive styling |
| `app/layout.tsx` | Font setup, canonical domain, social metadata |
| `components/Navbar.tsx` | Compact navigation and accessible chapter links |
| `components/sections/HeroSection.tsx` | HTML hero and poster integration; retire the local particle canvas |
| `components/sections/ProjectsSection.tsx` | Large product exhibits, case-study links, evidence |
| `components/sections/{About,Experience,OpenSource,Skills,Education}Section.tsx` | Adapt existing content and presentation to the revised narrative |
| `components/sections/ContactSection.tsx` | Adapt presentation, add announced result/loading states, retain a direct email link |
| `components/immersive/SceneBoundary.tsx` | Lazy loading, poster, error boundary, capability and motion preference handling |
| `components/immersive/PortfolioScene.tsx` | Single canvas, environment, sculpture, exhibit assembly |
| `components/immersive/NHMonument.tsx` | Authored mesh parts, materials, controlled opening sequence |
| `components/immersive/CameraRig.tsx` | Desktop/mobile camera composition and movement |
| `lib/scene-config.ts`, `lib/useSceneProgress.ts` | Serializable chapter configuration and shared progress lifecycle |
| `lib/data.ts` | Stable project slugs, project media, alt text, exhibit summaries, case-study evidence |
| `app/work/[slug]/page.tsx` | Server-rendered case studies, per-project `generateMetadata` for title/canonical/social image, unknown-slug 404 |
| `public/scene/`, `public/projects/` | Optimised models, textures, posters, and approved product media |
| `design/scene/` | Editable model source, camera storyboard, export notes, asset provenance |
| `tests/portfolio-content.test.mjs`, `tests/e2e/`, `playwright.config.ts` | Updated content contracts and targeted browser tests |

Keep asset source out of `public/`; only publish runtime exports there. Keep model instances and callbacks out of `lib/data.ts`. Split additional rendering modules when scene complexity requires them.

**Asset production**

| Asset | Production requirement | Delivery |
| --- | --- | --- |
| NH sculpture | Original bevelled geometry, convincing silhouette, named separable parts, correct pivots, inner structure and emission seams | Editable source plus compressed GLB, desktop/mobile poster |
| Environment | Authored floor, horizon and architectural forms with composition tested through the entire camera path | Reusable geometry and baked lighting/reflection data where appropriate |
| Materials | Consistent metal, translucent surface and concrete treatments; restrained emission | Licensed/original source textures and optimised runtime exports |
| Project media | Capture real interfaces using demo or sanitised data; show one clear workflow per featured project | Responsive stills first; optional short muted clips with posters and controls |
| Case-study evidence | Problem, role, implementation decisions, limitations, result, and repository/demo links | Structured content tied to the existing project records |
| Audio, if retained | Subtle atmosphere and sparse interaction sounds with clear reuse rights | Small local assets, explicit sound control |

First use a simple sculpture and room to establish camera paths. Replace these with finished artwork within the first visual milestone. Select Blender or an equivalent available authoring tool at execution time; retain reproducible export settings, dimensions, mesh names, and source files.

Test GLB geometry compression against decode cost. Use GPU texture compression when measurements justify its transcoder and pipeline. Three.js supports the relevant Draco, Meshopt, and KTX2 integrations. [GLTFLoader documentation](https://threejs.org/docs/pages/GLTFLoader.html).

All runtime artwork should be original or have documented reuse rights. Record sources and licenses alongside the design source. Model and shader creation are real work items; package installation cannot establish the required visual finish.

**Delivery sequence and acceptance**

1. **Storyboard and composition.** Map all six chapters; produce desktop/mobile compositions and an untextured camera preview. Establish typography, sculpture silhouette, object scale, light direction, and negative space. Acceptance: the camera journey explains the intended story; text, navigation, and the sculpture have deliberate space at both aspect ratios. Review the actual compositions before increasing scene detail.

2. **Finished opening and first exhibit.** Build the original NH model, materials, environment, lighting, opening movement, and transition into ClinicPulse. Include an initial poster and mobile camera from the start. Acceptance: a runnable browser preview demonstrates the intended visual finish, legible role/actions, coherent transition, and actual project imagery. Capture desktop/mobile stills and a short recording; report measured asset sizes and frame timing on named hardware. This is the main visual checkpoint.

3. **Integrate the complete page.** Mount the persistent scene; connect native scroll, section navigation, direct links, and history. Recompose the HTML sections and add quality/static handling. Add contact busy state and a persistent `aria-live` result region with clearly associated errors. Acceptance: all content is available before 3D readiness, keyboard navigation is complete, anchors land correctly, contact results are announced, and asset failures leave a usable page. Update section-order expectations deliberately while retaining career/CV evidence checks.

4. **Complete project storytelling.** Finish StrataHQ's exhibit, the backend/OSS chapter, and the closing scene. Add the project detail route and concise case studies, including per-project title, canonical URL, description, and social image metadata. A simulated workflow must be labelled illustrative; an interactive demo uses safe sample data and makes its scope clear. Acceptance: every displayed claim has an existing source, each featured project has original media, the third project correctly presents source access, and every case study has a working direct URL, distinct sharing metadata, and return link.

5. **Mobile, performance, and accessibility.** Tune camera framing, scene density, texture sizes, effects, loading and fallback behavior across the device matrix below. Introduce adaptive quality with a stable downgrade policy so it does not oscillate. Acceptance: content remains clear under slow loading, reduced motion, unavailable WebGL, blocked assets, context loss, touch input, and keyboard-only navigation. Measure real phones in addition to desktop emulation.

6. **Final polish and release candidate.** Refine timing, hover/focus feedback, contrast, case-study layouts, contact states, metadata, and the generated social image. Add optional audio only after the core experience passes review. Run the required checks and review a preview deployment at the exact release revision. Deliver a reviewable commit series, asset inventory, verification record, and deployment/rollback instructions. Production publication is a separate requested action.

Dependencies between stages: storyboard establishes camera/model requirements; finished opening establishes the artistic and performance baseline; page integration establishes navigation and fallback contracts; full exhibits follow those contracts. Performance measurement starts in stage 2 and continues as assets are added.

**Loading and quality behavior**

- Show HTML and a matching poster immediately. Load the small essential scene first; bring in upcoming exhibit assets as needed. Essential content must not wait behind a full-screen progress gate.
- Use a full tier for the finished lighting, a reduced tier with cheaper reflections/shadows and fewer effects, and a static presentation using art-directed posters. Start with bounded DPR; adjust from measured frame cost rather than user-agent guesses alone.
- Mobile receives dedicated framing, fewer scene objects, smaller textures, and touch-visible controls. A desktop canvas scaled down is not sufficient.
- Reduced motion starts with static artwork and ordinary navigation, with animated camera/parallax disabled. A low-performance static choice stays stable during the visit.
- Stop rendering in hidden tabs and when the scene is settled. If idle movement is retained, run it only while visible and permitted. Restart rendering on relevant input and stop again after motion settles. Fiber supports demand rendering and explicit invalidation. [Performance guidance](https://r3f.docs.pmnd.rs/advanced/scaling-performance).
- Handle load failure and WebGL context loss by showing the poster and leaving links/forms active. Clean up listeners, observers, frame callbacks, media playback, and GPU resources on teardown; respect shared resource ownership.

These are proposed starting budgets, to be measured against the first finished scene:

| Measure | Initial target / measurement |
| --- | --- |
| First meaningful content | Text, navigation, and poster appear without waiting for WebGL; target LCP <= 2.5s under a documented mobile lab profile |
| Initial hero 3D assets | <= 3 MB mobile and <= 5 MB desktop transferred, measured separately from deferred exhibits |
| Motion | Aim for 60 fps on the named desktop test device and a stable 30 fps minimum on the selected midrange phone; record sustained frame timing and interaction stalls |
| Layout | CLS <= 0.1; no horizontal page overflow at supported widths |
| Interaction | Target INP <= 200 ms when field data is available; use lab traces to investigate click/scroll stalls before release |
| Idle work | No continuing render loop in hidden tabs or static mode; no idle loop when all effects are settled |

Use field data at the 75th percentile, split by desktop/mobile, when assessing Core Web Vitals; lab checks are development evidence. The LCP, INP, and CLS targets above follow [Web Vitals guidance](https://web.dev/articles/vitals). A mobile viewport screenshot verifies layout, not mobile GPU performance. Record browser, hardware, viewport, network profile, and build revision with every performance claim. If artistic requirements exceed a budget, document the measured tradeoff at the scene checkpoint.

**Verification plan**

Use TDD for new navigation, loading, fallback, and case-study behavior. Preserve existing public-content checks and add browser tests for outcomes the current source-string tests cannot exercise. Add `@playwright/test` as a development dependency when implementing those tests; GPU behavior and browser focus order justify it.

- Check normal landing, direct entry to every retained hash, refresh mid-page, fast scrolling in both directions, resizing, orientation changes, and back/forward navigation.
- Verify visible name/role/work/CV and complete project content when scripts are disabled, WebGL creation fails, the model request fails, and the renderer loses its context. Validate the progressive paths individually. Without JavaScript, show a clear direct email route; the existing contact form submission requires JavaScript.
- Verify reduced-motion behavior on initial load and when the preference changes. Ensure text remains visible during failed or delayed hydration.
- Verify tab order, mobile menu open/close focus, focus visibility, click targets, readable contrast against every camera position, and form status announcements.
- Verify the same project data and evidence appear on the homepage and detail routes. Unknown project slugs return 404. CV and repository/demo links point to the intended resources.
- Exercise contact loading/success/error UI using intercepted test responses. This validates the browser contract without sending real email. Label actual delivery as unverified unless a separately authorised end-to-end message is sent.
- Compare desktop, tablet, and phone compositions at 1440x900, 1920x1080, 768x1024, 390x844, and 360x800; cover landscape orientation and 200% text zoom. Check Chromium and Firefox, plus Safari on a real Apple device when available. Emulation alone is not Safari hardware proof.
- Validate visual finish manually against the storyboard: silhouette, material quality, lighting, typography, transitions, and case-study media. Automated tests cannot approve artistic quality.

Current commands: `npm test`, `npm run lint`, `npm run build`. After the planned browser harness exists: `npx playwright test`. Use a production build for performance checks. Report exact commands, results, browser evidence, and remaining device coverage in the implementation handoff.

**Execution and estimates**

Begin implementation in an isolated feature worktree after checking repository instructions and current state. Keep changes in six reviewable milestone commits. One coordinator owns scope and integration; one writer owns a shared checkout. Independent artwork/research/review lanes may run in parallel with explicit file ownership; parallel source writers require separate worktrees.

Do not put a fixed completion date on the full visual build until stage 2 establishes asset production and performance cost. Produce the remaining schedule from that evidence. The main uncertainties are model/material quality, project media availability, and real mobile GPU behavior. They are addressed early by the opening-plus-exhibit milestone.

**Primary reference**

The creators' [Igloo case study](https://www.awwwards.com/igloo-inc-case-study.html) describes a content outline, moodboards and renders, simple camera previews, and development of art and code together with performance measurement. It also notes the setup cost of procedural workflows. Those lessons support the staged plan and authored assets for a small, fixed project collection. Igloo's published stack includes Svelte and custom tooling; the React integration above is the proposal for this repository.
