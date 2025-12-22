'use client';

import React from 'react';
import { cn } from '../../utils';
import styles from './CompactSection.module.css';

export interface CompactSectionProps {
  children: React.ReactNode;
  /** Section title */
  title?: React.ReactNode;
  /** Title color */
  titleColor?: 'red' | 'navy' | 'default';
  /** Whether title has asterisk */
  hasAsterisk?: boolean;
  /** Border configuration */
  border?: 'none' | 'all' | 'top' | 'bottom' | 'left' | 'right' | 'horizontal' | 'vertical';
  /** Border weight */
  borderWeight?: 'thin' | 'medium' | 'thick';
  /** Internal padding */
  padding?: 'none' | 'xs' | 'sm' | 'md';
  /** Whether content flows in columns */
  columns?: 1 | 2 | 3 | 4;
  /** Column gap */
  columnGap?: 'none' | 'xs' | 'sm';
  className?: string;
}

export const CompactSection: React.FC<CompactSectionProps> = ({
  children,
  title,
  titleColor = 'navy',
  hasAsterisk = false,
  border = 'all',
  borderWeight = 'thin',
  padding = 'none',
  columns = 1,
  columnGap = 'none',
  className,
}) => {
  return (
    <section
      className={cn(
        styles.compactSection,
        styles[`border${border.charAt(0).toUpperCase() + border.slice(1)}`],
        styles[`borderWeight${borderWeight.charAt(0).toUpperCase() + borderWeight.slice(1)}`],
        styles[`padding${padding.charAt(0).toUpperCase() + padding.slice(1)}`],
        className
      )}
    >
      {title && (
        <header
          className={cn(
            styles.header,
            styles[`title${titleColor.charAt(0).toUpperCase() + titleColor.slice(1)}`]
          )}
        >
          <span className={styles.titleText}>{title}</span>
          {hasAsterisk && <span className={styles.asterisk}>*</span>}
        </header>
      )}
      <div
        className={cn(
          styles.content,
          styles[`columns${columns}`],
          styles[`columnGap${columnGap.charAt(0).toUpperCase() + columnGap.slice(1)}`]
        )}
      >
        {children}
      </div>
    </section>
  );
};

CompactSection.displayName = 'CompactSection';

