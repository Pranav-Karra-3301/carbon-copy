import React from 'react';
import { cn } from '../../utils';
import styles from './SectionHeader.module.css';

export interface SectionHeaderProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'dark' | 'navy' | 'outlined';
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div';
  align?: 'left' | 'center' | 'right';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  sectionNumber?: string | number;
  rightContent?: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  children,
  variant = 'primary',
  as: Component = 'h2',
  align = 'left',
  size = 'md',
  icon,
  sectionNumber,
  rightContent,
  fullWidth = false,
  className,
}) => {
  return (
    <Component
      className={cn(
        styles.sectionHeader,
        styles[variant],
        styles[size],
        styles[`align${align.charAt(0).toUpperCase() + align.slice(1)}`],
        fullWidth && styles.fullWidth,
        className
      )}
    >
      <span className={styles.content}>
        {sectionNumber !== undefined && (
          <span className={styles.sectionNumber}>{sectionNumber}.</span>
        )}
        {icon && <span className={styles.icon}>{icon}</span>}
        <span className={styles.text}>{children}</span>
      </span>
      {rightContent && (
        <span className={styles.rightContent}>{rightContent}</span>
      )}
    </Component>
  );
};

SectionHeader.displayName = 'SectionHeader';
