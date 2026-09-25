# CV and portfolio content implementation plan

Research date: 25 September 2026. Implementation began 26 September 2026. This document records the evidence, design choices, and acceptance criteria used for the new CV sources, portfolio content, GitHub profile, TxProof reviewer path, and StrataHQ claim cleanup.

**Recommended positioning**

Present Nyasha as a software engineer who builds usable products and investigates the correctness of the systems behind them. ClinicPulse and StrataHQ establish product ownership and full-stack breadth; TxProof and the maintainer-merged Turso/CrossHair contributions establish a distinctive systems story.

Recommended public title: **Software Engineer — Product & Backend Systems**.

Suggested short positioning statement:

> I build operational software from interface to data model, with particular attention to retries, access boundaries, and recoverable failures. My work includes ClinicPulse and StrataHQ, Rust tooling for bounded payment-failure testing, and maintainer-merged contributions to Turso and CrossHair.

This is a drafting direction. Final wording should retain only claims recorded in the evidence register below. The public materials should make ownership, decisions, verification, and limitations easy to inspect. Avoid declaring a seniority level that relies on unverified employment or production scope.

## 1. What the audit established

**CV source and document**

- Canonical source: `/home/nyasha-hama/projects/rendercv_output/nyasha_hama_cv.yaml`.
- Current generated PDF: the adjacent `nyasha_hama_cv.pdf`, two pages. Both pages were rendered and inspected. The layout is readable, but the headline is long, skills occupy considerable space before achievements, and the product bullets repeat between Experience and Projects.
- An earlier one-page backend/systems draft exists at `/home/nyasha-hama/Documents/Codex/2026-08-25/okay-yeah-so-there-is-your/outputs/nyasha_hama_backend_systems_cv.yaml`. It already includes TxProof, but compresses the page to 9.3-point body text and still carries the old portfolio URL. Treat it as source material, not the final template.
- Canonical PDF SHA-256: `e0950833fb1cfd271d03907fac7efcc5f429fe8175f00b59946eb95314b61b0e`.
- Portfolio PDF SHA-256: `02e66679cc53939aa2b9fbb0d2c0d87d32e6fd51080d3cf3692cc028b36224af`.
- A fresh download from `https://www.nyashahama.xyz/nyasha_hama_cv.pdf` has the same portfolio hash, confirming that the live site serves that older copy.
- Text comparison confirms the main substantive difference is email: the canonical source uses `nyashahama5@gmail.com`; the portfolio PDF and site use `nyashaahama@gmail.com`. The August career audit identifies the former as the confirmed canonical address. Use that established choice in the rewrite unless Nyasha supplies a newer preference.
- Both current CV artifacts still reference `portfolio-topaz-one-58.vercel.app`. The intended portfolio address is `https://www.nyashahama.xyz`.
- Installed RenderCV is v2.6; the YAML schema comment points at v2.8. Record the renderer version and validate compatibility before regenerating. Do not silently upgrade the global tool or assume the schema comment describes the installed renderer.

**Public credibility gaps**

- The current StrataHQ landing page presents 2,400+ schemes, 180K residents, collection/resolution statistics, and named testimonials as real results. Its repository explicitly describes a beta with seeded fake data. No independent supporting evidence was found for those public marketing claims. Verify or remove them before using the demo as interview proof. This applies equally to unsupported compliance and predictive-model claims.
- ClinicPulse's public landing page explicitly labels its operating figures as modeled evidence. Preserve that distinction; a modeled routing improvement is not observed deployment impact.
- TxProof has substantial inspectable code, but public `main` has no root README and no single reviewer walkthrough ending in an inspectable replay artifact. This discovery cost hides some of the strongest evidence.
- TxProof has no immediately visible root license and the GitHub license endpoint returns 404. Call it a public Rust project. If Nyasha intends to license it for reuse, make an explicit owner-selected license decision.
- The current portfolio introduces three projects and destructures them by array position. Its tests also require exactly three projects and freeze the old headline/CV hash. Adding TxProof requires a deliberate data and test update.
- Current local ClinicPulse and StrataHQ checkouts contain uncommitted changes and differ from public `main`. Public claims in this plan are anchored to the public source, not those local edits.
- GitHub reports repository creation on 24 April 2026 for ClinicPulse and 15 March 2026 for StrataHQ. Those dates do not establish the beginning of Nyasha's broader engineering work, and do not independently support dating these specific products to January 2023.

