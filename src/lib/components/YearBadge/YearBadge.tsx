import React from 'react';
import { cn } from '../../utils';
import styles from './YearBadge.module.css';

export interface YearBadgeProps {
  year: string | number;
  preliminary?: boolean;
  subtitle?: string;
  variant?: 'dark' | 'light';
  className?: string;
}

export const YearBadge: React.FC<YearBadgeProps> = ({
  year,
  preliminary = true,
  subtitle,
  variant = 'dark',
  className,
}) => {
  return (
    <div
      className={cn(
        styles.yearBadge,
        styles[variant],
        className
      )}
    >
      {preliminary && (
        <span className={styles.preliminary}>PRELIMINARY</span>
      )}
      <span className={styles.year}>{year}</span>
      {subtitle && (
        <span className={styles.subtitle}>{subtitle}</span>
      )}
    </div>
  );
};

YearBadge.displayName = 'YearBadge';

