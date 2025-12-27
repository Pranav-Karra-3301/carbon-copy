# Create New Component

Create a new Carbon Copy component following the established patterns.

## Instructions

1. Ask me for the component name if not provided
2. Create the component directory at `src/lib/components/[ComponentName]/`
3. Create the following files:

### index.tsx

```tsx
'use client';

import React, { forwardRef, useId } from 'react';
import { cn } from '../../utils';
import styles from './[ComponentName].module.css';

export interface [ComponentName]Props {
  /** Visual style variant */
  variant?: 'default' | 'dense';
  /** Additional CSS classes */
  className?: string;
  /** Child elements */
  children?: React.ReactNode;
}

export const [ComponentName] = forwardRef<HTMLDivElement, [ComponentName]Props>(
  ({ variant = 'default', className, children, ...props }, ref) => {
    const id = useId();

    return (
      <div
        ref={ref}
        className={cn(styles.component, styles[variant], className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

[ComponentName].displayName = '[ComponentName]';
```

### [ComponentName].module.css

```css
.component {
  font-family: var(--cc-font-typewriter);
  color: var(--cc-text-primary);
}

.default {
  /* Default variant styles */
}

.dense {
  /* Dense variant styles */
}
```

4. Add export to `src/lib/index.ts`:
```tsx
export { [ComponentName] } from './components/[ComponentName]';
export type { [ComponentName]Props } from './components/[ComponentName]';
```

5. Verify with `npm run build:lib`

## Requirements

- Use forwardRef for ref forwarding
- Include displayName
- Use CSS Modules with CSS custom properties
- Add JSDoc comments on all props
- Follow the vintage 1970s aesthetic
