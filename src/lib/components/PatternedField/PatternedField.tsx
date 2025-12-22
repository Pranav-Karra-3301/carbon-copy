import React from 'react';
import { cn } from '../../utils';
import styles from './PatternedField.module.css';

export interface PatternedFieldProps {
  children?: React.ReactNode;
  value?: string | number;
  placeholder?: string;
  subText?: string | React.ReactNode;
  subTextColor?: 'default' | 'red';
  showAsterisk?: boolean;
  readOnly?: boolean;
  align?: 'left' | 'center' | 'right';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  'aria-label'?: string;
}

export const PatternedField: React.FC<PatternedFieldProps> = ({
  children,
  value,
  placeholder,
  subText,
  subTextColor = 'default',
  showAsterisk = false,
  readOnly = false,
  align = 'left',
  size = 'md',
  className,
  'aria-label': ariaLabel,
}) => {
  return (
    <div
      className={cn(
        styles.patternedField,
        styles[size],
        styles[`align${align.charAt(0).toUpperCase() + align.slice(1)}`],
        readOnly && styles.readOnly,
        className
      )}
      aria-label={ariaLabel}
    >
      <div className={styles.patternOverlay} aria-hidden="true" />
      <div className={styles.content}>
        {children ? (
          children
        ) : (
          <>
            {value !== undefined && value !== '' ? (
              <div className={styles.mainText}>
                {showAsterisk && <span className={styles.asterisk}>*</span>}
                <span className={styles.value}>{value}</span>
              </div>
            ) : placeholder ? (
              <span className={styles.placeholder}>{placeholder}</span>
            ) : null}
            {subText && (
              <div className={cn(styles.subText, styles[subTextColor])}>
                {subText}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

PatternedField.displayName = 'PatternedField';

