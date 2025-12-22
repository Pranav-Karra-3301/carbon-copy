'use client';

import { 
  FormField, 
  Checkbox, 
  DenseGrid, 
  DenseGridCell,
  FormLayout,
  FormLayoutArea,
} from '@/lib';
import { ComponentPreview } from '../../components/ComponentPreview';
import styles from './layouts.module.css';

export default function LayoutsPage() {
  return (
    <article>
      <h1>Layout Examples</h1>
      
      <p>
        Carbon Copy provides flexible layout systems for creating dense, 
        information-rich forms. Here are common patterns and examples.
      </p>

      <h2>Grid Layouts</h2>
      
      <ComponentPreview 
        title="2-Column Header"
        description="Common header layout with dealer info and data grid"
        code={`<DenseGrid columns="1fr 1fr" collapsed bordered>
  <DenseGridCell padding="md" borderRight>
    {/* Left column - dealer info */}
  </DenseGridCell>
  <DenseGridCell padding="none">
    {/* Right column - data grid */}
  </DenseGridCell>
</DenseGrid>`}
      >
        <DenseGrid columns="1fr 1fr" collapsed bordered>
          <DenseGridCell padding="md" borderRight>
            <div className={styles.dealerInfo}>
              <div className={styles.chargeLabel}>Charge to:</div>
              <FormField value="Carstens Chevrolet" variant="underline" onChange={() => {}} />
              <FormField label="Address" value="310 N Main St" variant="underline" size="sm" onChange={() => {}} />
              <FormField label="City, State" value="Alturas, CA" variant="underline" size="sm" onChange={() => {}} />
            </div>
          </DenseGridCell>
          <DenseGridCell padding="none">
            <DenseGrid columns="80px 100px 80px" collapsed>
              <DenseGridCell padding="xs" size="xs" borderBottom borderRight>Date</DenseGridCell>
              <DenseGridCell padding="xs" borderBottom borderRight align="center">1-17-70</DenseGridCell>
              <DenseGridCell padding="xs" size="xs" borderBottom>Zone</DenseGridCell>
              <DenseGridCell padding="xs" size="xs" borderBottom borderRight>Order</DenseGridCell>
              <DenseGridCell padding="xs" borderBottom borderRight weight="bold" textColor="red" align="center">AHQ485</DenseGridCell>
              <DenseGridCell padding="xs" borderBottom align="center">06</DenseGridCell>
            </DenseGrid>
          </DenseGridCell>
        </DenseGrid>
      </ComponentPreview>

      <ComponentPreview 
        title="4-Column Body"
        description="Multi-column layout for options and specifications"
        code={`<DenseGrid columns="1fr 1fr 1fr 1fr" collapsed bordered>
  <DenseGridCell bordered className="column">
    {/* Column 1 */}
  </DenseGridCell>
  <DenseGridCell bordered className="column">
    {/* Column 2 */}
  </DenseGridCell>
  {/* ... */}
</DenseGrid>`}
      >
        <DenseGrid columns="1fr 1fr 1fr 1fr" collapsed bordered className={styles.fourColumn}>
          <DenseGridCell borderRight className={styles.column}>
            <div className={styles.sectionTitle}>Model Options</div>
            <div className={styles.optionRow}><span>Option A</span><span>AA1</span></div>
            <div className={styles.optionRow}><span>Option B</span><span>BB2</span></div>
          </DenseGridCell>
          <DenseGridCell borderRight className={styles.column}>
            <div className={styles.sectionTitle}>Transmission</div>
            <div className={styles.optionRow}><span>3-Speed</span><span>ZW4</span></div>
            <div className={styles.optionRow}><span>4-Speed</span><span>M20</span></div>
          </DenseGridCell>
          <DenseGridCell borderRight className={styles.column}>
            <div className={styles.sectionTitle}>Options</div>
            <div className={styles.optionRow}><span>Air Conditioning</span><span>C60</span></div>
            <div className={styles.optionRow}><span>Power Steering</span><span>N40</span></div>
          </DenseGridCell>
          <DenseGridCell className={styles.column}>
            <div className={styles.sectionTitle}>Colors</div>
            <div className={styles.optionRow}><span>Exterior</span><span>45</span></div>
            <div className={styles.optionRow}><span>Interior</span><span>BB</span></div>
          </DenseGridCell>
        </DenseGrid>
      </ComponentPreview>

      <h2>Form Templates</h2>

      <ComponentPreview 
        title="Header-2Col Template"
        description="Pre-built template for form headers"
        code={`<FormLayout template="header-2col" bordered>
  <FormLayoutArea className="left">
    {/* Dealer information */}
  </FormLayoutArea>
  <FormLayoutArea border="left" className="right">
    {/* Order details grid */}
  </FormLayoutArea>
</FormLayout>`}
      >
        <FormLayout template="header-2col" bordered>
          <FormLayoutArea className={styles.templateLeft}>
            <strong>Dealer Information</strong>
            <p style={{ fontSize: '0.75rem', margin: '0.5rem 0 0' }}>Forms, addresses, signatures</p>
          </FormLayoutArea>
          <FormLayoutArea border="left" className={styles.templateRight}>
            <strong>Order Details</strong>
            <p style={{ fontSize: '0.75rem', margin: '0.5rem 0 0' }}>Dates, codes, model numbers</p>
          </FormLayoutArea>
        </FormLayout>
      </ComponentPreview>

      <ComponentPreview 
        title="Footer Template"
        description="Three-column footer layout"
        code={`<FormLayout template="footer" bordered>
  <FormLayoutArea>Form Code</FormLayoutArea>
  <FormLayoutArea align="center">Disclaimer</FormLayoutArea>
  <FormLayoutArea align="end">Badge/Logo</FormLayoutArea>
</FormLayout>`}
      >
        <FormLayout template="footer" bordered className={styles.footerTemplate}>
          <FormLayoutArea>
            <div style={{ fontSize: '0.625rem' }}>GSO 106 Rev. 5-69</div>
            <div style={{ fontSize: '0.5rem', color: '#6B8BC8' }}>Printed in U.S.A.</div>
          </FormLayoutArea>
          <FormLayoutArea align="center">
            <em style={{ fontSize: '0.625rem' }}>*See Vehicle Price Schedule</em>
          </FormLayoutArea>
          <FormLayoutArea align="end">
            <div className={styles.yearBadge}>1970</div>
          </FormLayoutArea>
        </FormLayout>
      </ComponentPreview>

      <h2>Nested Structures</h2>

      <ComponentPreview 
        title="Nested Grid Sections"
        description="Grids within grids for complex layouts"
        code={`<DenseGrid columns="1fr 2fr" collapsed bordered>
  <DenseGridCell borderRight>
    <div className="section-title">Section A</div>
    <DenseGrid columns="1fr 1fr" collapsed>
      {/* Nested content */}
    </DenseGrid>
  </DenseGridCell>
  <DenseGridCell>
    {/* Main content */}
  </DenseGridCell>
</DenseGrid>`}
      >
        <DenseGrid columns="1fr 2fr" collapsed bordered>
          <DenseGridCell borderRight className={styles.nestedSection}>
            <div className={styles.sectionTitle}>Order Type</div>
            <DenseGrid columns="1fr 1fr" collapsed>
              <DenseGridCell padding="xs" borderBottom borderRight>
                <div className={styles.checkboxRow}>
                  <span>Sold</span>
                  <Checkbox checked size="sm" markStyle="x" />
                </div>
              </DenseGridCell>
              <DenseGridCell padding="xs" borderBottom>
                <div className={styles.checkboxRow}>
                  <span>Fleet</span>
                  <Checkbox size="sm" markStyle="x" />
                </div>
              </DenseGridCell>
              <DenseGridCell padding="xs" borderRight>
                <div className={styles.checkboxRow}>
                  <span>Stock</span>
                  <Checkbox size="sm" markStyle="x" />
                </div>
              </DenseGridCell>
              <DenseGridCell padding="xs">
                <div className={styles.checkboxRow}>
                  <span>Demo</span>
                  <Checkbox size="sm" markStyle="x" />
                </div>
              </DenseGridCell>
            </DenseGrid>
          </DenseGridCell>
          <DenseGridCell className={styles.mainContent}>
            <div className={styles.sectionTitle}>Customer Information</div>
            <div style={{ padding: '0.5rem' }}>
              <FormField label="Name" value="" variant="underline" size="sm" onChange={() => {}} />
              <FormField label="Phone" value="" variant="underline" size="sm" onChange={() => {}} />
            </div>
          </DenseGridCell>
        </DenseGrid>
      </ComponentPreview>

      <h2>Pattern: Data Entry</h2>

      <ComponentPreview 
        title="Code Entry Grid"
        description="Boxed fields for numeric/code entry"
        code={`<DenseGrid columns="100px 60px 100px 60px" collapsed bordered>
  <DenseGridCell padding="sm" borderRight>Lower Color</DenseGridCell>
  <DenseGridCell padding="sm" borderRight>
    <FormField variant="boxed" align="center" size="lg" />
  </DenseGridCell>
  <DenseGridCell padding="sm" borderRight>Upper Color</DenseGridCell>
  <DenseGridCell padding="sm">
    <FormField variant="boxed" align="center" size="lg" />
  </DenseGridCell>
</DenseGrid>`}
      >
        <DenseGrid columns="100px 60px 100px 60px" collapsed bordered>
          <DenseGridCell padding="sm" borderRight size="xs">Lower Color Code</DenseGridCell>
          <DenseGridCell padding="sm" borderRight align="center">
            <FormField variant="boxed" align="center" size="lg" value="45" onChange={() => {}} />
          </DenseGridCell>
          <DenseGridCell padding="sm" borderRight size="xs">Upper Color Code</DenseGridCell>
          <DenseGridCell padding="sm" align="center">
            <FormField variant="boxed" align="center" size="lg" value="45" onChange={() => {}} />
          </DenseGridCell>
        </DenseGrid>
      </ComponentPreview>

      <h2>Pattern: Signature Block</h2>

      <ComponentPreview 
        title="Signature Area"
        description="Handwriting-style signature fields"
        code={`<div className="signature-block">
  <FormField 
    label="Dealer Signature" 
    variant="handwriting"
    value={signature}
  />
  <FormField 
    label="Date" 
    variant="underline"
    size="sm"
  />
</div>`}
      >
        <div className={styles.signatureBlock}>
          <div className={styles.signatureField}>
            <span className={styles.signatureLabel}>Dealer Signature</span>
            <FormField variant="handwriting" value="W Carstens" onChange={() => {}} />
          </div>
          <div className={styles.dateField}>
            <span className={styles.signatureLabel}>Date</span>
            <FormField variant="underline" size="sm" value="1-17-70" onChange={() => {}} />
          </div>
        </div>
      </ComponentPreview>
    </article>
  );
}

