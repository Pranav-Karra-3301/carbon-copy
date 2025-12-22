'use client';

import { CodeBlock, PageActions } from '../components/CodeBlock';

const pageContent = `Theming guide for Carbon Copy.

Carbon Copy uses CSS custom properties for theming. You can customize colors, fonts, spacing, and more by overriding these variables.

Available themes: default, sepia, dark, minimal

CSS Variables available for customization:
- --cc-color-primary
- --cc-color-secondary  
- --cc-color-accent
- --cc-color-background
- --cc-color-surface
- --cc-color-text
- --cc-font-typewriter
- --cc-font-mono
- --cc-font-handwriting`;

export default function ThemingPage() {
  return (
    <article>
      <h1>Theming</h1>
      
      <p>
        Carbon Copy uses CSS custom properties (variables) for theming, making it 
        easy to customize colors, fonts, and spacing to match your brand.
      </p>

      <h2>CSS Variables</h2>
      
      <p>Override these variables to customize the look:</p>

      <CodeBlock 
        code={`:root {
  /* Colors */
  --cc-color-primary: #324D88;
  --cc-color-secondary: #1E3A5F;
  --cc-color-accent: #8B1538;
  --cc-color-background: #A8D5D8;
  --cc-color-surface: #F5F2E8;
  --cc-color-text: #324D88;
  --cc-color-text-muted: #6B8BC8;
  --cc-color-border: #324D88;
  --cc-color-error: #8B1538;
  --cc-color-success: #2D5A27;
  
  /* Fonts */
  --cc-font-typewriter: "Berkeley Mono", "American Typewriter", monospace;
  --cc-font-mono: "Berkeley Mono", "IBM Plex Mono", monospace;
  --cc-font-handwriting: "Caveat", cursive;
  
  /* Spacing */
  --cc-spacing-xs: 0.25rem;
  --cc-spacing-sm: 0.5rem;
  --cc-spacing-md: 1rem;
  --cc-spacing-lg: 1.5rem;
  --cc-spacing-xl: 2rem;
}`}
        language="css" 
      />

      <h2>Preset Themes</h2>
      
      <p>Carbon Copy includes several preset themes you can use:</p>

      <h3>Default (Teal)</h3>
      <p>The classic carbon copy look with teal backgrounds and navy text.</p>

      <h3>Sepia</h3>
      <p>A warmer, aged paper aesthetic.</p>

      <CodeBlock 
        code={`:root {
  --cc-color-primary: #5C4033;
  --cc-color-secondary: #8B7355;
  --cc-color-background: #F4E9D9;
  --cc-color-surface: #FFF8F0;
  --cc-color-text: #4A3728;
  --cc-color-border: #8B7355;
}`}
        language="css" 
      />

      <h3>Dark</h3>
      <p>A high-contrast dark mode for low-light environments.</p>

      <CodeBlock 
        code={`:root {
  --cc-color-primary: #7EB8DA;
  --cc-color-secondary: #A8D5D8;
  --cc-color-background: #1A1A2E;
  --cc-color-surface: #16213E;
  --cc-color-text: #E8E8E8;
  --cc-color-border: #4A5568;
}`}
        language="css" 
      />

      <h3>Minimal</h3>
      <p>A clean grayscale variant for modern contexts.</p>

      <CodeBlock 
        code={`:root {
  --cc-color-primary: #333333;
  --cc-color-secondary: #666666;
  --cc-color-accent: #000000;
  --cc-color-background: #FFFFFF;
  --cc-color-surface: #F5F5F5;
  --cc-color-text: #333333;
  --cc-color-border: #CCCCCC;
}`}
        language="css" 
      />

      <h2>Using the Theme API</h2>
      
      <p>You can also use the JavaScript theme API:</p>

      <CodeBlock 
        code={`import { themes, generateCSSVariables } from '@prnv/carbon-copy';

// Get CSS variables for a theme
const cssVars = generateCSSVariables(themes.sepia);

// Apply to an element
element.style.cssText = cssVars;`}
        language="tsx" 
      />

      <PageActions pageContent={pageContent} pageTitle="Theming" />
    </article>
  );
}

