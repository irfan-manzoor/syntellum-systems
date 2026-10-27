# Syntellum Website Audit & Improvement Report

Oct 27, 2026 · @Moin Hashmi

## Executive summary

**Overall score: 56/100.** The site reads like a credible, engineering-led AI consultancy, but search engines can barely see it and buyers get almost no proof that the company has delivered before. It needs **targeted optimisation plus a technical rebuild of how the site is served**, not a visual redesign.

What works: a coherent dark, technical look; clear and specific copy about RFQ-to-quote automation; well-defined engagement models (for example, a 2–4 week discovery and a 4–8 week proof of concept); and strong messaging on data privacy and human-in-the-loop review.

What holds it back:

1. **Invisible to search and AI crawlers.** The page is built entirely in JavaScript and uses `#hash` URLs, so to any crawler that doesn't run JavaScript the whole site is one empty page. There is no `robots.txt` or sitemap, and the menu uses buttons rather than real links.
2. **No proof of delivery.** There are no case studies, client logos, team bios, company registration details, office address, LinkedIn profile or certifications. For a company selling access to proprietary ERP data and pricing, this is the biggest barrier to conversion.
3. **Unclear positioning.** The sharpest offer (AI that turns industrial RFQs into ERP quotes) sits behind a generic headline ("Make Your Operations Work Smarter") and three sectors that have no evidence behind them.
4. **Geographic ambiguity.** The `.si` (Slovenia) domain and the stated headquarters in Pakistan point in different directions, and the site doesn't say that it serves all markets or address GDPR.
5. **Technical shortcuts.** The live JavaScript is a React *development* build, there is no analytics to measure leads, and the form sends data to a third-party relay that the privacy notice doesn't mention.

The top ten changes in the final section fix these problems while keeping the current visual identity.

## 1. Understanding the business

Syntellum Systems is an early-stage **B2B AI engineering and systems-integration consultancy**. Its strongest stated focus is automating RFQ-to-quote workflows for industrial distributors and manufacturers. **V** = verified on the website; **A** = reasonable assumption.

| Dimension | Finding | Basis |
| --- | --- | --- |
| Industry | Enterprise AI, workflow automation and systems integration services | V |
| Offerings | Four services: AI Engineering & Applied AI; Intelligent Workflow Automation; Enterprise Software & Systems Integration; AI Program Delivery & Consulting | V |
| Engagement models | AI Discovery (2–4 weeks), Proof of Concept (4–8 weeks), Fixed-Scope Implementation, Dedicated Engineering, Systems Integration, Ongoing Support (SLA). No published pricing. | V |
| Primary segment | Industrial distributors, manufacturers and B2B supply-chain operators handling high RFQ volumes (labelled "Primary commercial focus") | V |
| Secondary segments | Professional services, data-intensive organisations, healthcare administration | V |
| Partner segment | Consultancies and system integrators looking for an engineering delivery partner (white-label or sub-contract) | V |
| Buyers | Operations directors, sales/estimating managers, CIOs/IT leads, owners of mid-market firms | A |
| Business model | B2B professional services: project and retainer revenue | V (engagement models) / A (revenue mix) |
| USP (as claimed) | Engineering-led, "deterministic" AI with human-in-the-loop review, deployment inside the client's environment, no training on client data, client owns the code | V |
| Geography | "Operational base: Pakistan"; serves "domestic and international" clients. The domain is Slovenia's `.si`. The site names no target market; the owner confirms all markets (EU incl. Slovenia, UK/US, Pakistan/Middle East). | V (facts) / confirmed by owner |
| Competitors | RFQ/order-automation products (Conexiom, Endeavor) and document-AI platforms (Rossum); AI engineering firms, including Pakistan-based ones (10Pearls, Tkxel) | A |
| Website purpose | Lead generation: qualified project enquiries through the contact form and email | V |
| Maturity signals | © 2026; no case studies, team, address or client names; site last modified 25 Oct 2026 | V |

**What success looks like for this business:** within 10 seconds, an operations or IT leader at an industrial distributor should understand *"they turn our emailed RFQs into ERP quotes, safely"*, believe it from evidence (case study, demo, named people, security posture) and take a low-risk next step (for example, "Send us 5 sample RFQs for a free feasibility check"). Partners should find a separate route that explains the delivery model.

