'use client';

import { FormGrid, FormGridItem, FormField, Checkbox } from '@/lib';
import { ComponentPreview, PropsTable, VariantGrid, VariantItem } from '../ComponentPreview';
import { CodeBlock, PageActions } from '../CodeBlock';
import { TOCWrapper } from '../TOCWrapper';

const pageContent = `FormGrid Component Documentation

A flexible grid wrapper for organizing form fields in columns. FormGrid provides a simpler alternative to DenseGrid when you need basic multi-column form layouts with optional gaps.

Key Features:
- Configurable column count
- Adjustable gap sizes
- Column spanning for items
- Simple API for basic layouts`;

export default function FormGridPage() {
  return (
    <article>
      <TOCWrapper />
      <PageActions pageContent={pageContent} pageTitle="FormGrid" />
      
      <h1>FormGrid</h1>
      
      <p>
        A flexible grid wrapper for organizing form fields in columns. FormGrid 
        provides a simpler alternative to DenseGrid when you need basic 
        multi-column form layouts with optional gaps.
      </p>

      <h2>Basic Usage</h2>
      
      <CodeBlock 
        code={`import { FormGrid, FormGridItem, FormField } from '@prnv/carbon-copy';

function MyForm() {
  return (
    <FormGrid columns={2} gap="sm">
      <FormGridItem>
        <FormField label="First Name" value={firstName} />
      </FormGridItem>
      <FormGridItem>
        <FormField label="Last Name" value={lastName} />
      </FormGridItem>
    </FormGrid>
  );
}`}
        language="tsx"
      />
      
      <ComponentPreview 
        title="Basic 2-Column Grid"
        description="Simple two-column form layout"
        code={`<FormGrid columns={2} gap="sm">
  <FormGridItem>Field 1</FormGridItem>
  <FormGridItem>Field 2</FormGridItem>
</FormGrid>`}
      >
        <FormGrid columns={2} gap="sm">
          <FormGridItem>
            <FormField label="First Name" value="John" variant="underline" onChange={() => {}} />
          </FormGridItem>
          <FormGridItem>
            <FormField label="Last Name" value="Smith" variant="underline" onChange={() => {}} />
          </FormGridItem>
          <FormGridItem>
            <FormField label="Email" value="john@example.com" variant="underline" onChange={() => {}} />
          </FormGridItem>
          <FormGridItem>
            <FormField label="Phone" value="(555) 123-4567" variant="underline" onChange={() => {}} />
          </FormGridItem>
        </FormGrid>
      </ComponentPreview>

      <h2>Column Configurations</h2>
      
      <CodeBlock 
        code={`// Number of columns
<FormGrid columns={2}>Two columns</FormGrid>
<FormGrid columns={3}>Three columns</FormGrid>
<FormGrid columns={4}>Four columns</FormGrid>

// Custom template string
<FormGrid columns="1fr 2fr">1:2 ratio</FormGrid>
<FormGrid columns="100px 1fr 100px">Fixed + flexible</FormGrid>`}
        language="tsx"
      />
      
      <VariantGrid title="Column Options">
        <VariantItem label="2 columns">
          <FormGrid columns={2} gap="xs">
            <FormGridItem>
              <div style={{ padding: '0.5rem', background: 'rgba(50,77,136,0.1)', fontSize: '0.6875rem', fontFamily: 'var(--cc-font-typewriter)' }}>Col 1</div>
            </FormGridItem>
            <FormGridItem>
              <div style={{ padding: '0.5rem', background: 'rgba(50,77,136,0.1)', fontSize: '0.6875rem', fontFamily: 'var(--cc-font-typewriter)' }}>Col 2</div>
            </FormGridItem>
          </FormGrid>
        </VariantItem>
        <VariantItem label="3 columns">
          <FormGrid columns={3} gap="xs">
            <FormGridItem>
              <div style={{ padding: '0.5rem', background: 'rgba(50,77,136,0.1)', fontSize: '0.6875rem', fontFamily: 'var(--cc-font-typewriter)' }}>1</div>
            </FormGridItem>
            <FormGridItem>
              <div style={{ padding: '0.5rem', background: 'rgba(50,77,136,0.1)', fontSize: '0.6875rem', fontFamily: 'var(--cc-font-typewriter)' }}>2</div>
            </FormGridItem>
            <FormGridItem>
              <div style={{ padding: '0.5rem', background: 'rgba(50,77,136,0.1)', fontSize: '0.6875rem', fontFamily: 'var(--cc-font-typewriter)' }}>3</div>
            </FormGridItem>
          </FormGrid>
        </VariantItem>
        <VariantItem label="4 columns">
          <FormGrid columns={4} gap="xs">
            <FormGridItem>
              <div style={{ padding: '0.5rem', background: 'rgba(50,77,136,0.1)', fontSize: '0.6875rem', fontFamily: 'var(--cc-font-typewriter)' }}>1</div>
            </FormGridItem>
            <FormGridItem>
              <div style={{ padding: '0.5rem', background: 'rgba(50,77,136,0.1)', fontSize: '0.6875rem', fontFamily: 'var(--cc-font-typewriter)' }}>2</div>
            </FormGridItem>
            <FormGridItem>
              <div style={{ padding: '0.5rem', background: 'rgba(50,77,136,0.1)', fontSize: '0.6875rem', fontFamily: 'var(--cc-font-typewriter)' }}>3</div>
            </FormGridItem>
            <FormGridItem>
              <div style={{ padding: '0.5rem', background: 'rgba(50,77,136,0.1)', fontSize: '0.6875rem', fontFamily: 'var(--cc-font-typewriter)' }}>4</div>
            </FormGridItem>
          </FormGrid>
        </VariantItem>
      </VariantGrid>

      <h2>Gap Sizes</h2>
      
      <CodeBlock 
        code={`<FormGrid gap="none">No gap</FormGrid>
<FormGrid gap="xs">Extra small gap</FormGrid>
<FormGrid gap="sm">Small gap</FormGrid>
<FormGrid gap="md">Medium gap</FormGrid>`}
        language="tsx"
      />
      
      <VariantGrid title="Gap Options">
        <VariantItem label="none">
          <FormGrid columns={2} gap="none">
            <FormGridItem>
              <div style={{ padding: '0.5rem', background: 'rgba(50,77,136,0.15)', fontSize: '0.6875rem', fontFamily: 'var(--cc-font-typewriter)', border: '1px solid var(--cc-border-primary)' }}>No gap</div>
            </FormGridItem>
            <FormGridItem>
              <div style={{ padding: '0.5rem', background: 'rgba(50,77,136,0.15)', fontSize: '0.6875rem', fontFamily: 'var(--cc-font-typewriter)', border: '1px solid var(--cc-border-primary)' }}>No gap</div>
            </FormGridItem>
          </FormGrid>
        </VariantItem>
        <VariantItem label="xs">
          <FormGrid columns={2} gap="xs">
            <FormGridItem>
              <div style={{ padding: '0.5rem', background: 'rgba(50,77,136,0.15)', fontSize: '0.6875rem', fontFamily: 'var(--cc-font-typewriter)' }}>XS gap</div>
            </FormGridItem>
            <FormGridItem>
              <div style={{ padding: '0.5rem', background: 'rgba(50,77,136,0.15)', fontSize: '0.6875rem', fontFamily: 'var(--cc-font-typewriter)' }}>XS gap</div>
            </FormGridItem>
          </FormGrid>
        </VariantItem>
        <VariantItem label="sm">
          <FormGrid columns={2} gap="sm">
            <FormGridItem>
              <div style={{ padding: '0.5rem', background: 'rgba(50,77,136,0.15)', fontSize: '0.6875rem', fontFamily: 'var(--cc-font-typewriter)' }}>SM gap</div>
            </FormGridItem>
            <FormGridItem>
              <div style={{ padding: '0.5rem', background: 'rgba(50,77,136,0.15)', fontSize: '0.6875rem', fontFamily: 'var(--cc-font-typewriter)' }}>SM gap</div>
            </FormGridItem>
          </FormGrid>
        </VariantItem>
        <VariantItem label="md">
          <FormGrid columns={2} gap="md">
            <FormGridItem>
              <div style={{ padding: '0.5rem', background: 'rgba(50,77,136,0.15)', fontSize: '0.6875rem', fontFamily: 'var(--cc-font-typewriter)' }}>MD gap</div>
            </FormGridItem>
            <FormGridItem>
              <div style={{ padding: '0.5rem', background: 'rgba(50,77,136,0.15)', fontSize: '0.6875rem', fontFamily: 'var(--cc-font-typewriter)' }}>MD gap</div>
            </FormGridItem>
          </FormGrid>
        </VariantItem>
      </VariantGrid>

      <h2>Column Spanning</h2>
      
      <CodeBlock 
        code={`<FormGrid columns={3}>
  {/* Span 2 columns */}
  <FormGridItem colSpan={2}>
    <FormField label="Full Address" value={address} />
  </FormGridItem>
  
  {/* Single column */}
  <FormGridItem>
    <FormField label="ZIP" value={zip} />
  </FormGridItem>
  
  {/* Span all 3 columns */}
  <FormGridItem colSpan={3}>
    <FormField label="Notes" value={notes} />
  </FormGridItem>
</FormGrid>`}
        language="tsx"
      />
      
      <ComponentPreview 
        title="Column Spanning"
        description="Items that span multiple columns"
        code={`<FormGridItem colSpan={2}>Spans 2 columns</FormGridItem>`}
      >
        <FormGrid columns={3} gap="sm">
          <FormGridItem colSpan={2}>
            <FormField label="Street Address" value="310 N Main Street" variant="underline" onChange={() => {}} />
          </FormGridItem>
          <FormGridItem>
            <FormField label="ZIP" value="96101" variant="underline" onChange={() => {}} />
          </FormGridItem>
          <FormGridItem>
            <FormField label="City" value="Alturas" variant="underline" onChange={() => {}} />
          </FormGridItem>
          <FormGridItem>
            <FormField label="State" value="CA" variant="underline" onChange={() => {}} />
          </FormGridItem>
          <FormGridItem>
            <FormField label="Country" value="USA" variant="underline" onChange={() => {}} />
          </FormGridItem>
          <FormGridItem colSpan={3}>
            <FormField label="Special Instructions" value="Leave at front desk" variant="underline" onChange={() => {}} />
          </FormGridItem>
        </FormGrid>
      </ComponentPreview>

      <h2>Custom Column Template</h2>
      
      <ComponentPreview 
        title="Custom Column Widths"
        description="Using CSS grid template for custom widths"
        code={`<FormGrid columns="100px 1fr 80px">`}
      >
        <FormGrid columns="100px 1fr 80px" gap="sm">
          <FormGridItem>
            <div style={{ 
              padding: '0.5rem', 
              background: 'rgba(50,77,136,0.1)', 
              fontSize: '0.6875rem', 
              fontFamily: 'var(--cc-font-typewriter)',
              textAlign: 'center'
            }}>
              100px
            </div>
          </FormGridItem>
          <FormGridItem>
            <div style={{ 
              padding: '0.5rem', 
              background: 'rgba(50,77,136,0.1)', 
              fontSize: '0.6875rem', 
              fontFamily: 'var(--cc-font-typewriter)',
              textAlign: 'center'
            }}>
              1fr (flexible)
            </div>
          </FormGridItem>
          <FormGridItem>
            <div style={{ 
              padding: '0.5rem', 
              background: 'rgba(50,77,136,0.1)', 
              fontSize: '0.6875rem', 
              fontFamily: 'var(--cc-font-typewriter)',
              textAlign: 'center'
            }}>
              80px
            </div>
          </FormGridItem>
        </FormGrid>
      </ComponentPreview>

      <h2>With Checkboxes</h2>
      
      <ComponentPreview 
        title="Checkbox Grid"
        description="Grid layout for checkbox options"
        code={`<FormGrid columns={2} gap="xs">`}
      >
        <FormGrid columns={2} gap="xs">
          <FormGridItem>
            <label style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.5rem',
              fontFamily: 'var(--cc-font-typewriter)',
              fontSize: '0.75rem',
              padding: '0.375rem'
            }}>
              <Checkbox checked markStyle="x" size="sm" onChange={() => {}} />
              Sold Order
            </label>
          </FormGridItem>
          <FormGridItem>
            <label style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.5rem',
              fontFamily: 'var(--cc-font-typewriter)',
              fontSize: '0.75rem',
              padding: '0.375rem'
            }}>
              <Checkbox markStyle="x" size="sm" onChange={() => {}} />
              Stock Order
            </label>
          </FormGridItem>
          <FormGridItem>
            <label style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.5rem',
              fontFamily: 'var(--cc-font-typewriter)',
              fontSize: '0.75rem',
              padding: '0.375rem'
            }}>
              <Checkbox markStyle="x" size="sm" onChange={() => {}} />
              Fleet Order
            </label>
          </FormGridItem>
          <FormGridItem>
            <label style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.5rem',
              fontFamily: 'var(--cc-font-typewriter)',
              fontSize: '0.75rem',
              padding: '0.375rem'
            }}>
              <Checkbox markStyle="x" size="sm" onChange={() => {}} />
              Demo Order
            </label>
          </FormGridItem>
        </FormGrid>
      </ComponentPreview>

      <h2>Complete Example</h2>
      
      <CodeBlock 
        code={`import { FormGrid, FormGridItem, FormField, Checkbox } from '@prnv/carbon-copy';

function ContactForm() {
  return (
    <form className="contact-form">
      <FormGrid columns={2} gap="sm">
        <FormGridItem>
          <FormField 
            label="First Name" 
            value={firstName} 
            onChange={setFirstName}
          />
        </FormGridItem>
        <FormGridItem>
          <FormField 
            label="Last Name" 
            value={lastName} 
            onChange={setLastName}
          />
        </FormGridItem>
        
        <FormGridItem colSpan={2}>
          <FormField 
            label="Email" 
            value={email} 
            onChange={setEmail}
          />
        </FormGridItem>
        
        <FormGridItem colSpan={2}>
          <FormField 
            label="Address" 
            value={address} 
            onChange={setAddress}
          />
        </FormGridItem>
        
        <FormGridItem>
          <FormField 
            label="City" 
            value={city} 
            onChange={setCity}
          />
        </FormGridItem>
        <FormGridItem>
          <FormGrid columns={2} gap="xs">
            <FormGridItem>
              <FormField label="State" value={state} onChange={setState} />
            </FormGridItem>
            <FormGridItem>
              <FormField label="ZIP" value={zip} onChange={setZip} />
            </FormGridItem>
          </FormGrid>
        </FormGridItem>
      </FormGrid>
    </form>
  );
}`}
        language="tsx"
      />

      <h2>FormGrid vs DenseGrid</h2>
      
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>FormGrid</th>
            <th>DenseGrid</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Best for</td>
            <td>Simple form layouts</td>
            <td>Dense, data-heavy layouts</td>
          </tr>
          <tr>
            <td>Gaps</td>
            <td>Optional, configurable</td>
            <td>Zero-gap by default</td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>Not built-in</td>
            <td>Per-cell border control</td>
          </tr>
          <tr>
            <td>Complexity</td>
            <td>Simpler API</td>
            <td>More options</td>
          </tr>
        </tbody>
      </table>

      <h2>Props Reference</h2>
      
      <h3>FormGrid Props</h3>
      
      <PropsTable props={[
        { name: 'columns', type: 'number | string', default: '1', description: 'Number of columns or CSS grid-template-columns value' },
        { name: 'gap', type: "'none' | 'xs' | 'sm' | 'md'", default: "'sm'", description: 'Gap between grid items' },
        { name: 'className', type: 'string', description: 'Additional CSS classes' },
        { name: 'children', type: 'ReactNode', description: 'FormGridItem components' },
      ]} />

      <h3>FormGridItem Props</h3>
      
      <PropsTable props={[
        { name: 'colSpan', type: 'number', default: '1', description: 'Number of columns to span' },
        { name: 'className', type: 'string', description: 'Additional CSS classes' },
        { name: 'children', type: 'ReactNode', description: 'Item content' },
      ]} />
    </article>
  );
}
