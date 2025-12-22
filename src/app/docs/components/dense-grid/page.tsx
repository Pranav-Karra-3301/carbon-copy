'use client';

import { DenseGrid, DenseGridCell, FormField, Checkbox } from '@/lib';
import { ComponentPreview, PropsTable, VariantGrid, VariantItem } from '../ComponentPreview';
import { CodeBlock, PageActions } from '../CodeBlock';
import { TOCWrapper } from '../TOCWrapper';

const pageContent = `DenseGrid Component Documentation

A zero-gap CSS grid for creating dense, information-rich layouts. DenseGrid removes all gaps between cells and provides fine-grained control over borders, padding, and cell spanning.

Key Features:
- Zero-gap grid layout
- Per-cell border control
- Column and row spanning
- Multiple padding options
- Text alignment control`;

export default function DenseGridPage() {
  return (
    <article>
      <TOCWrapper />
      <PageActions pageContent={pageContent} pageTitle="DenseGrid" />
      
      <h1>DenseGrid</h1>
      
      <p>
        A zero-gap CSS grid for creating dense, information-rich layouts. 
        DenseGrid is the foundation for building authentic vintage form layouts 
        with precise control over borders, spacing, and cell alignment.
      </p>

      <h2>Basic Usage</h2>
      
      <CodeBlock 
        code={`import { DenseGrid, DenseGridCell } from '@prnv/carbon-copy';

function MyLayout() {
  return (
    <DenseGrid columns="1fr 1fr" collapsed bordered>
      <DenseGridCell padding="sm" borderRight>
        Left column
      </DenseGridCell>
      <DenseGridCell padding="sm">
        Right column
      </DenseGridCell>
    </DenseGrid>
  );
}`}
        language="tsx"
      />
      
      <ComponentPreview 
        title="Basic 2-Column Grid"
        description="Simple two-column layout with border"
        code={`<DenseGrid columns="1fr 1fr" collapsed bordered>
  <DenseGridCell padding="sm" borderRight>Left</DenseGridCell>
  <DenseGridCell padding="sm">Right</DenseGridCell>
</DenseGrid>`}
      >
        <DenseGrid columns="1fr 1fr" collapsed bordered>
          <DenseGridCell padding="sm" borderRight>
            Left column content
          </DenseGridCell>
          <DenseGridCell padding="sm">
            Right column content
          </DenseGridCell>
        </DenseGrid>
      </ComponentPreview>

      <h2>Column Configurations</h2>
      
      <CodeBlock 
        code={`// Equal columns
<DenseGrid columns="1fr 1fr 1fr" />

// Fixed + flexible
<DenseGrid columns="100px 1fr 100px" />

// Mixed units
<DenseGrid columns="200px 1fr 80px" />

// Pixel-based
<DenseGrid columns="120px 180px 100px" />`}
        language="tsx"
      />
      
      <ComponentPreview 
        title="Fixed + Flexible Columns"
        description="Mix fixed-width and flexible columns"
        code={`<DenseGrid columns="100px 1fr 80px" collapsed bordered>`}
      >
        <DenseGrid columns="100px 1fr 80px" collapsed bordered>
          <DenseGridCell padding="xs" borderRight borderBottom size="xs">Label</DenseGridCell>
          <DenseGridCell padding="xs" borderRight borderBottom>Flexible content area</DenseGridCell>
          <DenseGridCell padding="xs" borderBottom size="xs">Code</DenseGridCell>
          <DenseGridCell padding="xs" borderRight size="xs">Zone</DenseGridCell>
          <DenseGridCell padding="xs" borderRight>Main content</DenseGridCell>
          <DenseGridCell padding="xs" align="center">06</DenseGridCell>
        </DenseGrid>
      </ComponentPreview>

      <h2>Cell Borders</h2>
      
      <CodeBlock 
        code={`// Individual borders
<DenseGridCell borderTop />
<DenseGridCell borderRight />
<DenseGridCell borderBottom />
<DenseGridCell borderLeft />

// All borders
<DenseGridCell bordered />

// Combine borders
<DenseGridCell borderRight borderBottom />`}
        language="tsx"
      />
      
      <ComponentPreview 
        title="Border Control"
        description="Fine-grained control over cell borders"
        code={`<DenseGridCell borderRight borderBottom />`}
      >
        <DenseGrid columns="1fr 1fr 1fr" collapsed bordered>
          <DenseGridCell padding="sm" borderRight borderBottom>borderRight + borderBottom</DenseGridCell>
          <DenseGridCell padding="sm" borderRight borderBottom>borderRight + borderBottom</DenseGridCell>
          <DenseGridCell padding="sm" borderBottom>borderBottom only</DenseGridCell>
          <DenseGridCell padding="sm" borderRight>borderRight only</DenseGridCell>
          <DenseGridCell padding="sm" borderRight>borderRight only</DenseGridCell>
          <DenseGridCell padding="sm">No internal borders</DenseGridCell>
        </DenseGrid>
      </ComponentPreview>

      <h2>Cell Padding</h2>
      
      <VariantGrid title="Padding Options">
        <VariantItem label="none">
          <DenseGrid columns="1fr" collapsed bordered>
            <DenseGridCell padding="none">No padding</DenseGridCell>
          </DenseGrid>
        </VariantItem>
        <VariantItem label="xs">
          <DenseGrid columns="1fr" collapsed bordered>
            <DenseGridCell padding="xs">Extra small padding</DenseGridCell>
          </DenseGrid>
        </VariantItem>
        <VariantItem label="sm">
          <DenseGrid columns="1fr" collapsed bordered>
            <DenseGridCell padding="sm">Small padding</DenseGridCell>
          </DenseGrid>
        </VariantItem>
        <VariantItem label="md">
          <DenseGrid columns="1fr" collapsed bordered>
            <DenseGridCell padding="md">Medium padding</DenseGridCell>
          </DenseGrid>
        </VariantItem>
      </VariantGrid>

      <h2>Text Styling</h2>
      
      <CodeBlock 
        code={`// Text size
<DenseGridCell size="xs">Extra small text</DenseGridCell>
<DenseGridCell size="sm">Small text</DenseGridCell>
<DenseGridCell size="md">Medium text</DenseGridCell>

// Font weight
<DenseGridCell weight="normal">Normal weight</DenseGridCell>
<DenseGridCell weight="bold">Bold weight</DenseGridCell>

// Text color
<DenseGridCell textColor="default">Default color</DenseGridCell>
<DenseGridCell textColor="red">Red/accent color</DenseGridCell>
<DenseGridCell textColor="muted">Muted color</DenseGridCell>`}
        language="tsx"
      />
      
      <ComponentPreview 
        title="Text Styling"
        description="Control text size, weight, and color"
        code={`<DenseGridCell size="xs" weight="bold" textColor="red">`}
      >
        <DenseGrid columns="1fr 1fr 1fr" collapsed bordered>
          <DenseGridCell padding="sm" borderRight size="xs">Size: xs</DenseGridCell>
          <DenseGridCell padding="sm" borderRight size="sm">Size: sm</DenseGridCell>
          <DenseGridCell padding="sm" size="md">Size: md</DenseGridCell>
          <DenseGridCell padding="sm" borderRight borderTop weight="bold">Bold</DenseGridCell>
          <DenseGridCell padding="sm" borderRight borderTop textColor="red">Red text</DenseGridCell>
          <DenseGridCell padding="sm" borderTop textColor="muted">Muted text</DenseGridCell>
        </DenseGrid>
      </ComponentPreview>

      <h2>Alignment</h2>
      
      <ComponentPreview 
        title="Cell Alignment"
        description="Horizontal and vertical alignment options"
        code={`<DenseGridCell align="center" valign="middle">`}
      >
        <DenseGrid columns="1fr 1fr 1fr" collapsed bordered>
          <DenseGridCell padding="sm" borderRight borderBottom align="left">Left</DenseGridCell>
          <DenseGridCell padding="sm" borderRight borderBottom align="center">Center</DenseGridCell>
          <DenseGridCell padding="sm" borderBottom align="right">Right</DenseGridCell>
          <DenseGridCell padding="md" borderRight valign="top">Top</DenseGridCell>
          <DenseGridCell padding="md" borderRight valign="middle">Middle</DenseGridCell>
          <DenseGridCell padding="md" valign="bottom">Bottom</DenseGridCell>
        </DenseGrid>
      </ComponentPreview>

      <h2>Column & Row Spanning</h2>
      
      <CodeBlock 
        code={`// Span multiple columns
<DenseGridCell colSpan={2}>Spans 2 columns</DenseGridCell>

// Span multiple rows
<DenseGridCell rowSpan={2}>Spans 2 rows</DenseGridCell>

// Both
<DenseGridCell colSpan={2} rowSpan={2}>2x2 cell</DenseGridCell>`}
        language="tsx"
      />
      
      <ComponentPreview 
        title="Spanning Cells"
        description="Create cells that span multiple columns or rows"
        code={`<DenseGridCell colSpan={2}>Spans 2 columns</DenseGridCell>`}
      >
        <DenseGrid columns="1fr 1fr 1fr" collapsed bordered>
          <DenseGridCell padding="sm" colSpan={2} borderRight borderBottom>
            Spans 2 columns
          </DenseGridCell>
          <DenseGridCell padding="sm" borderBottom rowSpan={2} valign="middle" align="center">
            Spans 2 rows
          </DenseGridCell>
          <DenseGridCell padding="sm" borderRight borderBottom>Cell</DenseGridCell>
          <DenseGridCell padding="sm" borderRight borderBottom>Cell</DenseGridCell>
          <DenseGridCell padding="sm" colSpan={3} align="center">
            Spans all 3 columns
          </DenseGridCell>
        </DenseGrid>
      </ComponentPreview>

      <h2>Nested Grids</h2>
      
      <ComponentPreview 
        title="Nested Grid Structure"
        description="Grids within grids for complex layouts"
        code={`<DenseGrid columns="1fr 2fr">
  <DenseGridCell borderRight>
    <DenseGrid columns="1fr 1fr">
      {/* Nested grid */}
    </DenseGrid>
  </DenseGridCell>
</DenseGrid>`}
      >
        <DenseGrid columns="1fr 2fr" collapsed bordered>
          <DenseGridCell borderRight padding="none">
            <DenseGrid columns="1fr 1fr" collapsed>
              <DenseGridCell padding="xs" borderRight borderBottom size="xs">A1</DenseGridCell>
              <DenseGridCell padding="xs" borderBottom size="xs">A2</DenseGridCell>
              <DenseGridCell padding="xs" borderRight size="xs">B1</DenseGridCell>
              <DenseGridCell padding="xs" size="xs">B2</DenseGridCell>
            </DenseGrid>
          </DenseGridCell>
          <DenseGridCell padding="md" valign="middle" align="center">
            Main content area
          </DenseGridCell>
        </DenseGrid>
      </ComponentPreview>

      <h2>Form Integration</h2>
      
      <ComponentPreview 
        title="Grid with Form Fields"
        description="Combine DenseGrid with form components"
        code={`<DenseGrid columns="100px 1fr">
  <DenseGridCell>Name</DenseGridCell>
  <DenseGridCell>
    <FormField variant="none" value={name} />
  </DenseGridCell>
</DenseGrid>`}
      >
        <DenseGrid columns="100px 1fr 80px" collapsed bordered>
          <DenseGridCell padding="sm" borderRight borderBottom size="xs">Name</DenseGridCell>
          <DenseGridCell padding="sm" borderRight borderBottom>
            <FormField variant="none" value="Carstens Chevrolet" onChange={() => {}} size="sm" />
          </DenseGridCell>
          <DenseGridCell padding="sm" borderBottom size="xs" align="center">
            <Checkbox checked size="sm" markStyle="x" onChange={() => {}} />
          </DenseGridCell>
          <DenseGridCell padding="sm" borderRight size="xs">Address</DenseGridCell>
          <DenseGridCell padding="sm" borderRight>
            <FormField variant="none" value="310 N Main St" onChange={() => {}} size="sm" />
          </DenseGridCell>
          <DenseGridCell padding="sm" size="xs" align="center">
            <Checkbox size="sm" markStyle="x" onChange={() => {}} />
          </DenseGridCell>
        </DenseGrid>
      </ComponentPreview>

      <h2>Props Reference</h2>
      
      <h3>DenseGrid Props</h3>
      
      <PropsTable props={[
        { name: 'columns', type: 'string', description: 'CSS grid-template-columns value (e.g., "1fr 1fr", "100px 1fr 80px")' },
        { name: 'collapsed', type: 'boolean', default: 'false', description: 'Remove gaps between cells' },
        { name: 'bordered', type: 'boolean', default: 'false', description: 'Add outer border to grid' },
        { name: 'className', type: 'string', description: 'Additional CSS classes' },
        { name: 'children', type: 'ReactNode', description: 'DenseGridCell components' },
      ]} />

      <h3>DenseGridCell Props</h3>
      
      <PropsTable props={[
        { name: 'padding', type: "'none' | 'xs' | 'sm' | 'md'", default: "'none'", description: 'Cell padding' },
        { name: 'size', type: "'xs' | 'sm' | 'md'", default: "'sm'", description: 'Text size' },
        { name: 'weight', type: "'normal' | 'bold'", default: "'normal'", description: 'Font weight' },
        { name: 'textColor', type: "'default' | 'red' | 'muted'", default: "'default'", description: 'Text color' },
        { name: 'borderTop', type: 'boolean', default: 'false', description: 'Add top border' },
        { name: 'borderRight', type: 'boolean', default: 'false', description: 'Add right border' },
        { name: 'borderBottom', type: 'boolean', default: 'false', description: 'Add bottom border' },
        { name: 'borderLeft', type: 'boolean', default: 'false', description: 'Add left border' },
        { name: 'bordered', type: 'boolean', default: 'false', description: 'Add all borders' },
        { name: 'colSpan', type: 'number', description: 'Number of columns to span' },
        { name: 'rowSpan', type: 'number', description: 'Number of rows to span' },
        { name: 'align', type: "'left' | 'center' | 'right'", default: "'left'", description: 'Horizontal text alignment' },
        { name: 'valign', type: "'top' | 'middle' | 'bottom'", default: "'top'", description: 'Vertical alignment' },
      ]} />
    </article>
  );
}
