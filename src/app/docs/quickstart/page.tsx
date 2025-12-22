'use client';

import { FormField, Checkbox, DenseGrid, DenseGridCell } from '@/lib';
import { CodeBlock, PageActions } from '../components/CodeBlock';
import { ComponentPreview } from '../components/ComponentPreview';

const pageContent = `Quick Start Guide for Carbon Copy.

1. Install the package
2. Import styles  
3. Import components
4. Build your form

Carbon Copy provides dense, vintage-styled components for building authentic carbon copy forms.`;

export default function QuickStartPage() {
  return (
    <article>
      <h1>Quick Start</h1>
      
      <p>
        Get up and running with Carbon Copy in under 5 minutes. This guide walks 
        you through the basics of creating a vintage-styled form.
      </p>

      <h2>Step 1: Install</h2>
      
      <CodeBlock 
        code="npm install @prnv/carbon-copy" 
        language="bash" 
      />

      <h2>Step 2: Import Styles</h2>
      
      <CodeBlock 
        code={`// layout.tsx or _app.tsx
import '@prnv/carbon-copy/styles.css';`}
        language="tsx" 
      />

      <h2>Step 3: Create Your First Form</h2>
      
      <ComponentPreview
        title="Basic Form"
        description="A simple customer information form"
        code={`import { FormField, Checkbox, DenseGrid, DenseGridCell } from '@prnv/carbon-copy';

export function CustomerForm() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [isFleet, setIsFleet] = useState(false);

  return (
    <DenseGrid columns="1fr" collapsed bordered>
      <DenseGridCell padding="md" borderBottom>
        <FormField 
          label="Customer Name"
          value={name}
          onChange={setName}
          variant="underline"
        />
      </DenseGridCell>
      <DenseGridCell padding="md" borderBottom>
        <FormField 
          label="Address"
          value={address}
          onChange={setAddress}
          variant="underline"
        />
      </DenseGridCell>
      <DenseGridCell padding="md">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span>Fleet Order:</span>
          <Checkbox 
            checked={isFleet}
            onChange={setIsFleet}
            markStyle="x"
          />
        </div>
      </DenseGridCell>
    </DenseGrid>
  );
}`}
      >
        <DenseGrid columns="1fr" collapsed bordered>
          <DenseGridCell padding="md" borderBottom>
            <FormField 
              label="Customer Name"
              value="Carstens Chevrolet"
              onChange={() => {}}
              variant="underline"
            />
          </DenseGridCell>
          <DenseGridCell padding="md" borderBottom>
            <FormField 
              label="Address"
              value="310 N Main St, Alturas CA"
              onChange={() => {}}
              variant="underline"
            />
          </DenseGridCell>
          <DenseGridCell padding="md">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--cc-font-typewriter)', fontSize: '0.75rem' }}>
              <span>Fleet Order:</span>
              <Checkbox 
                checked={false}
                onChange={() => {}}
                markStyle="x"
              />
            </div>
          </DenseGridCell>
        </DenseGrid>
      </ComponentPreview>

      <h2>Step 4: Explore Components</h2>
      
      <p>
        Carbon Copy includes many components for building dense, data-rich forms:
      </p>
      
      <ul>
        <li><strong>FormField</strong> — Text inputs with various styles</li>
        <li><strong>Checkbox</strong> — Checkboxes with X or check marks</li>
        <li><strong>DenseGrid</strong> — Zero-gap grid layouts</li>
        <li><strong>VintageTable</strong> — Data tables with vintage styling</li>
        <li><strong>StrikethroughCell</strong> — Crossed-out cells for N/A options</li>
        <li><strong>SectionHeader</strong> — Styled section headers</li>
      </ul>

      <h2>Next Steps</h2>
      
      <ul>
        <li>Browse the <a href="/docs/components/form-field">component documentation</a></li>
        <li>Check out <a href="/docs/examples/layouts">layout examples</a></li>
        <li>Learn about <a href="/docs/theming">theming and customization</a></li>
      </ul>

      <PageActions pageContent={pageContent} pageTitle="Quick Start" />
    </article>
  );
}

