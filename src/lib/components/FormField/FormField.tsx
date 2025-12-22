'use client';

import React, { forwardRef, useId } from 'react';
import { cn } from '../../utils';
import styles from './FormField.module.css';

export interface FormFieldProps {
  label?: string;
  type?: 'text' | 'number' | 'date' | 'email' | 'tel' | 'password';
  placeholder?: string;
  value?: string | number;
  defaultValue?: string | number;
  onChange?: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  name?: string;
  helperText?: string;
  error?: boolean | string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'full';
  variant?: 'default' | 'underline' | 'boxed' | 'minimal' | 'handwriting' | 'none' | 'dotted';
  align?: 'left' | 'center' | 'right';
  maxLength?: number;
  min?: number | string;
  max?: number | string;
  step?: number | string;
  pattern?: string;
  autoComplete?: string;
  className?: string;
  labelPosition?: 'top' | 'left' | 'inline';
  labelWidth?: string;
  'aria-label'?: string;
  'aria-describedby'?: string;
}

export const FormField = forwardRef<HTMLInputElement, FormFieldProps>(({
  label,
  type = 'text',
  placeholder,
  value,
  defaultValue,
  onChange,
  onBlur,
  onFocus,
  disabled = false,
  readOnly = false,
  required = false,
  name,
  helperText,
  error,
  size = 'md',
  variant = 'default',
  align = 'left',
  maxLength,
  min,
  max,
  step,
  pattern,
  autoComplete,
  className,
  labelPosition = 'top',
  labelWidth,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
}, ref) => {
  const id = useId();
  const errorId = useId();
  const helperId = useId();

  const hasError = Boolean(error);
  const errorMessage = typeof error === 'string' ? error : undefined;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value, event);
  };

  const describedBy = [
    ariaDescribedBy,
    helperText ? helperId : undefined,
    errorMessage ? errorId : undefined,
  ].filter(Boolean).join(' ') || undefined;

  return (
    <div
      className={cn(
        styles.formField,
        styles[`position${labelPosition.charAt(0).toUpperCase() + labelPosition.slice(1)}`],
        styles[variant],
        styles[size],
        hasError && styles.hasError,
        disabled && styles.disabled,
        className
      )}
    >
      {label && (
        <label
          htmlFor={id}
          className={styles.label}
          style={labelWidth ? { width: labelWidth } : undefined}
        >
          {label}
          {required && <span className={styles.required} aria-hidden="true">*</span>}
        </label>
      )}
      <div className={styles.inputWrapper}>
        <input
          ref={ref}
          id={id}
          type={type}
          name={name}
          value={value}
          defaultValue={defaultValue}
          placeholder={placeholder}
          onChange={handleChange}
          onBlur={onBlur}
          onFocus={onFocus}
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          maxLength={maxLength}
          min={min}
          max={max}
          step={step}
          pattern={pattern}
          autoComplete={autoComplete}
          className={styles.input}
          style={{ textAlign: align }}
          aria-label={ariaLabel || label}
          aria-describedby={describedBy}
          aria-invalid={hasError}
          aria-required={required}
        />
      </div>
      {helperText && !hasError && (
        <span id={helperId} className={styles.helperText}>
          {helperText}
        </span>
      )}
      {errorMessage && (
        <span id={errorId} className={styles.errorText} role="alert">
          {errorMessage}
        </span>
      )}
    </div>
  );
});

FormField.displayName = 'FormField';