**Target markets (confirmed):** the business serves all markets: the EU (including Slovenia), the UK and US, and Pakistan and the Middle East. The `.si` domain therefore needs explaining: EU buyers will read it as a Slovenian company, and buyers elsewhere as an unusual choice. GDPR becomes the privacy baseline for every region, and the recommendations below assume a multi-market setup.

## 2. Evaluation criteria, method and limitations

The site was judged against what a **mid-market industrial buyer evaluating a new AI vendor** needs before sharing ERP access and pricing data. That buyer needs clarity of offer, proof of delivery, security assurance, a low-risk first step and discoverability on Google.

**What was examined on 27 Oct 2026**

- All six views of the site: Home, About, Services, Industries, Our Approach and Contact, plus the footer and the Privacy notice popup.
- The rendered DOM: headings, meta tags, canonical tags, structured data, image alt text and link and button markup.
- Raw server HTML and HTTP response headers, compared with the rendered page.
- Requests for `/robots.txt`, `/sitemap.xml`, `/favicon.ico` and a non-existent URL.
- The production JavaScript bundle (size, build type, form endpoint and analytics).
- Contact form client-side validation, tested by submitting the form **empty**. No real data was sent.
- Mobile layout at 375×812: horizontal overflow, menu and tap-target sizes.
- Five competitor homepages.

**Not tested or not reliable**

- **Form delivery.** The form was not submitted with data, so delivery to the inbox is unconfirmed.
- **Core Web Vitals.** No field data was available. A lab LCP reading was distorted by in-page navigation, so no speed score is reported. Bundle sizes are reported instead.
- **Search rankings, backlinks, traffic and conversion rates.** No Search Console or analytics access, and the site has no analytics installed.
- **Full WCAG audit.** Only basic checks were run (alt text, labels, tap targets).
- **Company registration, reviews and off-site presence.** Web search was unavailable in this session.

**Scoring method:** seven areas scored 0–100 against the criteria above and weighted by commercial impact. Business alignment, UX, content, SEO, CRO and technical quality are 15% each; UI is 10%, because the visual design is already the strongest area.

## 3. Website audit

Content and design are well above average for an early-stage consultancy. Discoverability, proof and measurement are well below it.

### 3.1 Business alignment & brand positioning — 68/100

- **Strong:** the copy speaks fluently to operational pain points (re-keying RFQs, ERP silos, approval tracking). It names real systems (SAP, NetSuite, Dynamics, Oracle) and states a clear engineering stance: "AI models as functional components within a broader, deterministic software system."
- **Weak:** the homepage H1, "Make Your Operations Work Smarter", could belong to any IT firm. The differentiated offer, RFQ-to-quote automation for industrial B2B, first appears in the fourth section.
- **Diluted focus:** four sectors and four services are presented with equal weight. Healthcare in particular has no evidence behind it and weakens the industrial specialism.
- **Missing for this business:** case studies or worked examples, team or leadership, company legal details, a partner programme page and a security/data-handling page.

### 3.2 UX & navigation — 66/100

- Six clear menu items, a sticky "Discuss a project" button and a working mobile hamburger menu. There is no horizontal scroll at 375 px.
- **Menu and footer items are `<button>` elements, not links.** Users cannot open pages in a new tab, copy a link or share a specific page reliably.
- **The homepage repeats the other pages.** Capabilities, methodology, problems, sectors, differentiators and services all appear on Home and again on their own pages. Home ends up very long while adding little.
- "View Details", "Learn more" and "Read capability details" lead to whole pages rather than the specific item.
- Minor bug: the Privacy popup stayed open after navigating to another page.
- On mobile, footer links (20 px tall) and "Learn more" links (16 px) are below the 24 px minimum target size in WCAG 2.2.

### 3.3 UI & visual design — 74/100

- A consistent dark "command centre" look with a cyan accent and clean typography (Plus Jakarta Sans). It feels modern and technical and suits an engineering brand.
- Good spacing, clear eyebrow labels ("CAPABILITIES", "METHODOLOGY") and readable card layouts. Interactive elements (RFQ pipeline stepper, solution matcher) add depth.
- **Weaknesses:** almost no real imagery (three stock-style photos), no diagrams or product screenshots of what is actually built, and no people. Content fades in on scroll, so large areas appear blank while scrolling or in screenshots. Three font families (Orbitron, Plus Jakarta Sans, JetBrains Mono) add weight. There is no favicon.

### 3.4 Content quality & communication — 70/100

