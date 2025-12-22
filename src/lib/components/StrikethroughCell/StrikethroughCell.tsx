import React from 'react';
import { cn } from '../../utils';
import styles from './StrikethroughCell.module.css';

export interface StrikethroughCellProps {
  children?: React.ReactNode;
  direction?: 'diagonal-down' | 'diagonal-up' | 'horizontal' | 'both';
  lineWeight?: 'thin' | 'medium' | 'thick';
  colSpan?: number;
  rowSpan?: number;
  as?: 'th' | 'td';
  className?: string;
  'aria-label'?: string;
}

export const StrikethroughCell: React.FC<StrikethroughCellProps> = ({
  children,
  direction = 'both',
  lineWeight = 'thin',
  colSpan,
  rowSpan,
  as: Component = 'td',
  className,
  'aria-label': ariaLabel = 'Not applicable',
}) => {
  return (
    <Component
      colSpan={colSpan}
      rowSpan={rowSpan}
      className={cn(
        styles.strikethroughCell,
        styles[direction],
        styles[lineWeight],
        className
      )}
      aria-label={ariaLabel}
    >
      {children && <span className={styles.content}>{children}</span>}
      <div className={styles.strikethroughPattern} aria-hidden="true" />
    </Component>
  );
};

StrikethroughCell.displayName = 'StrikethroughCell';
