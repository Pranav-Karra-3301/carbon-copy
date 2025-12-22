'use client';

import React from 'react';
import { cn } from '../../utils';
import styles from './DenseGrid.module.css';

export interface DenseGridProps {
  children: React.ReactNode;
  /** Number of columns or template string */
  columns?: number | string;
  /** Row template */
  rows?: string;
  /** Whether cells share borders (no gaps, collapsed borders) */
  collapsed?: boolean;
  /** Background variant */
  background?: 'none' | 'teal' | 'paper';
  /** Border around entire grid */
  bordered?: boolean;
  /** Border weight */
  borderWeight?: 'thin' | 'medium' | 'thick';
  className?: string;
}

export const DenseGrid: React.FC<DenseGridProps> = ({
  children,
  columns = 1,
  rows,
  collapsed = true,
  background = 'none',
  bordered = false,
  borderWeight = 'thin',
  className,
}) => {
  const gridTemplateColumns = typeof columns === 'number' 
    ? `repeat(${columns}, 1fr)` 
    : columns;

  return (
    <div
      className={cn(
        styles.denseGrid,
        collapsed && styles.collapsed,
        bordered && styles.bordered,
        styles[`bg${background.charAt(0).toUpperCase() + background.slice(1)}`],
        styles[`border${borderWeight.charAt(0).toUpperCase() + borderWeight.slice(1)}`],
        className
      )}
      style={{
        gridTemplateColumns,
        ...(rows && { gridTemplateRows: rows }),
      }}
    >
      {children}
    </div>
  );
};

DenseGrid.displayName = 'DenseGrid';

export interface DenseGridCellProps {
  children?: React.ReactNode;
  /** Column span */
  colSpan?: number;
  /** Row span */
  rowSpan?: number;
  /** Cell padding */
  padding?: 'none' | 'xs' | 'sm' | 'md';
  /** Text alignment */
  align?: 'left' | 'center' | 'right';
  /** Vertical alignment */
  valign?: 'top' | 'middle' | 'bottom';
  /** Border on specific sides */
  borderTop?: boolean;
  borderRight?: boolean;
  borderBottom?: boolean;
  borderLeft?: boolean;
  /** All borders */
  bordered?: boolean;
  /** Text color variant */
  textColor?: 'default' | 'red' | 'navy' | 'muted';
  /** Font weight */
  weight?: 'normal' | 'medium' | 'bold';
  /** Text transform */
  transform?: 'none' | 'uppercase';
  /** Font size */
  size?: 'xs' | 'sm' | 'md' | 'lg';
  className?: string;
}

export const DenseGridCell: React.FC<DenseGridCellProps> = ({
  children,
  colSpan,
  rowSpan,
  padding = 'sm',
  align = 'left',
  valign = 'middle',
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  bordered,
  textColor = 'default',
  weight = 'normal',
  transform = 'none',
  size = 'sm',
  className,
}) => {
  return (
    <div
      className={cn(
        styles.cell,
        styles[`padding${padding.charAt(0).toUpperCase() + padding.slice(1)}`],
        styles[`align${align.charAt(0).toUpperCase() + align.slice(1)}`],
        styles[`valign${valign.charAt(0).toUpperCase() + valign.slice(1)}`],
        styles[`text${textColor.charAt(0).toUpperCase() + textColor.slice(1)}`],
        styles[`weight${weight.charAt(0).toUpperCase() + weight.slice(1)}`],
        styles[`size${size.charAt(0).toUpperCase() + size.slice(1)}`],
        transform === 'uppercase' && styles.uppercase,
        bordered && styles.cellBordered,
        borderTop && styles.borderTop,
        borderRight && styles.borderRight,
        borderBottom && styles.borderBottom,
        borderLeft && styles.borderLeft,
        className
      )}
      style={{
        ...(colSpan && { gridColumn: `span ${colSpan}` }),
        ...(rowSpan && { gridRow: `span ${rowSpan}` }),
      }}
    >
      {children}
    </div>
  );
};

DenseGridCell.displayName = 'DenseGridCell';

