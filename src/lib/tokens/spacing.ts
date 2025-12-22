export const spacing = {
  // Base unit: 4px
  0: '0',
  px: '1px',
  0.5: '0.125rem',  // 2px
  1: '0.25rem',     // 4px
  2: '0.5rem',      // 8px
  3: '0.75rem',     // 12px
  4: '1rem',        // 16px
  5: '1.25rem',     // 20px
  6: '1.5rem',      // 24px
  8: '2rem',        // 32px
  10: '2.5rem',     // 40px
  12: '3rem',       // 48px
} as const;

export const borders = {
  width: {
    thin: '1px',
    medium: '2px',
    thick: '3px',
  },

  // Border radii - vintage forms have sharp corners
  radius: {
    none: '0',
    sm: '1px',      // Subtle rounding for print imperfections
    md: '2px',
  }
} as const;

export type Spacing = typeof spacing;
export type Borders = typeof borders;
