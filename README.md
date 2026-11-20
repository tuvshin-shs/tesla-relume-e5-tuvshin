# Tesla landing page

Next.js (App Router) + TypeScript + Tailwind CSS v4, built from the Relume Figma kit.

## Run

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build + type check
```

## Structure

```
app/                 root layout (Inter font with Cyrillic, lang="mn"), globals.css (theme tokens), not-found
app/(site)/          Mongolian site pages + layout (Navbar, Footer):
                       /                     home
                       /[model]              model pages: model3, modely, modelyl, cybertruck, roadster
                       /[model]/design       configurator (?trim=…) → order form
                       /drive                demo drive form (?model=…) + Cal.com booking
                       /charging             charging info, cost calculator, winter tips
                       /fsd  /offers  /support (FAQ, contact form, newsletter)
app/styleguide/      /styleguide — Tesla Design System (tesla.com `--tds-*` tokens): colors, type, spacing, motion, components
app/reba-styleguide/ /reba-styleguide — REBA design system (reba.mn): tokens + components, Onest/Literata fonts
components/tds/      TdsButton, TdsLink (tesla.com styles, `tds-*` tokens)
components/reba/     RebaButton, IconButton, Eyebrow, SectionHead, RebaCard (REBA styles, `reba-*` tokens)
components/ui/       Section, SectionTitle
components/layout/   Navbar (client: vehicles menu, phone menu), Footer
components/sections/ Hero, FsdShowcase, ProductCarousel (client), OfferGrid, ChargingMap
components/vehicle/  Configurator (client), SpecList
components/forms/    fields, DemoDriveForm, ContactForm, NewsletterForm (client, validated)
components/charging/ ChargingCalculator (client)
components/          ProductCard, OfferCard, Stat, VideoPlayer (client), CalEmbed
data/                vehicles (lineup, trims, prices, options), offers, navigation, tesla-tokens, reba-tokens
lib/                 cn, format (USD / ₮), validate (e-mail, Mongolian phone)
public/assets/       images and icons exported from Figma
legacy/              the original static HTML/CSS/JS version, kept for reference
```

The site is styled only with the `tds-*` tokens in `app/globals.css` (documented at `/styleguide`).
All copy is Mongolian; vehicles, prices and specs are edited in `data/vehicles.ts`.

Forms validate in the browser and show a confirmation, but **do not send data anywhere yet** —
look for the `TODO` in each form's submit handler to connect an API route, CRM or e-mail service.
