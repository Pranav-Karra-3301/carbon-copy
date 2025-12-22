// Carbon Copy Theme System
// Provides consistent styling across all components

export type ThemeColor = 
  | 'navy' 
  | 'red' 
  | 'blue' 
  | 'gold' 
  | 'green' 
  | 'muted'
  | 'paper'
  | 'teal';

export type ThemeSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type ThemeVariant = 
  | 'default' 
  | 'dense' 
  | 'loose' 
  | 'minimal'
  | 'bordered'
  | 'filled';

export type ThemeFont = 
  | 'typewriter' 
  | 'mono' 
  | 'handwriting' 
  | 'system';

export type ThemeBorder = 
  | 'none' 
  | 'thin' 
  | 'medium' 
  | 'thick' 
  | 'double'
  | 'dotted'
  | 'dashed';

export type ThemePattern = 
  | 'none'
  | 'crosshatch'
  | 'diagonal'
  | 'horizontal'
  | 'vertical'
  | 'dots'
  | 'grid';

export interface ThemeConfig {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    text: string;
    textMuted: string;
    border: string;
    error: string;
    success: string;
  };
  fonts: {
    typewriter: string;
    mono: string;
    handwriting: string;
    system: string;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  borders: {
    thin: string;
    medium: string;
    thick: string;
  };
  radii: {
    none: string;
    sm: string;
    md: string;
    lg: string;
    full: string;
  };
}

export const defaultTheme: ThemeConfig = {
  colors: {
    primary: '#324D88',
    secondary: '#1E3A5F',
    accent: '#8B1538',
    background: '#A8D5D8',
    surface: '#F5F2E8',
    text: '#324D88',
    textMuted: '#6B8BC8',
    border: '#324D88',
    error: '#8B1538',
    success: '#2D5A27',
  },
  fonts: {
    typewriter: '"Berkeley Mono", "American Typewriter", "Courier Prime", monospace',
    mono: '"Berkeley Mono", "IBM Plex Mono", "Consolas", monospace',
    handwriting: '"Caveat", "Dancing Script", cursive',
    system: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
  },
  borders: {
    thin: '1px solid',
    medium: '2px solid',
    thick: '3px solid',
  },
  radii: {
    none: '0',
    sm: '0.125rem',
    md: '0.25rem',
    lg: '0.5rem',
    full: '9999px',
  },
};

// Preset themes
export const themes = {
  default: defaultTheme,
  
  // Warmer, sepia-toned variant
  sepia: {
    ...defaultTheme,
    colors: {
      ...defaultTheme.colors,
      primary: '#5C4033',
      secondary: '#8B7355',
      background: '#F4E9D9',
      surface: '#FFF8F0',
      text: '#4A3728',
      border: '#8B7355',
    },
  },
  
  // High contrast dark mode
  dark: {
    ...defaultTheme,
    colors: {
      ...defaultTheme.colors,
      primary: '#7EB8DA',
      secondary: '#A8D5D8',
      background: '#1A1A2E',
      surface: '#16213E',
      text: '#E8E8E8',
      textMuted: '#A0A0A0',
      border: '#4A5568',
    },
  },
  
  // Minimal grayscale
  minimal: {
    ...defaultTheme,
    colors: {
      ...defaultTheme.colors,
      primary: '#333333',
      secondary: '#666666',
      accent: '#000000',
      background: '#FFFFFF',
      surface: '#F5F5F5',
      text: '#333333',
      textMuted: '#888888',
      border: '#CCCCCC',
    },
  },
} as const;

export type ThemeName = keyof typeof themes;

// CSS variable generator
export function generateCSSVariables(theme: ThemeConfig): string {
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

