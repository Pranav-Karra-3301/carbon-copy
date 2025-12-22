'use client';

import { CodeBlock, PageActions } from '../components/CodeBlock';

const pageContent = `Installation guide for Carbon Copy - a React component library for vintage form UI.

Requirements:
- React 18+
- Next.js 14+ (optional, but recommended)

Install with npm:
npm install @prnv/carbon-copy

Install with yarn:
yarn add @prnv/carbon-copy

Install with pnpm:
pnpm add @prnv/carbon-copy

After installation, import the styles in your root layout or App component.`;

export default function InstallationPage() {
  return (
    <article>
      <h1>Installation</h1>
      
      <p>
        Carbon Copy is available on npm and can be installed with your favorite 
        package manager.
      </p>

      <h2>Requirements</h2>
      
      <ul>
        <li>React 18 or higher</li>
        <li>Next.js 14+ (optional, but recommended)</li>
        <li>TypeScript 5+ (optional, but recommended)</li>
      </ul>

      <h2>Install with npm</h2>
      
      <CodeBlock 
        code="npm install @prnv/carbon-copy" 
        language="bash" 
      />

      <h2>Install with yarn</h2>
      
      <CodeBlock 
        code="yarn add @prnv/carbon-copy" 
        language="bash" 
      />

      <h2>Install with pnpm</h2>
      
      <CodeBlock 
        code="pnpm add @prnv/carbon-copy" 
        language="bash" 
      />

      <h2>Import Styles</h2>
      
      <p>
        After installation, import the CSS in your root layout or App component:
      </p>

      <CodeBlock 
        code={`// In your layout.tsx or _app.tsx
import '@prnv/carbon-copy/styles.css';`}
        language="tsx" 
      />

      <h2>Optional: Berkeley Mono Font</h2>
      
      <p>
        For the most authentic look, we recommend using the Berkeley Mono font. 
        If unavailable, Carbon Copy will gracefully fall back to American Typewriter, 
        Courier Prime, or Courier.
      </p>

      <CodeBlock 
        code={`/* Add to your CSS */
@font-face {
  font-family: 'Berkeley Mono';
  src: url('/fonts/BerkeleyMono-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}`}
        language="css" 
      />

      <PageActions pageContent={pageContent} pageTitle="Installation" />
    </article>
  );
}

