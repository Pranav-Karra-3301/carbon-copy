'use client';

import React from 'react';
import { cn } from '../../utils';
import styles from './LabeledInput.module.css';

export interface LabeledInputProps {
  /** Field label */
  label: string;
  /** Current value */
  value?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Input style variant */
  variant?: 'underline' | 'box' | 'dotted' | 'none';
  /** Layout direction */
  layout?: 'horizontal' | 'vertical' | 'stacked';
  /** Label width (for horizontal) */
  labelWidth?: 'auto' | 'sm' | 'md' | 'lg';
  /** Input width */
  inputWidth?: 'auto' | 'sm' | 'md' | 'lg' | 'full';
  /** Font size */
  size?: 'xs' | 'sm' | 'md';
  /** Whether value looks handwritten */
  handwritten?: boolean;
  /** Read only */
  readOnly?: boolean;
  /** onChange handler */
  onChange?: (value: string) => void;
  className?: string;
}

export const LabeledInput: React.FC<LabeledInputProps> = ({
  label,
  value = '',
  placeholder,
  variant = 'underline',
  layout = 'horizontal',
  labelWidth = 'auto',
  inputWidth = 'auto',
  size = 'sm',
  handwritten = false,
  readOnly = false,
  onChange,
  className,
}) => {
  return (
    <div
      className={cn(
        styles.labeledInput,
        styles[`layout${layout.charAt(0).toUpperCase() + layout.slice(1)}`],
        styles[`size${size.charAt(0).toUpperCase() + size.slice(1)}`],
        className
      )}
    >
      <label
        className={cn(
          styles.label,
          styles[`labelWidth${labelWidth.charAt(0).toUpperCase() + labelWidth.slice(1)}`]
        )}
      >
        {label}
      </label>
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        readOnly={readOnly}
        onChange={(e) => onChange?.(e.target.value)}
        className={cn(
          styles.input,
          styles[`variant${variant.charAt(0).toUpperCase() + variant.slice(1)}`],
          styles[`inputWidth${inputWidth.charAt(0).toUpperCase() + inputWidth.slice(1)}`],
          handwritten && styles.handwritten
        )}
      />
    </div>
  );
};

LabeledInput.displayName = 'LabeledInput';

