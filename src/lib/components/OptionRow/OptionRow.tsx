'use client';

import React from 'react';
import { cn } from '../../utils';
import styles from './OptionRow.module.css';

export interface OptionRowProps {
  /** Main label/description */
  label: React.ReactNode;
  /** Option code (e.g., V31, M35) */
  code?: string;
  /** Sub-label/note (shown in smaller text, often red) */
  subLabel?: React.ReactNode;
  /** Sub-label color */
  subLabelColor?: 'default' | 'red' | 'muted';
  /** Prefix like (A), (B), etc. */
  prefix?: string;
  /** Checkbox or X mark on the right */
  hasCheckbox?: boolean;
  /** Whether checkbox is checked */
  checked?: boolean;
  /** Border style */
  border?: 'none' | 'bottom' | 'dotted';
  /** Code width */
  codeWidth?: 'sm' | 'md' | 'lg';
  /** Font size */
  size?: 'xs' | 'sm' | 'md';
  /** onClick handler for checkbox */
  onCheck?: (checked: boolean) => void;
  className?: string;
}

export const OptionRow: React.FC<OptionRowProps> = ({
  label,
  code,
  subLabel,
  subLabelColor = 'red',
  prefix,
  hasCheckbox = false,
  checked = false,
  border = 'none',
  codeWidth = 'md',
  size = 'sm',
  onCheck,
  className,
}) => {
  return (
    <div
      className={cn(
        styles.optionRow,
        styles[`border${border.charAt(0).toUpperCase() + border.slice(1)}`],
        styles[`size${size.charAt(0).toUpperCase() + size.slice(1)}`],
        className
      )}
    >
      {prefix && <span className={styles.prefix}>{prefix}</span>}
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
      {code && (
        <span
          className={cn(
            styles.code,
            styles[`codeWidth${codeWidth.charAt(0).toUpperCase() + codeWidth.slice(1)}`]
          )}
        >
          {code}
        </span>
      )}
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

OptionRow.displayName = 'OptionRow';