- Grammar and tone are professional and consistent. Services are described well, each with *problems addressed, solution components, applications and architecture discipline*.
- **Jargon-heavy for the business buyer:** "deterministic validation layers", "idempotent operations", "dead-letter queues". These terms suit CTOs but are opaque to an operations director, and there is no plain-language summary.
- **Unsupported claims:** "technical estimators… spend over 40% of their working hours…" has no source, and phrases such as "no transaction is ever lost" and "zero external model training" are absolute promises with no evidence.
- **CTA wording varies too much.** More than eight variants ("Discuss a project", "Discuss your requirements", "Connect with our team", "Initiate stage 01 discovery" and others) all lead to the same form.
- Missing: FAQ, insights or blog, case studies, team and an "Our story" section.

### 3.5 SEO & online visibility — 30/100

- **Client-side-only rendering (verified):** the raw HTML contains only `<title>`; the body is empty until JavaScript runs. A standard crawler fetch returned metadata only. Google can render JavaScript, but with a delay. Bing, LinkedIn and Slack link previews and AI assistants (ChatGPT, Perplexity) often cannot.
- **Hash URLs (`/#about`, `/#services`):** search engines ignore the part after `#`, so all six pages count as **one URL**. Service and industry pages cannot rank separately. Canonical tags pointing to `https://syntellum.si/#about` do not help.
- **No `robots.txt`, no `sitemap.xml`:** both return the homepage HTML with status 200. Every non-existent URL also returns 200, which is a "soft 404".
- The same meta description is used on every view. Page titles do change per view ("About Us | Syntellum Systems"), which is good.
- The heading hierarchy is clean (one H1, then H2 and H3). Alt text exists on images.
- Structured data exists (Organization, WebSite), but the `logo` points to the hero photo and there is no address, `sameAs` or `areaServed`.
- **Keyword gap:** high-intent phrases such as "RFQ automation", "quote automation for distributors", "AI order entry", "ERP integration services" and "document AI" have no dedicated landing pages.
- No Google Business Profile, LinkedIn link or local signals for any market (not verifiable off-site).

### 3.6 Conversion rate optimisation — 45/100

- **Good:** a CTA in every section; a short, well-structured form (name, business email, company, interest, description and consent); client-side validation works (verified); the promise of a reply "within 1 to 2 business days"; an NDA offer; a direct email address with a copy button.
- **Missing trust signals:** no logos, testimonials, case studies, metrics, named people, photos, address, phone, registration number, certifications (ISO 27001, SOC 2) or partner badges. Competitors show all of these.
- **Only high-commitment entry points:** every route leads to "discuss a project". There is no lower-risk offer such as a free RFQ sample test, a 30-minute call booking, an ROI calculator or a downloadable guide.
- **No measurement:** no analytics or conversion tracking is installed. The business cannot see where leads come from or where visitors drop off.

### 3.7 Technical quality & performance — 45/100

- **HTTPS active** (Hostinger CDN, HTTP/3, Brotli). `upgrade-insecure-requests` is set.
- **The production site runs a React development build** (944 `jsxDEV` calls in the bundle). It is 794 KB uncompressed and 202 KB over the network, slower than a production build, and it exposes source file names and line numbers.
- **Missing security headers:** no HSTS, X-Frame-Options/`frame-ancestors`, Referrer-Policy or Permissions-Policy were observed. These matter for a vendor selling security.
- **Form data path:** submissions are posted to `formsubmit.co` (a third-party relay), with `contact.php` as a fallback. The privacy notice does not mention this processor. There is no CAPTCHA or honeypot on the site itself.
- Images are JPGs of 122–213 KB and could be served as WebP or AVIF at about half the size. Google Fonts are loaded from Google's servers, which is a GDPR concern if the EU is a target market.
- **Privacy notice gaps (GDPR, relevant given the `.si` domain):** no named legal entity or controller, legal basis, retention period, data-subject rights, processors or contact for privacy requests.
- No broken internal routes were found among the six views. The `/#services` hash alone did not switch the view when entered directly (the menu button did), which may affect shared links.

## 4. Competitor & industry benchmarking

Every comparable site leads with **proof** (named customers, quantified outcomes and security certifications). Syntellum leads with methodology and has no proof. That is the main competitive gap; design and content depth are not.

