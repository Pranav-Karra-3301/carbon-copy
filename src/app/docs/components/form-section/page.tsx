'use client';

import { FormSection, FormField, Checkbox, OptionRow } from '@/lib';
import { ComponentPreview, PropsTable, VariantGrid, VariantItem } from '../ComponentPreview';
import { CodeBlock, PageActions } from '../CodeBlock';
import { TOCWrapper } from '../TOCWrapper';

const pageContent = `FormSection Component Documentation

A container component for grouping related form content with an optional styled header. FormSection provides consistent styling for form sections with multiple header variants.

Key Features:
- Styled section headers
- Multiple header color variants
- Consistent spacing and borders
- Perfect for grouping related form fields`;

export default function FormSectionPage() {
  return (
    <article>
      <TOCWrapper />
      <PageActions pageContent={pageContent} pageTitle="FormSection" />
      
      <h1>FormSection</h1>
      
      <p>
        A container component for grouping related form content with an optional 
        styled header. FormSection provides consistent styling for organizing 
        form fields into logical groups.
      </p>

      <h2>Basic Usage</h2>
      
      <CodeBlock 
        code={`import { FormSection, FormField } from '@prnv/carbon-copy';

function MyForm() {
  return (
    <FormSection title="Customer Information">
      <FormField label="Name" value={name} onChange={setName} />
      <FormField label="Phone" value={phone} onChange={setPhone} />
    </FormSection>
  );
}`}
        language="tsx"
      />
      
      <ComponentPreview 
        title="Basic FormSection"
        description="Section with header and form fields"
        code={`<FormSection title="Customer Information">
  <FormField label="Name" value={name} />
</FormSection>`}
      >
        <FormSection title="Customer Information">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', padding: '0.75rem' }}>
            <FormField label="Name" value="John Smith" variant="underline" onChange={() => {}} />
            <FormField label="Phone" value="(555) 123-4567" variant="underline" onChange={() => {}} />
            <FormField label="Email" value="john@example.com" variant="underline" onChange={() => {}} />
          </div>
        </FormSection>
      </ComponentPreview>

      <h2>Header Variants</h2>
      
      <CodeBlock 
        code={`// Primary - Maroon/red header
<FormSection title="Section Title" headerVariant="primary" />

// Navy - Navy blue header
<FormSection title="Section Title" headerVariant="navy" />

// Dark - Darker navy header
<FormSection title="Section Title" headerVariant="dark" />`}
        language="tsx"
      />
      
      <VariantGrid title="Header Variant Options">
        <VariantItem label="primary">
          <FormSection title="Primary Header" headerVariant="primary">
            <div style={{ padding: '0.5rem', fontSize: '0.75rem', fontFamily: 'var(--cc-font-typewriter)' }}>
              Section content
            </div>
          </FormSection>
        </VariantItem>
        <VariantItem label="navy">
          <FormSection title="Navy Header" headerVariant="navy">
            <div style={{ padding: '0.5rem', fontSize: '0.75rem', fontFamily: 'var(--cc-font-typewriter)' }}>
              Section content
            </div>
          </FormSection>
        </VariantItem>
        <VariantItem label="dark">
          <FormSection title="Dark Header" headerVariant="dark">
            <div style={{ padding: '0.5rem', fontSize: '0.75rem', fontFamily: 'var(--cc-font-typewriter)' }}>
              Section content
            </div>
          </FormSection>
        </VariantItem>
      </VariantGrid>

      <h2>With Options List</h2>
      
      <ComponentPreview 
        title="Options Section"
        description="FormSection with checkable options"
        code={`<FormSection title="Available Options" headerVariant="navy">
  <OptionRow label="Air Conditioning" code="C60" hasCheckbox />
  <OptionRow label="Power Steering" code="N40" hasCheckbox />
</FormSection>`}
      >
        <FormSection title="Available Options" headerVariant="navy">
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <OptionRow label="Air Conditioning" code="C60" hasCheckbox />
            <OptionRow label="Power Steering" code="N40" hasCheckbox checked />
            <OptionRow label="Power Brakes" code="J50" hasCheckbox />
            <OptionRow label="Tinted Glass" code="A01" hasCheckbox checked />
          </div>
        </FormSection>
      </ComponentPreview>

      <h2>Nested Sections</h2>
      
      <ComponentPreview 
        title="Nested FormSections"
        description="Sections within sections for complex forms"
        code={`<FormSection title="Vehicle Details" headerVariant="primary">
  <FormSection title="Exterior" headerVariant="navy">
    {/* Exterior options */}
  </FormSection>
  <FormSection title="Interior" headerVariant="navy">
    {/* Interior options */}
  </FormSection>
</FormSection>`}
      >
        <FormSection title="Vehicle Details" headerVariant="primary">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', padding: '0.5rem' }}>
            <FormSection title="Exterior" headerVariant="navy">
              <div style={{ padding: '0.5rem' }}>
                <OptionRow label="Special Paint" code="Z11" hasCheckbox />
                <OptionRow label="Rally Stripes" code="D96" hasCheckbox checked />
              </div>
            </FormSection>
            <FormSection title="Interior" headerVariant="navy">
              <div style={{ padding: '0.5rem' }}>
                <OptionRow label="Bucket Seats" code="A51" hasCheckbox checked />
                <OptionRow label="Console" code="D55" hasCheckbox />
              </div>
            </FormSection>
          </div>
        </FormSection>
      </ComponentPreview>

      <h2>With Mixed Content</h2>
      
      <ComponentPreview 
        title="Mixed Content Section"
        description="Combine different form elements in a section"
        code={`<FormSection title="Order Details" headerVariant="primary">`}
      >
        <FormSection title="Order Details" headerVariant="primary">
          <div style={{ padding: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <FormField label="Order No." value="AHQ485" variant="boxed" size="sm" onChange={() => {}} />
              <FormField label="Date" value="1-17-70" variant="underline" size="sm" onChange={() => {}} />
            </div>
            <div style={{ 
              display: 'flex', 
              gap: '1.5rem', 
              fontFamily: 'var(--cc-font-typewriter)', 
              fontSize: '0.6875rem' 
            }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                <Checkbox checked markStyle="x" size="sm" onChange={() => {}} />
                Sold Order
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                <Checkbox markStyle="x" size="sm" onChange={() => {}} />
                Stock Order
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                <Checkbox markStyle="x" size="sm" onChange={() => {}} />
                Fleet Order
              </label>
            </div>
          </div>
        </FormSection>
      </ComponentPreview>

      <h2>Without Header</h2>
      
      <p>
        You can use FormSection without a title for consistent section styling 
        without a header.
      </p>
      
      <ComponentPreview 
        title="Headerless Section"
        description="Section styling without header"
        code={`<FormSection>
  {/* Section content without header */}
</FormSection>`}
      >
        <FormSection>
          <div style={{ padding: '0.75rem' }}>
            <div style={{ 
              fontFamily: 'var(--cc-font-typewriter)', 
              fontSize: '0.75rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem'
            }}>
              <FormField label="Field 1" value="Value 1" variant="underline" onChange={() => {}} />
              <FormField label="Field 2" value="Value 2" variant="underline" onChange={() => {}} />
            </div>
          </div>
        </FormSection>
      </ComponentPreview>

      <h2>Complete Example</h2>
      
      <CodeBlock 
        code={`import { FormSection, FormField, OptionRow, Checkbox } from '@prnv/carbon-copy';

function VehicleOrderForm() {
  return (
    <div className="order-form">
      <FormSection title="Dealer Information" headerVariant="primary">
        <FormField label="Dealer Name" value={dealer} onChange={setDealer} />
        <FormField label="Address" value={address} onChange={setAddress} />
        <FormField label="City, State" value={cityState} onChange={setCityState} />
      </FormSection>

      <FormSection title="Model Selection" headerVariant="navy">
        <OptionRow label="Malibu Sport Coupe" code="13637" hasCheckbox />
        <OptionRow label="Malibu Sport Sedan" code="13669" hasCheckbox />
        <OptionRow label="SS 396 Sport Coupe" code="13837" hasCheckbox checked />
      </FormSection>

      <FormSection title="Options" headerVariant="navy">
        <OptionRow label="Air Conditioning" code="C60" hasCheckbox />
        <OptionRow label="Power Steering" code="N40" hasCheckbox checked />
        <OptionRow label="AM/FM Radio" code="U69" hasCheckbox />
      </FormSection>

      <FormSection title="Special Instructions">
        <textarea 
          placeholder="Enter any special instructions..."
          rows={3}
        />
      </FormSection>
    </div>
  );
}`}
        language="tsx"
      />

      <h2>Props Reference</h2>
      
      <PropsTable props={[
        { name: 'title', type: 'string', description: 'Section header title (optional)' },
        { name: 'headerVariant', type: "'primary' | 'navy' | 'dark'", default: "'primary'", description: 'Header color variant' },
        { name: 'className', type: 'string', description: 'Additional CSS classes' },
        { name: 'children', type: 'ReactNode', description: 'Section content' },
      ]} />

      <h2>Styling Tips</h2>
      
      <ul>
        <li>Use <code>primary</code> variant for main section headers (maroon color)</li>
        <li>Use <code>navy</code> variant for subsection headers</li>
        <li>Nest sections for complex hierarchical forms</li>
        <li>Add padding to section content for consistent spacing</li>
        <li>Combine with <code>OptionRow</code> for option lists</li>
      </ul>
    </article>
  );
}
