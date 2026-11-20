/**
 * REBA design system tokens, as published on https://reba.mn (CSS custom properties).
 * The same values are registered as Tailwind theme tokens with a `reba-` prefix in app/globals.css.
 */

export type ColorToken = { name: string; token: string; value: string; usage: string; dark?: boolean };

export const colorGroups: { group: string; colors: ColorToken[] }[] = [
  {
    group: "Core",
    colors: [
      { name: "Ink", token: "--c-ink", value: "#19140E", usage: "Text, headings, footer", dark: true },
      { name: "Muted", token: "--c-muted", value: "#6B5D52", usage: "Secondary text, eyebrows", dark: true },
      { name: "Paper", token: "--c-paper", value: "#FFFFFF", usage: "Page background" },
    ],
  },
  {
    group: "Warm neutrals",
    colors: [
      { name: "Beige", token: "--c-beige", value: "#EBE4D9", usage: "Section backgrounds" },
      { name: "Line", token: "--c-line", value: "#D4CCC0", usage: "Borders, dividers" },
      { name: "Taupe", token: "--c-taupe", value: "#BAB2A5", usage: "Accent, primary button" },
      { name: "Taupe hover", token: "--c-taupe-hover", value: "#A9A093", usage: "Accent hover" },
    ],
  },
  {
    group: "Brown",
    colors: [
      { name: "Brown", token: "--c-brown", value: "#2B180A", usage: "Deep accent surfaces", dark: true },
      { name: "Brown muted", token: "--c-brown-muted", value: "#94877C", usage: "Muted text on brown", dark: true },
    ],
  },
  {
    group: "On dark",
    colors: [
      { name: "On dark", token: "--c-on-dark", value: "#FFFFFF", usage: "Text on photos / ink" },
      { name: "On dark muted", token: "--c-on-dark-muted", value: "#DDD5C9", usage: "Secondary text on dark" },
    ],
  },
];

export const overlays = [
  { name: "Overlay soft", token: "--overlay-soft", value: "Black 32%", opacity: 0.32 },
  { name: "Overlay", token: "--overlay", value: "Black 50%", opacity: 0.5 },
  { name: "Overlay strong", token: "--overlay-strong", value: "Black 80%", opacity: 0.8 },
];

export const fontFamilies = [
  {
    name: "Sans",
    token: "--font-sans",
    family: "Onest",
    note: 'REBA uses the commercial "GIP" face first; Onest is its open fallback.',
    className: "font-reba-sans",
    usage: "Headings, UI, buttons, labels",
  },
  {
    name: "Serif",
    token: "--font-serif",
    family: "Literata",
    note: "Body paragraphs and the café wordmark.",
    className: "font-reba-serif",
    usage: "Paragraphs, lead text",
  },
  {
    name: "Mono",
    token: "--font-mono",
    family: "System monospace",
    note: "ui-monospace, SF Mono, Menlo, Consolas.",
    className: "font-reba-mono",
    usage: "Mono eyebrows, codes",
  },
];

export const typeScale = [
  { name: "Display 1", token: "--fs-display-1", size: "clamp(52px, 9vw, 136px)", meta: "1.05 / −3%", className: "text-reba-display-1 font-semibold" },
  { name: "Display 2", token: "--fs-display-2", size: "clamp(40px, 6vw, 88px)", meta: "1.05 / −3%", className: "text-reba-display-2 font-semibold" },
  { name: "Display 3", token: "--fs-display-3", size: "clamp(40px, 4vw + 8px, 64px)", meta: "1.05 / −3%", className: "text-reba-display-3 font-semibold" },
  { name: "H2", token: "--fs-h2", size: "clamp(32px, 2.4vw + 14px, 48px)", meta: "1.2 / −2%", className: "text-reba-h2 font-semibold" },
  { name: "2XL", token: "--fs-2xl", size: "40px", meta: "1.2", className: "text-reba-2xl font-semibold tracking-[-0.02em]" },
  { name: "XL", token: "--fs-xl", size: "32px", meta: "1.2", className: "text-reba-xl font-semibold tracking-[-0.02em]" },
  { name: "LG", token: "--fs-lg", size: "24px", meta: "1.2", className: "text-reba-lg font-semibold tracking-[-0.02em]" },
  { name: "MD", token: "--fs-md", size: "20px", meta: "1.3", className: "text-reba-md font-semibold tracking-[-0.02em]" },
  { name: "Base", token: "--fs-base", size: "16px", meta: "1.5", className: "text-reba-base" },
  { name: "SM", token: "--fs-sm", size: "14px", meta: "1.5", className: "text-reba-sm" },
  { name: "XS", token: "--fs-xs", size: "12px", meta: "1.3", className: "text-reba-xs" },
  { name: "2XS", token: "--fs-2xs", size: "10px", meta: "1.3", className: "text-reba-2xs" },
];

export const spacing = [
  { token: "--space-1", px: 4 },
  { token: "--space-2", px: 8 },
  { token: "--space-3", px: 12 },
  { token: "--space-4", px: 16 },
  { token: "--space-5", px: 24 },
  { token: "--space-6", px: 32 },
  { token: "--space-7", px: 48 },
  { token: "--space-8", px: 64 },
  { token: "--space-9", px: 96 },
  { token: "--space-10", px: 144 },
];

export const radii = [
  { name: "Small", token: "--radius-sm", value: "8px" },
  { name: "Default", token: "--radius", value: "12px" },
  { name: "Large", token: "--radius-lg", value: "24px" },
  { name: "Pill", token: "--radius-pill", value: "999px" },
];

export const easings = [
  { name: "Out", token: "--ease-out", value: "cubic-bezier(.2, .7, .2, 1)" },
  { name: "Standard", token: "--ease-standard", value: "cubic-bezier(.4, 0, .2, 1)" },
  { name: "Snap", token: "--ease-snap", value: "cubic-bezier(.22, 1, .36, 1)" },
  { name: "Calm", token: "--ease-calm", value: "cubic-bezier(.25, .1, .25, 1)" },
  { name: "Page", token: "--ease-page", value: "cubic-bezier(.65, 0, .15, 1)" },
];

export const durations = [
  { name: "Instant", token: "--dur-instant", value: "100ms" },
  { name: "Micro", token: "--dur-micro", value: "200ms", usage: "Buttons, hovers" },
  { name: "Short", token: "--dur-short", value: "300ms" },
  { name: "Medium", token: "--dur-medium", value: "400ms" },
  { name: "Long", token: "--dur-long", value: "800ms" },
  { name: "Page", token: "--dur-page", value: "1200ms", usage: "Page transitions" },
  { name: "Ambient", token: "--dur-ambient", value: "1600ms" },
];

export const layoutTokens = [
  { token: "--container", value: "1328px", usage: "Max content width" },
  { token: "--gutter", value: "clamp(16px, 6vw, 92px)", usage: "Page side padding" },
  { token: "--header-h", value: "72px (56px mobile)", usage: "Header height" },
  { token: "--section-top", value: "clamp(64px, 9.5vw, 144px)", usage: "Section top padding" },
  { token: "--section-bottom", value: "clamp(48px, 6.4vw, 96px)", usage: "Section bottom padding" },
];
