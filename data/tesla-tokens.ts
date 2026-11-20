/**
 * Tesla Design System (TDS) tokens, read from the CSS custom properties (--tds-*) that tesla.com ships.
 * The same values are registered as Tailwind theme tokens with a `tds-` prefix in app/globals.css.
 */

export type ColorToken = { name: string; token: string; value: string; usage: string; dark?: boolean };

export const colorGroups: { group: string; colors: ColorToken[] }[] = [
  {
    group: "Brand blue",
    colors: [
      { name: "Blue 30", token: "--tds-color-blue-30", value: "#3E6AE1", usage: "Primary button, links, focus of attention", dark: true },
      { name: "Blue 20", token: "--tds-color-blue-20", value: "#3457B1", usage: "Primary hover / pressed", dark: true },
      { name: "Blue 10", token: "--tds-color-blue-10", value: "#2E4994", usage: "Deepest blue, rarely used", dark: true },
    ],
  },
  {
    group: "Greys — dark",
    colors: [
      { name: "Grey 10", token: "--tds-color-grey-10", value: "#171A20", usage: "Headings, high-contrast text", dark: true },
      { name: "Grey 20", token: "--tds-color-grey-20", value: "#393C41", usage: "Body text, light button label", dark: true },
      { name: "Grey 30", token: "--tds-color-grey-30", value: "#5C5E62", usage: "Secondary text, form labels", dark: true },
      { name: "Grey 35", token: "--tds-color-grey-35", value: "#8E8E8E", usage: "Focus outline, placeholders", dark: true },
    ],
  },
  {
    group: "Greys — light",
    colors: [
      { name: "Grey 50", token: "--tds-color-grey-50", value: "#D0D1D2", usage: "Hairlines, dividers" },
      { name: "Grey 60", token: "--tds-color-grey-60", value: "#E2E3E3", usage: "Disabled fills" },
      { name: "Grey 65", token: "--tds-color-grey-65", value: "#EEEEEE", usage: "Container hover" },
      { name: "Grey 70", token: "--tds-color-grey-70", value: "#F4F4F4", usage: "Containers, inputs, tertiary button" },
    ],
  },
  {
    group: "Status",
    colors: [
      { name: "Red 10", token: "--tds-color-red-10", value: "#B74134", usage: "Error text and borders", dark: true },
      { name: "Red 20", token: "--tds-color-red-20", value: "#ED4E3B", usage: "Error on dark", dark: true },
      { name: "Green", token: "--tds-color-green", value: "#12BB00", usage: "Success", dark: true },
      { name: "Yellow", token: "--tds-color-yellow", value: "#FBB01B", usage: "Warning" },
    ],
  },
];

/** Semantic roles: components reference these, not the raw greys. */
export const roles = [
  { role: "Foreground high-contrast", token: "--tds-theme-foreground-high-contrast", value: "#171A20", usage: "Headings, nav links" },
  { role: "Foreground", token: "--tds-theme-foreground", value: "#393C41", usage: "Body copy" },
  { role: "Foreground low-contrast", token: "--tds-theme-foreground-low-contrast", value: "#5C5E62", usage: "Captions, labels" },
  { role: "Primary", token: "--tds-theme-foreground-primary", value: "#3E6AE1", usage: "Primary actions" },
  { role: "Background", token: "--tds-theme-background", value: "#FFFFFF", usage: "Page" },
  { role: "Container", token: "--tds-theme-background-container", value: "#F4F4F4", usage: "Cards, inputs" },
  { role: "Container highlight", token: "--tds-theme-background-container-highlight", value: "#EEEEEE", usage: "Hovered containers" },
  { role: "Hairline", token: "--tds-color--hairline", value: "#D0D1D2", usage: "Borders, dividers" },
  { role: "Error", token: "--tds-color--error", value: "#B74134", usage: "Validation messages" },
];

export const fontFamilies = [
  {
    name: "Display",
    token: "--tds-font-family-display",
    family: "Universal Sans Display",
    usage: "Headings, hero titles",
  },
  {
    name: "Text",
    token: "--tds-font-family-text",
    family: "Universal Sans Text",
    usage: "Body copy, buttons, UI",
  },
];

export const fontWeights = [
  { name: "Light", value: 300, className: "font-light" },
  { name: "Regular", value: 400, className: "font-normal" },
  { name: "Medium", value: 500, className: "font-medium" },
  { name: "Bold", value: 700, className: "font-bold" },
];

