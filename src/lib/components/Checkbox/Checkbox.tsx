'use client';

import React, { forwardRef, useId } from 'react';
import { cn } from '../../utils';
import styles from './Checkbox.module.css';

export interface CheckboxProps {
  label?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean, event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  name?: string;
  value?: string;
  size?: 'sm' | 'md' | 'lg';
  markStyle?: 'x' | 'check' | 'fill';
  labelPosition?: 'left' | 'right';
  className?: string;
  required?: boolean;
  'aria-label'?: string;
  'aria-describedby'?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  name,
  value,
  size = 'md',
  markStyle = 'x',
  labelPosition = 'right',
  className,
  required = false,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
}, ref) => {
  const id = useId();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.checked, event);
  };

  return (
    <label
      className={cn(
        styles.checkbox,
        styles[labelPosition],
        disabled && styles.disabled,
        className
      )}
    >
      <input
        ref={ref}
        type="checkbox"
        id={id}
        name={name}
        value={value}
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={handleChange}
        disabled={disabled}
        required={required}
        className={styles.input}
        aria-label={ariaLabel || label}
        aria-describedby={ariaDescribedBy}
      />
      <span className={cn(styles.box, styles[size])} aria-hidden="true">
        <svg className={cn(styles.mark, styles[`mark${markStyle.charAt(0).toUpperCase() + markStyle.slice(1)}`])} viewBox="0 0 16 16">
          {markStyle === 'x' && (
            <>
              <line x1="3" y1="3" x2="13" y2="13" />
              <line x1="13" y1="3" x2="3" y2="13" />
            </>
          )}
          {markStyle === 'check' && (
            <polyline points="3,8 6,12 13,4" />
          )}
          {markStyle === 'fill' && (
            <rect x="3" y="3" width="10" height="10" />
          )}
        </svg>
      </span>
      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
});

Checkbox.displayName = 'Checkbox';
