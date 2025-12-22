'use client';

import React, { useState } from 'react';
import { cn } from '../../utils';
import styles from './FormSection.module.css';

export interface FormSectionProps {
  title?: React.ReactNode;
  children: React.ReactNode;
  sectionNumber?: string | number;
  /** Title suffix like * or # */
  titleSuffix?: string;
  headerVariant?: 'primary' | 'secondary' | 'dark' | 'navy' | 'outlined' | 'none';
  background?: 'teal' | 'paper' | 'none';
  bordered?: boolean | 'top' | 'bottom' | 'sides' | 'none';
  /** Border weight */
  borderWeight?: 'thin' | 'medium';
  collapsible?: boolean;
  defaultCollapsed?: boolean;
  padding?: 'none' | 'xs' | 'sm' | 'md' | 'lg';
  /** Content padding specifically */
  contentPadding?: 'none' | 'xs' | 'sm' | 'md';
  description?: React.ReactNode;
  /** Whether to attach to adjacent sections (no margin) */
  attached?: boolean;
  className?: string;
  id?: string;
}

export const FormSection: React.FC<FormSectionProps> = ({
  title,
  children,
  sectionNumber,
  titleSuffix,
  headerVariant = 'primary',
  background = 'teal',
  bordered = true,
  borderWeight = 'thin',
  collapsible = false,
  defaultCollapsed = false,
  padding = 'md',
  contentPadding,
  description,
  attached = false,
  className,
  id,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);

  const handleToggle = () => {
    if (collapsible) {
      setIsCollapsed(!isCollapsed);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (collapsible && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      setIsCollapsed(!isCollapsed);
    }
  };

  const borderClass =
    bordered === true
      ? styles.bordered
      : bordered === 'top'
        ? styles.borderedTop
        : bordered === 'bottom'
          ? styles.borderedBottom
          : bordered === 'sides'
            ? styles.borderedSides
            : bordered === 'none'
              ? ''
              : '';

  return (
    <section
      id={id}
      className={cn(
        styles.formSection,
        styles[`bg${background.charAt(0).toUpperCase() + background.slice(1)}`],
        styles[`padding${padding.charAt(0).toUpperCase() + padding.slice(1)}`],
        styles[`borderWeight${borderWeight.charAt(0).toUpperCase() + borderWeight.slice(1)}`],
        borderClass,
        attached && styles.attached,
        className
      )}
    >
      {title && headerVariant !== 'none' && (
        <header
          className={cn(styles.header, styles[headerVariant])}
          onClick={handleToggle}
          onKeyDown={handleKeyDown}
          role={collapsible ? 'button' : undefined}
          aria-expanded={collapsible ? !isCollapsed : undefined}
          tabIndex={collapsible ? 0 : undefined}
        >
          <span className={styles.headerContent}>
            {sectionNumber !== undefined && (
              <span className={styles.sectionNumber}>{sectionNumber}.</span>
            )}
            <span className={styles.title}>{title}</span>
            {titleSuffix && <span className={styles.titleSuffix}>{titleSuffix}</span>}
          </span>
          {collapsible && (
            <span
              className={cn(styles.collapseIcon, isCollapsed && styles.collapsed)}
              aria-hidden="true"
            >
              ▼
            </span>
          )}
        </header>
      )}
      {description && <div className={styles.description}>{description}</div>}
      <div
        className={cn(
          styles.content, 
          isCollapsed && styles.hidden,
          contentPadding && styles[`contentPadding${contentPadding.charAt(0).toUpperCase() + contentPadding.slice(1)}`]
        )}
        aria-hidden={isCollapsed}
      >
        {children}
      </div>
    </section>
  );
};

FormSection.displayName = 'FormSection';