| Site | Type | Value proposition | Proof shown | Security / trust | Conversion paths |
| --- | --- | --- | --- | --- | --- |
| [Conexiom](https://conexiom.com) | SaaS: order & invoice automation for distributors | "Automate orders and invoices with AI" | Logos (Fastenal, Graybar, Parker Hannifin), Rexel Canada quote, metrics (6,000+ customers automated, 200,000 order lines) | SOC 2 Type II, GDPR-aligned, encryption specifics | Request a demo, whitepaper, "See how it works" |
| [Rossum](https://rossum.ai) | SaaS: document AI | "Offload paperwork to AI agents" | Six case studies with metrics (e.g. Morton Salt 95% time saved per document), analyst badges (IDC, Forrester, G2) | Security & compliance page, status page | Free demo, product tour, 14-day trial, maturity quiz |
| [Endeavor](https://www.endeavor.ai) | AI for industry & distribution | "Do the impossible" (frontier AI for industrial work) | 14 customer logos, outcome metrics (98% BOM accuracy), video stories | SOC 2 Type II, HIPAA, BYOC/on-prem, SSO | Single "Get in touch" |
| [10Pearls](https://10pearls.com) | AI & digital engineering services (Pakistan delivery centres) | "AI-Native Global Digital Engineering Partner" | Fortune 500 logos, 5 case studies, 1,400+ staff, awards (Inc. 5000) | Offices on 4 continents | "Hop on a discovery call" with a 3-step explainer, AI framework |
| [Tkxel](https://tkxel.com) | AI & software services (Lahore + US/EU offices) | "Reimagine your business with AI" | Case studies with % outcomes, named testimonials, 800+ staff | ISO 27001/9001/20000, CMMI 3, OpenAI partner | Let's talk, AI workflow discovery agent, gated whitepapers, webinars |
| **Syntellum** | AI engineering consultancy | "Make Your Operations Work Smarter" | **None** | Claims only (no certifications, no named entity) | Discuss a project, email |

**Where Syntellum is already competitive:** its explanation of *how* an RFQ pipeline works (the interactive four-step stepper), its published engagement durations, its honest scope statement for healthcare and its vendor-neutral positioning. Several competitors are vaguer on these points.

**Practices worth adapting (not copying)**

1. **The outcome-metric case study.** Small firms can publish anonymised studies ("A 40-person valve distributor in Central Europe") with before/after quote turnaround.
2. **A dedicated security and trust page.** Conexiom and Endeavor list deployment options, encryption and audits. Syntellum can list what it does (on-prem/VPC deployment, no model training on client data, NDA-first) and its roadmap to ISO 27001.
3. **Low-commitment entry points.** Rossum's quiz and tour and Tkxel's "see where AI fits" agent show the value of a self-serve step. A fitting version is an **"RFQ automation readiness check"** or a **sample-document test**.
4. **Visible people and places.** The Pakistan-based services firms (10Pearls, Tkxel) build trust with named leaders, offices and partner badges. This matters most for an offshore vendor selling to Western buyers.
5. **Content hubs.** Tkxel and Rossum run blogs, guides and webinars that capture search demand. Syntellum has none.

*Note: competitor sites were reviewed on their homepages only, as of 27 Oct 2026; their claims are reported as published, not verified.*

## 5. Issues & improvements register

24 findings: 5 critical, 10 high, 7 medium and 2 low, sorted by priority.

| # | Area | Current issue | Evidence | Business impact | Recommendation | Priority | Effort |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | SEO / Technical | Site renders only in the browser; the raw HTML body is empty | Raw HTML of `/` is 1.5 KB with only `<title>`; crawler fetch returned metadata only | Weak or no indexing by Bing, AI assistants and social previews; slower indexing by Google | Pre-render each page to static HTML (e.g. a Vite SSG plugin, Astro or Next.js static export) | Critical | Medium |
| 2 | SEO / UX | Hash routing (`/#about`) makes all pages one URL | Canonical tags point to `/#about`, `/#industries` | Services and industries cannot rank; pages cannot be shared reliably | Real paths: `/services/rfq-automation`, `/industries/industrial-distribution` and so on | Critical | Medium |
| 3 | CRO / Trust | No proof of delivery | No case studies, logos, testimonials or metrics on any page | Buyers will not share ERP access and pricing data with an unproven vendor, so leads are lost | Publish 2–3 case studies (anonymised if needed) with before/after metrics, plus demos and summaries of any other projects | Critical | Medium |
| 4 | Trust / Legal | No legal entity, address, registration or people | Footer shows only "Operational base: Pakistan" and an email address | Fails basic vendor due diligence; looks like a shell to procurement teams | Add the registered company name and number, address, phone, leadership bios and LinkedIn | Critical | Low |
| 5 | Technical | React development build deployed to production | 944 `jsxDEV` calls; 794 KB JS (202 KB compressed) | Slower load; exposes source paths; looks unprofessional to technical buyers who inspect it | Rebuild with `NODE_ENV=production` (`vite build`) | Critical | Low |
| 6 | Positioning | Generic hero; the main offer is buried | H1 "Make Your Operations Work Smarter"; RFQ focus first appears in section 4 | Visitors don't see the specialism; looks interchangeable with generic IT firms | Lead with the industrial RFQ-to-quote offer (see section 6) | High | Low |
| 7 | SEO | No `robots.txt` or `sitemap.xml`; soft 404s | Both URLs and `/does-not-exist-123` return the homepage with status 200 | Crawl confusion; duplicate-content signals | Add both files; return a real 404 status for unknown paths | High | Low |
| 8 | UX / SEO | Menu and footer use `<button>` instead of `<a href>` | Accessibility tree shows buttons; no links in `<nav>` | No crawlable internal links; no open-in-new-tab or link sharing | Use real anchor links to real paths | High | Low |
| 9 | CRO | No low-commitment conversion offer | Every CTA leads to the same project form | Early-stage researchers leave without a trace | Add a "Free RFQ automation check" (upload 3–5 sample RFQs) and a call-booking link | High | Medium |
| 10 | Analytics | No analytics or conversion tracking | No analytics script in the bundle or page | Cannot measure leads, sources or drop-off | Install privacy-friendly analytics (e.g. Plausible) and track form submits | High | Low |
| 11 | Legal / Privacy | Privacy notice lacks GDPR essentials and omits the form processor | The notice names no controller, legal basis, retention or rights; form posts to `formsubmit.co` | Regulatory risk if serving EU/Slovenia; undermines the "data privacy" claims | Write a full privacy policy page; name processors; or route the form through your own server | High | Low |
| 12 | Trust / Security | No security page or certifications | Claims ("zero external model training") without evidence | Security reviews stall in enterprise procurement | Add a Security & Data Handling page; state the ISO 27001 roadmap; offer a security questionnaire pack | High | Medium |
| 13 | Geography | Multi-market reach not stated (`.si` domain vs Pakistan HQ) | Footer, About and privacy notice | Buyers in each region can't tell they're served; search engines get no regional signals | State all regions served (EU, UK/US, Pakistan/Middle East); add `areaServed`; add regional contact routes and time-zone coverage; keep English as the main language | High | Medium |
| 14 | Technical / Security | Missing security headers | Response headers show only CSP `upgrade-insecure-requests` | Weak security posture for a vendor selling security | Add HSTS, `frame-ancestors`, Referrer-Policy, X-Content-Type-Options and Permissions-Policy | High | Low |
| 15 | SEO / Content | No landing pages for high-intent searches | No page for "RFQ automation", "AI quote automation" or "ERP integration" | Missed organic demand from buyers | Create service and use-case pages (see section 6) | High | Medium |
| 16 | SEO | The same meta description on every view | All views share one description | Low click-through from search results | Write a unique title and description per page | Medium | Low |
| 17 | Content | Unsourced statistic and absolute promises | "over 40% of their working hours"; "no transaction is ever lost" | Credibility risk with sceptical engineers | Cite a source or rephrase as client-observed; soften the absolutes | Medium | Low |
| 18 | Content | Jargon aimed at CTOs, not operations buyers | "deterministic validation layers", "dead-letter queues" | Business decision-makers disengage | Add a plain-language outcome line above each technical block | Medium | Low |
| 19 | UX / Content | The homepage duplicates the inner pages | The same capability, methodology and sector blocks appear twice | Long scroll; diluted message | Shorten Home to a summary and link out to the inner pages | Medium | Medium |
| 20 | Positioning | Four equal sectors, including healthcare, with no evidence | Industries page | Dilutes the industrial specialism | Make industrial B2B primary; group the others as "Other sectors" | Medium | Low |
| 21 | Accessibility | Small mobile tap targets; unlabelled icon buttons | Footer links 20 px and "Learn more" 16 px tall; three buttons with no accessible name | Usability and WCAG 2.2 gaps | Minimum 24 px targets; add `aria-label`s | Medium | Low |
| 22 | CRO | More than eight CTA wordings for one action | "Discuss a project", "Connect with our team", "Initiate stage 01 discovery" and others | Decision friction; diluted intent | Standardise on one primary and one secondary CTA | Medium | Low |
| 23 | Brand / SEO | No favicon; schema `logo` is a photo | `/favicon.ico` returns HTML; JSON-LD logo is the hero JPG | Unpolished browser tabs and search snippets | Add a favicon set and a proper logo file | Low | Low |
| 24 | Performance | Unoptimised images and three font families | JPGs of 122–213 KB; Orbitron, Plus Jakarta Sans, JetBrains Mono | Slower first load, especially on mobile | Use WebP/AVIF, self-host fonts and drop one family | Low | Low |

## 6. Recommended website strategy

Keep the visual identity. Rebuild the delivery layer so each page has a real, pre-rendered URL, re-centre the site on the industrial RFQ-to-quote offer and add a proof layer.

### 6.1 Structure and navigation

&#91;embedded content: Recommended sitemap · 6 menu groups, 4 utility pages\]

Each page is pre-rendered at its own URL. Solutions (highlighted) carries the lead offer, and pages marked "new" do not exist today.

The recommended menu is **Solutions · Industries · Case Studies · How We Work · About · Insights**, with one primary button: **Book a discovery call**. Partners get their own page, linked from About and the footer.

### 6.2 Missing pages and sections

| Page | Why it matters for Syntellum |
| --- | --- |
| Case studies (2–3 to start) | The biggest trust gap; competitors all lead with proof |
| RFQ & Quote Automation (solution page) | Owns the highest-intent search term and the strongest offer |
| Security & Data Handling | Unblocks procurement; turns the privacy claims into specifics |
| Team / Leadership | Named, credentialed people reduce offshore-vendor risk |
| For Partners | A separate route for consultancies and integrators (white-label delivery) |
| Free RFQ Automation Check | A low-risk first step that generates qualified leads |
| Insights / Blog | Captures research-stage search demand; shows expertise |
| FAQ | Answers common objections (data access, ERP support, pricing model, timelines) |
| Privacy Policy and Imprint / Legal | Required for EU credibility; names the legal entity |

### 6.3 Homepage: before and after

| Element | Before | After (suggested) |
| --- | --- | --- |
| Eyebrow | ENTERPRISE AI · AUTOMATION · INTEGRATION | AI FOR INDUSTRIAL DISTRIBUTORS & MANUFACTURERS |
| H1 | Make Your Operations Work Smarter. | Turn Incoming RFQs into ERP-Ready Quotes — in Minutes, Not Days. |
| Subhead | We engineer practical AI, intelligent automation, and connected systems around real business needs. | We build AI that reads your RFQs, matches parts to your catalogue and drafts quotes in SAP, NetSuite or Dynamics. Your estimators approve every one. |
| Primary CTA | Explore our capabilities | Get a free RFQ automation check |
| Secondary CTA | Discuss a project | See how it works (2-min walkthrough) |
| Below the hero | A quote: "Technology creates value…" | A proof strip: client type logos or "Trusted by…", 2–3 outcome metrics, and "Deployed in your cloud · No training on your data · NDA first" |

**Suggested homepage order:** hero → proof strip → the RFQ pipeline (reuse the existing interactive stepper) → one featured case study → the three other services as short cards → how we work (4 steps, condensed) → security promises → team snapshot → final CTA.

### 6.4 Content and messaging

- **Lead with outcomes, then mechanism.** For example, before: "Probabilistic AI models are wrapped inside deterministic validation layers." After: "**Your ERP never receives a bad line item.** Every AI output is checked against your catalogue and pricing rules before it's saved; anything uncertain goes to a person."
- **Back every claim.** Replace "over 40% of their working hours" with a cited source or a client-observed figure ("At one distributor, estimators spent \~2 days per complex RFQ").
- **Standardise CTAs:** primary *Book a discovery call*; secondary *Get a free RFQ check*; on content pages, *Download the guide*.
- **State geography plainly:** for example, "Engineering team in Lahore, Pakistan · Serving clients in the EU, UK, US, Middle East and Pakistan". Back each region with at least one reference or case study as they become available, and show working-hour overlap per time zone.

### 6.5 UX and UI

- Real links in the menu and footer. Shorter homepage. Item-level deep links (for example "View details" goes to `/solutions/systems-integration`).
- Add real visuals: architecture diagrams, an anonymised screenshot of the review interface and team photos. Replace generic stock imagery.
- Show content by default, without fade-in animation, when the visitor's system requests reduced motion. Mobile tap targets of at least 24 px. Labels on icon buttons. A favicon.

### 6.6 SEO

- Pre-rendered pages with unique titles and descriptions, `robots.txt`, `sitemap.xml`, real 404s and self-referencing canonicals.
- **Example page titles:** "RFQ Automation for Industrial Distributors | Syntellum Systems"; "ERP Integration Services: SAP, NetSuite, Dynamics | Syntellum"; "AI Document Processing for BOMs & Spec Sheets | Syntellum".
- Expanded schema: Organization (address, `sameAs` LinkedIn, `areaServed`), a Service entry per solution and FAQPage.
- **Content cluster:** "How to automate RFQ processing", "RFQ-to-quote automation ROI", "AI for SAP Business One quoting", "Human-in-the-loop AI explained for operations teams".
- Off-site: a LinkedIn company page, Clutch / GoodFirms profiles and a Google Business Profile for the office.

### 6.7 Lead generation and conversion

- **Free RFQ Automation Check:** the visitor uploads 3–5 anonymised RFQs under an NDA and receives a short extraction-accuracy report within 5 business days. This tests real fit and starts a conversation with evidence.
- **Call booking** (e.g. Calendly) next to the form, for buyers who prefer to talk.
- **Gated guide:** "The Industrial Distributor's Guide to RFQ Automation", sent by email, with a follow-up sequence.
- **Form tweaks:** add optional "ERP system" and "Monthly RFQ volume" fields to qualify leads. Show the confirmation reference already generated. Name the form processor in the privacy policy.

### 6.8 Additional features (only where justified)

- **RFQ ROI estimator:** RFQs per month × minutes per RFQ × hourly cost gives estimated hours and cost saved. It qualifies leads and makes the value concrete.
- **Short demo video** of the pipeline using sample data. This is cheaper than a live demo and works on LinkedIn.
- **Not recommended yet:** a chatbot, a client portal or multilingual sites beyond the decided target markets. These add cost without clear return at this stage.

## 7. Prioritised action plan

Most of the commercial gain comes from the first two phases. Durations assume one developer and the founder's input on content. # refers to the issues register.

### Quick wins (weeks 1–2)

| Action | # | Business benefit | Complexity |
| --- | --- | --- | --- |
| Rebuild and deploy as a production build | 5 | Faster load; removes exposed source paths that technical buyers may spot | Low (one build command) |
| Add company legal name, address, phone, LinkedIn and founder names to the footer and About page | 4 | Passes basic vendor due diligence | Low |
| Rewrite the hero around RFQ-to-quote automation; standardise the CTAs | 6, 22 | Visitors see the specialism within seconds | Low |
| Add `robots.txt`, `sitemap.xml`, a real 404, a favicon and the security headers | 7, 14, 23 | Cleaner crawling; better security posture | Low (hosting settings) |
| Install privacy-friendly analytics with form-submit tracking | 10 | Leads and their sources become measurable | Low |
| Publish a full privacy policy that names the form processor | 11 | Reduces GDPR risk; matches the privacy claims | Low |
| Fix or soften unsupported claims; add plain-language outcome lines | 17, 18 | Credibility with sceptical engineers and non-technical buyers | Low |

### Short term (weeks 3–8)

| Action | # | Business benefit | Complexity |
| --- | --- | --- | --- |
| Move to pre-rendered pages with real URLs and real links (e.g. a Vite SSG plugin, Astro or Next.js export, keeping the current design) | 1, 2, 8, 16 | Every service and industry can rank, be shared and be read by AI assistants | Medium |
| Publish 2–3 case studies (anonymised if needed) with metrics, plus any demos or project summaries | 3 | Removes the biggest conversion barrier | Medium (needs client permission) |
| Launch the Free RFQ Automation Check and call booking | 9 | Creates a low-risk lead path that qualifies fit | Medium |
| Create a Security & Data Handling page and a Team page | 12, 4 | Unblocks procurement; humanises the brand | Medium |
| State all target regions; update copy, schema (areaServed) and regional contact details | 13 | Clear signal to buyers and search engines | Medium |
| Shorten the homepage; reduce the sectors to one primary and "other" | 19, 20 | Sharper focus; shorter path to the CTA | Low–Medium |
| Fix mobile tap targets, icon labels and reduced-motion behaviour | 21 | Usability and accessibility compliance | Low |

### Long term (months 3–12)

| Action | # | Business benefit | Complexity |
| --- | --- | --- | --- |
| Build solution landing pages and an insights content cluster (1–2 articles a month) | 15 | Steady organic lead flow from high-intent searches | Medium, ongoing |
| RFQ ROI estimator and 2-minute demo video | — | Makes value concrete; strong LinkedIn and sales asset | Medium |
| A For Partners page with the engagement model and a white-label delivery explainer | — | Opens the system-integrator channel the About page already targets | Low–Medium |
| Work towards ISO 27001 (or SOC 2 if US-focused) and show partner badges | 12 | Matches Tkxel and Conexiom on enterprise trust | High |
| Localised pages (Slovenian or German first, Arabic later) once inbound demand from those regions appears | 13 | Local search visibility and buyer comfort | Medium–High |
| Image and font optimisation; ongoing Core Web Vitals monitoring through Search Console | 24 | Faster mobile experience | Low |

## 8. Final assessment

**Verdict: targeted optimisation with a technical re-platform, not a redesign.** The look and most of the copy can stay. What changes is how pages are served (pre-rendered, real URLs), the positioning of the hero and the addition of proof.

&#91;embedded content: Auditor scores · syntellum.si reviewed 27 Oct 2026 · weights set by commercial impact\]

**Scoring methodology.** Each area is scored 0–100 against the criteria in section 2: 80+ is competitive with established peers, 60–79 is sound with gaps, and below 50 means it is actively costing leads. The overall figure is the weighted average shown on the chart. Scores rest on **verified** observations (rendered pages, raw HTML, headers, bundle, form validation, mobile layout). Areas **not tested**, namely form delivery, field Core Web Vitals, rankings, traffic and off-site reputation, are excluded rather than guessed. The technical and SEO scores could change once Search Console and field speed data are available.

| Dimension | Assessment |
| --- | --- |
| Overall effectiveness | Communicates competence to someone who reads it in full; fails to be found, and fails to prove the claims, for everyone else |
| Business suitability | Well suited to the services offered and the engineering-minded buyer; under-serves the operations and procurement buyer who signs off |
| Customer experience | Pleasant and clear on desktop and mobile; long homepage, no shareable page links, a single high-commitment next step |
| Competitive position | Equal or better on explaining *how* the work is done; far behind on proof, security credentials, people and search visibility |

**Strengths to keep:** the dark technical visual identity; the RFQ pipeline stepper and solution matcher; published engagement durations; human-in-the-loop and on-prem/VPC messaging; the honest healthcare scope statement; the short, validated contact form with the NDA offer and the 1–2 day response promise.

**Key weaknesses:** a site invisible to many crawlers; no proof of delivery; no visible legal entity or people; diluted, generic positioning; multi-market reach not stated; no analytics; a development build in production; gaps in the privacy notice.

### Top 10 recommended improvements

1. Pre-render the site with real URLs and real links.
2. Publish 2–3 case studies with before/after metrics. Add demos (such as a pipeline walkthrough on sample data) and summaries of any other projects delivered.
3. Show the legal entity, address, leadership and LinkedIn.
4. Rewrite the hero around RFQ-to-quote automation for industrial B2B.
5. Deploy a production build and add security headers.
6. Add `robots.txt`, `sitemap.xml`, real 404s and unique meta per page.
7. Launch a Free RFQ Automation Check and call booking as low-risk entry points.
8. Install privacy-friendly analytics with conversion tracking.
9. Publish a Security & Data Handling page and a full privacy policy that names the processors.
10. State that Syntellum serves all markets (EU, UK/US, Pakistan/Middle East) and align domain messaging, schema and regional contact details.

**Why not a full redesign:** the problems are structural (rendering, URLs), evidential (proof, people) and in the messaging. None of them is aesthetic. A redesign would cost more and delay the fixes that matter.

## Sources

- [syntellum.si](https://syntellum.si): all six views, footer, privacy notice, raw HTML, headers and JS bundle, inspected 27 Oct 2026
- [Conexiom](https://conexiom.com), [Rossum](https://rossum.ai), [Endeavor](https://www.endeavor.ai), [10Pearls](https://10pearls.com), [Tkxel](https://tkxel.com): homepages reviewed 27 Oct 2026
