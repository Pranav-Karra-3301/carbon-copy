'use client';

import React from 'react';
import { cn } from '../../utils';
import styles from './FormLayout.module.css';

export interface FormLayoutProps {
  children: React.ReactNode;
  /** Preset layout template */
  template?: 'header-2col' | 'body-4col' | 'body-3col' | 'footer';
  /** Custom grid template */
  gridTemplate?: string;
  /** Gap between items */
  gap?: 'none' | 'xs' | 'sm';
  /** Border around layout */
  bordered?: boolean;
  /** Border weight */
  borderWeight?: 'thin' | 'medium';
  className?: string;
}

export const FormLayout: React.FC<FormLayoutProps> = ({
  children,
  template,
  gridTemplate,
  gap = 'none',
  bordered = false,
  borderWeight = 'thin',
  className,
}) => {
  const getTemplateStyle = () => {
    if (gridTemplate) return { gridTemplateColumns: gridTemplate };
    
    switch (template) {
      case 'header-2col':
        return { gridTemplateColumns: '1fr 1fr' };
      case 'body-4col':
        return { gridTemplateColumns: 'repeat(4, 1fr)' };
      case 'body-3col':
        return { gridTemplateColumns: 'repeat(3, 1fr)' };
      case 'footer':
        return { gridTemplateColumns: '1fr auto 1fr' };
      default:
        return {};
    }
  };

  return (
    <div
      className={cn(
        styles.formLayout,
        template && styles[template],
        styles[`gap${gap.charAt(0).toUpperCase() + gap.slice(1)}`],
        bordered && styles.bordered,
        styles[`borderWeight${borderWeight.charAt(0).toUpperCase() + borderWeight.slice(1)}`],
        className
      )}
      style={getTemplateStyle()}
    >
      {children}
    </div>
  );
};

FormLayout.displayName = 'FormLayout';

export interface FormLayoutAreaProps {
  children: React.ReactNode;
  /** Grid area name or span */
  area?: string;
  /** Column span */
  colSpan?: number;
  /** Row span */
  rowSpan?: number;
  /** Border configuration */
  border?: 'none' | 'all' | 'left' | 'right' | 'top' | 'bottom';
  /** Content alignment */
  align?: 'start' | 'center' | 'end' | 'stretch';
  className?: string;
}

export const FormLayoutArea: React.FC<FormLayoutAreaProps> = ({
  children,
  area,
  colSpan,
  rowSpan,
  border = 'none',
  align = 'stretch',
  className,
}) => {
  return (
    <div
      className={cn(
        styles.formLayoutArea,
        styles[`border${border.charAt(0).toUpperCase() + border.slice(1)}`],
        styles[`align${align.charAt(0).toUpperCase() + align.slice(1)}`],
        className
      )}
      style={{
        ...(area && { gridArea: area }),
        ...(colSpan && { gridColumn: `span ${colSpan}` }),
        ...(rowSpan && { gridRow: `span ${rowSpan}` }),
      }}
    >
      {children}
    </div>
  );
};

FormLayoutArea.displayName = 'FormLayoutArea';

