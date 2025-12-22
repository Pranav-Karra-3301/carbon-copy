'use client';

import React from 'react';
import { cn } from '../../utils';
import styles from './CodeTable.module.css';

export interface CodeTableProps {
  children: React.ReactNode;
  /** Show code column */
  showCode?: boolean;
  /** Code column position */
  codePosition?: 'left' | 'right';
  /** Show checkbox column */
  showCheckbox?: boolean;
  /** Border style */
  border?: 'none' | 'rows' | 'all' | 'dotted';
  /** Compact mode */
  compact?: boolean;
  className?: string;
}

export const CodeTable: React.FC<CodeTableProps> = ({
  children,
  showCode = true,
  codePosition = 'left',
  showCheckbox = true,
  border = 'none',
  compact = true,
  className,
}) => {
  return (
    <div
      className={cn(
        styles.codeTable,
        styles[`code${codePosition.charAt(0).toUpperCase() + codePosition.slice(1)}`],
        styles[`border${border.charAt(0).toUpperCase() + border.slice(1)}`],
        compact && styles.compact,
        !showCode && styles.hideCode,
        !showCheckbox && styles.hideCheckbox,
        className
      )}
    >
      {children}
    </div>
  );
};

CodeTable.displayName = 'CodeTable';

export interface CodeTableRowProps {
  /** Option code (e.g., ZW4, M35) */
  code?: string;
  /** Main label/description */
  label: React.ReactNode;
  /** Sub-label (smaller text, often conditions) */
  subLabel?: React.ReactNode;
  /** Sub-label color */
  subLabelColor?: 'default' | 'red' | 'muted';
  /** Whether checkbox is shown */
  hasCheckbox?: boolean;
  /** Whether checked */
  checked?: boolean;
  /** On check change */
  onCheck?: (checked: boolean) => void;
  /** Border style override */
  border?: 'none' | 'bottom' | 'dotted';
  className?: string;
}

export const CodeTableRow: React.FC<CodeTableRowProps> = ({
  code,
  label,
  subLabel,
  subLabelColor = 'red',
  hasCheckbox = true,
  checked = false,
  onCheck,
  border,
  className,
}) => {
  return (
    <div
      className={cn(
        styles.codeTableRow,
        border && styles[`rowBorder${border.charAt(0).toUpperCase() + border.slice(1)}`],
        className
      )}
    >
      {code !== undefined && <span className={styles.code}>{code}</span>}
      <div className={styles.labelArea}>
        <span className={styles.label}>{label}</span>
        {subLabel && (
          <span
            className={cn(
              styles.subLabel,
              styles[`subLabel${subLabelColor.charAt(0).toUpperCase() + subLabelColor.slice(1)}`]
            )}
          >
            {subLabel}
          </span>
        )}
      </div>
      {hasCheckbox && (
        <button
          type="button"
          className={cn(styles.checkbox, checked && styles.checked)}
          onClick={() => onCheck?.(!checked)}
          aria-checked={checked}
          role="checkbox"
        >
          {checked && <span className={styles.checkMark}>×</span>}
        </button>
      )}
    </div>
  );
};

CodeTableRow.displayName = 'CodeTableRow';

