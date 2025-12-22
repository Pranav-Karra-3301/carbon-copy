type ThemeColor = 'navy' | 'red' | 'blue' | 'gold' | 'green' | 'muted' | 'paper' | 'teal';
type ThemeSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type ThemeVariant = 'default' | 'dense' | 'loose' | 'minimal' | 'bordered' | 'filled';
type ThemeFont = 'typewriter' | 'mono' | 'handwriting' | 'system';
type ThemeBorder = 'none' | 'thin' | 'medium' | 'thick' | 'double' | 'dotted' | 'dashed';
type ThemePattern = 'none' | 'crosshatch' | 'diagonal' | 'horizontal' | 'vertical' | 'dots' | 'grid';
interface ThemeConfig {
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
declare const defaultTheme: ThemeConfig;
declare const themes: {
    readonly default: ThemeConfig;
    readonly sepia: {
        readonly colors: {
            readonly primary: "#5C4033";
            readonly secondary: "#8B7355";
            readonly background: "#F4E9D9";
            readonly surface: "#FFF8F0";
            readonly text: "#4A3728";
            readonly border: "#8B7355";
            readonly accent: string;
            readonly textMuted: string;
            readonly error: string;
            readonly success: string;
        };
        readonly fonts: {
            typewriter: string;
            mono: string;
            handwriting: string;
            system: string;
        };
        readonly spacing: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
        };
        readonly borders: {
            thin: string;
            medium: string;
            thick: string;
        };
        readonly radii: {
            none: string;
            sm: string;
            md: string;
            lg: string;
            full: string;
        };
    };
    readonly dark: {
        readonly colors: {
            readonly primary: "#7EB8DA";
            readonly secondary: "#A8D5D8";
            readonly background: "#1A1A2E";
            readonly surface: "#16213E";
            readonly text: "#E8E8E8";
            readonly textMuted: "#A0A0A0";
            readonly border: "#4A5568";
            readonly accent: string;
            readonly error: string;
            readonly success: string;
        };
        readonly fonts: {
            typewriter: string;
            mono: string;
            handwriting: string;
            system: string;
        };
        readonly spacing: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
        };
        readonly borders: {
            thin: string;
            medium: string;
            thick: string;
        };
        readonly radii: {
            none: string;
            sm: string;
            md: string;
            lg: string;
            full: string;
        };
    };
    readonly minimal: {
        readonly colors: {
            readonly primary: "#333333";
            readonly secondary: "#666666";
            readonly accent: "#000000";
            readonly background: "#FFFFFF";
            readonly surface: "#F5F5F5";
            readonly text: "#333333";
            readonly textMuted: "#888888";
            readonly border: "#CCCCCC";
            readonly error: string;
            readonly success: string;
        };
        readonly fonts: {
            typewriter: string;
            mono: string;
            handwriting: string;
            system: string;
        };
        readonly spacing: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
        };
        readonly borders: {
            thin: string;
            medium: string;
            thick: string;
        };
        readonly radii: {
            none: string;
            sm: string;
            md: string;
            lg: string;
            full: string;
        };
    };
};
type ThemeName = keyof typeof themes;
declare function generateCSSVariables(theme: ThemeConfig): string;

export { type ThemeBorder, type ThemeColor, type ThemeConfig, type ThemeFont, type ThemeName, type ThemePattern, type ThemeSize, type ThemeVariant, defaultTheme, generateCSSVariables, themes };
