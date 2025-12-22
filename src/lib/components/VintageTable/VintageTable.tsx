import React, { ReactNode } from 'react';
import { cn } from '../../utils';
import styles from './VintageTable.module.css';

// ============ TYPE DEFINITIONS ============

export interface VintageTableProps {
  children: ReactNode;
  caption?: string;
  variant?: 'default' | 'dense' | 'ledger' | 'dotted';
  borderStyle?: 'thin' | 'medium' | 'thick';
  background?: 'teal' | 'paper' | 'none';
  className?: string;
  'aria-label'?: string;
}

export interface VintageTableRowProps {
  children: ReactNode;
  variant?: 'default' | 'header' | 'subheader' | 'total' | 'highlighted';
  className?: string;
}

export interface VintageTableCellProps {
  children?: ReactNode;
  colSpan?: number;
  rowSpan?: number;
  as?: 'th' | 'td';
  align?: 'left' | 'center' | 'right';
  valign?: 'top' | 'middle' | 'bottom';
  variant?: 'default' | 'header' | 'label' | 'value' | 'red';
  width?: string | number;
  minWidth?: string | number;
  borderRight?: boolean;
  borderBottom?: boolean;
  borderLeft?: boolean;
  borderTop?: boolean;
  noBorder?: boolean;
  className?: string;
  onClick?: () => void;
  'aria-label'?: string;
  scope?: 'row' | 'col' | 'rowgroup' | 'colgroup';
}

export interface VintageTableHeaderProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'section';
  colSpan?: number;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

// ============ COMPONENTS ============

export const VintageTable: React.FC<VintageTableProps> = ({
  children,
  caption,
  variant = 'default',
  borderStyle = 'thin',
  background = 'teal',
  className,
  'aria-label': ariaLabel,
}) => {
  return (
    <table
      className={cn(
        styles.vintageTable,
        styles[variant],
        styles[`border${borderStyle.charAt(0).toUpperCase() + borderStyle.slice(1)}`],
        styles[`bg${background.charAt(0).toUpperCase() + background.slice(1)}`],
        className
      )}
      aria-label={ariaLabel}
    >
      {caption && <caption className={styles.vintageCaption}>{caption}</caption>}
      {children}
    </table>
  );
};

export const VintageTableRow: React.FC<VintageTableRowProps> = ({
  children,
  variant = 'default',
  className,
}) => {
  return (
    <tr className={cn(styles.vintageRow, styles[`row${variant.charAt(0).toUpperCase() + variant.slice(1)}`], className)}>
      {children}
    </tr>
  );
};

export const VintageTableCell: React.FC<VintageTableCellProps> = ({
  children,
  colSpan,
  rowSpan,
  as: Component = 'td',
  align = 'left',
  valign = 'middle',
  variant = 'default',
  width,
  minWidth,
  borderRight,
  borderBottom,
  borderLeft,
  borderTop,
  noBorder,
  className,
  onClick,
  'aria-label': ariaLabel,
  scope,
}) => {
  const style: React.CSSProperties = {
    textAlign: align,
    verticalAlign: valign,
    width: typeof width === 'number' ? `${width}px` : width,
    minWidth: typeof minWidth === 'number' ? `${minWidth}px` : minWidth,
  };

  return (
    <Component
      colSpan={colSpan}
      rowSpan={rowSpan}
      className={cn(
        styles.vintageCell,
        styles[`cell${variant.charAt(0).toUpperCase() + variant.slice(1)}`],
        borderRight && styles.borderRight,
        borderBottom && styles.borderBottom,
        borderLeft && styles.borderLeft,
        borderTop && styles.borderTop,
        noBorder && styles.noBorder,
        onClick && styles.clickable,
        className
      )}
      style={style}
      onClick={onClick}
      aria-label={ariaLabel}
      scope={scope}
      tabIndex={onClick ? 0 : undefined}
      role={onClick ? 'button' : undefined}
      onKeyDown={onClick ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      } : undefined}
    >
      {children}
    </Component>
  );
};

export const VintageTableHeader: React.FC<VintageTableHeaderProps> = ({
  children,
  variant = 'primary',
  colSpan,
  align = 'left',
  className,
}) => {
  return (
    <th
      colSpan={colSpan}
      className={cn(
        styles.vintageHeader,
        styles[`header${variant.charAt(0).toUpperCase() + variant.slice(1)}`],
        className
      )}
      style={{ textAlign: align }}
      scope="col"
    >
      {children}
    </th>
  );
};

VintageTable.displayName = 'VintageTable';
VintageTableRow.displayName = 'VintageTableRow';
VintageTableCell.displayName = 'VintageTableCell';
VintageTableHeader.displayName = 'VintageTableHeader';
