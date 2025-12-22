'use client';

import React, { useState } from 'react';
import styles from './preview.module.css';

interface ComponentPreviewProps {
  title: string;
  description?: string;
  code: string;
  children: React.ReactNode;
}

export function ComponentPreview({ 
  title, 
  description, 
  code, 
  children 
}: ComponentPreviewProps) {
  const [showCode, setShowCode] = useState(false);
  
  return (
    <div className={styles.preview}>
      <div className={styles.previewHeader}>
        <h3 className={styles.previewTitle}>{title}</h3>
        <button 
          className={styles.toggleButton}
          onClick={() => setShowCode(!showCode)}
        >
          {showCode ? '← Preview' : 'View Code →'}
        </button>
      </div>
      
      {description && (
        <p className={styles.previewDescription}>{description}</p>
      )}
      
      <div className={styles.previewContent}>
        {showCode ? (
          <pre className={styles.codeBlock}>
            <code>{code}</code>
          </pre>
        ) : (
          <div className={styles.componentArea}>
            {children}
          </div>
        )}
      </div>
    </div>
  );
}

interface PropsTableProps {
  props: Array<{
    name: string;
    type: string;
    default?: string;
    description: string;
  }>;
}

export function PropsTable({ props }: PropsTableProps) {
  return (
    <div className={styles.propsTable}>
      <table>
        <thead>
          <tr>
            <th>Prop</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {props.map((prop) => (
            <tr key={prop.name}>
              <td className={styles.nameCell}><code>{prop.name}</code></td>
              <td className={styles.typeCell}><code className={styles.typeCode}>{prop.type}</code></td>
              <td className={styles.defaultCell}>{prop.default ? <code>{prop.default}</code> : '—'}</td>
              <td className={styles.descCell}>{prop.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

interface VariantGridProps {
  title: string;
  children: React.ReactNode;
}

export function VariantGrid({ title, children }: VariantGridProps) {
  return (
    <div className={styles.variantGrid}>
      <h4 className={styles.variantTitle}>{title}</h4>
      <div className={styles.variantItems}>
        {children}
      </div>
    </div>
  );
}

interface VariantItemProps {
  label: string;
  children: React.ReactNode;
}

export function VariantItem({ label, children }: VariantItemProps) {
  return (
    <div className={styles.variantItem}>
      <span className={styles.variantLabel}>{label}</span>
      <div className={styles.variantContent}>
        {children}
      </div>
    </div>
  );
}

