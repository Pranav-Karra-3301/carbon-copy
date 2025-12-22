export const typography = {
  fonts: {
    // Primary typewriter font stack
    typewriter: '"American Typewriter", "Courier Prime", "Courier New", Courier, monospace',
    // Alternative mono for code/technical
    mono: '"IBM Plex Mono", "Consolas", "Monaco", monospace',
    // Sans-serif fallback for accessibility
    sans: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
  },

  sizes: {
    xs: '0.625rem',    // 10px - fine print
    sm: '0.75rem',     // 12px - labels, footnotes
    base: '0.875rem',  // 14px - body text
    md: '1rem',        // 16px - standard inputs
    lg: '1.125rem',    // 18px - section headers
    xl: '1.25rem',     // 20px - major headers
    '2xl': '1.5rem',   // 24px - page titles
  },

  weights: {
    normal: 400,
    medium: 500,
    bold: 700,
  },

  lineHeights: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
  },

  letterSpacing: {
    tight: '-0.02em',
    normal: '0',
    wide: '0.05em',
    wider: '0.1em',
    typewriter: '0.08em', // Authentic typewriter spacing
  }
} as const;

export type Typography = typeof typography;
