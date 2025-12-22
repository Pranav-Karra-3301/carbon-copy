var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

// src/lib/theme/index.ts
var defaultTheme = {
  colors: {
    primary: "#324D88",
    secondary: "#1E3A5F",
    accent: "#8B1538",
    background: "#A8D5D8",
    surface: "#F5F2E8",
    text: "#324D88",
    textMuted: "#6B8BC8",
    border: "#324D88",
    error: "#8B1538",
    success: "#2D5A27"
  },
  fonts: {
    typewriter: '"Berkeley Mono", "American Typewriter", "Courier Prime", monospace',
    mono: '"Berkeley Mono", "IBM Plex Mono", "Consolas", monospace',
    handwriting: '"Caveat", "Dancing Script", cursive',
    system: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
  },
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem"
  },
  borders: {
    thin: "1px solid",
    medium: "2px solid",
    thick: "3px solid"
  },
  radii: {
    none: "0",
    sm: "0.125rem",
    md: "0.25rem",
    lg: "0.5rem",
    full: "9999px"
  }
};
var themes = {
  default: defaultTheme,
  // Warmer, sepia-toned variant
  sepia: __spreadProps(__spreadValues({}, defaultTheme), {
    colors: __spreadProps(__spreadValues({}, defaultTheme.colors), {
      primary: "#5C4033",
      secondary: "#8B7355",
      background: "#F4E9D9",
      surface: "#FFF8F0",
      text: "#4A3728",
      border: "#8B7355"
    })
  }),
  // High contrast dark mode
  dark: __spreadProps(__spreadValues({}, defaultTheme), {
    colors: __spreadProps(__spreadValues({}, defaultTheme.colors), {
      primary: "#7EB8DA",
      secondary: "#A8D5D8",
      background: "#1A1A2E",
      surface: "#16213E",
      text: "#E8E8E8",
      textMuted: "#A0A0A0",
      border: "#4A5568"
    })
  }),
  // Minimal grayscale
  minimal: __spreadProps(__spreadValues({}, defaultTheme), {
    colors: __spreadProps(__spreadValues({}, defaultTheme.colors), {
      primary: "#333333",
      secondary: "#666666",
      accent: "#000000",
      background: "#FFFFFF",
      surface: "#F5F5F5",
      text: "#333333",
      textMuted: "#888888",
      border: "#CCCCCC"
    })
  })
};
function generateCSSVariables(theme) {
  return `
    --cc-color-primary: ${theme.colors.primary};
    --cc-color-secondary: ${theme.colors.secondary};
    --cc-color-accent: ${theme.colors.accent};
    --cc-color-background: ${theme.colors.background};
    --cc-color-surface: ${theme.colors.surface};
    --cc-color-text: ${theme.colors.text};
    --cc-color-text-muted: ${theme.colors.textMuted};
    --cc-color-border: ${theme.colors.border};
    --cc-color-error: ${theme.colors.error};
    --cc-color-success: ${theme.colors.success};
    --cc-font-typewriter: ${theme.fonts.typewriter};
    --cc-font-mono: ${theme.fonts.mono};
    --cc-font-handwriting: ${theme.fonts.handwriting};
    --cc-font-system: ${theme.fonts.system};
    --cc-spacing-xs: ${theme.spacing.xs};
    --cc-spacing-sm: ${theme.spacing.sm};
    --cc-spacing-md: ${theme.spacing.md};
    --cc-spacing-lg: ${theme.spacing.lg};
    --cc-spacing-xl: ${theme.spacing.xl};
  `.trim();
}
export {
  defaultTheme,
  generateCSSVariables,
  themes
};
//# sourceMappingURL=index.mjs.map