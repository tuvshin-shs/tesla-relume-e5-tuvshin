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
app/                 root layout (Inter font), globals.css (theme tokens)
app/(site)/          Tesla home page + its layout (Navbar, Footer)
app/styleguide/      /styleguide — REBA design system (reba.mn): tokens + components, Onest/Literata fonts
components/reba/     RebaButton, IconButton, Eyebrow, SectionHead, RebaCard (REBA styles, `reba-*` tokens)
components/ui/       Button, Section, SectionTitle
components/layout/   Navbar (client), Footer
components/sections/ Hero, FsdShowcase, ProductCarousel (client), OfferGrid, ChargingMap
components/          ProductCard, OfferCard, Stat, VideoPlayer (client)
data/                products, offers, navigation links, reba-tokens — edit content here
public/assets/       images and icons exported from Figma
legacy/              the original static HTML/CSS/JS version, kept for reference
```

Theme tokens (colors, type scale, page gutter, section padding) live in `app/globals.css`.
