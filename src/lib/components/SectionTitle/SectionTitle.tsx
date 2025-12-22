'use client';

import React from 'react';
import { cn } from '../../utils';
import styles from './SectionTitle.module.css';

export interface SectionTitleProps {
  children: React.ReactNode;
  /** Hashtag/asterisk suffix */
  suffix?: '#' | '*' | '';
  /** Color variant */
  color?: 'red' | 'navy' | 'default';
  /** Size variant */
  size?: 'xs' | 'sm' | 'md' | 'lg';
  /** Border configuration */
  border?: 'none' | 'top' | 'bottom' | 'both' | 'all';
  /** Inline with other content */
  inline?: boolean;
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  children,
  suffix = '',
  color = 'navy',
  size = 'sm',
  border = 'bottom',
  inline = false,
  className,
}) => {
  return (
    <div
      className={cn(
        styles.sectionTitle,
        styles[`color${color.charAt(0).toUpperCase() + color.slice(1)}`],
        styles[`size${size.charAt(0).toUpperCase() + size.slice(1)}`],
        styles[`border${border.charAt(0).toUpperCase() + border.slice(1)}`],
        inline && styles.inline,
        className
      )}
    >
      <span className={styles.text}>{children}</span>
      {suffix && <span className={styles.suffix}>{suffix}</span>}
    </div>
  );
};

SectionTitle.displayName = 'SectionTitle';

