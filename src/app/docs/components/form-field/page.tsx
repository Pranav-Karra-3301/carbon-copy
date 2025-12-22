'use client';

import { FormField } from '@/lib';
import { ComponentPreview, PropsTable, VariantGrid, VariantItem } from '../ComponentPreview';
import { CodeBlock, PageActions } from '../CodeBlock';
import { TOCWrapper } from '../TOCWrapper';

const pageContent = `FormField Component Documentation

A versatile input field component with multiple variants for different form contexts. Supports typewriter, handwriting, and system fonts with underline, boxed, and minimal styles.

Props:
- value: string - The input value
- onChange: (value: string) => void - Change handler
- label: string - Optional label text
- variant: 'underline' | 'boxed' | 'minimal' | 'handwriting' | 'dotted' | 'none'
- size: 'xs' | 'sm' | 'md' | 'lg'
- align: 'left' | 'center' | 'right'`;

export default function FormFieldPage() {
  return (
    <article>
      <TOCWrapper />
      <PageActions pageContent={pageContent} pageTitle="FormField" />
      
      <h1>FormField</h1>
      
      <p>
        A versatile input field component with multiple variants for different 
        form contexts. Supports typewriter, handwriting, and system fonts with 
        underline, boxed, and minimal styles.
      </p>

      <h2>Basic Usage</h2>
      
      <CodeBlock 
        code={`import { FormField } from '@prnv/carbon-copy';

function MyForm() {
  const [name, setName] = useState('');
  
  return (
    <FormField 
      label="Customer Name"
      value={name}
      onChange={setName}
      variant="underline"
    />
  );
}`}
        language="tsx"
      />
      
      <ComponentPreview 
        title="Default FormField"
        description="The default underline style"
        code={`<FormField 
  label="Customer Name"
  value={name}
  onChange={setName}
  variant="underline"
/>`}
      >
        <FormField 
          label="Customer Name"
          value="John Smith"
          onChange={() => {}}
          variant="underline"
        />
      </ComponentPreview>

      <h2>Variants</h2>
      
      <CodeBlock 
        code={`// Underline - Classic form field
<FormField variant="underline" value="Text" />

// Boxed - Bordered input
<FormField variant="boxed" value="Text" />

// Minimal - No borders
<FormField variant="minimal" value="Text" />

// Handwriting - Cursive style
<FormField variant="handwriting" value="Text" />

// Dotted - Dotted underline
<FormField variant="dotted" value="Text" />

// None - No styling
<FormField variant="none" value="Text" />`}
        language="tsx"
      />
      
      <VariantGrid title="Input Variants">
        <VariantItem label="underline">
          <FormField variant="underline" value="Underline style" onChange={() => {}} />
        </VariantItem>
        <VariantItem label="boxed">
          <FormField variant="boxed" value="Boxed" onChange={() => {}} />
        </VariantItem>
        <VariantItem label="minimal">
          <FormField variant="minimal" value="Minimal style" onChange={() => {}} />
        </VariantItem>
        <VariantItem label="handwriting">
          <FormField variant="handwriting" value="Handwritten" onChange={() => {}} />
        </VariantItem>
        <VariantItem label="dotted">
          <FormField variant="dotted" value="Dotted underline" onChange={() => {}} />
        </VariantItem>
        <VariantItem label="none">
          <FormField variant="none" value="No styling" onChange={() => {}} />
        </VariantItem>
      </VariantGrid>

      <h2>Sizes</h2>
      
      <CodeBlock 
        code={`<FormField size="xs" value="Extra small" />
<FormField size="sm" value="Small" />
<FormField size="md" value="Medium" />
<FormField size="lg" value="Large" />`}
        language="tsx"
      />
      
      <VariantGrid title="Size Options">
        <VariantItem label="xs">
          <FormField size="xs" value="Extra small" onChange={() => {}} />
        </VariantItem>
        <VariantItem label="sm">
          <FormField size="sm" value="Small" onChange={() => {}} />
        </VariantItem>
        <VariantItem label="md">
          <FormField size="md" value="Medium" onChange={() => {}} />
        </VariantItem>
        <VariantItem label="lg">
          <FormField size="lg" value="Large" onChange={() => {}} />
        </VariantItem>
      </VariantGrid>

      <h2>With Labels</h2>
      
      <CodeBlock 
        code={`<FormField label="Street Address" value="123 Main St" />
<FormField label="City, State" value="San Francisco, CA" />
<FormField label="ZIP Code" value="94102" size="sm" />`}
        language="tsx"
      />
      
      <ComponentPreview 
        title="Labeled Field"
        description="FormField with an integrated label"
        code={`<FormField 
  label="Street Address"
  value="123 Main Street"
  variant="underline"
/>`}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <FormField label="Street Address" value="123 Main Street" onChange={() => {}} />
          <FormField label="City, State" value="San Francisco, CA" onChange={() => {}} />
          <FormField label="ZIP Code" value="94102" onChange={() => {}} size="sm" />
        </div>
      </ComponentPreview>

      <h2>Alignment</h2>
      
      <CodeBlock 
        code={`<FormField align="left" value="Left" variant="boxed" />
<FormField align="center" value="Center" variant="boxed" />
<FormField align="right" value="Right" variant="boxed" />`}
        language="tsx"
      />
      
      <ComponentPreview 
        title="Text Alignment"
        description="Control text alignment within the field"
        code={`<FormField align="center" value="Centered" />`}
      >
        <div style={{ display: 'flex', gap: '1rem' }}>
          <FormField align="left" value="Left" variant="boxed" onChange={() => {}} />
          <FormField align="center" value="Center" variant="boxed" onChange={() => {}} />
          <FormField align="right" value="Right" variant="boxed" onChange={() => {}} />
        </div>
      </ComponentPreview>

      <h2>Props Reference</h2>
      
      <PropsTable props={[
        { name: 'value', type: 'string', description: 'The input value' },
        { name: 'onChange', type: '(value: string) => void', description: 'Change handler' },
        { name: 'label', type: 'string', description: 'Optional label text' },
        { name: 'variant', type: "'underline' | 'boxed' | 'minimal' | 'handwriting' | 'dotted' | 'none'", default: "'underline'", description: 'Visual style variant' },
        { name: 'size', type: "'xs' | 'sm' | 'md' | 'lg'", default: "'md'", description: 'Input size' },
        { name: 'align', type: "'left' | 'center' | 'right'", default: "'left'", description: 'Text alignment' },
        { name: 'placeholder', type: 'string', description: 'Placeholder text' },
        { name: 'disabled', type: 'boolean', default: 'false', description: 'Disable the input' },
        { name: 'readOnly', type: 'boolean', default: 'false', description: 'Make input read-only' },
        { name: 'className', type: 'string', description: 'Additional CSS classes' },
      ]} />

      <h2>Complete Example</h2>
      
      <CodeBlock 
        code={`import { FormField } from '@prnv/carbon-copy';
import { useState } from 'react';

export function AddressForm() {
  const [form, setForm] = useState({
    name: '',
    street: '',
    city: '',
    state: '',
    zip: ''
  });

  const update = (field: string) => (value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="address-form">
      <FormField 
        label="Name" 
        value={form.name} 
        onChange={update('name')} 
      />
      <FormField 
        label="Street Address" 
        value={form.street} 
        onChange={update('street')} 
      />
      <div className="row">
        <FormField 
          label="City" 
          value={form.city} 
          onChange={update('city')} 
        />
        <FormField 
          label="State" 
          value={form.state} 
          onChange={update('state')} 
          size="sm" 
        />
        <FormField 
          label="ZIP" 
          value={form.zip} 
          onChange={update('zip')} 
          size="sm" 
        />
      </div>
    </div>
  );
}`}
        language="tsx"
      />
      
      <ComponentPreview 
        title="Complete Address Form"
        description="Multiple fields in a form layout"
        code={`See code above`}
      >
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '0.5rem',
          padding: '1rem',
          border: '1px solid var(--cc-border-primary)',
          backgroundColor: 'transparent'
        }}>
          <FormField label="Name" value="Carstens Chevrolet" onChange={() => {}} />
          <FormField label="Street Address" value="310 N Main St" onChange={() => {}} />
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <FormField label="City" value="Alturas" onChange={() => {}} />
            <FormField label="State" value="CA" onChange={() => {}} size="sm" />
            <FormField label="ZIP" value="96101" onChange={() => {}} size="sm" />
          </div>
        </div>
      </ComponentPreview>
    </article>
  );
}
