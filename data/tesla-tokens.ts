/**
 * Tesla Design System (TDS) tokens, as published on https://www.tesla.com (CSS custom properties `--tds-*`).
 * The same values are registered as Tailwind theme tokens with a `tds-` prefix in app/globals.css.
 * Same shape as data/reba-tokens.ts so both styleguides share one structure.
 */

export type ColorToken = { name: string; token: string; value: string; usage: string; dark?: boolean };

export const colorGroups: { group: string; colors: ColorToken[] }[] = [
  {
    group: "Core",
    colors: [
      { name: "Grey 10", token: "--tds-color-grey-10", value: "#171A20", usage: "Headings, nav links, high-contrast text", dark: true },
      { name: "Grey 20", token: "--tds-color-grey-20", value: "#393C41", usage: "Body copy, light button label", dark: true },
      { name: "Grey 30", token: "--tds-color-grey-30", value: "#5C5E62", usage: "Secondary text, labels", dark: true },
      { name: "White", token: "--tds-color-white", value: "#FFFFFF", usage: "Page background" },
    ],
  },
  {
    group: "Brand blue",
    colors: [
      { name: "Blue 30", token: "--tds-color-blue-30", value: "#3E6AE1", usage: "Primary button, selected options", dark: true },
      { name: "Blue 20", token: "--tds-color-blue-20", value: "#3457B1", usage: "Primary hover / pressed", dark: true },
      { name: "Blue 10", token: "--tds-color-blue-10", value: "#2E4994", usage: "Deepest blue, rarely used", dark: true },
    ],
  },
  {
    group: "Neutrals",
    colors: [
      { name: "Grey 70", token: "--tds-color-grey-70", value: "#F4F4F4", usage: "Section backgrounds, cards, inputs" },
      { name: "Grey 65", token: "--tds-color-grey-65", value: "#EEEEEE", usage: "Hovered containers" },
      { name: "Grey 50", token: "--tds-color-grey-50", value: "#D0D1D2", usage: "Hairlines, borders, dividers" },
      { name: "Grey 35", token: "--tds-color-grey-35", value: "#8E8E8E", usage: "Focus ring, placeholders", dark: true },
    ],
  },
  {
    group: "Status",
    colors: [
      { name: "Red 10", token: "--tds-color-red-10", value: "#B74134", usage: "Form errors", dark: true },
      { name: "Red 20", token: "--tds-color-red-20", value: "#ED4E3B", usage: "Errors on dark", dark: true },
      { name: "Green", token: "--tds-color-green", value: "#12BB00", usage: "Success, savings", dark: true },
      { name: "Yellow", token: "--tds-color-yellow", value: "#FBB01B", usage: "Warnings" },
    ],
  },
];

/** Layers placed over photography so text stays readable. `css` is the background the demo applies. */
export const overlays = [
  { name: "Overlay soft", token: "bg-black/30", value: "Black 30%", css: "rgb(0 0 0 / 0.3)" },
  { name: "Overlay", token: "bg-black/60", value: "Black 60% — FSD band", css: "rgb(0 0 0 / 0.6)" },
  { name: "Tile gradient", token: "bg-linear-to-t from-black/60", value: "Black 60% → 0 — product tiles", css: "linear-gradient(to top, rgb(0 0 0 / 0.6), rgb(0 0 0 / 0) 60%)" },
];

export const fontFamilies = [
  {
    name: "Display",
    token: "--tds-font-family-display",
    family: "Universal Sans Display",
    note: "Proprietary; Inter stands in here.",
    className: "font-tds",
    usage: "Headings, hero titles",
  },
  {
    name: "Text",
    token: "--tds-font-family-text",
    family: "Universal Sans Text",
    note: "Proprietary; Inter stands in here.",
    className: "font-tds",
    usage: "Body copy, buttons, UI",
  },
  {
    name: "Mono",
    token: "--tds-font-family-monospace",
    family: "Fira Code",
    note: "Falls back to Menlo, monospace.",
    className: "font-mono",
    usage: "Codes, tokens",
  },
];

