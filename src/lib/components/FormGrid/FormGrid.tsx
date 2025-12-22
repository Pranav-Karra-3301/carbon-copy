import React from 'react';
import { cn } from '../../utils';
import styles from './FormGrid.module.css';

export interface FormGridProps {
  children: React.ReactNode;
  columns?: number | 'auto' | string;
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg';
  rowGap?: 'none' | 'xs' | 'sm' | 'md' | 'lg';
  alignItems?: 'start' | 'center' | 'end' | 'stretch';
  background?: 'none' | 'teal' | 'paper';
  bordered?: boolean;
  className?: string;
}

export interface FormGridItemProps {
  children: React.ReactNode;
  colSpan?: number | 'full';
  rowSpan?: number;
  align?: 'left' | 'center' | 'right';
  valign?: 'top' | 'center' | 'bottom';
  className?: string;
}

export const FormGrid: React.FC<FormGridProps> = ({
  children,
  columns = 'auto',
  gap = 'sm',
  rowGap,
  alignItems = 'stretch',
  background = 'none',
  bordered = false,
  className,
}) => {
  const columnStyle = typeof columns === 'number'
    ? `repeat(${columns}, 1fr)`
    : columns === 'auto'
      ? 'repeat(auto-fit, minmax(120px, 1fr))'
      : columns;

  return (
    <div
      className={cn(
        styles.formGrid,
        styles[`gap${gap.charAt(0).toUpperCase() + gap.slice(1)}`],
        rowGap && styles[`rowGap${rowGap.charAt(0).toUpperCase() + rowGap.slice(1)}`],
        styles[`align${alignItems.charAt(0).toUpperCase() + alignItems.slice(1)}`],
        styles[`bg${background.charAt(0).toUpperCase() + background.slice(1)}`],
        bordered && styles.bordered,
        className
      )}
      style={{ gridTemplateColumns: columnStyle }}
    >
      {children}
    </div>
  );
};

export const FormGridItem: React.FC<FormGridItemProps> = ({
  children,
  colSpan,
  rowSpan,
  align = 'left',
  valign = 'center',
  className,
}) => {
  const style: React.CSSProperties = {
    gridColumn: colSpan === 'full' ? '1 / -1' : colSpan ? `span ${colSpan}` : undefined,
    gridRow: rowSpan ? `span ${rowSpan}` : undefined,
    textAlign: align,
    alignSelf: valign === 'top' ? 'start' : valign === 'bottom' ? 'end' : 'center',
  };

  return (
    <div className={cn(styles.formGridItem, className)} style={style}>
      {children}
    </div>
  );
};

FormGrid.displayName = 'FormGrid';
FormGridItem.displayName = 'FormGridItem';