## 2. Evidence selection

| Priority | Evidence | Interview value | Publication boundary |
| --- | --- | --- | --- |
| Flagship product | ClinicPulse | Offline state, duplicate/conflict handling, source/audit traceability, role-specific UI and backend | Alpha/demo evidence; no clinic adoption, patient outcomes, or deployment-scale claim |
| Flagship product | StrataHQ | Relational domain modeling, transactional finance workflows, ambiguous matching, tenancy boundaries, background work | Seeded beta; no customer count, revenue, collection uplift, or compliance guarantee |
| Prominent systems project | TxProof | Failure modeling, deterministic replay, invariant snapshots, destructive-operation safety | Bounded search against a synthetic reference application; no general proof or live-provider claim |
| Independent contribution evidence | Turso | Persistence correctness, schema transitions, regression design, maintainer review | Describe Nyasha's contribution precisely; account for maintainer-added regression work |
| Independent contribution evidence | CrossHair | Native/Python boundary behavior, callable normalization, error propagation and reference stability | No measured speedup claimed |
| Supporting backend work | Java commerce/search backend | Multiple search strategies, asynchronous indexing, comparable evaluation and API contracts | Retain for Java/backend applications and an additional-work entry; no invented benchmark result |
| Optional systems variant | Guard Rail | Policy enforcement, credential stripping, durable execution records, replay | Beta internal API runtime; remove broad critical-infrastructure/SaaS implications |
| Defer | DevForge | Current public service/deployment records and authorization | Public implementation does not substantiate the advertised Terraform/cloud provisioning path |

### ClinicPulse: a field report must survive unreliable connectivity

Public `main`: `47739ea5f6a6a08855a8ea06bb45fe07aec868b9`.

The server accepts a client report identifier, distinguishes same-payload retries from conflicting reuse, handles uniqueness races, and records synchronization attempts. The browser queue uses IndexedDB. Public tests cover duplicate payloads, conflict payloads, uniqueness races, timestamp precision, partial batch failure, and failure to persist the attempt record.

Candidate CV bullet:

> Built persisted offline reporting across a Next.js client and Go API, with duplicate detection, conflict handling, and an auditable sync-attempt ledger; added regressions for uniqueness races and timestamp precision.

Case-study title: **When connectivity disappears: preserving a field report without duplicating it.**

Primary sources:

- [Offline synchronization implementation](https://github.com/nyashahama/clinic-pulse/blob/47739ea5f6a6a08855a8ea06bb45fe07aec868b9/services/api/internal/service/offline_sync.go#L104).
- [Regression tests](https://github.com/nyashahama/clinic-pulse/blob/47739ea5f6a6a08855a8ea06bb45fe07aec868b9/services/api/internal/service/offline_sync_test.go#L70).
- [Persistent browser queue](https://github.com/nyashahama/clinic-pulse/blob/47739ea5f6a6a08855a8ea06bb45fe07aec868b9/lib/demo/offline-queue-store.ts).
- [CI at this revision, successful on 13 August 2026](https://github.com/nyashahama/clinic-pulse/actions/runs/31695184176). This is historical CI evidence; its full suite was not rerun during this audit.

### StrataHQ: turn a bank statement into reviewable financial operations

Public `main`: `4b462eb50e409850602d567fb9a25ac4d78de9e8`.

The public implementation fingerprints statement rows, queues imports using an import identifier, checks scheme/role access, classifies ambiguous matches, and applies financial updates inside a transaction. Tests include exact unit matching, blank references, multiple candidates, overpayment ambiguity, partial payments, and currency parsing.

Candidate CV bullet:

> Implemented Go/PostgreSQL bank-statement imports with deterministic row fingerprints, transactional payment application, and manual review for ambiguous matches and overpayments.

A second product bullet should connect this backend to the managing-agent/trustee/resident workflow and explain how permissions shape the interface. Do not repeat the same infrastructure list in three sections.

Case-study title: **Reconciliation when payment references are ambiguous.**

Primary sources:

- [Import processing and transactional application](https://github.com/nyashahama/StrataHQ/blob/4b462eb50e409850602d567fb9a25ac4d78de9e8/backend/internal/levy/bank_statement_import.go#L527).
- [Matching and amount regression tests](https://github.com/nyashahama/StrataHQ/blob/4b462eb50e409850602d567fb9a25ac4d78de9e8/backend/internal/levy/bank_statement_import_test.go).
- [Project status and seeded-demo declaration](https://github.com/nyashahama/StrataHQ/blob/4b462eb50e409850602d567fb9a25ac4d78de9e8/README.md).
- Default-head check runs include successful frontend tests/typecheck/build on 7 July 2026. More recent visible runs on 18 July refer to another SHA; do not describe those as a new full verification of current public `main`.

### TxProof: make difficult payment failures reproducible

Public `main`: `83ba9537354475830ec4f0549261ad1080dc2be9`; local checkout matched it and was clean when inspected.

The planner generates state-valid bounded campaigns around retries, ambiguous provider responses, webhook disorder, and application crash/restart boundaries. Decisions can be recorded and replayed. Its PostgreSQL runner evaluates a five-query invariant contract in one read-only repeatable-read transaction. Destructive resets require an operator acknowledgement tied to the exact database/server/project identity and a single-use mutation permit.

Candidate primary-CV bullet:

> Built a Rust harness for bounded payment-failure campaigns, with deterministic replay, PostgreSQL invariant checks, and explicit protections around destructive test resets.

Candidate systems-variant expansion:

> Modeled ambiguous provider responses, retries, delayed/dropped/reordered webhooks, and crash/restart boundaries; recorded campaign decisions for reproducible execution and replay.

Case-study title: **Turning ambiguous payment outcomes into replayable failure cases.**

Proof and boundaries:

- [Campaign planner](https://github.com/nyashahama/tx-proof/blob/83ba9537354475830ec4f0549261ad1080dc2be9/crates/tiv-core/src/plan.rs).
- [Reset identity and mutation-permit controls](https://github.com/nyashahama/tx-proof/blob/83ba9537354475830ec4f0549261ad1080dc2be9/crates/tiv-runtime/src/postgres/safety.rs#L310).
- [Invariant runner contract and limitations](https://github.com/nyashahama/tx-proof/blob/83ba9537354475830ec4f0549261ad1080dc2be9/docs/invariant-snapshot-runner.md).
- [Successful public CI on 25 August 2026](https://github.com/nyashahama/tx-proof/actions/runs/32828881852).
- A fresh `cargo test --workspace --all-targets` completed successfully during this audit. The Docker-backed truth-spike jobs were not freshly rerun.
- v1 bounds include 500 cases and 40 actions per case. The integrated target is a repository-owned reference app and fixture-style PaymentIntent provider. This does not establish correctness for arbitrary production systems or a live Stripe integration.
- Reviewer-entry work: add a root README and one canonical safe local walkthrough. End with `tiv inspect` and a replay of a sanitized retained artifact. Do not direct a visitor into a destructive reset flow without the existing safeguards and an isolated disposable environment.

### Upstream contributions: give reviewers the actual consequence

- [Turso #6993](https://github.com/tursodatabase/turso/pull/6993), authored by Nyasha and merged by a maintainer on 15 May 2026: preserves AUTOINCREMENT metadata during schema rewrite after DROP COLUMN, with regression coverage including database reopen behavior.
- [Turso #7117](https://github.com/tursodatabase/turso/pull/7117), authored by Nyasha and merged by a maintainer on 18 May 2026: removes stale sequence metadata during an ALTER COLUMN transition. A maintainer added the final reopen regression commit; credit the contribution accurately.
- [CrossHair #413](https://github.com/pschanely/CrossHair/pull/413), authored by Nyasha and merged by the maintainer on 21 May 2026: moves callable normalization into the C tracer while preserving dispatch/keyword behavior, with bound-method, callable-instance, descriptor-error, and reference-stability tests.
- No newer independently maintainer-accepted upstream contribution was identified. Later SprintStack PRs inspected in another namespace were merged by Nyasha; do not add those to the external-maintainer acceptance count.

Suggested compact CV wording:

> Authored two maintainer-merged Rust correctness fixes in Turso's SQLite-compatible engine, covering schema transitions and sequence metadata. Contributed a Python/C tracer change to CrossHair with regressions for callable dispatch and error behavior.

Keep direct PR links beside the corresponding claims. A project name or PR count alone does not convey the engineering problem.

### Supporting-project comparison

Guard Rail public `main` is `ebca64c960ade0959378735423e2bd79e48040d8`. Its [forwarding code](https://github.com/nyashahama/guard-rail/blob/ebca64c960ade0959378735423e2bd79e48040d8/guard-rail-engine/src/proxy/forward.rs) strips runtime credentials before upstream requests, and its [replay engine](https://github.com/nyashahama/guard-rail/blob/ebca64c960ade0959378735423e2bd79e48040d8/guard-rail-engine/src/replay/engine.rs) supports recorded/current policy evaluation. [Public CI succeeded on 25 May 2026](https://github.com/nyashahama/guard-rail/actions/runs/26405547760). This supports a beta policy-runtime story if a target role benefits from it.

DevForge public `main` is `035815a1f4a463f87f339874d62a0f612ff67e2d`. The inspected [service implementation](https://github.com/nyashahama/devforge/blob/035815a1f4a463f87f339874d62a0f612ff67e2d/internal/service/services.go) and [deployment implementation](https://github.com/nyashahama/devforge/blob/035815a1f4a463f87f339874d62a0f612ff67e2d/internal/service/deployments.go) support persisted service/deployment records and authorization. The inspected public tree lacks the actual Terraform/GitHub/cloud provisioning path advertised by its description. No Actions runs were returned. Keep it outside the flagship evidence until that gap is resolved.

## 3. Hiring signal check

The sampled official listings were used as a requirements benchmark on 25 September 2026, not as an eligibility-qualified shortlist.

| Employer signal | What our materials should show | Evidence and limitation |
| --- | --- | --- |
| [Linear Product Engineer](https://jobs.ashbyhq.com/linear/0c7c2e26-0a98-42cf-a47c-9a3999fb513b/): full-stack product execution, interface quality, performance, product/design collaboration | An understandable user workflow followed by a specific engineering decision | ClinicPulse/StrataHQ; do not infer customer collaboration from self-directed project ownership. Listing is North America remote. |
| [Datadog Streaming Platform](https://careers.datadoghq.com/detail/7993551/): Rust, performance-sensitive systems, debugging, observability, developer experience | Reproduction, invariants, persistence boundaries, traceable fixes | Turso, CrossHair, TxProof; no equivalent-scale operations claim |
| [Anthropic Infrastructure](https://job-boards.greenhouse.io/anthropic/jobs/4970314008): production reliability, infrastructure, operational ownership, cross-team work | Explicit failure handling and operational limitations | Useful long-term bar; current evidence does not establish its cloud-scale production or organizational scope |
| [Scale Army Senior Software Engineer](https://jobs.ashbyhq.com/Scale%20Army%20Careers/fd86acf8-7b31-45e7-9e19-9ad13b33d3c3): tenancy, data integrity, integrations, delivery, observability | Scheme boundaries, financial state transitions, recoverable jobs and browser proof | Relevant skill signals; stated six-plus years and production-tenancy requirements are not established by this audit |

Interpretation: the strongest broad narrative combines product delivery with correctness and failure reasoning. Maintain a product/backend CV and a systems/backend variant from the same facts. A Java-specific selection is useful when a role actually calls for it. Avoid a headline containing every language or presenting all lanes as equally established expertise.

## 4. CV implementation

1. **Create a small evidence register.** Each claim records the problem, personal contribution, public source/revision, verification type/date, maturity, and known limit. Use a straightforward Markdown/YAML document; no new content platform is needed.
2. **Resolve identity and chronology.** Apply the established email and current domain everywhere. Label self-directed work explicitly. Use a January 2023 start for a specific product only if its chronology supports it; separate the overall engineering timeline from dated project work. GitHub repository creation dates alone neither establish nor disprove an earlier project start. Preserve coursework-based education wording. Earlier career records permit only a high-level confidential full-stack/C# statement; dates, title, employer, stack detail, and outcomes need an approved factual basis before a fuller employment entry is published.
3. **Write the main CV.** Aim for one readable page, roughly 450–550 words, using the existing RenderCV engineering theme and approximately 10.5–11-point body text. Preserve legibility if the final verified employment history requires a second page. Use: short headline and contact block; two-line summary; selected engineering experience/projects; upstream contributions; focused toolkit; education. Give ClinicPulse and StrataHQ two distinct bullets each, TxProof one or two, and the upstream work compact direct links.
4. **Remove repetition.** Each achievement appears once. Replace broad inventory bullets with a problem, mechanism, and verifiable result or test boundary. Move secondary technologies below the evidence. Remove the historical 543-test figure from the main narrative; preserve dated verification detail in the case study if useful.
5. **Create the systems/backend variant.** Lead with TxProof and upstream persistence/tracer work, then use the products as evidence of delivery breadth. Keep the same dates, maturity labels, links, education, and factual boundaries. Retain Java as a supported role-specific lane; keep C++ algorithm practice and AWS study accurately scoped.
6. **Render and audit.** Generate PDFs, extract text, inspect every rendered page, check links and metadata, and compare the selected PDF to the portfolio download byte for byte. Update the exact CV hash expectation only after approving the intended artifact.

The August one-page draft is a useful fact source; its dense language list and 9.3-point typography should not dictate the new design.

## 5. Portfolio content implementation

Keep the approved visual direction. Change the content hierarchy and evidence depth:

- **Hero:** make the engineer's focus explicit in one short line. Follow it with a compact, useful proof path to the two product stories, TxProof, and upstream contributions. Preserve Work/CV/Contact access.
- **Flagship exhibits:** ClinicPulse and StrataHQ stay first. Lead with the user problem and the hardest engineering decision. Provide actual seeded workflow captures and a short narrated or captioned walkthrough. Keep concept art labelled; it should not be the only visible product evidence.
- **Systems exhibit:** add TxProof as a prominent third story with a small, readable failure trace, the invariant that failed, and a replay/inspection artifact. Identify the reference application and bounds.
- **Additional work:** retain the Java backend and its existing `/work/ecommerce-search-backend` URL. It can appear in a smaller supporting-work block. Guard Rail is optional for the systems variant; do not force six equally prominent projects.
- **Upstream section:** present the concrete Turso persistence problem and CrossHair native boundary change, with direct PR links and exact attribution. Make this section reachable without reading a long skills catalog.
- **Case studies:** give each a distinct problem, role, constraints, key decisions, failure case, evidence, and current limitations. The current detail pages largely repeat homepage bullets; expand them into genuine engineering explanations.
- **Experience and toolkit:** clearly identify independent projects, add only authorized professional facts, and shorten the skills inventory to technologies tied to evidence.

Proposed serializable project fields: `slug`, `category`, `featured`, `maturity`, `problem`, `role`, `constraints`, `decisions`, `failureCase`, `verification`, `limitations`, `evidenceLinks`, and `media`. Add only fields used by the actual layouts. Select featured projects by slug/category rather than array position.

## 6. Linked GitHub and demo work

- Add the TxProof root README and reviewer quickstart before directing substantial recruiter traffic there. Include one screenshot or terminal transcript of a counterexample artifact, exact local setup, replay/inspection commands, limitations, and links to the implementation and tests.
- Align the GitHub profile headline with the chosen CV narrative. Suggested priority: ClinicPulse, StrataHQ, TxProof, Java backend, then a well-supported secondary project if useful. Directly link upstream PRs instead of implying ownership of an entire upstream engine.
- Clean unsupported descriptions such as critical-infrastructure deployment, compliance guarantees, and unimplemented cloud provisioning. A public repository description is not evidence that the advertised behavior exists.
- In StrataHQ, inspect `components/StatsBar.tsx`, `QuoteSection.tsx`, `InsightsSection.tsx`, `Hero.tsx`, and `CTASection.tsx`. Remove unverified adoption/testimonials/results or clearly label demonstrative data where appropriate. Preserve authentic operational functionality.
- Use ClinicPulse's existing `npm run capture:showcase` workflow in an isolated, seeded environment to collect real product evidence. Its showcase artifacts are intentionally ignored by git; the absence of checked-in screenshots does not mean the capture workflow is missing.
- Treat private systems projects as optional future proof after an explicit publication/sanitization decision. Do not expose private repositories or confidential implementation details through public case studies.

## 7. Delivery order and acceptance

| Stage | Deliverable | Acceptance |
| --- | --- | --- |
| 1. Truth and consistency | Approved fact register; identity/date corrections; Strata claim cleanup list | Every claim has a source and maturity label; unresolved employment facts remain clearly bounded |
| 2. Evidence entry points | TxProof README/quickstart/artifact; real flagship walkthrough captures | A reviewer can understand the problem quickly and inspect a concrete failure/decision without searching the repo |
| 3. CV writing | Main RenderCV YAML/PDF and systems/backend variant | Legible scan, no repeated bullets, accurate chronology, working links, clean extracted text and complete visual QA |
| 4. Portfolio content | Revised hero, product narratives, TxProof exhibit, deeper case studies | Strong evidence is accessible in the first few interactions; existing project URLs remain valid; no unsupported impact claims |
| 5. Cross-surface verification | Synchronized PDF/contact/domain/profile and verified published links | Download hash matches the selected RenderCV output; tests/build/browser checks pass; publication revision is recorded |

### Exact implementation surfaces

| Location | Change |
| --- | --- |
| `projects/rendercv_output/nyasha_hama_cv.yaml` | Canonical main narrative and identity |
| `projects/rendercv_output/nyasha_hama_cv_systems.yaml` (new) | Focused systems/backend variant |
| Portfolio `lib/data.ts` | Identity, positioning, evidence-backed project data, TxProof |
| Portfolio `components/sections/HeroSection.tsx`, `AboutSection.tsx`, `ExperienceSection.tsx`, `OpenSourceSection.tsx`, `ProjectsSection.tsx`, `SkillsSection.tsx` | Content hierarchy, claim specificity, evidence navigation |
| Portfolio `app/work/[slug]/page.tsx` | Deeper case-study sections and accurate attribution |
| Portfolio `app/layout.tsx`, `app/opengraph-image.tsx`, `app/work/[slug]/opengraph-image.tsx` | Consistent headline/description/share metadata |
| Portfolio `public/nyasha_hama_cv.pdf` | Copy the selected, verified canonical PDF |
| Portfolio `tests/portfolio-content.test.mjs`, `tests/project-routing.test.mjs` | Replace stale headline/count contracts; preserve factual/route/CV integrity |
| Portfolio `app/work/[slug]/page.tsx` contact link | Replace the separately hardcoded email with the canonical contact source |
| GitHub profile repo and selected project READMEs | Align narrative and make proof discoverable |
| StrataHQ landing components listed above | Resolve unsupported public claims before interview traffic |

### Verification commands and evidence

During CV implementation: `rendercv --version`, `rendercv render nyasha_hama_cv.yaml`, `rendercv render nyasha_hama_cv_systems.yaml`, `pdfinfo`, `pdftotext -layout`, `pdftotext -bbox`, `pdftoppm`, and `sha256sum` against the portfolio PDF. Confirm output paths before rendering so tailored variants cannot overwrite the canonical document accidentally.

During portfolio implementation: `npm test`, `npm run lint`, `npm run build`, followed by desktop/mobile checks of hero copy, project/detail navigation, maturity labels, evidence links, and CV download. Test the TxProof slug, preserve the Java route, and verify that contact details and metadata agree. A test should protect facts and navigation outcomes rather than permanently freeze marketing phrasing.

During evidence preparation: record exact SHA, command, relevant output, and environment for any newly claimed result. Historical CI must retain its date. A simulated provider or seeded database must remain identified. Do not turn test counts, repository volume, or coding-problem counts into unsupported business impact.

## 8. Interview story package

Prepare five concise stories alongside the writing: ClinicPulse retry/conflict recovery; StrataHQ ambiguous payment matching; TxProof reproducibility and reset safety; Turso persistence across schema change/reopen; CrossHair callable behavior at the Python/C boundary. Each story should answer: what failed, what Nyasha changed, why that design, how it was checked, what remains limited, and what would change under real production load.

The objective is a coherent set of claims that Nyasha can explain and a reviewer can verify. Production operations, organizational scope, and customer outcomes remain valuable future evidence; the rewrite should neither invent them nor obscure the technical work already available.
