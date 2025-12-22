'use client';

import React from 'react';
import { cn } from '../../utils';
import styles from './SubHeader.module.css';

export interface SubHeaderProps {
  children: React.ReactNode;
  /** Include "Includes:" text after the header */
  hasIncludes?: boolean;
  /** Also see reference text */
  alsoSee?: string;
  /** Color variant */
  color?: 'default' | 'navy' | 'red';
  /** Size variant */
  size?: 'xs' | 'sm' | 'md';
  /** Border style */
  border?: 'none' | 'top' | 'bottom' | 'both';
  className?: string;
}

export const SubHeader: React.FC<SubHeaderProps> = ({
  children,
  hasIncludes = false,
  alsoSee,
  color = 'navy',
  size = 'sm',
  border = 'top',
  className,
}) => {
  return (
    <div
      className={cn(
        styles.subHeader,
        styles[`color${color.charAt(0).toUpperCase() + color.slice(1)}`],
        styles[`size${size.charAt(0).toUpperCase() + size.slice(1)}`],
        styles[`border${border.charAt(0).toUpperCase() + border.slice(1)}`],
        className
      )}
    >
      <span className={styles.text}>{children}</span>
      {alsoSee && (
        <span className={styles.alsoSee}>
          Also see {alsoSee}
        </span>
      )}
      {hasIncludes && <span className={styles.includes}>Includes:</span>}
    </div>
  );
};

SubHeader.displayName = 'SubHeader';