export const typeScale = [
  { token: "tds-130", size: "80 / 96", usage: "Largest marketing display", className: "text-tds-130 font-medium" },
  { token: "tds-110", size: "64 / 64", usage: "Display", className: "text-tds-110 font-medium" },
  { token: "tds-100", size: "56 / 56", usage: "Display", className: "text-tds-100 font-medium" },
  { token: "tds-90", size: "48 / 56", usage: "Page title", className: "text-tds-90 font-medium" },
  { token: "tds-80", size: "40 / 48", usage: "Hero title (homepage tiles)", className: "text-tds-80 font-medium" },
  { token: "tds-75", size: "34 / 44", usage: "Section title", className: "text-tds-75 font-medium" },
  { token: "tds-70", size: "28 / 36", usage: "Section title, spec values", className: "text-tds-70 font-medium" },
  { token: "tds-60", size: "24 / 28", usage: "Card title", className: "text-tds-60 font-medium" },
  { token: "tds-50", size: "20 / 28", usage: "Subheading", className: "text-tds-50 font-medium" },
  { token: "tds-40", size: "17 / 24", usage: "Hero subtitle, lead", className: "text-tds-40" },
  { token: "tds-30", size: "14 / 20", usage: "Body, buttons, nav", className: "text-tds-30" },
  { token: "tds-20", size: "12 / 20", usage: "Labels, captions, legal", className: "text-tds-20" },
  { token: "tds-10", size: "10 / 18", usage: "Fine print", className: "text-tds-10" },
];

/** 8px base grid. `tw` is the matching Tailwind spacing step (1 step = 4px). */
export const sizes = [
  { token: "--tds-size--half", px: 4, tw: "1" },
  { token: "--tds-size--1x", px: 8, tw: "2" },
  { token: "--tds-size--2x", px: 16, tw: "4" },
  { token: "--tds-size--3x", px: 24, tw: "6" },
  { token: "--tds-size--4x", px: 32, tw: "8" },
  { token: "--tds-size--5x", px: 40, tw: "10" },
  { token: "--tds-size--6x", px: 48, tw: "12" },
  { token: "--tds-size--8x", px: 64, tw: "16" },
  { token: "--tds-size--10x", px: 80, tw: "20" },
  { token: "--tds-size--12x", px: 96, tw: "24" },
];

export const radii = [
  { name: "Base", token: "--tds-border-radius", value: "4px", usage: "Buttons, cards, inputs — everything" },
  { name: "Circle", token: "--tds-border-radius--circle", value: "100%", usage: "Avatars, color swatches" },
];

export const shadows = [
  { name: "Small", token: "--tds-box-shadow--small", value: "0 4px 8px rgba(0,0,0,.08)", className: "shadow-tds-sm" },
  { name: "Medium", token: "--tds-box-shadow--medium", value: "0 8px 16px rgba(0,0,0,.12)", className: "shadow-tds-md" },
  { name: "Large", token: "--tds-box-shadow--large", value: "0 8px 16px rgba(0,0,0,.16)", className: "shadow-tds-lg" },
];

export const layoutTokens = [
  { token: "--tds-height--pill", value: "40px", usage: "Button and input height" },
  { token: "--tds-btn--min-width", value: "204px", usage: "Hero button width (desktop)" },
  { token: "--tds-padding--card--dense", value: "16px", usage: "Card padding" },
  { token: "--tds-padding--card", value: "24px", usage: "Large card / figure padding" },
  { token: "--tds-max-paragraph-width", value: "75ch", usage: "Readable line length" },
  { token: "--tds-outline--focus", value: "2px solid #8E8E8E", usage: "Keyboard focus ring" },
];

export const easings = [
  { name: "Base", token: "--tds-animation-bezier-base", value: "cubic-bezier(.5, 0, 0, .75)", className: "ease-tds" },
  { name: "Marketing", token: "--tds-animate-transition-function--mktg", value: "cubic-bezier(.165, .84, .44, 1)", className: "ease-tds-mktg" },
  { name: "Backdrop", token: "--tds-animate-backdrop-transition", value: "cubic-bezier(.75, 0, 0, 1)", className: "ease-tds-backdrop" },
  { name: "Ease", token: "ease", value: "CSS ease — button color changes", className: "ease-[ease]" },
];

export const durations = [
  { value: "250ms", usage: "Button box-shadow" },
  { value: "330ms", usage: "Button background, border and text color" },
  { value: "500ms", usage: "Short fades (--tds-animate-transition-duration--short)" },
  { value: "600ms", usage: "Medium fades (--tds-animate-transition-duration--medium)" },
];

/** Where this site's own tokens (app/globals.css @theme) differ from tesla.com. */
export const comparison = [
  { property: "Primary blue", site: "#3E6AE1", tesla: "#3E6AE1", match: true },
  { property: "Muted text", site: "#5C5E62", tesla: "#5C5E62", match: true },
  { property: "Heading / ink", site: "#02070B", tesla: "#171A20", match: false },
  { property: "Light surface", site: "#F2F2F2", tesla: "#F4F4F4", match: false },
  { property: "Button radius", site: "12px", tesla: "4px", match: false },
  { property: "Button height", site: "44px", tesla: "40px", match: false },
  { property: "Button text", site: "16px / 500", tesla: "14px / 500", match: false },
  { property: "Hero title (desktop)", site: "72px", tesla: "40px / 500", match: false },
];
