'use client';

import { 
  FormField, 
  Checkbox, 
  VintageTable, 
  VintageTableRow, 
  VintageTableCell,
  StrikethroughCell,
  DenseGrid,
  DenseGridCell,
} from '@/lib';
import { CodeBlock, PageActions } from './components/CodeBlock';
import { ComponentPreview } from './components/ComponentPreview';

const pageContent = `Carbon Copy - Beautiful vintage form UI components for React.

Build authentic carbon copy forms with typewriter aesthetics, dense tabular layouts, and that distinctive 1970s order form charm.

Features:
- Authentic Aesthetics — Typewriter fonts, teal backgrounds, and vintage color palettes
- Dense Layouts — Precision grid systems for data-heavy forms
- Fully Customizable — Themes, colors, fonts, patterns, and borders
- Accessible — Built with ARIA attributes and keyboard navigation
- TypeScript First — Full type safety and IntelliSense support`;

export default function DocsPage() {
  return (
    <article>
      <h1>Carbon Copy</h1>
      
      <p>
        <strong>Beautiful vintage form UI components</strong> for React. Build authentic 
        carbon copy forms with typewriter aesthetics, dense tabular layouts, and that 
        distinctive 1970s order form charm.
      </p>

      <h2>Features</h2>
      
      <ul>
        <li><strong>Authentic Aesthetics</strong> — Typewriter fonts, teal backgrounds, and vintage color palettes</li>
        <li><strong>Dense Layouts</strong> — Precision grid systems for data-heavy forms</li>
        <li><strong>Fully Customizable</strong> — Themes, colors, fonts, patterns, and borders</li>
        <li><strong>Accessible</strong> — Built with ARIA attributes and keyboard navigation</li>
        <li><strong>TypeScript First</strong> — Full type safety and IntelliSense support</li>
      </ul>

      <h2>Live Examples</h2>

      <ComponentPreview 
        title="Form Field Variants"
        description="Multiple input styles for different contexts"
        code={`<FormField variant="underline" value="Underline style" />
<FormField variant="boxed" value="Boxed" />
<FormField variant="handwriting" value="Handwriting" />`}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <FormField variant="underline" value="Underline style" onChange={() => {}} />
          <FormField variant="boxed" value="Boxed style" onChange={() => {}} />
          <FormField variant="handwriting" value="Handwriting" onChange={() => {}} />
        </div>
      </ComponentPreview>

      <ComponentPreview 
        title="Checkboxes"
        description="X marks and checkmarks for selections"
        code={`<Checkbox markStyle="x" checked />
<Checkbox markStyle="check" checked />`}
      >
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--cc-font-typewriter)', fontSize: '0.75rem' }}>
            <span>X Mark:</span>
            <Checkbox markStyle="x" checked onChange={() => {}} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--cc-font-typewriter)', fontSize: '0.75rem' }}>
            <span>Checkmark:</span>
            <Checkbox markStyle="check" checked onChange={() => {}} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--cc-font-typewriter)', fontSize: '0.75rem' }}>
            <span>Unchecked:</span>
            <Checkbox markStyle="x" checked={false} onChange={() => {}} />
          </div>
        </div>
      </ComponentPreview>

      <ComponentPreview 
        title="Data Table"
        description="Dense tables with strikethrough cells for N/A options"
        code={`<VintageTable variant="dense">
  <VintageTableRow>
    <VintageTableCell>Available</VintageTableCell>
    <VintageTableCell align="center">752</VintageTableCell>
  </VintageTableRow>
  <VintageTableRow>
    <VintageTableCell>Not Available</VintageTableCell>
    <StrikethroughCell />
  </VintageTableRow>
</VintageTable>`}
      >
        <VintageTable variant="dense" background="none">
          <tbody>
            <VintageTableRow>
              <VintageTableCell>Option A - Available</VintageTableCell>
              <VintageTableCell align="center">752</VintageTableCell>
            </VintageTableRow>
            <VintageTableRow>
              <VintageTableCell>Option B - Not Available</VintageTableCell>
              <StrikethroughCell />
            </VintageTableRow>
            <VintageTableRow>
              <VintageTableCell>Option C - Available</VintageTableCell>
              <VintageTableCell align="center">796</VintageTableCell>
            </VintageTableRow>
          </tbody>
        </VintageTable>
      </ComponentPreview>

      <ComponentPreview 
        title="Grid Layout"
        description="Dense grid for structured data entry"
        code={`<DenseGrid columns="1fr 1fr" collapsed bordered>
  <DenseGridCell padding="sm" borderRight borderBottom>
    Label
  </DenseGridCell>
  <DenseGridCell padding="sm" borderBottom>
    Value
  </DenseGridCell>
</DenseGrid>`}
      >
        <DenseGrid columns="120px 1fr 80px" collapsed bordered>
          <DenseGridCell padding="sm" borderRight borderBottom size="xs">Zone</DenseGridCell>
          <DenseGridCell padding="sm" borderRight borderBottom>
            <FormField variant="none" value="06" align="center" size="sm" onChange={() => {}} />
          </DenseGridCell>
          <DenseGridCell padding="sm" borderBottom size="xs">Order Type</DenseGridCell>
          <DenseGridCell padding="sm" borderRight size="xs">Dealer Code</DenseGridCell>
          <DenseGridCell padding="sm" borderRight>
            <FormField variant="none" value="09" align="center" size="sm" onChange={() => {}} />
          </DenseGridCell>
          <DenseGridCell padding="sm">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.625rem' }}>
              <span>Fleet</span>
              <Checkbox size="sm" markStyle="x" checked={false} onChange={() => {}} />
            </div>
          </DenseGridCell>
        </DenseGrid>
      </ComponentPreview>

      <h2>Installation</h2>
      
      <CodeBlock code="npm install @prnv/carbon-copy" language="bash" />
      
      <p>Or with yarn:</p>
      
      <CodeBlock code="yarn add @prnv/carbon-copy" language="bash" />

      <h2>Getting Started</h2>
      
      <p>Import the CSS and start using components:</p>
      
      <CodeBlock 
        code={`// Import global styles
import '@prnv/carbon-copy/styles.css';

// Import components
import { 
  FormField, 
  VintageTable, 
  DenseGrid,
  Checkbox 
} from '@prnv/carbon-copy';`}
        language="tsx" 
      />

      <blockquote>
        <strong>Tip:</strong> For the authentic look, include the Berkeley Mono font 
        or use our built-in fallback stack of typewriter fonts.
      </blockquote>

      <PageActions pageContent={pageContent} pageTitle="Carbon Copy Documentation" />
    </article>
  );
}
