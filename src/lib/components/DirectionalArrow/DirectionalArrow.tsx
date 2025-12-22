import React from 'react';
import { cn } from '../../utils';
import styles from './DirectionalArrow.module.css';

export interface DirectionalArrowProps {
  direction?: 'left' | 'right' | 'up' | 'down';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  'aria-label'?: string;
}

export const DirectionalArrow: React.FC<DirectionalArrowProps> = ({
  direction = 'right',
  size = 'md',
  className,
  'aria-label': ariaLabel = `Arrow pointing ${direction}`,
}) => {
  const getPath = () => {
    switch (direction) {
      case 'right':
        return 'M 0 0 L 8 4 L 0 8 Z';
      case 'left':
        return 'M 8 0 L 0 4 L 8 8 Z';
      case 'up':
        return 'M 0 8 L 4 0 L 8 8 Z';
      case 'down':
        return 'M 0 0 L 4 8 L 8 0 Z';
      default:
        return 'M 0 0 L 8 4 L 0 8 Z';
    }
  };

  const getViewBox = () => {
    return '0 0 8 8';
  };

  return (
    <svg
      className={cn(styles.arrow, styles[direction], styles[size], className)}
      viewBox={getViewBox()}
      aria-label={ariaLabel}
      role="img"
    >
      <path d={getPath()} fill="currentColor" />
    </svg>
  );
};

DirectionalArrow.displayName = 'DirectionalArrow';