/** `meta` = line-height / tracking. Headings use weight 500 (medium), never bold. */
export const typeScale = [
  { name: "Display XL", token: "--tds-font-size-130", size: "80px", meta: "96px / 0", className: "text-tds-130 font-medium" },
  { name: "Display L", token: "--tds-font-size-110", size: "64px", meta: "64px / 0", className: "text-tds-110 font-medium" },
  { name: "Display M", token: "--tds-font-size-100", size: "56px", meta: "56px / 0", className: "text-tds-100 font-medium" },
  { name: "Display S", token: "--tds-font-size-90", size: "48px", meta: "56px / 0", className: "text-tds-90 font-medium" },
  { name: "Hero", token: "--tds-font-size-80", size: "40px", meta: "48px / 0", className: "text-tds-80 font-medium" },
  { name: "Title L", token: "--tds-font-size-75", size: "34px", meta: "44px / 0", className: "text-tds-75 font-medium" },
  { name: "Title", token: "--tds-font-size-70", size: "28px", meta: "36px / 0", className: "text-tds-70 font-medium" },
  { name: "Heading", token: "--tds-font-size-60", size: "24px", meta: "28px / 0", className: "text-tds-60 font-medium" },
  { name: "Subheading", token: "--tds-font-size-50", size: "20px", meta: "28px / 0", className: "text-tds-50 font-medium" },
  { name: "Lead", token: "--tds-font-size-40", size: "17px", meta: "24px / 0", className: "text-tds-40" },
  { name: "Body", token: "--tds-font-size-30", size: "14px", meta: "20px / 0", className: "text-tds-30" },
  { name: "Caption", token: "--tds-font-size-20", size: "12px", meta: "20px / 0", className: "text-tds-20" },
  { name: "Fine print", token: "--tds-font-size-10", size: "10px", meta: "18px / 0", className: "text-tds-10" },
];

/** 8px grid (half step = 4px). */
export const spacing = [
  { token: "--tds-size--half", px: 4 },
  { token: "--tds-size--1x", px: 8 },
  { token: "--tds-size--2x", px: 16 },
  { token: "--tds-size--3x", px: 24 },
  { token: "--tds-size--4x", px: 32 },
  { token: "--tds-size--5x", px: 40 },
  { token: "--tds-size--6x", px: 48 },
  { token: "--tds-size--8x", px: 64 },
  { token: "--tds-size--10x", px: 80 },
  { token: "--tds-size--12x", px: 96 },
];

/** One 4px corner for everything; only avatars and swatches are round. */
export const radii = [
  { name: "Base", token: "--tds-border-radius", value: "4px" },
  { name: "Card", token: "--tds-border-radius--card", value: "4px" },
  { name: "Pill", token: "--tds-border-radius--pill", value: "4px" },
  { name: "Circle", token: "--tds-border-radius--circle", value: "100%" },
];

export const shadows = [
  { name: "Small", token: "--tds-box-shadow--small", value: "0 4px 8px · 8%", className: "shadow-tds-sm" },
  { name: "Medium", token: "--tds-box-shadow--medium", value: "0 8px 16px · 12%", className: "shadow-tds-md" },
  { name: "Large", token: "--tds-box-shadow--large", value: "0 8px 16px · 16%", className: "shadow-tds-lg" },
];

export const easings = [
  { name: "Base", token: "--tds-animation-bezier-base", value: "cubic-bezier(.5, 0, 0, .75)" },
  { name: "Marketing", token: "--tds-animate-transition-function--mktg", value: "cubic-bezier(.165, .84, .44, 1)" },
  { name: "Backdrop", token: "--tds-animate-backdrop-transition", value: "cubic-bezier(.75, 0, 0, 1)" },
  { name: "Ease", token: ".tds-btn transition", value: "ease" },
];

export const durations = [
  { name: "Shadow", token: ".tds-btn box-shadow", value: "250ms", usage: "Option cards, button rings" },
  { name: "Color", token: ".tds-btn colors", value: "330ms", usage: "Buttons, links, inputs" },
  { name: "Short", token: "--tds-animate-transition-duration--short", value: "500ms", usage: "Fades" },
  { name: "Medium", token: "--tds-animate-transition-duration--medium", value: "600ms", usage: "Image zoom on hover" },
];

export const layoutTokens = [
  { token: "container", value: "1200px", usage: "Max content width" },
  { token: "gutter", value: "24px (48px from md)", usage: "Page side padding" },
  { token: "header", value: "56px", usage: "Sticky header height" },
  { token: "section", value: "64px (96px from md)", usage: "Section vertical padding" },
  { token: "--tds-height--pill", value: "40px", usage: "Button and input height" },
  { token: "--tds-btn--min-width", value: "204px", usage: "Hero button width (sm and up)" },
  { token: "--tds-max-paragraph-width", value: "75ch", usage: "Readable line length" },
];
