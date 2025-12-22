export const colors = {
  // Backgrounds
  background: {
    form: '#A8D5D8',      // Teal/seafoam - main form background
    formAlt: '#9CCBCE',   // Slightly darker teal for alternating rows
    paper: '#F5F2E8',     // Aged paper white for input areas
    muted: '#E8E5DC',     // Muted cream for disabled states
  },

  // Headers & Accents
  header: {
    primary: '#8B1538',   // Deep burgundy/maroon for main headers
    secondary: '#4A0D1F', // Darker variant for hover/active
    accent: '#C41E3A',    // Brighter red for emphasis
  },

  // Borders & Lines
  border: {
    primary: '#1A1A1A',   // Near-black for primary borders
    thin: '#2D2D2D',      // Slightly lighter for thin rules
    muted: '#666666',     // Gray for subtle divisions
  },

  // Text
  text: {
    primary: '#1A1A1A',   // Near-black for main text
    secondary: '#333333', // Dark gray for secondary
    onDark: '#F5F2E8',    // Light text on dark backgrounds
    muted: '#666666',     // Muted text for labels
    typewriter: '#0A0A0A', // Intense black for typewriter effect
  },

  // Interactive
  interactive: {
    checkbox: '#1A1A1A',  // Black for checkbox marks
    strikethrough: '#1A1A1A', // Black for N/A diagonal lines
    highlight: '#FFE4B5', // Muted yellow for highlights
  }
} as const;

export type Colors = typeof colors;
