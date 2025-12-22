'use client';

import { FormLayout, FormLayoutArea, FormField } from '@/lib';
import { ComponentPreview, PropsTable } from '../ComponentPreview';
import { CodeBlock, PageActions } from '../CodeBlock';
import { TOCWrapper } from '../TOCWrapper';

const pageContent = `FormLayout Component Documentation

A template-based layout system for common form patterns. FormLayout provides pre-built templates for headers, footers, and multi-column layouts that are commonly used in vintage forms.

Templates:
- header-2col: Two-column header with dealer info and data grid
- footer: Three-column footer layout
- body-4col: Four-column body layout
- body-3col: Three-column body layout`;

export default function FormLayoutPage() {
  return (
    <article>
      <TOCWrapper />
      <PageActions pageContent={pageContent} pageTitle="FormLayout" />
      
      <h1>FormLayout</h1>
      
      <p>
        A template-based layout system for common form patterns. FormLayout 
        provides pre-built templates for headers, footers, and multi-column 
        layouts commonly used in vintage carbon copy forms.
      </p>

      <h2>Basic Usage</h2>
      
      <CodeBlock 
        code={`import { FormLayout, FormLayoutArea } from '@prnv/carbon-copy';

function MyForm() {
  return (
    <FormLayout template="header-2col" bordered>
      <FormLayoutArea>
        {/* Left column content */}
      </FormLayoutArea>
      <FormLayoutArea border="left">
        {/* Right column content */}
      </FormLayoutArea>
    </FormLayout>
  );
}`}
        language="tsx"
      />

      <h2>Header Template (2-Column)</h2>
      
      <p>
        The <code>header-2col</code> template creates a two-column layout perfect 
        for form headers with dealer/customer information on the left and order 
        details on the right.
      </p>
      
      <CodeBlock 
        code={`<FormLayout template="header-2col" bordered>
  <FormLayoutArea>
    <strong>Charge to:</strong>
    <FormField label="Dealer" value={dealer} />
    <FormField label="Address" value={address} />
  </FormLayoutArea>
  <FormLayoutArea border="left">
    {/* Order details grid */}
  </FormLayoutArea>
</FormLayout>`}
        language="tsx"
      />
      
      <ComponentPreview 
        title="Header 2-Column Template"
        description="Classic two-column form header layout"
        code={`<FormLayout template="header-2col" bordered>`}
      >
        <FormLayout template="header-2col" bordered>
          <FormLayoutArea>
            <div style={{ fontFamily: 'var(--cc-font-typewriter)', fontSize: '0.75rem' }}>
              <div style={{ color: 'var(--cc-text-muted)', marginBottom: '0.5rem' }}>CHARGE TO:</div>
              <FormField value="Carstens Chevrolet" variant="underline" onChange={() => {}} />
              <FormField label="Address" value="310 N Main St" variant="underline" size="sm" onChange={() => {}} />
              <FormField label="City, State" value="Alturas, CA 96101" variant="underline" size="sm" onChange={() => {}} />
            </div>
          </FormLayoutArea>
          <FormLayoutArea border="left">
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: '80px 1fr', 
              gap: '0',
              fontFamily: 'var(--cc-font-typewriter)',
              fontSize: '0.6875rem'
            }}>
              <div style={{ padding: '0.25rem 0.5rem', borderBottom: '1px solid var(--cc-border-primary)', borderRight: '1px solid var(--cc-border-primary)' }}>Date</div>
              <div style={{ padding: '0.25rem 0.5rem', borderBottom: '1px solid var(--cc-border-primary)' }}>1-17-70</div>
              <div style={{ padding: '0.25rem 0.5rem', borderBottom: '1px solid var(--cc-border-primary)', borderRight: '1px solid var(--cc-border-primary)' }}>Order No.</div>
              <div style={{ padding: '0.25rem 0.5rem', borderBottom: '1px solid var(--cc-border-primary)', color: 'var(--cc-text-red)', fontWeight: 'bold' }}>AHQ485</div>
              <div style={{ padding: '0.25rem 0.5rem', borderRight: '1px solid var(--cc-border-primary)' }}>Zone</div>
              <div style={{ padding: '0.25rem 0.5rem' }}>06</div>
            </div>
          </FormLayoutArea>
        </FormLayout>
      </ComponentPreview>

      <h2>Footer Template</h2>
      
      <p>
        The <code>footer</code> template creates a three-column layout for form 
        footers with form codes, disclaimers, and badges.
      </p>
      
      <CodeBlock 
        code={`<FormLayout template="footer" bordered>
  <FormLayoutArea>
    <div>GSO 106 Rev. 5-69</div>
    <div>Printed in U.S.A.</div>
  </FormLayoutArea>
  <FormLayoutArea align="center">
    <em>*See Vehicle Price Schedule</em>
  </FormLayoutArea>
  <FormLayoutArea align="end">
    <YearBadge year="1970" />
  </FormLayoutArea>
</FormLayout>`}
        language="tsx"
      />
      
      <ComponentPreview 
        title="Footer Template"
        description="Three-column footer with form codes and badges"
        code={`<FormLayout template="footer" bordered>`}
      >
        <FormLayout template="footer" bordered>
          <FormLayoutArea>
            <div style={{ fontFamily: 'var(--cc-font-mono)', fontSize: '0.625rem' }}>
              <div>GSO 106 Rev. 5-69</div>
              <div style={{ color: 'var(--cc-text-muted)' }}>Printed in U.S.A.</div>
            </div>
          </FormLayoutArea>
          <FormLayoutArea align="center">
            <em style={{ fontFamily: 'var(--cc-font-typewriter)', fontSize: '0.625rem' }}>
              *See Vehicle Price Schedule for Options and Prices
            </em>
          </FormLayoutArea>
          <FormLayoutArea align="end">
            <div style={{ 
              border: '2px solid var(--cc-border-primary)', 
              padding: '0.5rem 1rem',
              fontFamily: 'var(--cc-font-typewriter)',
              fontWeight: 'bold',
              fontSize: '1.25rem'
            }}>
              1970
            </div>
          </FormLayoutArea>
        </FormLayout>
      </ComponentPreview>

      <h2>Body Templates</h2>
      
      <p>
        The <code>body-3col</code> and <code>body-4col</code> templates provide 
        multi-column layouts for the main body of forms.
      </p>
      
      <CodeBlock 
        code={`// 3-column body layout
<FormLayout template="body-3col" bordered>
  <FormLayoutArea>Column 1</FormLayoutArea>
  <FormLayoutArea border="left">Column 2</FormLayoutArea>
  <FormLayoutArea border="left">Column 3</FormLayoutArea>
</FormLayout>

// 4-column body layout
<FormLayout template="body-4col" bordered>
  <FormLayoutArea>Column 1</FormLayoutArea>
  <FormLayoutArea border="left">Column 2</FormLayoutArea>
  <FormLayoutArea border="left">Column 3</FormLayoutArea>
  <FormLayoutArea border="left">Column 4</FormLayoutArea>
</FormLayout>`}
        language="tsx"
      />
      
      <ComponentPreview 
        title="3-Column Body Template"
        description="Three-column layout for form body"
        code={`<FormLayout template="body-3col">`}
      >
        <FormLayout template="body-3col" bordered>
          <FormLayoutArea>
            <div style={{ fontFamily: 'var(--cc-font-typewriter)', fontSize: '0.75rem', padding: '1rem' }}>
              <strong>Section A</strong>
              <p style={{ margin: '0.5rem 0 0', fontSize: '0.6875rem' }}>Left column content</p>
            </div>
          </FormLayoutArea>
          <FormLayoutArea border="left">
            <div style={{ fontFamily: 'var(--cc-font-typewriter)', fontSize: '0.75rem', padding: '1rem' }}>
              <strong>Section B</strong>
              <p style={{ margin: '0.5rem 0 0', fontSize: '0.6875rem' }}>Center column content</p>
            </div>
          </FormLayoutArea>
          <FormLayoutArea border="left">
            <div style={{ fontFamily: 'var(--cc-font-typewriter)', fontSize: '0.75rem', padding: '1rem' }}>
              <strong>Section C</strong>
              <p style={{ margin: '0.5rem 0 0', fontSize: '0.6875rem' }}>Right column content</p>
            </div>
          </FormLayoutArea>
        </FormLayout>
      </ComponentPreview>

      <h2>Area Borders</h2>
      
      <CodeBlock 
        code={`// Border options for FormLayoutArea
<FormLayoutArea border="none">No border</FormLayoutArea>
<FormLayoutArea border="left">Left border</FormLayoutArea>
<FormLayoutArea border="right">Right border</FormLayoutArea>
<FormLayoutArea border="top">Top border</FormLayoutArea>
<FormLayoutArea border="bottom">Bottom border</FormLayoutArea>`}
        language="tsx"
      />
      
      <ComponentPreview 
        title="Area Border Options"
        description="Control borders between layout areas"
        code={`<FormLayoutArea border="left">`}
      >
        <FormLayout template="body-3col" bordered>
          <FormLayoutArea>
            <div style={{ padding: '0.75rem', fontFamily: 'var(--cc-font-typewriter)', fontSize: '0.6875rem' }}>
              border=&quot;none&quot; (default)
            </div>
          </FormLayoutArea>
          <FormLayoutArea border="left">
            <div style={{ padding: '0.75rem', fontFamily: 'var(--cc-font-typewriter)', fontSize: '0.6875rem' }}>
              border=&quot;left&quot;
            </div>
          </FormLayoutArea>
          <FormLayoutArea border="left">
            <div style={{ padding: '0.75rem', fontFamily: 'var(--cc-font-typewriter)', fontSize: '0.6875rem' }}>
              border=&quot;left&quot;
            </div>
          </FormLayoutArea>
        </FormLayout>
      </ComponentPreview>

      <h2>Alignment</h2>
      
      <ComponentPreview 
        title="Content Alignment"
        description="Align content within layout areas"
        code={`<FormLayoutArea align="center">`}
      >
        <FormLayout template="footer" bordered>
          <FormLayoutArea align="start">
            <div style={{ fontFamily: 'var(--cc-font-typewriter)', fontSize: '0.6875rem' }}>
              align=&quot;start&quot;
            </div>
          </FormLayoutArea>
          <FormLayoutArea align="center">
            <div style={{ fontFamily: 'var(--cc-font-typewriter)', fontSize: '0.6875rem' }}>
              align=&quot;center&quot;
            </div>
          </FormLayoutArea>
          <FormLayoutArea align="end">
            <div style={{ fontFamily: 'var(--cc-font-typewriter)', fontSize: '0.6875rem' }}>
              align=&quot;end&quot;
            </div>
          </FormLayoutArea>
        </FormLayout>
      </ComponentPreview>

      <h2>Complete Example</h2>
      
      <CodeBlock 
        code={`import { FormLayout, FormLayoutArea, FormField, YearBadge } from '@prnv/carbon-copy';

function OrderFormHeader() {
  return (
    <>
      {/* Header */}
      <FormLayout template="header-2col" bordered>
        <FormLayoutArea>
          <div className="dealer-info">
            <span className="label">Charge to:</span>
            <FormField value={dealerName} onChange={setDealerName} />
            <FormField label="Address" value={address} onChange={setAddress} />
            <FormField label="City, State" value={cityState} onChange={setCityState} />
          </div>
        </FormLayoutArea>
        <FormLayoutArea border="left">
          <OrderDetailsGrid />
        </FormLayoutArea>
      </FormLayout>

      {/* Footer */}
      <FormLayout template="footer" bordered>
        <FormLayoutArea>
          <span>GSO 106 Rev. 5-69</span>
        </FormLayoutArea>
        <FormLayoutArea align="center">
          <em>*See Price Schedule</em>
        </FormLayoutArea>
        <FormLayoutArea align="end">
          <YearBadge year="1970" />
        </FormLayoutArea>
      </FormLayout>
    </>
  );
}`}
        language="tsx"
      />

      <h2>Props Reference</h2>
      
      <h3>FormLayout Props</h3>
      
      <PropsTable props={[
        { name: 'template', type: "'header-2col' | 'footer' | 'body-3col' | 'body-4col'", description: 'Layout template to use' },
        { name: 'bordered', type: 'boolean', default: 'false', description: 'Add outer border' },
        { name: 'className', type: 'string', description: 'Additional CSS classes' },
        { name: 'style', type: 'CSSProperties', description: 'Inline styles (useful for custom grid-template-columns)' },
        { name: 'children', type: 'ReactNode', description: 'FormLayoutArea components' },
      ]} />

      <h3>FormLayoutArea Props</h3>
      
      <PropsTable props={[
        { name: 'border', type: "'none' | 'left' | 'right' | 'top' | 'bottom'", default: "'none'", description: 'Border placement' },
        { name: 'align', type: "'start' | 'center' | 'end'", default: "'start'", description: 'Content alignment' },
        { name: 'className', type: 'string', description: 'Additional CSS classes' },
        { name: 'children', type: 'ReactNode', description: 'Area content' },
      ]} />
    </article>
  );
}
